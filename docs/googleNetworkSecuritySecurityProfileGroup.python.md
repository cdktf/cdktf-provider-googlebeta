# `googleNetworkSecuritySecurityProfileGroup` Submodule <a name="`googleNetworkSecuritySecurityProfileGroup` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecuritySecurityProfileGroup <a name="GoogleNetworkSecuritySecurityProfileGroup" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group google_network_security_security_profile_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile_group

googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  custom_intercept_profile: str = None,
  custom_mirroring_profile: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  parent: str = None,
  threat_prevention_profile: str = None,
  timeouts: GoogleNetworkSecuritySecurityProfileGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the security profile group resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.customInterceptProfile">custom_intercept_profile</a></code> | <code>str</code> | Reference to a SecurityProfile with the CustomIntercept configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.customMirroringProfile">custom_mirroring_profile</a></code> | <code>str</code> | Reference to a SecurityProfile with the custom mirroring configuration for the SecurityProfileGroup. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of the profile. The Max length is 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#id GoogleNetworkSecuritySecurityProfileGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the security profile group. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The name of the parent this security profile group belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.threatPreventionProfile">threat_prevention_profile</a></code> | <code>str</code> | Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.name"></a>

- *Type:* str

The name of the security profile group resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#name GoogleNetworkSecuritySecurityProfileGroup#name}

---

##### `custom_intercept_profile`<sup>Optional</sup> <a name="custom_intercept_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.customInterceptProfile"></a>

- *Type:* str

Reference to a SecurityProfile with the CustomIntercept configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#custom_intercept_profile GoogleNetworkSecuritySecurityProfileGroup#custom_intercept_profile}

---

##### `custom_mirroring_profile`<sup>Optional</sup> <a name="custom_mirroring_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.customMirroringProfile"></a>

- *Type:* str

Reference to a SecurityProfile with the custom mirroring configuration for the SecurityProfileGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#custom_mirroring_profile GoogleNetworkSecuritySecurityProfileGroup#custom_mirroring_profile}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.description"></a>

- *Type:* str

An optional description of the profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#description GoogleNetworkSecuritySecurityProfileGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#id GoogleNetworkSecuritySecurityProfileGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#labels GoogleNetworkSecuritySecurityProfileGroup#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.location"></a>

- *Type:* str

The location of the security profile group. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#location GoogleNetworkSecuritySecurityProfileGroup#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.parent"></a>

- *Type:* str

The name of the parent this security profile group belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#parent GoogleNetworkSecuritySecurityProfileGroup#parent}

---

##### `threat_prevention_profile`<sup>Optional</sup> <a name="threat_prevention_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.threatPreventionProfile"></a>

- *Type:* str

Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#threat_prevention_profile GoogleNetworkSecuritySecurityProfileGroup#threat_prevention_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#timeouts GoogleNetworkSecuritySecurityProfileGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetCustomInterceptProfile">reset_custom_intercept_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetCustomMirroringProfile">reset_custom_mirroring_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetThreatPreventionProfile">reset_threat_prevention_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#create GoogleNetworkSecuritySecurityProfileGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#delete GoogleNetworkSecuritySecurityProfileGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#update GoogleNetworkSecuritySecurityProfileGroup#update}.

---

##### `reset_custom_intercept_profile` <a name="reset_custom_intercept_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetCustomInterceptProfile"></a>

```python
def reset_custom_intercept_profile() -> None
```

##### `reset_custom_mirroring_profile` <a name="reset_custom_mirroring_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetCustomMirroringProfile"></a>

```python
def reset_custom_mirroring_profile() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_threat_prevention_profile` <a name="reset_threat_prevention_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetThreatPreventionProfile"></a>

```python
def reset_threat_prevention_profile() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkSecuritySecurityProfileGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile_group

googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile_group

googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile_group

googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile_group

googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkSecuritySecurityProfileGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkSecuritySecurityProfileGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkSecuritySecurityProfileGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecuritySecurityProfileGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference">GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.customInterceptProfileInput">custom_intercept_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.customMirroringProfileInput">custom_mirroring_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.threatPreventionProfileInput">threat_prevention_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.customInterceptProfile">custom_intercept_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.customMirroringProfile">custom_mirroring_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.threatPreventionProfile">threat_prevention_profile</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference">GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `custom_intercept_profile_input`<sup>Optional</sup> <a name="custom_intercept_profile_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.customInterceptProfileInput"></a>

```python
custom_intercept_profile_input: str
```

- *Type:* str

---

##### `custom_mirroring_profile_input`<sup>Optional</sup> <a name="custom_mirroring_profile_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.customMirroringProfileInput"></a>

```python
custom_mirroring_profile_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `threat_prevention_profile_input`<sup>Optional</sup> <a name="threat_prevention_profile_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.threatPreventionProfileInput"></a>

