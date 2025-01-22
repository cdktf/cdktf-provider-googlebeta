# `googleAccessContextManagerAccessLevelCondition` Submodule <a name="`googleAccessContextManagerAccessLevelCondition` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerAccessLevelCondition <a name="GoogleAccessContextManagerAccessLevelCondition" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition google_access_context_manager_access_level_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_level: str,
  device_policy: GoogleAccessContextManagerAccessLevelConditionDevicePolicy = None,
  id: str = None,
  ip_subnetworks: typing.List[str] = None,
  members: typing.List[str] = None,
  negate: typing.Union[bool, IResolvable] = None,
  regions: typing.List[str] = None,
  required_access_levels: typing.List[str] = None,
  timeouts: GoogleAccessContextManagerAccessLevelConditionTimeouts = None,
  vpc_network_sources: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | The name of the Access Level to add this condition to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.devicePolicy">device_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#id GoogleAccessContextManagerAccessLevelCondition#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.ipSubnetworks">ip_subnetworks</a></code> | <code>typing.List[str]</code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.regions">regions</a></code> | <code>typing.List[str]</code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.requiredAccessLevels">required_access_levels</a></code> | <code>typing.List[str]</code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.vpcNetworkSources">vpc_network_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>]]</code> | vpc_network_sources block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.accessLevel"></a>

- *Type:* str

The name of the Access Level to add this condition to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#access_level GoogleAccessContextManagerAccessLevelCondition#access_level}

---

##### `device_policy`<sup>Optional</sup> <a name="device_policy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.devicePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#device_policy GoogleAccessContextManagerAccessLevelCondition#device_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#id GoogleAccessContextManagerAccessLevelCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_subnetworks`<sup>Optional</sup> <a name="ip_subnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.ipSubnetworks"></a>

- *Type:* typing.List[str]

A list of CIDR block IP subnetwork specification.

May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#ip_subnetworks GoogleAccessContextManagerAccessLevelCondition#ip_subnetworks}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#members GoogleAccessContextManagerAccessLevelCondition#members}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.negate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#negate GoogleAccessContextManagerAccessLevelCondition#negate}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.regions"></a>

- *Type:* typing.List[str]

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#regions GoogleAccessContextManagerAccessLevelCondition#regions}

---

##### `required_access_levels`<sup>Optional</sup> <a name="required_access_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.requiredAccessLevels"></a>

- *Type:* typing.List[str]

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#required_access_levels GoogleAccessContextManagerAccessLevelCondition#required_access_levels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#timeouts GoogleAccessContextManagerAccessLevelCondition#timeouts}

---

##### `vpc_network_sources`<sup>Optional</sup> <a name="vpc_network_sources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.vpcNetworkSources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>]]

vpc_network_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#vpc_network_sources GoogleAccessContextManagerAccessLevelCondition#vpc_network_sources}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putDevicePolicy">put_device_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putVpcNetworkSources">put_vpc_network_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetDevicePolicy">reset_device_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetIpSubnetworks">reset_ip_subnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetMembers">reset_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetNegate">reset_negate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetRegions">reset_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetRequiredAccessLevels">reset_required_access_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetVpcNetworkSources">reset_vpc_network_sources</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_device_policy` <a name="put_device_policy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putDevicePolicy"></a>

```python
def put_device_policy(
  allowed_device_management_levels: typing.List[str] = None,
  allowed_encryption_statuses: typing.List[str] = None,
  os_constraints: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints]] = None,
  require_admin_approval: typing.Union[bool, IResolvable] = None,
  require_corp_owned: typing.Union[bool, IResolvable] = None,
  require_screen_lock: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allowed_device_management_levels`<sup>Optional</sup> <a name="allowed_device_management_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putDevicePolicy.parameter.allowedDeviceManagementLevels"></a>

- *Type:* typing.List[str]

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#allowed_device_management_levels GoogleAccessContextManagerAccessLevelCondition#allowed_device_management_levels}

---

###### `allowed_encryption_statuses`<sup>Optional</sup> <a name="allowed_encryption_statuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putDevicePolicy.parameter.allowedEncryptionStatuses"></a>

- *Type:* typing.List[str]

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#allowed_encryption_statuses GoogleAccessContextManagerAccessLevelCondition#allowed_encryption_statuses}

---

###### `os_constraints`<sup>Optional</sup> <a name="os_constraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putDevicePolicy.parameter.osConstraints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#os_constraints GoogleAccessContextManagerAccessLevelCondition#os_constraints}

---

