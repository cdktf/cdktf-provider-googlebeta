# `googleNetworkSecuritySecurityProfile` Submodule <a name="`googleNetworkSecuritySecurityProfile` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecuritySecurityProfile <a name="GoogleNetworkSecuritySecurityProfile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile google_network_security_security_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile(
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
  type: str,
  custom_intercept_profile: GoogleNetworkSecuritySecurityProfileCustomInterceptProfile = None,
  custom_mirroring_profile: GoogleNetworkSecuritySecurityProfileCustomMirroringProfile = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  parent: str = None,
  threat_prevention_profile: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile = None,
  timeouts: GoogleNetworkSecuritySecurityProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the security profile resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of security profile. Possible values: ["THREAT_PREVENTION", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.customInterceptProfile">custom_intercept_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile">GoogleNetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | custom_intercept_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.customMirroringProfile">custom_mirroring_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile">GoogleNetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | custom_mirroring_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of the security profile. The Max length is 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#id GoogleNetworkSecuritySecurityProfile#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the security profile. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The name of the parent this security profile belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.threatPreventionProfile">threat_prevention_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | threat_prevention_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.name"></a>

- *Type:* str

The name of the security profile resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#name GoogleNetworkSecuritySecurityProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.type"></a>

- *Type:* str

The type of security profile. Possible values: ["THREAT_PREVENTION", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#type GoogleNetworkSecuritySecurityProfile#type}

---

##### `custom_intercept_profile`<sup>Optional</sup> <a name="custom_intercept_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.customInterceptProfile"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile">GoogleNetworkSecuritySecurityProfileCustomInterceptProfile</a>

custom_intercept_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#custom_intercept_profile GoogleNetworkSecuritySecurityProfile#custom_intercept_profile}

---

##### `custom_mirroring_profile`<sup>Optional</sup> <a name="custom_mirroring_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.customMirroringProfile"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile">GoogleNetworkSecuritySecurityProfileCustomMirroringProfile</a>

custom_mirroring_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#custom_mirroring_profile GoogleNetworkSecuritySecurityProfile#custom_mirroring_profile}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.description"></a>

- *Type:* str

An optional description of the security profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#description GoogleNetworkSecuritySecurityProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#id GoogleNetworkSecuritySecurityProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#labels GoogleNetworkSecuritySecurityProfile#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.location"></a>

- *Type:* str

The location of the security profile. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#location GoogleNetworkSecuritySecurityProfile#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.parent"></a>

- *Type:* str

The name of the parent this security profile belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#parent GoogleNetworkSecuritySecurityProfile#parent}

---

##### `threat_prevention_profile`<sup>Optional</sup> <a name="threat_prevention_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.threatPreventionProfile"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a>

threat_prevention_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#threat_prevention_profile GoogleNetworkSecuritySecurityProfile#threat_prevention_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#timeouts GoogleNetworkSecuritySecurityProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putCustomInterceptProfile">put_custom_intercept_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putCustomMirroringProfile">put_custom_mirroring_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putThreatPreventionProfile">put_threat_prevention_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetCustomInterceptProfile">reset_custom_intercept_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetCustomMirroringProfile">reset_custom_mirroring_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetThreatPreventionProfile">reset_threat_prevention_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_intercept_profile` <a name="put_custom_intercept_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putCustomInterceptProfile"></a>

```python
def put_custom_intercept_profile(
  intercept_endpoint_group: str
) -> None
```

###### `intercept_endpoint_group`<sup>Required</sup> <a name="intercept_endpoint_group" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putCustomInterceptProfile.parameter.interceptEndpointGroup"></a>

- *Type:* str

The Intercept Endpoint Group to which matching traffic should be intercepted. Format: projects/{project_id}/locations/global/interceptEndpointGroups/{endpoint_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#intercept_endpoint_group GoogleNetworkSecuritySecurityProfile#intercept_endpoint_group}

---

##### `put_custom_mirroring_profile` <a name="put_custom_mirroring_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putCustomMirroringProfile"></a>

```python
def put_custom_mirroring_profile(
  mirroring_endpoint_group: str
) -> None
```

###### `mirroring_endpoint_group`<sup>Required</sup> <a name="mirroring_endpoint_group" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putCustomMirroringProfile.parameter.mirroringEndpointGroup"></a>

- *Type:* str

The Mirroring Endpoint Group to which matching traffic should be mirrored. Format: projects/{project_id}/locations/global/mirroringEndpointGroups/{endpoint_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#mirroring_endpoint_group GoogleNetworkSecuritySecurityProfile#mirroring_endpoint_group}

---

##### `put_threat_prevention_profile` <a name="put_threat_prevention_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putThreatPreventionProfile"></a>

```python
def put_threat_prevention_profile(
  severity_overrides: typing.Union[IResolvable, typing.List[GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides]] = None,
  threat_overrides: typing.Union[IResolvable, typing.List[GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides]] = None
) -> None
```

###### `severity_overrides`<sup>Optional</sup> <a name="severity_overrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putThreatPreventionProfile.parameter.severityOverrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]

severity_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#severity_overrides GoogleNetworkSecuritySecurityProfile#severity_overrides}

---

###### `threat_overrides`<sup>Optional</sup> <a name="threat_overrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putThreatPreventionProfile.parameter.threatOverrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]

threat_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#threat_overrides GoogleNetworkSecuritySecurityProfile#threat_overrides}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#create GoogleNetworkSecuritySecurityProfile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#delete GoogleNetworkSecuritySecurityProfile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#update GoogleNetworkSecuritySecurityProfile#update}.

---

##### `reset_custom_intercept_profile` <a name="reset_custom_intercept_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetCustomInterceptProfile"></a>

```python
def reset_custom_intercept_profile() -> None
```

##### `reset_custom_mirroring_profile` <a name="reset_custom_mirroring_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetCustomMirroringProfile"></a>

```python
def reset_custom_mirroring_profile() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_threat_prevention_profile` <a name="reset_threat_prevention_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetThreatPreventionProfile"></a>

```python
def reset_threat_prevention_profile() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkSecuritySecurityProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkSecuritySecurityProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkSecuritySecurityProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkSecuritySecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecuritySecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customInterceptProfile">custom_intercept_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference">GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customMirroringProfile">custom_mirroring_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference">GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.threatPreventionProfile">threat_prevention_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference">GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customInterceptProfileInput">custom_intercept_profile_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile">GoogleNetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customMirroringProfileInput">custom_mirroring_profile_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile">GoogleNetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.threatPreventionProfileInput">threat_prevention_profile_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `custom_intercept_profile`<sup>Required</sup> <a name="custom_intercept_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customInterceptProfile"></a>

```python
custom_intercept_profile: GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference">GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference</a>

---

##### `custom_mirroring_profile`<sup>Required</sup> <a name="custom_mirroring_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customMirroringProfile"></a>

```python
custom_mirroring_profile: GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference">GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `threat_prevention_profile`<sup>Required</sup> <a name="threat_prevention_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.threatPreventionProfile"></a>

```python
threat_prevention_profile: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference">GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `custom_intercept_profile_input`<sup>Optional</sup> <a name="custom_intercept_profile_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customInterceptProfileInput"></a>

```python
custom_intercept_profile_input: GoogleNetworkSecuritySecurityProfileCustomInterceptProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile">GoogleNetworkSecuritySecurityProfileCustomInterceptProfile</a>

---

##### `custom_mirroring_profile_input`<sup>Optional</sup> <a name="custom_mirroring_profile_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customMirroringProfileInput"></a>

```python
custom_mirroring_profile_input: GoogleNetworkSecuritySecurityProfileCustomMirroringProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile">GoogleNetworkSecuritySecurityProfileCustomMirroringProfile</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `threat_prevention_profile_input`<sup>Optional</sup> <a name="threat_prevention_profile_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.threatPreventionProfileInput"></a>

```python
threat_prevention_profile_input: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkSecuritySecurityProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecuritySecurityProfileConfig <a name="GoogleNetworkSecuritySecurityProfileConfig" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  custom_intercept_profile: GoogleNetworkSecuritySecurityProfileCustomInterceptProfile = None,
  custom_mirroring_profile: GoogleNetworkSecuritySecurityProfileCustomMirroringProfile = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  parent: str = None,
  threat_prevention_profile: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile = None,
  timeouts: GoogleNetworkSecuritySecurityProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.name">name</a></code> | <code>str</code> | The name of the security profile resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.type">type</a></code> | <code>str</code> | The type of security profile. Possible values: ["THREAT_PREVENTION", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.customInterceptProfile">custom_intercept_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile">GoogleNetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | custom_intercept_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.customMirroringProfile">custom_mirroring_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile">GoogleNetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | custom_mirroring_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.description">description</a></code> | <code>str</code> | An optional description of the security profile. The Max length is 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#id GoogleNetworkSecuritySecurityProfile#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.location">location</a></code> | <code>str</code> | The location of the security profile. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.parent">parent</a></code> | <code>str</code> | The name of the parent this security profile belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.threatPreventionProfile">threat_prevention_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | threat_prevention_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the security profile resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#name GoogleNetworkSecuritySecurityProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of security profile. Possible values: ["THREAT_PREVENTION", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#type GoogleNetworkSecuritySecurityProfile#type}

---

##### `custom_intercept_profile`<sup>Optional</sup> <a name="custom_intercept_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.customInterceptProfile"></a>

```python
custom_intercept_profile: GoogleNetworkSecuritySecurityProfileCustomInterceptProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile">GoogleNetworkSecuritySecurityProfileCustomInterceptProfile</a>

custom_intercept_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#custom_intercept_profile GoogleNetworkSecuritySecurityProfile#custom_intercept_profile}

---

##### `custom_mirroring_profile`<sup>Optional</sup> <a name="custom_mirroring_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.customMirroringProfile"></a>

```python
custom_mirroring_profile: GoogleNetworkSecuritySecurityProfileCustomMirroringProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile">GoogleNetworkSecuritySecurityProfileCustomMirroringProfile</a>

custom_mirroring_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#custom_mirroring_profile GoogleNetworkSecuritySecurityProfile#custom_mirroring_profile}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of the security profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#description GoogleNetworkSecuritySecurityProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#id GoogleNetworkSecuritySecurityProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#labels GoogleNetworkSecuritySecurityProfile#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the security profile. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#location GoogleNetworkSecuritySecurityProfile#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The name of the parent this security profile belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#parent GoogleNetworkSecuritySecurityProfile#parent}

---

##### `threat_prevention_profile`<sup>Optional</sup> <a name="threat_prevention_profile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.threatPreventionProfile"></a>

```python
threat_prevention_profile: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a>

threat_prevention_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#threat_prevention_profile GoogleNetworkSecuritySecurityProfile#threat_prevention_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecuritySecurityProfileTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#timeouts GoogleNetworkSecuritySecurityProfile#timeouts}

---

### GoogleNetworkSecuritySecurityProfileCustomInterceptProfile <a name="GoogleNetworkSecuritySecurityProfileCustomInterceptProfile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile(
  intercept_endpoint_group: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile.property.interceptEndpointGroup">intercept_endpoint_group</a></code> | <code>str</code> | The Intercept Endpoint Group to which matching traffic should be intercepted. Format: projects/{project_id}/locations/global/interceptEndpointGroups/{endpoint_group_id}. |

---

##### `intercept_endpoint_group`<sup>Required</sup> <a name="intercept_endpoint_group" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile.property.interceptEndpointGroup"></a>

```python
intercept_endpoint_group: str
```

- *Type:* str

The Intercept Endpoint Group to which matching traffic should be intercepted. Format: projects/{project_id}/locations/global/interceptEndpointGroups/{endpoint_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#intercept_endpoint_group GoogleNetworkSecuritySecurityProfile#intercept_endpoint_group}

---

### GoogleNetworkSecuritySecurityProfileCustomMirroringProfile <a name="GoogleNetworkSecuritySecurityProfileCustomMirroringProfile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile(
  mirroring_endpoint_group: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringEndpointGroup">mirroring_endpoint_group</a></code> | <code>str</code> | The Mirroring Endpoint Group to which matching traffic should be mirrored. Format: projects/{project_id}/locations/global/mirroringEndpointGroups/{endpoint_group_id}. |

---

##### `mirroring_endpoint_group`<sup>Required</sup> <a name="mirroring_endpoint_group" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringEndpointGroup"></a>

```python
mirroring_endpoint_group: str
```

- *Type:* str

The Mirroring Endpoint Group to which matching traffic should be mirrored. Format: projects/{project_id}/locations/global/mirroringEndpointGroups/{endpoint_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#mirroring_endpoint_group GoogleNetworkSecuritySecurityProfile#mirroring_endpoint_group}

---

### GoogleNetworkSecuritySecurityProfileThreatPreventionProfile <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile(
  severity_overrides: typing.Union[IResolvable, typing.List[GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides]] = None,
  threat_overrides: typing.Union[IResolvable, typing.List[GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.property.severityOverrides">severity_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]</code> | severity_overrides block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.property.threatOverrides">threat_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]</code> | threat_overrides block. |

---

##### `severity_overrides`<sup>Optional</sup> <a name="severity_overrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.property.severityOverrides"></a>

```python
severity_overrides: typing.Union[IResolvable, typing.List[GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]

severity_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#severity_overrides GoogleNetworkSecuritySecurityProfile#severity_overrides}

---

##### `threat_overrides`<sup>Optional</sup> <a name="threat_overrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.property.threatOverrides"></a>

```python
threat_overrides: typing.Union[IResolvable, typing.List[GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]

threat_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#threat_overrides GoogleNetworkSecuritySecurityProfile#threat_overrides}

---

### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides(
  action: str,
  severity: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.action">action</a></code> | <code>str</code> | Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.severity">severity</a></code> | <code>str</code> | Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"]. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.action"></a>

```python
action: str
```

- *Type:* str

Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.severity"></a>

```python
severity: str
```

- *Type:* str

Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#severity GoogleNetworkSecuritySecurityProfile#severity}

---

### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides(
  action: str,
  threat_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.action">action</a></code> | <code>str</code> | Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.threatId">threat_id</a></code> | <code>str</code> | Vendor-specific ID of a threat to override. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.action"></a>

```python
action: str
```

- *Type:* str

Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}

---

##### `threat_id`<sup>Required</sup> <a name="threat_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.threatId"></a>

```python
threat_id: str
```

- *Type:* str

Vendor-specific ID of a threat to override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#threat_id GoogleNetworkSecuritySecurityProfile#threat_id}

---

### GoogleNetworkSecuritySecurityProfileTimeouts <a name="GoogleNetworkSecuritySecurityProfileTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#create GoogleNetworkSecuritySecurityProfile#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#delete GoogleNetworkSecuritySecurityProfile#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#update GoogleNetworkSecuritySecurityProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#create GoogleNetworkSecuritySecurityProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#delete GoogleNetworkSecuritySecurityProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_security_security_profile#update GoogleNetworkSecuritySecurityProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference <a name="GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroupInput">intercept_endpoint_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroup">intercept_endpoint_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile">GoogleNetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intercept_endpoint_group_input`<sup>Optional</sup> <a name="intercept_endpoint_group_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroupInput"></a>

```python
intercept_endpoint_group_input: str
```

- *Type:* str

---

##### `intercept_endpoint_group`<sup>Required</sup> <a name="intercept_endpoint_group" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroup"></a>

```python
intercept_endpoint_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecuritySecurityProfileCustomInterceptProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile">GoogleNetworkSecuritySecurityProfileCustomInterceptProfile</a>

---


### GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference <a name="GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupInput">mirroring_endpoint_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroup">mirroring_endpoint_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile">GoogleNetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mirroring_endpoint_group_input`<sup>Optional</sup> <a name="mirroring_endpoint_group_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupInput"></a>

```python
mirroring_endpoint_group_input: str
```

- *Type:* str

---

##### `mirroring_endpoint_group`<sup>Required</sup> <a name="mirroring_endpoint_group" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroup"></a>

```python
mirroring_endpoint_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecuritySecurityProfileCustomMirroringProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile">GoogleNetworkSecuritySecurityProfileCustomMirroringProfile</a>

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides">put_severity_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides">put_threat_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetSeverityOverrides">reset_severity_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetThreatOverrides">reset_threat_overrides</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_severity_overrides` <a name="put_severity_overrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides"></a>

```python
def put_severity_overrides(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]

---

##### `put_threat_overrides` <a name="put_threat_overrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides"></a>

```python
def put_threat_overrides(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]

---

##### `reset_severity_overrides` <a name="reset_severity_overrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetSeverityOverrides"></a>

```python
def reset_severity_overrides() -> None
```

##### `reset_threat_overrides` <a name="reset_threat_overrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetThreatOverrides"></a>

```python
def reset_threat_overrides() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverrides">severity_overrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverrides">threat_overrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverridesInput">severity_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverridesInput">threat_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `severity_overrides`<sup>Required</sup> <a name="severity_overrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverrides"></a>

```python
severity_overrides: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList</a>

---

##### `threat_overrides`<sup>Required</sup> <a name="threat_overrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverrides"></a>

```python
threat_overrides: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList</a>

---

##### `severity_overrides_input`<sup>Optional</sup> <a name="severity_overrides_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverridesInput"></a>

```python
severity_overrides_input: typing.Union[IResolvable, typing.List[GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]

---

##### `threat_overrides_input`<sup>Optional</sup> <a name="threat_overrides_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverridesInput"></a>

```python
threat_overrides_input: typing.Union[IResolvable, typing.List[GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a>

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]]

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>]

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]]

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatIdInput">threat_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatId">threat_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `threat_id_input`<sup>Optional</sup> <a name="threat_id_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatIdInput"></a>

```python
threat_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `threat_id`<sup>Required</sup> <a name="threat_id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatId"></a>

```python
threat_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>]

---


### GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference <a name="GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_security_profile

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkSecuritySecurityProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a>]

---