```python
threat_prevention_profile_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkSecuritySecurityProfileGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a>]

---

##### `custom_intercept_profile`<sup>Required</sup> <a name="custom_intercept_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.customInterceptProfile"></a>

```python
custom_intercept_profile: str
```

- *Type:* str

---

##### `custom_mirroring_profile`<sup>Required</sup> <a name="custom_mirroring_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.customMirroringProfile"></a>

```python
custom_mirroring_profile: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `threat_prevention_profile`<sup>Required</sup> <a name="threat_prevention_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.threatPreventionProfile"></a>

```python
threat_prevention_profile: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecuritySecurityProfileGroupConfig <a name="GoogleNetworkSecuritySecurityProfileGroupConfig" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile_group

googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  custom_intercept_profile: str = None,
  custom_mirroring_profile: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  parent: str = None,
  threat_prevention_profile: str = None,
  timeouts: GoogleNetworkSecuritySecurityProfileGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.name">name</a></code> | <code>str</code> | The name of the security profile group resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.customInterceptProfile">custom_intercept_profile</a></code> | <code>str</code> | Reference to a SecurityProfile with the CustomIntercept configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.customMirroringProfile">custom_mirroring_profile</a></code> | <code>str</code> | Reference to a SecurityProfile with the custom mirroring configuration for the SecurityProfileGroup. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.description">description</a></code> | <code>str</code> | An optional description of the profile. The Max length is 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#id GoogleNetworkSecuritySecurityProfileGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.location">location</a></code> | <code>str</code> | The location of the security profile group. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.parent">parent</a></code> | <code>str</code> | The name of the parent this security profile group belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.threatPreventionProfile">threat_prevention_profile</a></code> | <code>str</code> | Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the security profile group resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#name GoogleNetworkSecuritySecurityProfileGroup#name}

---

##### `custom_intercept_profile`<sup>Optional</sup> <a name="custom_intercept_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.customInterceptProfile"></a>

```python
custom_intercept_profile: str
```

- *Type:* str

Reference to a SecurityProfile with the CustomIntercept configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#custom_intercept_profile GoogleNetworkSecuritySecurityProfileGroup#custom_intercept_profile}

---

##### `custom_mirroring_profile`<sup>Optional</sup> <a name="custom_mirroring_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.customMirroringProfile"></a>

```python
custom_mirroring_profile: str
```

- *Type:* str

Reference to a SecurityProfile with the custom mirroring configuration for the SecurityProfileGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#custom_mirroring_profile GoogleNetworkSecuritySecurityProfileGroup#custom_mirroring_profile}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of the profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#description GoogleNetworkSecuritySecurityProfileGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#id GoogleNetworkSecuritySecurityProfileGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#labels GoogleNetworkSecuritySecurityProfileGroup#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the security profile group. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#location GoogleNetworkSecuritySecurityProfileGroup#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The name of the parent this security profile group belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#parent GoogleNetworkSecuritySecurityProfileGroup#parent}

---

##### `threat_prevention_profile`<sup>Optional</sup> <a name="threat_prevention_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.threatPreventionProfile"></a>

```python
threat_prevention_profile: str
```

- *Type:* str

Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#threat_prevention_profile GoogleNetworkSecuritySecurityProfileGroup#threat_prevention_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecuritySecurityProfileGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#timeouts GoogleNetworkSecuritySecurityProfileGroup#timeouts}

---

### GoogleNetworkSecuritySecurityProfileGroupTimeouts <a name="GoogleNetworkSecuritySecurityProfileGroupTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile_group

googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#create GoogleNetworkSecuritySecurityProfileGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#delete GoogleNetworkSecuritySecurityProfileGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#update GoogleNetworkSecuritySecurityProfileGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#create GoogleNetworkSecuritySecurityProfileGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#delete GoogleNetworkSecuritySecurityProfileGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_security_profile_group#update GoogleNetworkSecuritySecurityProfileGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference <a name="GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile_group

googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkSecuritySecurityProfileGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfileGroup.GoogleNetworkSecuritySecurityProfileGroupTimeouts">GoogleNetworkSecuritySecurityProfileGroupTimeouts</a>]

---