###### `require_admin_approval`<sup>Optional</sup> <a name="require_admin_approval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putDevicePolicy.parameter.requireAdminApproval"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#require_admin_approval GoogleAccessContextManagerAccessLevelCondition#require_admin_approval}

---

###### `require_corp_owned`<sup>Optional</sup> <a name="require_corp_owned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putDevicePolicy.parameter.requireCorpOwned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#require_corp_owned GoogleAccessContextManagerAccessLevelCondition#require_corp_owned}

---

###### `require_screen_lock`<sup>Optional</sup> <a name="require_screen_lock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putDevicePolicy.parameter.requireScreenLock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#require_screen_lock GoogleAccessContextManagerAccessLevelCondition#require_screen_lock}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#create GoogleAccessContextManagerAccessLevelCondition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#delete GoogleAccessContextManagerAccessLevelCondition#delete}.

---

##### `put_vpc_network_sources` <a name="put_vpc_network_sources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putVpcNetworkSources"></a>

```python
def put_vpc_network_sources(
  value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putVpcNetworkSources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>]]

---

##### `reset_device_policy` <a name="reset_device_policy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetDevicePolicy"></a>

```python
def reset_device_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_subnetworks` <a name="reset_ip_subnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetIpSubnetworks"></a>

```python
def reset_ip_subnetworks() -> None
```

##### `reset_members` <a name="reset_members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetMembers"></a>

```python
def reset_members() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetNegate"></a>

```python
def reset_negate() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetRegions"></a>

```python
def reset_regions() -> None
```

##### `reset_required_access_levels` <a name="reset_required_access_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetRequiredAccessLevels"></a>

```python
def reset_required_access_levels() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_network_sources` <a name="reset_vpc_network_sources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetVpcNetworkSources"></a>

```python
def reset_vpc_network_sources() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerAccessLevelCondition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleAccessContextManagerAccessLevelCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleAccessContextManagerAccessLevelCondition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleAccessContextManagerAccessLevelCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerAccessLevelCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.accessPolicyId">access_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.devicePolicy">device_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference">GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.vpcNetworkSources">vpc_network_sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.devicePolicyInput">device_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.ipSubnetworksInput">ip_subnetworks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.negateInput">negate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.requiredAccessLevelsInput">required_access_levels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.vpcNetworkSourcesInput">vpc_network_sources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.ipSubnetworks">ip_subnetworks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.requiredAccessLevels">required_access_levels</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.accessPolicyId"></a>

```python
access_policy_id: str
```

- *Type:* str

---

##### `device_policy`<sup>Required</sup> <a name="device_policy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.devicePolicy"></a>

```python
device_policy: GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.timeouts"></a>

```python
timeouts: GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference">GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference</a>

---

##### `vpc_network_sources`<sup>Required</sup> <a name="vpc_network_sources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.vpcNetworkSources"></a>

```python
vpc_network_sources: GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `device_policy_input`<sup>Optional</sup> <a name="device_policy_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.devicePolicyInput"></a>

```python
device_policy_input: GoogleAccessContextManagerAccessLevelConditionDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_subnetworks_input`<sup>Optional</sup> <a name="ip_subnetworks_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.ipSubnetworksInput"></a>

```python
ip_subnetworks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.negateInput"></a>

```python
negate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `required_access_levels_input`<sup>Optional</sup> <a name="required_access_levels_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.requiredAccessLevelsInput"></a>

```python
required_access_levels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleAccessContextManagerAccessLevelConditionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a>]

---

##### `vpc_network_sources_input`<sup>Optional</sup> <a name="vpc_network_sources_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.vpcNetworkSourcesInput"></a>

```python
vpc_network_sources_input: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>]]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_subnetworks`<sup>Required</sup> <a name="ip_subnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.ipSubnetworks"></a>

```python
ip_subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.negate"></a>

```python
negate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `required_access_levels`<sup>Required</sup> <a name="required_access_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.requiredAccessLevels"></a>

