# `googleComputeRegionInstanceGroupManager` Submodule <a name="`googleComputeRegionInstanceGroupManager` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionInstanceGroupManager <a name="GoogleComputeRegionInstanceGroupManager" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager"></a>

Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager google_compute_region_instance_group_manager}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManager(scope Construct, id *string, config GoogleComputeRegionInstanceGroupManagerConfig) GoogleComputeRegionInstanceGroupManager
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig">GoogleComputeRegionInstanceGroupManagerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig">GoogleComputeRegionInstanceGroupManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putAllInstancesConfig">PutAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putAutoHealingPolicies">PutAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putNamedPort">PutNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulDisk">PutStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulExternalIp">PutStatefulExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulInternalIp">PutStatefulInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putVersion">PutVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetAllInstancesConfig">ResetAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetAutoHealingPolicies">ResetAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetDistributionPolicyTargetShape">ResetDistributionPolicyTargetShape</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetDistributionPolicyZones">ResetDistributionPolicyZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetListManagedInstancesResults">ResetListManagedInstancesResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetNamedPort">ResetNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetStatefulDisk">ResetStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetStatefulExternalIp">ResetStatefulExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetStatefulInternalIp">ResetStatefulInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTargetPools">ResetTargetPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTargetSize">ResetTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetWaitForInstances">ResetWaitForInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetWaitForInstancesStatus">ResetWaitForInstancesStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAllInstancesConfig` <a name="PutAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putAllInstancesConfig"></a>

```go
func PutAllInstancesConfig(value GoogleComputeRegionInstanceGroupManagerAllInstancesConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putAllInstancesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a>

---

##### `PutAutoHealingPolicies` <a name="PutAutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putAutoHealingPolicies"></a>

```go
func PutAutoHealingPolicies(value GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putAutoHealingPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

---

##### `PutNamedPort` <a name="PutNamedPort" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putNamedPort"></a>

```go
func PutNamedPort(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putNamedPort.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStatefulDisk` <a name="PutStatefulDisk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulDisk"></a>

```go
func PutStatefulDisk(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulDisk.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStatefulExternalIp` <a name="PutStatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulExternalIp"></a>

```go
func PutStatefulExternalIp(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulExternalIp.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStatefulInternalIp` <a name="PutStatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulInternalIp"></a>

```go
func PutStatefulInternalIp(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulInternalIp.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeRegionInstanceGroupManagerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts">GoogleComputeRegionInstanceGroupManagerTimeouts</a>

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putUpdatePolicy"></a>

```go
func PutUpdatePolicy(value GoogleComputeRegionInstanceGroupManagerUpdatePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy">GoogleComputeRegionInstanceGroupManagerUpdatePolicy</a>

---

##### `PutVersion` <a name="PutVersion" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putVersion"></a>

```go
func PutVersion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putVersion.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllInstancesConfig` <a name="ResetAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetAllInstancesConfig"></a>

```go
func ResetAllInstancesConfig()
```

##### `ResetAutoHealingPolicies` <a name="ResetAutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetAutoHealingPolicies"></a>

```go
func ResetAutoHealingPolicies()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDistributionPolicyTargetShape` <a name="ResetDistributionPolicyTargetShape" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetDistributionPolicyTargetShape"></a>

```go
func ResetDistributionPolicyTargetShape()
```

##### `ResetDistributionPolicyZones` <a name="ResetDistributionPolicyZones" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetDistributionPolicyZones"></a>

```go
func ResetDistributionPolicyZones()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetId"></a>

```go
func ResetId()
```

##### `ResetListManagedInstancesResults` <a name="ResetListManagedInstancesResults" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetListManagedInstancesResults"></a>

```go
func ResetListManagedInstancesResults()
```

##### `ResetNamedPort` <a name="ResetNamedPort" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetNamedPort"></a>

```go
func ResetNamedPort()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStatefulDisk` <a name="ResetStatefulDisk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetStatefulDisk"></a>

```go
func ResetStatefulDisk()
```

##### `ResetStatefulExternalIp` <a name="ResetStatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetStatefulExternalIp"></a>

```go
func ResetStatefulExternalIp()
```

##### `ResetStatefulInternalIp` <a name="ResetStatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetStatefulInternalIp"></a>

```go
func ResetStatefulInternalIp()
```

##### `ResetTargetPools` <a name="ResetTargetPools" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTargetPools"></a>

```go
func ResetTargetPools()
```

##### `ResetTargetSize` <a name="ResetTargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTargetSize"></a>

```go
func ResetTargetSize()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetUpdatePolicy"></a>

```go
func ResetUpdatePolicy()
```

##### `ResetWaitForInstances` <a name="ResetWaitForInstances" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetWaitForInstances"></a>

```go
func ResetWaitForInstances()
```

##### `ResetWaitForInstancesStatus` <a name="ResetWaitForInstancesStatus" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetWaitForInstancesStatus"></a>

```go
func ResetWaitForInstancesStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManager_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManager_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManager_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.allInstancesConfig">AllInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference">GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.autoHealingPolicies">AutoHealingPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference">GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.instanceGroup">InstanceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.namedPort">NamedPort</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList">GoogleComputeRegionInstanceGroupManagerNamedPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulDisk">StatefulDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList">GoogleComputeRegionInstanceGroupManagerStatefulDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulExternalIp">StatefulExternalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList">GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulInternalIp">StatefulInternalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList">GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList">GoogleComputeRegionInstanceGroupManagerStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference">GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference">GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.version">Version</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList">GoogleComputeRegionInstanceGroupManagerVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.allInstancesConfigInput">AllInstancesConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.autoHealingPoliciesInput">AutoHealingPoliciesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.baseInstanceNameInput">BaseInstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyTargetShapeInput">DistributionPolicyTargetShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyZonesInput">DistributionPolicyZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.listManagedInstancesResultsInput">ListManagedInstancesResultsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.namedPortInput">NamedPortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulDiskInput">StatefulDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulExternalIpInput">StatefulExternalIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulInternalIpInput">StatefulInternalIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetPoolsInput">TargetPoolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetSizeInput">TargetSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy">GoogleComputeRegionInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.versionInput">VersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstancesInput">WaitForInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstancesStatusInput">WaitForInstancesStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.baseInstanceName">BaseInstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyTargetShape">DistributionPolicyTargetShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyZones">DistributionPolicyZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.listManagedInstancesResults">ListManagedInstancesResults</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetPools">TargetPools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetSize">TargetSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstances">WaitForInstances</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstancesStatus">WaitForInstancesStatus</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllInstancesConfig`<sup>Required</sup> <a name="AllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.allInstancesConfig"></a>

```go
func AllInstancesConfig() GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference">GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference</a>

---

##### `AutoHealingPolicies`<sup>Required</sup> <a name="AutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.autoHealingPolicies"></a>

```go
func AutoHealingPolicies() GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference">GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `InstanceGroup`<sup>Required</sup> <a name="InstanceGroup" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.instanceGroup"></a>

```go
func InstanceGroup() *string
```

- *Type:* *string

---

##### `NamedPort`<sup>Required</sup> <a name="NamedPort" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.namedPort"></a>

```go
func NamedPort() GoogleComputeRegionInstanceGroupManagerNamedPortList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList">GoogleComputeRegionInstanceGroupManagerNamedPortList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `StatefulDisk`<sup>Required</sup> <a name="StatefulDisk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulDisk"></a>

```go
func StatefulDisk() GoogleComputeRegionInstanceGroupManagerStatefulDiskList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList">GoogleComputeRegionInstanceGroupManagerStatefulDiskList</a>

---

##### `StatefulExternalIp`<sup>Required</sup> <a name="StatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulExternalIp"></a>

```go
func StatefulExternalIp() GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList">GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList</a>

---

##### `StatefulInternalIp`<sup>Required</sup> <a name="StatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulInternalIp"></a>

```go
func StatefulInternalIp() GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList">GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.status"></a>

```go
func Status() GoogleComputeRegionInstanceGroupManagerStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList">GoogleComputeRegionInstanceGroupManagerStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.timeouts"></a>

```go
func Timeouts() GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference">GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference</a>

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.updatePolicy"></a>

```go
func UpdatePolicy() GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference">GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.version"></a>

```go
func Version() GoogleComputeRegionInstanceGroupManagerVersionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList">GoogleComputeRegionInstanceGroupManagerVersionList</a>

---

##### `AllInstancesConfigInput`<sup>Optional</sup> <a name="AllInstancesConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.allInstancesConfigInput"></a>

```go
func AllInstancesConfigInput() GoogleComputeRegionInstanceGroupManagerAllInstancesConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a>

---

##### `AutoHealingPoliciesInput`<sup>Optional</sup> <a name="AutoHealingPoliciesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.autoHealingPoliciesInput"></a>

```go
func AutoHealingPoliciesInput() GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

---

##### `BaseInstanceNameInput`<sup>Optional</sup> <a name="BaseInstanceNameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.baseInstanceNameInput"></a>

```go
func BaseInstanceNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DistributionPolicyTargetShapeInput`<sup>Optional</sup> <a name="DistributionPolicyTargetShapeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyTargetShapeInput"></a>

```go
func DistributionPolicyTargetShapeInput() *string
```

- *Type:* *string

---

##### `DistributionPolicyZonesInput`<sup>Optional</sup> <a name="DistributionPolicyZonesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyZonesInput"></a>

```go
func DistributionPolicyZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListManagedInstancesResultsInput`<sup>Optional</sup> <a name="ListManagedInstancesResultsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.listManagedInstancesResultsInput"></a>

```go
func ListManagedInstancesResultsInput() *string
```

- *Type:* *string

---

##### `NamedPortInput`<sup>Optional</sup> <a name="NamedPortInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.namedPortInput"></a>

```go
func NamedPortInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StatefulDiskInput`<sup>Optional</sup> <a name="StatefulDiskInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulDiskInput"></a>

```go
func StatefulDiskInput() interface{}
```

- *Type:* interface{}

---

##### `StatefulExternalIpInput`<sup>Optional</sup> <a name="StatefulExternalIpInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulExternalIpInput"></a>

```go
func StatefulExternalIpInput() interface{}
```

- *Type:* interface{}

---

##### `StatefulInternalIpInput`<sup>Optional</sup> <a name="StatefulInternalIpInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulInternalIpInput"></a>

```go
func StatefulInternalIpInput() interface{}
```

- *Type:* interface{}

---

##### `TargetPoolsInput`<sup>Optional</sup> <a name="TargetPoolsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetPoolsInput"></a>

```go
func TargetPoolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetSizeInput`<sup>Optional</sup> <a name="TargetSizeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetSizeInput"></a>

```go
func TargetSizeInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.updatePolicyInput"></a>

```go
func UpdatePolicyInput() GoogleComputeRegionInstanceGroupManagerUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy">GoogleComputeRegionInstanceGroupManagerUpdatePolicy</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.versionInput"></a>

```go
func VersionInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForInstancesInput`<sup>Optional</sup> <a name="WaitForInstancesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstancesInput"></a>

```go
func WaitForInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForInstancesStatusInput`<sup>Optional</sup> <a name="WaitForInstancesStatusInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstancesStatusInput"></a>

```go
func WaitForInstancesStatusInput() *string
```

- *Type:* *string

---

##### `BaseInstanceName`<sup>Required</sup> <a name="BaseInstanceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.baseInstanceName"></a>

```go
func BaseInstanceName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DistributionPolicyTargetShape`<sup>Required</sup> <a name="DistributionPolicyTargetShape" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyTargetShape"></a>

```go
func DistributionPolicyTargetShape() *string
```

- *Type:* *string

---

##### `DistributionPolicyZones`<sup>Required</sup> <a name="DistributionPolicyZones" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyZones"></a>

```go
func DistributionPolicyZones() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListManagedInstancesResults`<sup>Required</sup> <a name="ListManagedInstancesResults" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.listManagedInstancesResults"></a>

```go
func ListManagedInstancesResults() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TargetPools`<sup>Required</sup> <a name="TargetPools" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetPools"></a>

```go
func TargetPools() *[]*string
```

- *Type:* *[]*string

---

##### `TargetSize`<sup>Required</sup> <a name="TargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetSize"></a>

```go
func TargetSize() *f64
```

- *Type:* *f64

---

##### `WaitForInstances`<sup>Required</sup> <a name="WaitForInstances" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstances"></a>

```go
func WaitForInstances() interface{}
```

- *Type:* interface{}

---

##### `WaitForInstancesStatus`<sup>Required</sup> <a name="WaitForInstancesStatus" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstancesStatus"></a>

```go
func WaitForInstancesStatus() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionInstanceGroupManagerAllInstancesConfig <a name="GoogleComputeRegionInstanceGroupManagerAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig {
	Labels: *map[string]*string,
	Metadata: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The label key-value pairs that you want to patch onto the instance,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | The metadata key-value pairs that you want to patch onto the instance. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The label key-value pairs that you want to patch onto the instance,.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#labels GoogleComputeRegionInstanceGroupManager#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

The metadata key-value pairs that you want to patch onto the instance.

For more information, see Project and instance metadata,

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#metadata GoogleComputeRegionInstanceGroupManager#metadata}

---

### GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies <a name="GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies {
	HealthCheck: *string,
	InitialDelaySec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies.property.healthCheck">HealthCheck</a></code> | <code>*string</code> | The health check resource that signals autohealing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec">InitialDelaySec</a></code> | <code>*f64</code> | The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. |

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies.property.healthCheck"></a>

```go
HealthCheck *string
```

- *Type:* *string

The health check resource that signals autohealing.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#health_check GoogleComputeRegionInstanceGroupManager#health_check}

---

##### `InitialDelaySec`<sup>Required</sup> <a name="InitialDelaySec" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec"></a>

```go
InitialDelaySec *f64
```

- *Type:* *f64

The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances.

Between 0 and 3600.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#initial_delay_sec GoogleComputeRegionInstanceGroupManager#initial_delay_sec}

---

### GoogleComputeRegionInstanceGroupManagerConfig <a name="GoogleComputeRegionInstanceGroupManagerConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BaseInstanceName: *string,
	Name: *string,
	Version: interface{},
	AllInstancesConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig,
	AutoHealingPolicies: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies,
	Description: *string,
	DistributionPolicyTargetShape: *string,
	DistributionPolicyZones: *[]*string,
	Id: *string,
	ListManagedInstancesResults: *string,
	NamedPort: interface{},
	Project: *string,
	Region: *string,
	StatefulDisk: interface{},
	StatefulExternalIp: interface{},
	StatefulInternalIp: interface{},
	TargetPools: *[]*string,
	TargetSize: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts,
	UpdatePolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy,
	WaitForInstances: interface{},
	WaitForInstancesStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.baseInstanceName">BaseInstanceName</a></code> | <code>*string</code> | The base instance name to use for instances in this group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.name">Name</a></code> | <code>*string</code> | The name of the instance group manager. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.version">Version</a></code> | <code>interface{}</code> | version block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.allInstancesConfig">AllInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a></code> | all_instances_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.autoHealingPolicies">AutoHealingPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a></code> | auto_healing_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.description">Description</a></code> | <code>*string</code> | An optional textual description of the instance group manager. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.distributionPolicyTargetShape">DistributionPolicyTargetShape</a></code> | <code>*string</code> | The shape to which the group converges either proactively or on resize events (depending on the value set in updatePolicy.instanceRedistributionType). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.distributionPolicyZones">DistributionPolicyZones</a></code> | <code>*[]*string</code> | The distribution policy for this managed instance group. You can specify one or more values. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#id GoogleComputeRegionInstanceGroupManager#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.listManagedInstancesResults">ListManagedInstancesResults</a></code> | <code>*string</code> | Pagination behavior of the listManagedInstances API method for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.namedPort">NamedPort</a></code> | <code>interface{}</code> | named_port block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.region">Region</a></code> | <code>*string</code> | The region where the managed instance group resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.statefulDisk">StatefulDisk</a></code> | <code>interface{}</code> | stateful_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.statefulExternalIp">StatefulExternalIp</a></code> | <code>interface{}</code> | stateful_external_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.statefulInternalIp">StatefulInternalIp</a></code> | <code>interface{}</code> | stateful_internal_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.targetPools">TargetPools</a></code> | <code>*[]*string</code> | The full URL of all target pools to which new instances in the group are added. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.targetSize">TargetSize</a></code> | <code>*f64</code> | The target number of running instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts">GoogleComputeRegionInstanceGroupManagerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy">GoogleComputeRegionInstanceGroupManagerUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.waitForInstances">WaitForInstances</a></code> | <code>interface{}</code> | Whether to wait for all instances to be created/updated before returning. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.waitForInstancesStatus">WaitForInstancesStatus</a></code> | <code>*string</code> | When used with wait_for_instances specifies the status to wait for. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BaseInstanceName`<sup>Required</sup> <a name="BaseInstanceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.baseInstanceName"></a>

```go
BaseInstanceName *string
```

- *Type:* *string

The base instance name to use for instances in this group.

The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#base_instance_name GoogleComputeRegionInstanceGroupManager#base_instance_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#name GoogleComputeRegionInstanceGroupManager#name}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.version"></a>

```go
Version interface{}
```

- *Type:* interface{}

version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#version GoogleComputeRegionInstanceGroupManager#version}

---

##### `AllInstancesConfig`<sup>Optional</sup> <a name="AllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.allInstancesConfig"></a>

```go
AllInstancesConfig GoogleComputeRegionInstanceGroupManagerAllInstancesConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a>

all_instances_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#all_instances_config GoogleComputeRegionInstanceGroupManager#all_instances_config}

---

##### `AutoHealingPolicies`<sup>Optional</sup> <a name="AutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.autoHealingPolicies"></a>

```go
AutoHealingPolicies GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

auto_healing_policies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#auto_healing_policies GoogleComputeRegionInstanceGroupManager#auto_healing_policies}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional textual description of the instance group manager.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#description GoogleComputeRegionInstanceGroupManager#description}

---

##### `DistributionPolicyTargetShape`<sup>Optional</sup> <a name="DistributionPolicyTargetShape" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.distributionPolicyTargetShape"></a>

```go
DistributionPolicyTargetShape *string
```

- *Type:* *string

The shape to which the group converges either proactively or on resize events (depending on the value set in updatePolicy.instanceRedistributionType).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#distribution_policy_target_shape GoogleComputeRegionInstanceGroupManager#distribution_policy_target_shape}

---

##### `DistributionPolicyZones`<sup>Optional</sup> <a name="DistributionPolicyZones" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.distributionPolicyZones"></a>

```go
DistributionPolicyZones *[]*string
```

- *Type:* *[]*string

The distribution policy for this managed instance group. You can specify one or more values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#distribution_policy_zones GoogleComputeRegionInstanceGroupManager#distribution_policy_zones}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#id GoogleComputeRegionInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ListManagedInstancesResults`<sup>Optional</sup> <a name="ListManagedInstancesResults" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.listManagedInstancesResults"></a>

```go
ListManagedInstancesResults *string
```

- *Type:* *string

Pagination behavior of the listManagedInstances API method for this managed instance group.

Valid values are: "PAGELESS", "PAGINATED". If PAGELESS (default), Pagination is disabled for the group's listManagedInstances API method. maxResults and pageToken query parameters are ignored and all instances are returned in a single response. If PAGINATED, pagination is enabled, maxResults and pageToken query parameters are respected.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#list_managed_instances_results GoogleComputeRegionInstanceGroupManager#list_managed_instances_results}

---

##### `NamedPort`<sup>Optional</sup> <a name="NamedPort" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.namedPort"></a>

```go
NamedPort interface{}
```

- *Type:* interface{}

named_port block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#named_port GoogleComputeRegionInstanceGroupManager#named_port}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#project GoogleComputeRegionInstanceGroupManager#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region where the managed instance group resides.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#region GoogleComputeRegionInstanceGroupManager#region}

---

##### `StatefulDisk`<sup>Optional</sup> <a name="StatefulDisk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.statefulDisk"></a>

```go
StatefulDisk interface{}
```

- *Type:* interface{}

stateful_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#stateful_disk GoogleComputeRegionInstanceGroupManager#stateful_disk}

---

##### `StatefulExternalIp`<sup>Optional</sup> <a name="StatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.statefulExternalIp"></a>

```go
StatefulExternalIp interface{}
```

- *Type:* interface{}

stateful_external_ip block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#stateful_external_ip GoogleComputeRegionInstanceGroupManager#stateful_external_ip}

---

##### `StatefulInternalIp`<sup>Optional</sup> <a name="StatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.statefulInternalIp"></a>

```go
StatefulInternalIp interface{}
```

- *Type:* interface{}

stateful_internal_ip block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#stateful_internal_ip GoogleComputeRegionInstanceGroupManager#stateful_internal_ip}

---

##### `TargetPools`<sup>Optional</sup> <a name="TargetPools" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.targetPools"></a>

```go
TargetPools *[]*string
```

- *Type:* *[]*string

The full URL of all target pools to which new instances in the group are added.

Updating the target pools attribute does not affect existing instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#target_pools GoogleComputeRegionInstanceGroupManager#target_pools}

---

##### `TargetSize`<sup>Optional</sup> <a name="TargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.targetSize"></a>

```go
TargetSize *f64
```

- *Type:* *f64

The target number of running instances for this managed instance group.

This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#target_size GoogleComputeRegionInstanceGroupManager#target_size}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeRegionInstanceGroupManagerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts">GoogleComputeRegionInstanceGroupManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#timeouts GoogleComputeRegionInstanceGroupManager#timeouts}

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.updatePolicy"></a>

```go
UpdatePolicy GoogleComputeRegionInstanceGroupManagerUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy">GoogleComputeRegionInstanceGroupManagerUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#update_policy GoogleComputeRegionInstanceGroupManager#update_policy}

---

##### `WaitForInstances`<sup>Optional</sup> <a name="WaitForInstances" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.waitForInstances"></a>

```go
WaitForInstances interface{}
```

- *Type:* interface{}

Whether to wait for all instances to be created/updated before returning.

Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#wait_for_instances GoogleComputeRegionInstanceGroupManager#wait_for_instances}

---

##### `WaitForInstancesStatus`<sup>Optional</sup> <a name="WaitForInstancesStatus" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.waitForInstancesStatus"></a>

```go
WaitForInstancesStatus *string
```

- *Type:* *string

When used with wait_for_instances specifies the status to wait for.

When STABLE is specified this resource will wait until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached and any per instance configs to be effective and all instances configs to be effective as well as all instances to be stable before returning.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#wait_for_instances_status GoogleComputeRegionInstanceGroupManager#wait_for_instances_status}

---

### GoogleComputeRegionInstanceGroupManagerNamedPort <a name="GoogleComputeRegionInstanceGroupManagerNamedPort" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPort.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerNamedPort {
	Name: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPort.property.name">Name</a></code> | <code>*string</code> | The name of the port. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPort.property.port">Port</a></code> | <code>*f64</code> | The port number. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPort.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the port.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#name GoogleComputeRegionInstanceGroupManager#name}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPort.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#port GoogleComputeRegionInstanceGroupManager#port}

---

### GoogleComputeRegionInstanceGroupManagerStatefulDisk <a name="GoogleComputeRegionInstanceGroupManagerStatefulDisk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerStatefulDisk {
	DeviceName: *string,
	DeleteRule: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDisk.property.deviceName">DeviceName</a></code> | <code>*string</code> | The device name of the disk to be attached. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDisk.property.deleteRule">DeleteRule</a></code> | <code>*string</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDisk.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

The device name of the disk to be attached.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#device_name GoogleComputeRegionInstanceGroupManager#device_name}

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDisk.property.deleteRule"></a>

```go
DeleteRule *string
```

- *Type:* *string

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the disk when the VM is deleted, but do not delete the disk. ON_PERMANENT_INSTANCE_DELETION will delete the stateful disk when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#delete_rule GoogleComputeRegionInstanceGroupManager#delete_rule}

---

### GoogleComputeRegionInstanceGroupManagerStatefulExternalIp <a name="GoogleComputeRegionInstanceGroupManagerStatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIp {
	DeleteRule: *string,
	InterfaceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIp.property.deleteRule">DeleteRule</a></code> | <code>*string</code> | A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIp.property.interfaceName">InterfaceName</a></code> | <code>*string</code> | The network interface name. |

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIp.property.deleteRule"></a>

```go
DeleteRule *string
```

- *Type:* *string

A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the IP when the VM is deleted, but do not delete the address resource. ON_PERMANENT_INSTANCE_DELETION will delete the stateful address when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#delete_rule GoogleComputeRegionInstanceGroupManager#delete_rule}

---

##### `InterfaceName`<sup>Optional</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIp.property.interfaceName"></a>

```go
InterfaceName *string
```

- *Type:* *string

The network interface name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#interface_name GoogleComputeRegionInstanceGroupManager#interface_name}

---

### GoogleComputeRegionInstanceGroupManagerStatefulInternalIp <a name="GoogleComputeRegionInstanceGroupManagerStatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIp {
	DeleteRule: *string,
	InterfaceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIp.property.deleteRule">DeleteRule</a></code> | <code>*string</code> | A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIp.property.interfaceName">InterfaceName</a></code> | <code>*string</code> | The network interface name. |

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIp.property.deleteRule"></a>

```go
DeleteRule *string
```

- *Type:* *string

A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the IP when the VM is deleted, but do not delete the address resource. ON_PERMANENT_INSTANCE_DELETION will delete the stateful address when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#delete_rule GoogleComputeRegionInstanceGroupManager#delete_rule}

---

##### `InterfaceName`<sup>Optional</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIp.property.interfaceName"></a>

```go
InterfaceName *string
```

- *Type:* *string

The network interface name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#interface_name GoogleComputeRegionInstanceGroupManager#interface_name}

---

### GoogleComputeRegionInstanceGroupManagerStatus <a name="GoogleComputeRegionInstanceGroupManagerStatus" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerStatus {

}
```


### GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig <a name="GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig {

}
```


### GoogleComputeRegionInstanceGroupManagerStatusStateful <a name="GoogleComputeRegionInstanceGroupManagerStatusStateful" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStateful"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStateful.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerStatusStateful {

}
```


### GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs <a name="GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs {

}
```


### GoogleComputeRegionInstanceGroupManagerStatusVersionTarget <a name="GoogleComputeRegionInstanceGroupManagerStatusVersionTarget" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerStatusVersionTarget {

}
```


### GoogleComputeRegionInstanceGroupManagerTimeouts <a name="GoogleComputeRegionInstanceGroupManagerTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#create GoogleComputeRegionInstanceGroupManager#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#delete GoogleComputeRegionInstanceGroupManager#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#update GoogleComputeRegionInstanceGroupManager#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#create GoogleComputeRegionInstanceGroupManager#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#delete GoogleComputeRegionInstanceGroupManager#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#update GoogleComputeRegionInstanceGroupManager#update}.

---

### GoogleComputeRegionInstanceGroupManagerUpdatePolicy <a name="GoogleComputeRegionInstanceGroupManagerUpdatePolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy {
	MinimalAction: *string,
	Type: *string,
	InstanceRedistributionType: *string,
	MaxSurgeFixed: *f64,
	MaxSurgePercent: *f64,
	MaxUnavailableFixed: *f64,
	MaxUnavailablePercent: *f64,
	MinReadySec: *f64,
	MostDisruptiveAllowedAction: *string,
	ReplacementMethod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.minimalAction">MinimalAction</a></code> | <code>*string</code> | Minimal action to be taken on an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.type">Type</a></code> | <code>*string</code> | The type of update process. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.instanceRedistributionType">InstanceRedistributionType</a></code> | <code>*string</code> | The instance redistribution policy for regional managed instance groups. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed">MaxSurgeFixed</a></code> | <code>*f64</code> | The maximum number of instances that can be created above the specified targetSize during the update process. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgePercent">MaxSurgePercent</a></code> | <code>*f64</code> | The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed">MaxUnavailableFixed</a></code> | <code>*f64</code> | The maximum number of instances that can be unavailable during the update process. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent">MaxUnavailablePercent</a></code> | <code>*f64</code> | The maximum number of instances(calculated as percentage) that can be unavailable during the update process. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.minReadySec">MinReadySec</a></code> | <code>*f64</code> | Minimum number of seconds to wait for after a newly created instance becomes available. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>*string</code> | Most disruptive action that is allowed to be taken on an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.replacementMethod">ReplacementMethod</a></code> | <code>*string</code> | The instance replacement method for regional managed instance groups. |

---

##### `MinimalAction`<sup>Required</sup> <a name="MinimalAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.minimalAction"></a>

```go
MinimalAction *string
```

- *Type:* *string

Minimal action to be taken on an instance.

You can specify either REFRESH to update without stopping instances, RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a REFRESH, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#minimal_action GoogleComputeRegionInstanceGroupManager#minimal_action}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of update process.

You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#type GoogleComputeRegionInstanceGroupManager#type}

---

##### `InstanceRedistributionType`<sup>Optional</sup> <a name="InstanceRedistributionType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.instanceRedistributionType"></a>

```go
InstanceRedistributionType *string
```

- *Type:* *string

The instance redistribution policy for regional managed instance groups.

Valid values are: "PROACTIVE", "NONE". If PROACTIVE (default), the group attempts to maintain an even distribution of VM instances across zones in the region. If NONE, proactive redistribution is disabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#instance_redistribution_type GoogleComputeRegionInstanceGroupManager#instance_redistribution_type}

---

##### `MaxSurgeFixed`<sup>Optional</sup> <a name="MaxSurgeFixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed"></a>

```go
MaxSurgeFixed *f64
```

- *Type:* *f64

The maximum number of instances that can be created above the specified targetSize during the update process.

Conflicts with max_surge_percent. It has to be either 0 or at least equal to the number of zones. If fixed values are used, at least one of max_unavailable_fixed or max_surge_fixed must be greater than 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#max_surge_fixed GoogleComputeRegionInstanceGroupManager#max_surge_fixed}

---

##### `MaxSurgePercent`<sup>Optional</sup> <a name="MaxSurgePercent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgePercent"></a>

```go
MaxSurgePercent *f64
```

- *Type:* *f64

The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process.

Conflicts with max_surge_fixed. Percent value is only allowed for regional managed instance groups with size at least 10.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#max_surge_percent GoogleComputeRegionInstanceGroupManager#max_surge_percent}

---

##### `MaxUnavailableFixed`<sup>Optional</sup> <a name="MaxUnavailableFixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed"></a>

```go
MaxUnavailableFixed *f64
```

- *Type:* *f64

The maximum number of instances that can be unavailable during the update process.

Conflicts with max_unavailable_percent. It has to be either 0 or at least equal to the number of zones. If fixed values are used, at least one of max_unavailable_fixed or max_surge_fixed must be greater than 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#max_unavailable_fixed GoogleComputeRegionInstanceGroupManager#max_unavailable_fixed}

---

##### `MaxUnavailablePercent`<sup>Optional</sup> <a name="MaxUnavailablePercent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent"></a>

```go
MaxUnavailablePercent *f64
```

- *Type:* *f64

The maximum number of instances(calculated as percentage) that can be unavailable during the update process.

Conflicts with max_unavailable_fixed. Percent value is only allowed for regional managed instance groups with size at least 10.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#max_unavailable_percent GoogleComputeRegionInstanceGroupManager#max_unavailable_percent}

---

##### `MinReadySec`<sup>Optional</sup> <a name="MinReadySec" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.minReadySec"></a>

```go
MinReadySec *f64
```

- *Type:* *f64

Minimum number of seconds to wait for after a newly created instance becomes available.

This value must be from range [0, 3600].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#min_ready_sec GoogleComputeRegionInstanceGroupManager#min_ready_sec}

---

##### `MostDisruptiveAllowedAction`<sup>Optional</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction"></a>

```go
MostDisruptiveAllowedAction *string
```

- *Type:* *string

Most disruptive action that is allowed to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#most_disruptive_allowed_action GoogleComputeRegionInstanceGroupManager#most_disruptive_allowed_action}

---

##### `ReplacementMethod`<sup>Optional</sup> <a name="ReplacementMethod" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.replacementMethod"></a>

```go
ReplacementMethod *string
```

- *Type:* *string

The instance replacement method for regional managed instance groups.

Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#replacement_method GoogleComputeRegionInstanceGroupManager#replacement_method}

---

### GoogleComputeRegionInstanceGroupManagerVersion <a name="GoogleComputeRegionInstanceGroupManagerVersion" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerVersion {
	InstanceTemplate: *string,
	Name: *string,
	TargetSize: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion.property.instanceTemplate">InstanceTemplate</a></code> | <code>*string</code> | The full URL to an instance template from which all new instances of this version will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion.property.name">Name</a></code> | <code>*string</code> | Version name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion.property.targetSize">TargetSize</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize">GoogleComputeRegionInstanceGroupManagerVersionTargetSize</a></code> | target_size block. |

---

##### `InstanceTemplate`<sup>Required</sup> <a name="InstanceTemplate" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion.property.instanceTemplate"></a>

```go
InstanceTemplate *string
```

- *Type:* *string

The full URL to an instance template from which all new instances of this version will be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#instance_template GoogleComputeRegionInstanceGroupManager#instance_template}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion.property.name"></a>

```go
Name *string
```

- *Type:* *string

Version name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#name GoogleComputeRegionInstanceGroupManager#name}

---

##### `TargetSize`<sup>Optional</sup> <a name="TargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion.property.targetSize"></a>

```go
TargetSize GoogleComputeRegionInstanceGroupManagerVersionTargetSize
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize">GoogleComputeRegionInstanceGroupManagerVersionTargetSize</a>

target_size block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#target_size GoogleComputeRegionInstanceGroupManager#target_size}

---

### GoogleComputeRegionInstanceGroupManagerVersionTargetSize <a name="GoogleComputeRegionInstanceGroupManagerVersionTargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

&googlecomputeregioninstancegroupmanager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize {
	Fixed: *f64,
	Percent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize.property.fixed">Fixed</a></code> | <code>*f64</code> | The number of instances which are managed for this version. Conflicts with percent. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize.property.percent">Percent</a></code> | <code>*f64</code> | The number of instances (calculated as percentage) which are managed for this version. |

---

##### `Fixed`<sup>Optional</sup> <a name="Fixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize.property.fixed"></a>

```go
Fixed *f64
```

- *Type:* *f64

The number of instances which are managed for this version. Conflicts with percent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#fixed GoogleComputeRegionInstanceGroupManager#fixed}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize.property.percent"></a>

```go
Percent *f64
```

- *Type:* *f64

The number of instances (calculated as percentage) which are managed for this version.

Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#percent GoogleComputeRegionInstanceGroupManager#percent}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference <a name="GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resetMetadata"></a>

```go
func ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionInstanceGroupManagerAllInstancesConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a>

---


### GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference <a name="GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput">HealthCheckInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput">InitialDelaySecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck">HealthCheck</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec">InitialDelaySec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput"></a>

```go
func HealthCheckInput() *string
```

- *Type:* *string

---

##### `InitialDelaySecInput`<sup>Optional</sup> <a name="InitialDelaySecInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput"></a>

```go
func InitialDelaySecInput() *f64
```

- *Type:* *f64

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck"></a>

```go
func HealthCheck() *string
```

- *Type:* *string

---

##### `InitialDelaySec`<sup>Required</sup> <a name="InitialDelaySec" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec"></a>

```go
func InitialDelaySec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

---


### GoogleComputeRegionInstanceGroupManagerNamedPortList <a name="GoogleComputeRegionInstanceGroupManagerNamedPortList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerNamedPortList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionInstanceGroupManagerNamedPortList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference <a name="GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionInstanceGroupManagerStatefulDiskList <a name="GoogleComputeRegionInstanceGroupManagerStatefulDiskList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatefulDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionInstanceGroupManagerStatefulDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule"></a>

```go
func ResetDeleteRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule">DeleteRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput"></a>

```go
func DeleteRuleInput() *string
```

- *Type:* *string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule"></a>

```go
func DeleteRule() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList <a name="GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resetInterfaceName">ResetInterfaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resetDeleteRule"></a>

```go
func ResetDeleteRule()
```

##### `ResetInterfaceName` <a name="ResetInterfaceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resetInterfaceName"></a>

```go
func ResetInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceNameInput">InterfaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule">DeleteRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName">InterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRuleInput"></a>

```go
func DeleteRuleInput() *string
```

- *Type:* *string

---

##### `InterfaceNameInput`<sup>Optional</sup> <a name="InterfaceNameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceNameInput"></a>

```go
func InterfaceNameInput() *string
```

- *Type:* *string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule"></a>

```go
func DeleteRule() *string
```

- *Type:* *string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName"></a>

```go
func InterfaceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList <a name="GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resetInterfaceName">ResetInterfaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resetDeleteRule"></a>

```go
func ResetDeleteRule()
```

##### `ResetInterfaceName` <a name="ResetInterfaceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resetInterfaceName"></a>

```go
func ResetInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceNameInput">InterfaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule">DeleteRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName">InterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRuleInput"></a>

```go
func DeleteRuleInput() *string
```

- *Type:* *string

---

##### `InterfaceNameInput`<sup>Optional</sup> <a name="InterfaceNameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceNameInput"></a>

```go
func InterfaceNameInput() *string
```

- *Type:* *string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule"></a>

```go
func DeleteRule() *string
```

- *Type:* *string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName"></a>

```go
func InterfaceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList <a name="GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective">Effective</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Effective`<sup>Required</sup> <a name="Effective" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective"></a>

```go
func Effective() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig</a>

---


### GoogleComputeRegionInstanceGroupManagerStatusList <a name="GoogleComputeRegionInstanceGroupManagerStatusList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionInstanceGroupManagerStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionInstanceGroupManagerStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeRegionInstanceGroupManagerStatusOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionInstanceGroupManagerStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.allInstancesConfig">AllInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList">GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.isStable">IsStable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.stateful">Stateful</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList">GoogleComputeRegionInstanceGroupManagerStatusStatefulList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.versionTarget">VersionTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList">GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatus">GoogleComputeRegionInstanceGroupManagerStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllInstancesConfig`<sup>Required</sup> <a name="AllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.allInstancesConfig"></a>

```go
func AllInstancesConfig() GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList">GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList</a>

---

##### `IsStable`<sup>Required</sup> <a name="IsStable" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.isStable"></a>

```go
func IsStable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Stateful`<sup>Required</sup> <a name="Stateful" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.stateful"></a>

```go
func Stateful() GoogleComputeRegionInstanceGroupManagerStatusStatefulList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList">GoogleComputeRegionInstanceGroupManagerStatusStatefulList</a>

---

##### `VersionTarget`<sup>Required</sup> <a name="VersionTarget" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.versionTarget"></a>

```go
func VersionTarget() GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList">GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionInstanceGroupManagerStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatus">GoogleComputeRegionInstanceGroupManagerStatus</a>

---


### GoogleComputeRegionInstanceGroupManagerStatusStatefulList <a name="GoogleComputeRegionInstanceGroupManagerStatusStatefulList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatusStatefulList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionInstanceGroupManagerStatusStatefulList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig">HasStatefulConfig</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs">PerInstanceConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList">GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStateful">GoogleComputeRegionInstanceGroupManagerStatusStateful</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HasStatefulConfig`<sup>Required</sup> <a name="HasStatefulConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig"></a>

```go
func HasStatefulConfig() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PerInstanceConfigs`<sup>Required</sup> <a name="PerInstanceConfigs" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs"></a>

```go
func PerInstanceConfigs() GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList">GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionInstanceGroupManagerStatusStateful
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStateful">GoogleComputeRegionInstanceGroupManagerStatusStateful</a>

---


### GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList <a name="GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective">AllEffective</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs">GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllEffective`<sup>Required</sup> <a name="AllEffective" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective"></a>

```go
func AllEffective() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs">GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs</a>

---


### GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList <a name="GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached">IsReached</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTarget">GoogleComputeRegionInstanceGroupManagerStatusVersionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsReached`<sup>Required</sup> <a name="IsReached" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached"></a>

```go
func IsReached() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionInstanceGroupManagerStatusVersionTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTarget">GoogleComputeRegionInstanceGroupManagerStatusVersionTarget</a>

---


### GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference <a name="GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference <a name="GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetInstanceRedistributionType">ResetInstanceRedistributionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed">ResetMaxSurgeFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent">ResetMaxSurgePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed">ResetMaxUnavailableFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent">ResetMaxUnavailablePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMinReadySec">ResetMinReadySec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction">ResetMostDisruptiveAllowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod">ResetReplacementMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceRedistributionType` <a name="ResetInstanceRedistributionType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetInstanceRedistributionType"></a>

```go
func ResetInstanceRedistributionType()
```

##### `ResetMaxSurgeFixed` <a name="ResetMaxSurgeFixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed"></a>

```go
func ResetMaxSurgeFixed()
```

##### `ResetMaxSurgePercent` <a name="ResetMaxSurgePercent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent"></a>

```go
func ResetMaxSurgePercent()
```

##### `ResetMaxUnavailableFixed` <a name="ResetMaxUnavailableFixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed"></a>

```go
func ResetMaxUnavailableFixed()
```

##### `ResetMaxUnavailablePercent` <a name="ResetMaxUnavailablePercent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent"></a>

```go
func ResetMaxUnavailablePercent()
```

##### `ResetMinReadySec` <a name="ResetMinReadySec" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMinReadySec"></a>

```go
func ResetMinReadySec()
```

##### `ResetMostDisruptiveAllowedAction` <a name="ResetMostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction"></a>

```go
func ResetMostDisruptiveAllowedAction()
```

##### `ResetReplacementMethod` <a name="ResetReplacementMethod" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod"></a>

```go
func ResetReplacementMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionTypeInput">InstanceRedistributionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput">MaxSurgeFixedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput">MaxSurgePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput">MaxUnavailableFixedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput">MaxUnavailablePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput">MinimalActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySecInput">MinReadySecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput">MostDisruptiveAllowedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput">ReplacementMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionType">InstanceRedistributionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed">MaxSurgeFixed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent">MaxSurgePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed">MaxUnavailableFixed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent">MaxUnavailablePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction">MinimalAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySec">MinReadySec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod">ReplacementMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy">GoogleComputeRegionInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceRedistributionTypeInput`<sup>Optional</sup> <a name="InstanceRedistributionTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionTypeInput"></a>

```go
func InstanceRedistributionTypeInput() *string
```

- *Type:* *string

---

##### `MaxSurgeFixedInput`<sup>Optional</sup> <a name="MaxSurgeFixedInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput"></a>

```go
func MaxSurgeFixedInput() *f64
```

- *Type:* *f64

---

##### `MaxSurgePercentInput`<sup>Optional</sup> <a name="MaxSurgePercentInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput"></a>

```go
func MaxSurgePercentInput() *f64
```

- *Type:* *f64

---

##### `MaxUnavailableFixedInput`<sup>Optional</sup> <a name="MaxUnavailableFixedInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput"></a>

```go
func MaxUnavailableFixedInput() *f64
```

- *Type:* *f64

---

##### `MaxUnavailablePercentInput`<sup>Optional</sup> <a name="MaxUnavailablePercentInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput"></a>

```go
func MaxUnavailablePercentInput() *f64
```

- *Type:* *f64

---

##### `MinimalActionInput`<sup>Optional</sup> <a name="MinimalActionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput"></a>

```go
func MinimalActionInput() *string
```

- *Type:* *string

---

##### `MinReadySecInput`<sup>Optional</sup> <a name="MinReadySecInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySecInput"></a>

```go
func MinReadySecInput() *f64
```

- *Type:* *f64

---

##### `MostDisruptiveAllowedActionInput`<sup>Optional</sup> <a name="MostDisruptiveAllowedActionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput"></a>

```go
func MostDisruptiveAllowedActionInput() *string
```

- *Type:* *string

---

##### `ReplacementMethodInput`<sup>Optional</sup> <a name="ReplacementMethodInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput"></a>

```go
func ReplacementMethodInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `InstanceRedistributionType`<sup>Required</sup> <a name="InstanceRedistributionType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionType"></a>

```go
func InstanceRedistributionType() *string
```

- *Type:* *string

---

##### `MaxSurgeFixed`<sup>Required</sup> <a name="MaxSurgeFixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed"></a>

```go
func MaxSurgeFixed() *f64
```

- *Type:* *f64

---

##### `MaxSurgePercent`<sup>Required</sup> <a name="MaxSurgePercent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent"></a>

```go
func MaxSurgePercent() *f64
```

- *Type:* *f64

---

##### `MaxUnavailableFixed`<sup>Required</sup> <a name="MaxUnavailableFixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed"></a>

```go
func MaxUnavailableFixed() *f64
```

- *Type:* *f64

---

##### `MaxUnavailablePercent`<sup>Required</sup> <a name="MaxUnavailablePercent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent"></a>

```go
func MaxUnavailablePercent() *f64
```

- *Type:* *f64

---

##### `MinimalAction`<sup>Required</sup> <a name="MinimalAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction"></a>

```go
func MinimalAction() *string
```

- *Type:* *string

---

##### `MinReadySec`<sup>Required</sup> <a name="MinReadySec" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySec"></a>

```go
func MinReadySec() *f64
```

- *Type:* *f64

---

##### `MostDisruptiveAllowedAction`<sup>Required</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction"></a>

```go
func MostDisruptiveAllowedAction() *string
```

- *Type:* *string

---

##### `ReplacementMethod`<sup>Required</sup> <a name="ReplacementMethod" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod"></a>

```go
func ReplacementMethod() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionInstanceGroupManagerUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy">GoogleComputeRegionInstanceGroupManagerUpdatePolicy</a>

---


### GoogleComputeRegionInstanceGroupManagerVersionList <a name="GoogleComputeRegionInstanceGroupManagerVersionList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerVersionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionInstanceGroupManagerVersionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionInstanceGroupManagerVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionInstanceGroupManagerVersionOutputReference <a name="GoogleComputeRegionInstanceGroupManagerVersionOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionInstanceGroupManagerVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.putTargetSize">PutTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.resetTargetSize">ResetTargetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetSize` <a name="PutTargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.putTargetSize"></a>

```go
func PutTargetSize(value GoogleComputeRegionInstanceGroupManagerVersionTargetSize)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.putTargetSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize">GoogleComputeRegionInstanceGroupManagerVersionTargetSize</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetTargetSize` <a name="ResetTargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.resetTargetSize"></a>

```go
func ResetTargetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSize">TargetSize</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference">GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput">InstanceTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSizeInput">TargetSizeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize">GoogleComputeRegionInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplate">InstanceTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetSize`<sup>Required</sup> <a name="TargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSize"></a>

```go
func TargetSize() GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference">GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference</a>

---

##### `InstanceTemplateInput`<sup>Optional</sup> <a name="InstanceTemplateInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput"></a>

```go
func InstanceTemplateInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetSizeInput`<sup>Optional</sup> <a name="TargetSizeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSizeInput"></a>

```go
func TargetSizeInput() GoogleComputeRegionInstanceGroupManagerVersionTargetSize
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize">GoogleComputeRegionInstanceGroupManagerVersionTargetSize</a>

---

##### `InstanceTemplate`<sup>Required</sup> <a name="InstanceTemplate" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplate"></a>

```go
func InstanceTemplate() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference <a name="GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregioninstancegroupmanager"

googlecomputeregioninstancegroupmanager.NewGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed">ResetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixed` <a name="ResetFixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed"></a>

```go
func ResetFixed()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent"></a>

```go
func ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput">FixedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput">PercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed">Fixed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize">GoogleComputeRegionInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedInput`<sup>Optional</sup> <a name="FixedInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput"></a>

```go
func FixedInput() *f64
```

- *Type:* *f64

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput"></a>

```go
func PercentInput() *f64
```

- *Type:* *f64

---

##### `Fixed`<sup>Required</sup> <a name="Fixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed"></a>

```go
func Fixed() *f64
```

- *Type:* *f64

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionInstanceGroupManagerVersionTargetSize
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize">GoogleComputeRegionInstanceGroupManagerVersionTargetSize</a>

---



