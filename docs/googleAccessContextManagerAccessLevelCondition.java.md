# `googleAccessContextManagerAccessLevelCondition` Submodule <a name="`googleAccessContextManagerAccessLevelCondition` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerAccessLevelCondition <a name="GoogleAccessContextManagerAccessLevelCondition" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition google_access_context_manager_access_level_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelCondition;

GoogleAccessContextManagerAccessLevelCondition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accessLevel(java.lang.String)
//  .devicePolicy(GoogleAccessContextManagerAccessLevelConditionDevicePolicy)
//  .id(java.lang.String)
//  .ipSubnetworks(java.util.List<java.lang.String>)
//  .members(java.util.List<java.lang.String>)
//  .negate(java.lang.Boolean)
//  .negate(IResolvable)
//  .regions(java.util.List<java.lang.String>)
//  .requiredAccessLevels(java.util.List<java.lang.String>)
//  .timeouts(GoogleAccessContextManagerAccessLevelConditionTimeouts)
//  .vpcNetworkSources(IResolvable)
//  .vpcNetworkSources(java.util.List<GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | The name of the Access Level to add this condition to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.devicePolicy">devicePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#id GoogleAccessContextManagerAccessLevelCondition#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.ipSubnetworks">ipSubnetworks</a></code> | <code>java.util.List<java.lang.String></code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.negate">negate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.requiredAccessLevels">requiredAccessLevels</a></code> | <code>java.util.List<java.lang.String></code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.vpcNetworkSources">vpcNetworkSources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>></code> | vpc_network_sources block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

The name of the Access Level to add this condition to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#access_level GoogleAccessContextManagerAccessLevelCondition#access_level}

---

##### `devicePolicy`<sup>Optional</sup> <a name="devicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.devicePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#device_policy GoogleAccessContextManagerAccessLevelCondition#device_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#id GoogleAccessContextManagerAccessLevelCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipSubnetworks`<sup>Optional</sup> <a name="ipSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.ipSubnetworks"></a>

- *Type:* java.util.List<java.lang.String>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#ip_subnetworks GoogleAccessContextManagerAccessLevelCondition#ip_subnetworks}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#members GoogleAccessContextManagerAccessLevelCondition#members}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.negate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#negate GoogleAccessContextManagerAccessLevelCondition#negate}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.regions"></a>

- *Type:* java.util.List<java.lang.String>

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#regions GoogleAccessContextManagerAccessLevelCondition#regions}

---

##### `requiredAccessLevels`<sup>Optional</sup> <a name="requiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.requiredAccessLevels"></a>

- *Type:* java.util.List<java.lang.String>

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#required_access_levels GoogleAccessContextManagerAccessLevelCondition#required_access_levels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#timeouts GoogleAccessContextManagerAccessLevelCondition#timeouts}

---

##### `vpcNetworkSources`<sup>Optional</sup> <a name="vpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.Initializer.parameter.vpcNetworkSources"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>>

vpc_network_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#vpc_network_sources GoogleAccessContextManagerAccessLevelCondition#vpc_network_sources}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putDevicePolicy">putDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putVpcNetworkSources">putVpcNetworkSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetDevicePolicy">resetDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetIpSubnetworks">resetIpSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetMembers">resetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetRequiredAccessLevels">resetRequiredAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetVpcNetworkSources">resetVpcNetworkSources</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDevicePolicy` <a name="putDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putDevicePolicy"></a>