```python
required_access_levels: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerAccessLevelConditionConfig <a name="GoogleAccessContextManagerAccessLevelConditionConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_level: str,
  device_policy: GoogleAccessContextManagerAccessLevelConditionDevicePolicy = None,
  id: str = None,
  ip_subnetworks: typing.List[str] = None,
  members: typing.List[str] = None,
  negate: typing.Union[bool, IResolvable] = None,
  regions: typing.List[str] = None,
  required_access_levels: typing.List[str] = None,
  timeouts: GoogleAccessContextManagerAccessLevelConditionTimeouts = None,
  vpc_network_sources: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.accessLevel">access_level</a></code> | <code>str</code> | The name of the Access Level to add this condition to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.devicePolicy">device_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#id GoogleAccessContextManagerAccessLevelCondition#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.ipSubnetworks">ip_subnetworks</a></code> | <code>typing.List[str]</code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.members">members</a></code> | <code>typing.List[str]</code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.regions">regions</a></code> | <code>typing.List[str]</code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.requiredAccessLevels">required_access_levels</a></code> | <code>typing.List[str]</code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.vpcNetworkSources">vpc_network_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>]]</code> | vpc_network_sources block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

The name of the Access Level to add this condition to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#access_level GoogleAccessContextManagerAccessLevelCondition#access_level}

---

##### `device_policy`<sup>Optional</sup> <a name="device_policy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.devicePolicy"></a>

```python
device_policy: GoogleAccessContextManagerAccessLevelConditionDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#device_policy GoogleAccessContextManagerAccessLevelCondition#device_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#id GoogleAccessContextManagerAccessLevelCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_subnetworks`<sup>Optional</sup> <a name="ip_subnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.ipSubnetworks"></a>

```python
ip_subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

A list of CIDR block IP subnetwork specification.

May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#ip_subnetworks GoogleAccessContextManagerAccessLevelCondition#ip_subnetworks}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#members GoogleAccessContextManagerAccessLevelCondition#members}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.negate"></a>

```python
negate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#negate GoogleAccessContextManagerAccessLevelCondition#negate}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#regions GoogleAccessContextManagerAccessLevelCondition#regions}

---

##### `required_access_levels`<sup>Optional</sup> <a name="required_access_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.requiredAccessLevels"></a>

```python
required_access_levels: typing.List[str]
```

- *Type:* typing.List[str]

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#required_access_levels GoogleAccessContextManagerAccessLevelCondition#required_access_levels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.timeouts"></a>

```python
timeouts: GoogleAccessContextManagerAccessLevelConditionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#timeouts GoogleAccessContextManagerAccessLevelCondition#timeouts}

---

##### `vpc_network_sources`<sup>Optional</sup> <a name="vpc_network_sources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.vpcNetworkSources"></a>

```python
vpc_network_sources: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>]]

vpc_network_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#vpc_network_sources GoogleAccessContextManagerAccessLevelCondition#vpc_network_sources}

---

### GoogleAccessContextManagerAccessLevelConditionDevicePolicy <a name="GoogleAccessContextManagerAccessLevelConditionDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy(
  allowed_device_management_levels: typing.List[str] = None,
  allowed_encryption_statuses: typing.List[str] = None,
  os_constraints: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints]] = None,
  require_admin_approval: typing.Union[bool, IResolvable] = None,
  require_corp_owned: typing.Union[bool, IResolvable] = None,
  require_screen_lock: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.allowedDeviceManagementLevels">allowed_device_management_levels</a></code> | <code>typing.List[str]</code> | A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.allowedEncryptionStatuses">allowed_encryption_statuses</a></code> | <code>typing.List[str]</code> | A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.osConstraints">os_constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]</code> | os_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.requireAdminApproval">require_admin_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the device needs to be approved by the customer admin. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.requireCorpOwned">require_corp_owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the device needs to be corp owned. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.requireScreenLock">require_screen_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false. |

---

##### `allowed_device_management_levels`<sup>Optional</sup> <a name="allowed_device_management_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.allowedDeviceManagementLevels"></a>

```python
allowed_device_management_levels: typing.List[str]
```

- *Type:* typing.List[str]

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#allowed_device_management_levels GoogleAccessContextManagerAccessLevelCondition#allowed_device_management_levels}

---

##### `allowed_encryption_statuses`<sup>Optional</sup> <a name="allowed_encryption_statuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.allowedEncryptionStatuses"></a>

```python
allowed_encryption_statuses: typing.List[str]
```

- *Type:* typing.List[str]

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#allowed_encryption_statuses GoogleAccessContextManagerAccessLevelCondition#allowed_encryption_statuses}

---

##### `os_constraints`<sup>Optional</sup> <a name="os_constraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.osConstraints"></a>

```python
os_constraints: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#os_constraints GoogleAccessContextManagerAccessLevelCondition#os_constraints}

---

##### `require_admin_approval`<sup>Optional</sup> <a name="require_admin_approval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.requireAdminApproval"></a>

```python
require_admin_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#require_admin_approval GoogleAccessContextManagerAccessLevelCondition#require_admin_approval}

---

##### `require_corp_owned`<sup>Optional</sup> <a name="require_corp_owned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.requireCorpOwned"></a>

```python
require_corp_owned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#require_corp_owned GoogleAccessContextManagerAccessLevelCondition#require_corp_owned}

---

##### `require_screen_lock`<sup>Optional</sup> <a name="require_screen_lock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.requireScreenLock"></a>

```python
require_screen_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#require_screen_lock GoogleAccessContextManagerAccessLevelCondition#require_screen_lock}

---

### GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints <a name="GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints(
  os_type: str,
  minimum_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.osType">os_type</a></code> | <code>str</code> | The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.minimumVersion">minimum_version</a></code> | <code>str</code> | The minimum allowed OS version. |

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.osType"></a>

```python
os_type: str
```

- *Type:* str

The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#os_type GoogleAccessContextManagerAccessLevelCondition#os_type}

---

##### `minimum_version`<sup>Optional</sup> <a name="minimum_version" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.minimumVersion"></a>

```python
minimum_version: str
```

- *Type:* str

The minimum allowed OS version.

If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#minimum_version GoogleAccessContextManagerAccessLevelCondition#minimum_version}

---

### GoogleAccessContextManagerAccessLevelConditionTimeouts <a name="GoogleAccessContextManagerAccessLevelConditionTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#create GoogleAccessContextManagerAccessLevelCondition#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#delete GoogleAccessContextManagerAccessLevelCondition#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#create GoogleAccessContextManagerAccessLevelCondition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#delete GoogleAccessContextManagerAccessLevelCondition#delete}.

---

### GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources <a name="GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources(
  vpc_subnetwork: GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources.property.vpcSubnetwork">vpc_subnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a></code> | vpc_subnetwork block. |

---

##### `vpc_subnetwork`<sup>Optional</sup> <a name="vpc_subnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources.property.vpcSubnetwork"></a>

```python
vpc_subnetwork: GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a>

vpc_subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#vpc_subnetwork GoogleAccessContextManagerAccessLevelCondition#vpc_subnetwork}

---

### GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork <a name="GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork(
  network: str,
  vpc_ip_subnetworks: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.property.network">network</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks">vpc_ip_subnetworks</a></code> | <code>typing.List[str]</code> | CIDR block IP subnetwork specification. Must be IPv4. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.property.network"></a>

```python
network: str
```

- *Type:* str

Required.

Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#network GoogleAccessContextManagerAccessLevelCondition#network}

---

##### `vpc_ip_subnetworks`<sup>Optional</sup> <a name="vpc_ip_subnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks"></a>

```python
vpc_ip_subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

CIDR block IP subnetwork specification. Must be IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#vpc_ip_subnetworks GoogleAccessContextManagerAccessLevelCondition#vpc_ip_subnetworks}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList <a name="GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]

---


### GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference <a name="GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resetMinimumVersion">reset_minimum_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_minimum_version` <a name="reset_minimum_version" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resetMinimumVersion"></a>

```python
def reset_minimum_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput">minimum_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osTypeInput">os_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersion">minimum_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minimum_version_input`<sup>Optional</sup> <a name="minimum_version_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput"></a>

```python
minimum_version_input: str
```

- *Type:* str

---

##### `os_type_input`<sup>Optional</sup> <a name="os_type_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osTypeInput"></a>

```python
os_type_input: str
```

- *Type:* str

---

##### `minimum_version`<sup>Required</sup> <a name="minimum_version" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersion"></a>

```python
minimum_version: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]

---


### GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference <a name="GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.putOsConstraints">put_os_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedDeviceManagementLevels">reset_allowed_device_management_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedEncryptionStatuses">reset_allowed_encryption_statuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetOsConstraints">reset_os_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireAdminApproval">reset_require_admin_approval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireCorpOwned">reset_require_corp_owned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireScreenLock">reset_require_screen_lock</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_os_constraints` <a name="put_os_constraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.putOsConstraints"></a>

```python
def put_os_constraints(
  value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.putOsConstraints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]

---

##### `reset_allowed_device_management_levels` <a name="reset_allowed_device_management_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedDeviceManagementLevels"></a>

```python
def reset_allowed_device_management_levels() -> None
```

##### `reset_allowed_encryption_statuses` <a name="reset_allowed_encryption_statuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedEncryptionStatuses"></a>

```python
def reset_allowed_encryption_statuses() -> None
```

##### `reset_os_constraints` <a name="reset_os_constraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetOsConstraints"></a>

```python
def reset_os_constraints() -> None
```

##### `reset_require_admin_approval` <a name="reset_require_admin_approval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireAdminApproval"></a>

```python
def reset_require_admin_approval() -> None
```

##### `reset_require_corp_owned` <a name="reset_require_corp_owned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireCorpOwned"></a>

```python
def reset_require_corp_owned() -> None
```

##### `reset_require_screen_lock` <a name="reset_require_screen_lock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireScreenLock"></a>

```python
def reset_require_screen_lock() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraints">os_constraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput">allowed_device_management_levels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatusesInput">allowed_encryption_statuses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraintsInput">os_constraints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApprovalInput">require_admin_approval_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwnedInput">require_corp_owned_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLockInput">require_screen_lock_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevels">allowed_device_management_levels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatuses">allowed_encryption_statuses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApproval">require_admin_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwned">require_corp_owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLock">require_screen_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `os_constraints`<sup>Required</sup> <a name="os_constraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraints"></a>