```java
public void putDevicePolicy(GoogleAccessContextManagerAccessLevelConditionDevicePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putDevicePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putTimeouts"></a>

```java
public void putTimeouts(GoogleAccessContextManagerAccessLevelConditionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a>

---

##### `putVpcNetworkSources` <a name="putVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putVpcNetworkSources"></a>

```java
public void putVpcNetworkSources(IResolvable OR java.util.List<GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.putVpcNetworkSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>>

---

##### `resetDevicePolicy` <a name="resetDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetDevicePolicy"></a>

```java
public void resetDevicePolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetId"></a>

```java
public void resetId()
```

##### `resetIpSubnetworks` <a name="resetIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetIpSubnetworks"></a>

```java
public void resetIpSubnetworks()
```

##### `resetMembers` <a name="resetMembers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetMembers"></a>

```java
public void resetMembers()
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetNegate"></a>

```java
public void resetNegate()
```

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetRegions"></a>

```java
public void resetRegions()
```

##### `resetRequiredAccessLevels` <a name="resetRequiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetRequiredAccessLevels"></a>

```java
public void resetRequiredAccessLevels()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcNetworkSources` <a name="resetVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.resetVpcNetworkSources"></a>

```java
public void resetVpcNetworkSources()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerAccessLevelCondition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelCondition;

GoogleAccessContextManagerAccessLevelCondition.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelCondition;

GoogleAccessContextManagerAccessLevelCondition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelCondition;

GoogleAccessContextManagerAccessLevelCondition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelCondition;

GoogleAccessContextManagerAccessLevelCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleAccessContextManagerAccessLevelCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleAccessContextManagerAccessLevelCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleAccessContextManagerAccessLevelCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleAccessContextManagerAccessLevelCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerAccessLevelCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.accessPolicyId">accessPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.devicePolicy">devicePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference">GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.vpcNetworkSources">vpcNetworkSources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.devicePolicyInput">devicePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.ipSubnetworksInput">ipSubnetworksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.negateInput">negateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.requiredAccessLevelsInput">requiredAccessLevelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.vpcNetworkSourcesInput">vpcNetworkSourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.ipSubnetworks">ipSubnetworks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.negate">negate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.requiredAccessLevels">requiredAccessLevels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.accessPolicyId"></a>

```java
public java.lang.String getAccessPolicyId();
```

- *Type:* java.lang.String

---

##### `devicePolicy`<sup>Required</sup> <a name="devicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.devicePolicy"></a>

```java
public GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference getDevicePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.timeouts"></a>

```java
public GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference">GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference</a>

---

##### `vpcNetworkSources`<sup>Required</sup> <a name="vpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.vpcNetworkSources"></a>

```java
public GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList getVpcNetworkSources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `devicePolicyInput`<sup>Optional</sup> <a name="devicePolicyInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.devicePolicyInput"></a>

```java
public GoogleAccessContextManagerAccessLevelConditionDevicePolicy getDevicePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipSubnetworksInput`<sup>Optional</sup> <a name="ipSubnetworksInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.ipSubnetworksInput"></a>

```java
public java.util.List<java.lang.String> getIpSubnetworksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.negateInput"></a>

```java
public java.lang.Object getNegateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requiredAccessLevelsInput`<sup>Optional</sup> <a name="requiredAccessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.requiredAccessLevelsInput"></a>

```java
public java.util.List<java.lang.String> getRequiredAccessLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a>

---

##### `vpcNetworkSourcesInput`<sup>Optional</sup> <a name="vpcNetworkSourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.vpcNetworkSourcesInput"></a>

```java
public java.lang.Object getVpcNetworkSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>>

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipSubnetworks`<sup>Required</sup> <a name="ipSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.ipSubnetworks"></a>

```java
public java.util.List<java.lang.String> getIpSubnetworks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.negate"></a>

```java
public java.lang.Object getNegate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requiredAccessLevels`<sup>Required</sup> <a name="requiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.requiredAccessLevels"></a>

```java
public java.util.List<java.lang.String> getRequiredAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelCondition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerAccessLevelConditionConfig <a name="GoogleAccessContextManagerAccessLevelConditionConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelConditionConfig;

GoogleAccessContextManagerAccessLevelConditionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accessLevel(java.lang.String)
//  .devicePolicy(GoogleAccessContextManagerAccessLevelConditionDevicePolicy)
//  .id(java.lang.String)
//  .ipSubnetworks(java.util.List<java.lang.String>)
//  .members(java.util.List<java.lang.String>)
//  .negate(java.lang.Boolean)
//  .negate(IResolvable)
//  .regions(java.util.List<java.lang.String>)
//  .requiredAccessLevels(java.util.List<java.lang.String>)
//  .timeouts(GoogleAccessContextManagerAccessLevelConditionTimeouts)
//  .vpcNetworkSources(IResolvable)
//  .vpcNetworkSources(java.util.List<GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | The name of the Access Level to add this condition to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.devicePolicy">devicePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#id GoogleAccessContextManagerAccessLevelCondition#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.ipSubnetworks">ipSubnetworks</a></code> | <code>java.util.List<java.lang.String></code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.negate">negate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.requiredAccessLevels">requiredAccessLevels</a></code> | <code>java.util.List<java.lang.String></code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.vpcNetworkSources">vpcNetworkSources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>></code> | vpc_network_sources block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

The name of the Access Level to add this condition to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#access_level GoogleAccessContextManagerAccessLevelCondition#access_level}

---

##### `devicePolicy`<sup>Optional</sup> <a name="devicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.devicePolicy"></a>

```java
public GoogleAccessContextManagerAccessLevelConditionDevicePolicy getDevicePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#device_policy GoogleAccessContextManagerAccessLevelCondition#device_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#id GoogleAccessContextManagerAccessLevelCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipSubnetworks`<sup>Optional</sup> <a name="ipSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.ipSubnetworks"></a>

```java
public java.util.List<java.lang.String> getIpSubnetworks();
```

- *Type:* java.util.List<java.lang.String>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#ip_subnetworks GoogleAccessContextManagerAccessLevelCondition#ip_subnetworks}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#members GoogleAccessContextManagerAccessLevelCondition#members}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.negate"></a>

```java
public java.lang.Object getNegate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#negate GoogleAccessContextManagerAccessLevelCondition#negate}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#regions GoogleAccessContextManagerAccessLevelCondition#regions}

---

##### `requiredAccessLevels`<sup>Optional</sup> <a name="requiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.requiredAccessLevels"></a>

```java
public java.util.List<java.lang.String> getRequiredAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#required_access_levels GoogleAccessContextManagerAccessLevelCondition#required_access_levels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.timeouts"></a>

```java
public GoogleAccessContextManagerAccessLevelConditionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#timeouts GoogleAccessContextManagerAccessLevelCondition#timeouts}

---

##### `vpcNetworkSources`<sup>Optional</sup> <a name="vpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionConfig.property.vpcNetworkSources"></a>

```java
public java.lang.Object getVpcNetworkSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>>

vpc_network_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#vpc_network_sources GoogleAccessContextManagerAccessLevelCondition#vpc_network_sources}

---

### GoogleAccessContextManagerAccessLevelConditionDevicePolicy <a name="GoogleAccessContextManagerAccessLevelConditionDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy;

GoogleAccessContextManagerAccessLevelConditionDevicePolicy.builder()
//  .allowedDeviceManagementLevels(java.util.List<java.lang.String>)
//  .allowedEncryptionStatuses(java.util.List<java.lang.String>)
//  .osConstraints(IResolvable)
//  .osConstraints(java.util.List<GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints>)
//  .requireAdminApproval(java.lang.Boolean)
//  .requireAdminApproval(IResolvable)
//  .requireCorpOwned(java.lang.Boolean)
//  .requireCorpOwned(IResolvable)
//  .requireScreenLock(java.lang.Boolean)
//  .requireScreenLock(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.allowedDeviceManagementLevels">allowedDeviceManagementLevels</a></code> | <code>java.util.List<java.lang.String></code> | A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.allowedEncryptionStatuses">allowedEncryptionStatuses</a></code> | <code>java.util.List<java.lang.String></code> | A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.osConstraints">osConstraints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>></code> | os_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.requireAdminApproval">requireAdminApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the device needs to be approved by the customer admin. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.requireCorpOwned">requireCorpOwned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the device needs to be corp owned. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.requireScreenLock">requireScreenLock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false. |

---

##### `allowedDeviceManagementLevels`<sup>Optional</sup> <a name="allowedDeviceManagementLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.allowedDeviceManagementLevels"></a>

```java
public java.util.List<java.lang.String> getAllowedDeviceManagementLevels();
```

- *Type:* java.util.List<java.lang.String>

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#allowed_device_management_levels GoogleAccessContextManagerAccessLevelCondition#allowed_device_management_levels}

---

##### `allowedEncryptionStatuses`<sup>Optional</sup> <a name="allowedEncryptionStatuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.allowedEncryptionStatuses"></a>

```java
public java.util.List<java.lang.String> getAllowedEncryptionStatuses();
```

- *Type:* java.util.List<java.lang.String>

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#allowed_encryption_statuses GoogleAccessContextManagerAccessLevelCondition#allowed_encryption_statuses}

---

##### `osConstraints`<sup>Optional</sup> <a name="osConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.osConstraints"></a>

```java
public java.lang.Object getOsConstraints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>>

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#os_constraints GoogleAccessContextManagerAccessLevelCondition#os_constraints}

---

##### `requireAdminApproval`<sup>Optional</sup> <a name="requireAdminApproval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.requireAdminApproval"></a>

```java
public java.lang.Object getRequireAdminApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#require_admin_approval GoogleAccessContextManagerAccessLevelCondition#require_admin_approval}

---

##### `requireCorpOwned`<sup>Optional</sup> <a name="requireCorpOwned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.requireCorpOwned"></a>

```java
public java.lang.Object getRequireCorpOwned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#require_corp_owned GoogleAccessContextManagerAccessLevelCondition#require_corp_owned}

---

##### `requireScreenLock`<sup>Optional</sup> <a name="requireScreenLock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy.property.requireScreenLock"></a>

```java
public java.lang.Object getRequireScreenLock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#require_screen_lock GoogleAccessContextManagerAccessLevelCondition#require_screen_lock}

---

### GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints <a name="GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints;

GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.builder()
    .osType(java.lang.String)
//  .minimumVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.osType">osType</a></code> | <code>java.lang.String</code> | The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.minimumVersion">minimumVersion</a></code> | <code>java.lang.String</code> | The minimum allowed OS version. |

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#os_type GoogleAccessContextManagerAccessLevelCondition#os_type}

---

##### `minimumVersion`<sup>Optional</sup> <a name="minimumVersion" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.minimumVersion"></a>

```java
public java.lang.String getMinimumVersion();
```

- *Type:* java.lang.String

The minimum allowed OS version.

If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#minimum_version GoogleAccessContextManagerAccessLevelCondition#minimum_version}

---

### GoogleAccessContextManagerAccessLevelConditionTimeouts <a name="GoogleAccessContextManagerAccessLevelConditionTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelConditionTimeouts;

GoogleAccessContextManagerAccessLevelConditionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#create GoogleAccessContextManagerAccessLevelCondition#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#delete GoogleAccessContextManagerAccessLevelCondition#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#create GoogleAccessContextManagerAccessLevelCondition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#delete GoogleAccessContextManagerAccessLevelCondition#delete}.

---

### GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources <a name="GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources;

GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources.builder()
//  .vpcSubnetwork(GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources.property.vpcSubnetwork">vpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a></code> | vpc_subnetwork block. |

---

##### `vpcSubnetwork`<sup>Optional</sup> <a name="vpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources.property.vpcSubnetwork"></a>

```java
public GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork getVpcSubnetwork();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a>

vpc_subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#vpc_subnetwork GoogleAccessContextManagerAccessLevelCondition#vpc_subnetwork}

---

### GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork <a name="GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork;

GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.builder()
    .network(java.lang.String)
//  .vpcIpSubnetworks(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.property.network">network</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks">vpcIpSubnetworks</a></code> | <code>java.util.List<java.lang.String></code> | CIDR block IP subnetwork specification. Must be IPv4. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Required.

Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#network GoogleAccessContextManagerAccessLevelCondition#network}

---

##### `vpcIpSubnetworks`<sup>Optional</sup> <a name="vpcIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks"></a>

```java
public java.util.List<java.lang.String> getVpcIpSubnetworks();
```

- *Type:* java.util.List<java.lang.String>

CIDR block IP subnetwork specification. Must be IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_access_context_manager_access_level_condition#vpc_ip_subnetworks GoogleAccessContextManagerAccessLevelCondition#vpc_ip_subnetworks}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList <a name="GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList;

new GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.get"></a>

```java
public GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>>

---


### GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference <a name="GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference;

new GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resetMinimumVersion">resetMinimumVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumVersion` <a name="resetMinimumVersion" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resetMinimumVersion"></a>

```java
public void resetMinimumVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput">minimumVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersion">minimumVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minimumVersionInput`<sup>Optional</sup> <a name="minimumVersionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput"></a>

```java
public java.lang.String getMinimumVersionInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `minimumVersion`<sup>Required</sup> <a name="minimumVersion" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersion"></a>

```java
public java.lang.String getMinimumVersion();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>

---


### GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference <a name="GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference;

new GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.putOsConstraints">putOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedDeviceManagementLevels">resetAllowedDeviceManagementLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedEncryptionStatuses">resetAllowedEncryptionStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetOsConstraints">resetOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireAdminApproval">resetRequireAdminApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireCorpOwned">resetRequireCorpOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireScreenLock">resetRequireScreenLock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOsConstraints` <a name="putOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.putOsConstraints"></a>

```java
public void putOsConstraints(IResolvable OR java.util.List<GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.putOsConstraints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>>

---

##### `resetAllowedDeviceManagementLevels` <a name="resetAllowedDeviceManagementLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedDeviceManagementLevels"></a>

```java
public void resetAllowedDeviceManagementLevels()
```

##### `resetAllowedEncryptionStatuses` <a name="resetAllowedEncryptionStatuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedEncryptionStatuses"></a>

```java
public void resetAllowedEncryptionStatuses()
```

##### `resetOsConstraints` <a name="resetOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetOsConstraints"></a>

```java
public void resetOsConstraints()
```

##### `resetRequireAdminApproval` <a name="resetRequireAdminApproval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireAdminApproval"></a>

```java
public void resetRequireAdminApproval()
```

##### `resetRequireCorpOwned` <a name="resetRequireCorpOwned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireCorpOwned"></a>

```java
public void resetRequireCorpOwned()
```

##### `resetRequireScreenLock` <a name="resetRequireScreenLock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireScreenLock"></a>

```java
public void resetRequireScreenLock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraints">osConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput">allowedDeviceManagementLevelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatusesInput">allowedEncryptionStatusesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraintsInput">osConstraintsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApprovalInput">requireAdminApprovalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwnedInput">requireCorpOwnedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLockInput">requireScreenLockInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevels">allowedDeviceManagementLevels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatuses">allowedEncryptionStatuses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApproval">requireAdminApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwned">requireCorpOwned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLock">requireScreenLock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `osConstraints`<sup>Required</sup> <a name="osConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraints"></a>

```java
public GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList getOsConstraints();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList</a>

---

##### `allowedDeviceManagementLevelsInput`<sup>Optional</sup> <a name="allowedDeviceManagementLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedDeviceManagementLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedEncryptionStatusesInput`<sup>Optional</sup> <a name="allowedEncryptionStatusesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatusesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedEncryptionStatusesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `osConstraintsInput`<sup>Optional</sup> <a name="osConstraintsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraintsInput"></a>

```java
public java.lang.Object getOsConstraintsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>>

---

##### `requireAdminApprovalInput`<sup>Optional</sup> <a name="requireAdminApprovalInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApprovalInput"></a>

```java
public java.lang.Object getRequireAdminApprovalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireCorpOwnedInput`<sup>Optional</sup> <a name="requireCorpOwnedInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwnedInput"></a>

```java
public java.lang.Object getRequireCorpOwnedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireScreenLockInput`<sup>Optional</sup> <a name="requireScreenLockInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLockInput"></a>

```java
public java.lang.Object getRequireScreenLockInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedDeviceManagementLevels`<sup>Required</sup> <a name="allowedDeviceManagementLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevels"></a>

```java
public java.util.List<java.lang.String> getAllowedDeviceManagementLevels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedEncryptionStatuses`<sup>Required</sup> <a name="allowedEncryptionStatuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatuses"></a>

```java
public java.util.List<java.lang.String> getAllowedEncryptionStatuses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireAdminApproval`<sup>Required</sup> <a name="requireAdminApproval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApproval"></a>

```java
public java.lang.Object getRequireAdminApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireCorpOwned`<sup>Required</sup> <a name="requireCorpOwned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwned"></a>

```java
public java.lang.Object getRequireCorpOwned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireScreenLock`<sup>Required</sup> <a name="requireScreenLock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLock"></a>

```java
public java.lang.Object getRequireScreenLock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerAccessLevelConditionDevicePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionDevicePolicy">GoogleAccessContextManagerAccessLevelConditionDevicePolicy</a>

---


### GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference <a name="GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference;

new GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionTimeouts">GoogleAccessContextManagerAccessLevelConditionTimeouts</a>

---


### GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList <a name="GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList;

new GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.get"></a>

```java
public GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>>

---


### GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference <a name="GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference;

new GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.putVpcSubnetwork">putVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.resetVpcSubnetwork">resetVpcSubnetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcSubnetwork` <a name="putVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.putVpcSubnetwork"></a>

```java
public void putVpcSubnetwork(GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.putVpcSubnetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a>

---

##### `resetVpcSubnetwork` <a name="resetVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.resetVpcSubnetwork"></a>

```java
public void resetVpcSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.vpcSubnetwork">vpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput">vpcSubnetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcSubnetwork`<sup>Required</sup> <a name="vpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.vpcSubnetwork"></a>

```java
public GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference getVpcSubnetwork();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference</a>

---

##### `vpcSubnetworkInput`<sup>Optional</sup> <a name="vpcSubnetworkInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput"></a>

```java
public GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork getVpcSubnetworkInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSources</a>

---


### GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference <a name="GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_access_level_condition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference;

new GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks">resetVpcIpSubnetworks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcIpSubnetworks` <a name="resetVpcIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks"></a>

```java
public void resetVpcIpSubnetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput">vpcIpSubnetworksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks">vpcIpSubnetworks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `vpcIpSubnetworksInput`<sup>Optional</sup> <a name="vpcIpSubnetworksInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput"></a>

```java
public java.util.List<java.lang.String> getVpcIpSubnetworksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `vpcIpSubnetworks`<sup>Required</sup> <a name="vpcIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks"></a>

```java
public java.util.List<java.lang.String> getVpcIpSubnetworks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevelCondition.GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a>

---