```python
os_constraints: GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList</a>

---

##### `allowed_device_management_levels_input`<sup>Optional</sup> <a name="allowed_device_management_levels_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput"></a>

```python
allowed_device_management_levels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_encryption_statuses_input`<sup>Optional</sup> <a name="allowed_encryption_statuses_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatusesInput"></a>

```python
allowed_encryption_statuses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `os_constraints_input`<sup>Optional</sup> <a name="os_constraints_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraintsInput"></a>

```python
os_constraints_input: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>]]

---

##### `require_admin_approval_input`<sup>Optional</sup> <a name="require_admin_approval_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApprovalInput"></a>

```python
require_admin_approval_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_corp_owned_input`<sup>Optional</sup> <a name="require_corp_owned_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwnedInput"></a>

```python
require_corp_owned_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_screen_lock_input`<sup>Optional</sup> <a name="require_screen_lock_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLockInput"></a>

```python
require_screen_lock_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_device_management_levels`<sup>Required</sup> <a name="allowed_device_management_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevels"></a>

```python
allowed_device_management_levels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_encryption_statuses`<sup>Required</sup> <a name="allowed_encryption_statuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatuses"></a>

```python
allowed_encryption_statuses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_admin_approval`<sup>Required</sup> <a name="require_admin_approval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApproval"></a>

```python
require_admin_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_corp_owned`<sup>Required</sup> <a name="require_corp_owned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwned"></a>

```python
require_corp_owned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_screen_lock`<sup>Required</sup> <a name="require_screen_lock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLock"></a>

```python
require_screen_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAccessContextManagerAccessLevelConditionDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a>

---


### GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference <a name="GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAccessContextManagerAccessLevelConditionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a>]

---


### GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList <a name="GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>]]

---


### GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference <a name="GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.putVpcSubnetwork">put_vpc_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.resetVpcSubnetwork">reset_vpc_subnetwork</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_subnetwork` <a name="put_vpc_subnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.putVpcSubnetwork"></a>

```python
def put_vpc_subnetwork(
  network: str,
  vpc_ip_subnetworks: typing.List[str] = None
) -> None
```

###### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.putVpcSubnetwork.parameter.network"></a>

- *Type:* str

Required.

Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#network GoogleAccessContextManagerAccessLevelCondition#network}

---

###### `vpc_ip_subnetworks`<sup>Optional</sup> <a name="vpc_ip_subnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.putVpcSubnetwork.parameter.vpcIpSubnetworks"></a>

- *Type:* typing.List[str]

CIDR block IP subnetwork specification. Must be IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level_condition#vpc_ip_subnetworks GoogleAccessContextManagerAccessLevelCondition#vpc_ip_subnetworks}

---

##### `reset_vpc_subnetwork` <a name="reset_vpc_subnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.resetVpcSubnetwork"></a>

```python
def reset_vpc_subnetwork() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.vpcSubnetwork">vpc_subnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput">vpc_subnetwork_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_subnetwork`<sup>Required</sup> <a name="vpc_subnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.vpcSubnetwork"></a>

```python
vpc_subnetwork: GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference</a>

---

##### `vpc_subnetwork_input`<sup>Optional</sup> <a name="vpc_subnetwork_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput"></a>

```python
vpc_subnetwork_input: GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>]

---


### GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference <a name="GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_level_condition

googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks">reset_vpc_ip_subnetworks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpc_ip_subnetworks` <a name="reset_vpc_ip_subnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks"></a>

```python
def reset_vpc_ip_subnetworks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput">vpc_ip_subnetworks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks">vpc_ip_subnetworks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `vpc_ip_subnetworks_input`<sup>Optional</sup> <a name="vpc_ip_subnetworks_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput"></a>

```python
vpc_ip_subnetworks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `vpc_ip_subnetworks`<sup>Required</sup> <a name="vpc_ip_subnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks"></a>

```python
vpc_ip_subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a>

---



