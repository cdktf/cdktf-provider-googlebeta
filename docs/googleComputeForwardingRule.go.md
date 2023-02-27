# `googleComputeForwardingRule` Submodule <a name="`googleComputeForwardingRule` Submodule" id="@cdktf/provider-google-beta.googleComputeForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeForwardingRule <a name="GoogleComputeForwardingRule" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule google_compute_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeforwardingrule"

googlecomputeforwardingrule.NewGoogleComputeForwardingRule(scope Construct, id *string, config GoogleComputeForwardingRuleConfig) GoogleComputeForwardingRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig">GoogleComputeForwardingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig">GoogleComputeForwardingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putServiceDirectoryRegistrations">PutServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllowGlobalAccess">ResetAllowGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllPorts">ResetAllPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetBackendService">ResetBackendService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpProtocol">ResetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIsMirroringCollector">ResetIsMirroringCollector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetLoadBalancingScheme">ResetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNetworkTier">ResetNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetPortRange">ResetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetServiceDirectoryRegistrations">ResetServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetServiceLabel">ResetServiceLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutServiceDirectoryRegistrations` <a name="PutServiceDirectoryRegistrations" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putServiceDirectoryRegistrations"></a>

```go
func PutServiceDirectoryRegistrations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putServiceDirectoryRegistrations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeForwardingRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts">GoogleComputeForwardingRuleTimeouts</a>

---

##### `ResetAllowGlobalAccess` <a name="ResetAllowGlobalAccess" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllowGlobalAccess"></a>

```go
func ResetAllowGlobalAccess()
```

##### `ResetAllPorts` <a name="ResetAllPorts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllPorts"></a>

```go
func ResetAllPorts()
```

##### `ResetBackendService` <a name="ResetBackendService" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetBackendService"></a>

```go
func ResetBackendService()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetIpProtocol` <a name="ResetIpProtocol" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpProtocol"></a>

```go
func ResetIpProtocol()
```

##### `ResetIsMirroringCollector` <a name="ResetIsMirroringCollector" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIsMirroringCollector"></a>

```go
func ResetIsMirroringCollector()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLoadBalancingScheme` <a name="ResetLoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetLoadBalancingScheme"></a>

```go
func ResetLoadBalancingScheme()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNetworkTier` <a name="ResetNetworkTier" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNetworkTier"></a>

```go
func ResetNetworkTier()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetPortRange"></a>

```go
func ResetPortRange()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetPorts"></a>

```go
func ResetPorts()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServiceDirectoryRegistrations` <a name="ResetServiceDirectoryRegistrations" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetServiceDirectoryRegistrations"></a>

```go
func ResetServiceDirectoryRegistrations()
```

##### `ResetServiceLabel` <a name="ResetServiceLabel" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetServiceLabel"></a>

```go
func ResetServiceLabel()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeforwardingrule"

googlecomputeforwardingrule.GoogleComputeForwardingRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeforwardingrule"

googlecomputeforwardingrule.GoogleComputeForwardingRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeforwardingrule"

googlecomputeforwardingrule.GoogleComputeForwardingRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labelFingerprint">LabelFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.pscConnectionStatus">PscConnectionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceDirectoryRegistrations">ServiceDirectoryRegistrations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList">GoogleComputeForwardingRuleServiceDirectoryRegistrationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference">GoogleComputeForwardingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowGlobalAccessInput">AllowGlobalAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allPortsInput">AllPortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.backendServiceInput">BackendServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipProtocolInput">IpProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.isMirroringCollectorInput">IsMirroringCollectorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.loadBalancingSchemeInput">LoadBalancingSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkTierInput">NetworkTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portRangeInput">PortRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portsInput">PortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceDirectoryRegistrationsInput">ServiceDirectoryRegistrationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceLabelInput">ServiceLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowGlobalAccess">AllowGlobalAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allPorts">AllPorts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.backendService">BackendService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.isMirroringCollector">IsMirroringCollector</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkTier">NetworkTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portRange">PortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ports">Ports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceLabel">ServiceLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.target">Target</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labelFingerprint"></a>

```go
func LabelFingerprint() *string
```

- *Type:* *string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `PscConnectionStatus`<sup>Required</sup> <a name="PscConnectionStatus" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.pscConnectionStatus"></a>

```go
func PscConnectionStatus() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ServiceDirectoryRegistrations`<sup>Required</sup> <a name="ServiceDirectoryRegistrations" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceDirectoryRegistrations"></a>

```go
func ServiceDirectoryRegistrations() GoogleComputeForwardingRuleServiceDirectoryRegistrationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList">GoogleComputeForwardingRuleServiceDirectoryRegistrationsList</a>

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.timeouts"></a>

```go
func Timeouts() GoogleComputeForwardingRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference">GoogleComputeForwardingRuleTimeoutsOutputReference</a>

---

##### `AllowGlobalAccessInput`<sup>Optional</sup> <a name="AllowGlobalAccessInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowGlobalAccessInput"></a>

```go
func AllowGlobalAccessInput() interface{}
```

- *Type:* interface{}

---

##### `AllPortsInput`<sup>Optional</sup> <a name="AllPortsInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allPortsInput"></a>

```go
func AllPortsInput() interface{}
```

- *Type:* interface{}

---

##### `BackendServiceInput`<sup>Optional</sup> <a name="BackendServiceInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.backendServiceInput"></a>

```go
func BackendServiceInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipProtocolInput"></a>

```go
func IpProtocolInput() *string
```

- *Type:* *string

---

##### `IsMirroringCollectorInput`<sup>Optional</sup> <a name="IsMirroringCollectorInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.isMirroringCollectorInput"></a>

```go
func IsMirroringCollectorInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LoadBalancingSchemeInput`<sup>Optional</sup> <a name="LoadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.loadBalancingSchemeInput"></a>

```go
func LoadBalancingSchemeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkTierInput"></a>

```go
func NetworkTierInput() *string
```

- *Type:* *string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portRangeInput"></a>

```go
func PortRangeInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portsInput"></a>

```go
func PortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceDirectoryRegistrationsInput`<sup>Optional</sup> <a name="ServiceDirectoryRegistrationsInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceDirectoryRegistrationsInput"></a>

```go
func ServiceDirectoryRegistrationsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceLabelInput`<sup>Optional</sup> <a name="ServiceLabelInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceLabelInput"></a>

```go
func ServiceLabelInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowGlobalAccess`<sup>Required</sup> <a name="AllowGlobalAccess" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowGlobalAccess"></a>

```go
func AllowGlobalAccess() interface{}
```

- *Type:* interface{}

---

##### `AllPorts`<sup>Required</sup> <a name="AllPorts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allPorts"></a>

```go
func AllPorts() interface{}
```

- *Type:* interface{}

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.backendService"></a>

```go
func BackendService() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `IsMirroringCollector`<sup>Required</sup> <a name="IsMirroringCollector" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.isMirroringCollector"></a>

```go
func IsMirroringCollector() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.loadBalancingScheme"></a>

```go
func LoadBalancingScheme() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkTier"></a>

```go
func NetworkTier() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portRange"></a>

```go
func PortRange() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ports"></a>

```go
func Ports() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceLabel`<sup>Required</sup> <a name="ServiceLabel" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceLabel"></a>

```go
func ServiceLabel() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeForwardingRuleConfig <a name="GoogleComputeForwardingRuleConfig" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeforwardingrule"

&googlecomputeforwardingrule.GoogleComputeForwardingRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AllowGlobalAccess: interface{},
	AllPorts: interface{},
	BackendService: *string,
	Description: *string,
	Id: *string,
	IpAddress: *string,
	IpProtocol: *string,
	IsMirroringCollector: interface{},
	Labels: *map[string]*string,
	LoadBalancingScheme: *string,
	Network: *string,
	NetworkTier: *string,
	PortRange: *string,
	Ports: *[]*string,
	Project: *string,
	Region: *string,
	ServiceDirectoryRegistrations: interface{},
	ServiceLabel: *string,
	Subnetwork: *string,
	Target: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allowGlobalAccess">AllowGlobalAccess</a></code> | <code>interface{}</code> | This field is used along with the `backend_service` field for internal load balancing or with the `target` field for internal TargetInstance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allPorts">AllPorts</a></code> | <code>interface{}</code> | This field is used along with the `backend_service` field for internal load balancing or with the `target` field for internal TargetInstance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.backendService">BackendService</a></code> | <code>*string</code> | This field is only used for `INTERNAL` load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#id GoogleComputeForwardingRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipAddress">IpAddress</a></code> | <code>*string</code> | IP address that this forwarding rule serves. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.isMirroringCollector">IsMirroringCollector</a></code> | <code>interface{}</code> | Indicates whether or not this load balancer can be used as a collector for packet mirroring. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels to apply to this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | Specifies the forwarding rule type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.network">Network</a></code> | <code>*string</code> | This field is not used for external load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.networkTier">NetworkTier</a></code> | <code>*string</code> | This signifies the networking tier used for configuring this load balancer and can only take the following values: `PREMIUM`, `STANDARD`. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.portRange">PortRange</a></code> | <code>*string</code> | When the load balancing scheme is `EXTERNAL`, `INTERNAL_SELF_MANAGED` and `INTERNAL_MANAGED`, you can specify a `port_range`. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ports">Ports</a></code> | <code>*[]*string</code> | This field is used along with the `backend_service` field for internal load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.project">Project</a></code> | <code>*string</code> | The project this resource belongs in. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.region">Region</a></code> | <code>*string</code> | The location of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.serviceDirectoryRegistrations">ServiceDirectoryRegistrations</a></code> | <code>interface{}</code> | service_directory_registrations block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.serviceLabel">ServiceLabel</a></code> | <code>*string</code> | An optional prefix to the service name for this Forwarding Rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | This field is only used for `INTERNAL` load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.target">Target</a></code> | <code>*string</code> | The URL of the target resource to receive the matched traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts">GoogleComputeForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource;

provided by the client when the resource is created. The name must be 1-63 characters long, and comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#name GoogleComputeForwardingRule#name}

---

##### `AllowGlobalAccess`<sup>Optional</sup> <a name="AllowGlobalAccess" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allowGlobalAccess"></a>

```go
AllowGlobalAccess interface{}
```

- *Type:* interface{}

This field is used along with the `backend_service` field for internal load balancing or with the `target` field for internal TargetInstance.

If the field is set to `TRUE`, clients can access ILB from all regions. Otherwise only allows access from clients in the same region as the internal load balancer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#allow_global_access GoogleComputeForwardingRule#allow_global_access}

---

##### `AllPorts`<sup>Optional</sup> <a name="AllPorts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allPorts"></a>

```go
AllPorts interface{}
```

- *Type:* interface{}

This field is used along with the `backend_service` field for internal load balancing or with the `target` field for internal TargetInstance.

This field cannot be used with `port` or `portRange` fields. When the load balancing scheme is `INTERNAL` and protocol is TCP/UDP, specify this field to allow packets addressed to any ports will be forwarded to the backends configured with this forwarding rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#all_ports GoogleComputeForwardingRule#all_ports}

---

##### `BackendService`<sup>Optional</sup> <a name="BackendService" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.backendService"></a>

```go
BackendService *string
```

- *Type:* *string

This field is only used for `INTERNAL` load balancing.

For internal load balancing, this field identifies the BackendService resource to receive the matched traffic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#backend_service GoogleComputeForwardingRule#backend_service}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#description GoogleComputeForwardingRule#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#id GoogleComputeForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

IP address that this forwarding rule serves.

When a client sends traffic to this IP address, the forwarding rule directs the traffic to the target that you specify in the forwarding rule. If you don't specify a reserved IP address, an ephemeral IP address is assigned. Methods for specifying an IP address: * IPv4 dotted decimal, as in `100.1.2.3` * Full URL, as in `https://www.googleapis.com/compute/v1/projects/project_id/regions/region/addresses/address-name` * Partial URL or by name, as in: * `projects/project_id/regions/region/addresses/address-name` * `regions/region/addresses/address-name` * `global/addresses/address-name` * `address-name` The loadBalancingScheme and the forwarding rule's target determine the type of IP address that you can use. For detailed information, refer to [IP address specifications](/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#ip_address GoogleComputeForwardingRule#ip_address}

---

##### `IpProtocol`<sup>Optional</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipProtocol"></a>

```go
IpProtocol *string
```

- *Type:* *string

The IP protocol to which this rule applies.

For protocol forwarding, valid options are `TCP`, `UDP`, `ESP`, `AH`, `SCTP` or `ICMP`. For Internal TCP/UDP Load Balancing, the load balancing scheme is `INTERNAL`, and one of `TCP` or `UDP` are valid. For Traffic Director, the load balancing scheme is `INTERNAL_SELF_MANAGED`, and only `TCP`is valid. For Internal HTTP(S) Load Balancing, the load balancing scheme is `INTERNAL_MANAGED`, and only `TCP` is valid. For HTTP(S), SSL Proxy, and TCP Proxy Load Balancing, the load balancing scheme is `EXTERNAL` and only `TCP` is valid. For Network TCP/UDP Load Balancing, the load balancing scheme is `EXTERNAL`, and one of `TCP` or `UDP` is valid.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#ip_protocol GoogleComputeForwardingRule#ip_protocol}

---

##### `IsMirroringCollector`<sup>Optional</sup> <a name="IsMirroringCollector" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.isMirroringCollector"></a>

```go
IsMirroringCollector interface{}
```

- *Type:* interface{}

Indicates whether or not this load balancer can be used as a collector for packet mirroring.

To prevent mirroring loops, instances behind this load balancer will not have their traffic mirrored even if a `PacketMirroring` rule applies to them. This can only be set to true for load balancers that have their `loadBalancingScheme` set to `INTERNAL`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#is_mirroring_collector GoogleComputeForwardingRule#is_mirroring_collector}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels to apply to this rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#labels GoogleComputeForwardingRule#labels}

---

##### `LoadBalancingScheme`<sup>Optional</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.loadBalancingScheme"></a>

```go
LoadBalancingScheme *string
```

- *Type:* *string

Specifies the forwarding rule type.

`EXTERNAL` is used for:
Classic Cloud VPN gateways
Protocol forwarding to VMs from an external IP address
The following load balancers: HTTP(S), SSL Proxy, TCP Proxy, and Network TCP/UDP
`INTERNAL` is used for:
Protocol forwarding to VMs from an internal IP address
Internal TCP/UDP load balancers
`INTERNAL_MANAGED` is used for:
Internal HTTP(S) load balancers
`INTERNAL_SELF_MANAGED` is used for:
Traffic Director
`EXTERNAL_MANAGED` is used for:
Global external HTTP(S) load balancers

For more information about forwarding rules, refer to [Forwarding rule concepts](/load-balancing/docs/forwarding-rule-concepts). Possible values: INVALID, INTERNAL, INTERNAL_MANAGED, INTERNAL_SELF_MANAGED, EXTERNAL, EXTERNAL_MANAGED

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#load_balancing_scheme GoogleComputeForwardingRule#load_balancing_scheme}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

This field is not used for external load balancing.

For `INTERNAL` and `INTERNAL_SELF_MANAGED` load balancing, this field identifies the network that the load balanced IP should belong to for this Forwarding Rule. If this field is not specified, the default network will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#network GoogleComputeForwardingRule#network}

---

##### `NetworkTier`<sup>Optional</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.networkTier"></a>

```go
NetworkTier *string
```

- *Type:* *string

This signifies the networking tier used for configuring this load balancer and can only take the following values: `PREMIUM`, `STANDARD`.

For regional ForwardingRule, the valid values are `PREMIUM` and `STANDARD`. For GlobalForwardingRule, the valid value is `PREMIUM`. If this field is not specified, it is assumed to be `PREMIUM`. If `IPAddress` is specified, this value must be equal to the networkTier of the Address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#network_tier GoogleComputeForwardingRule#network_tier}

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.portRange"></a>

```go
PortRange *string
```

- *Type:* *string

When the load balancing scheme is `EXTERNAL`, `INTERNAL_SELF_MANAGED` and `INTERNAL_MANAGED`, you can specify a `port_range`.

Use with a forwarding rule that points to a target proxy or a target pool. Do not use with a forwarding rule that points to a backend service. This field is used along with the `target` field for TargetHttpProxy, TargetHttpsProxy, TargetSslProxy, TargetTcpProxy, TargetVpnGateway, TargetPool, TargetInstance. Applicable only when `IPProtocol` is `TCP`, `UDP`, or `SCTP`, only packets addressed to ports in the specified range will be forwarded to `target`. Forwarding rules with the same `[IPAddress, IPProtocol]` pair must have disjoint port ranges. Some types of forwarding target have constraints on the acceptable ports:

TargetHttpProxy: 80, 8080
TargetHttpsProxy: 443
TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1688, 1883, 5222
TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1688, 1883, 5222
TargetVpnGateway: 500, 4500

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ports"></a>

```go
Ports *[]*string
```

- *Type:* *[]*string

This field is used along with the `backend_service` field for internal load balancing.

When the load balancing scheme is `INTERNAL`, a list of ports can be configured, for example, ['80'], ['8000','9000']. Only packets addressed to these ports are forwarded to the backends configured with the forwarding rule. If the forwarding rule's loadBalancingScheme is INTERNAL, you can specify ports in one of the following ways: * A list of up to five ports, which can be non-contiguous * Keyword `ALL`, which causes the forwarding rule to forward traffic on any port of the forwarding rule's protocol. @pattern: d+(?:-d+)? For more information, refer to [Port specifications](/load-balancing/docs/forwarding-rule-concepts#port_specifications).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#ports GoogleComputeForwardingRule#ports}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project this resource belongs in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#project GoogleComputeForwardingRule#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The location of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#region GoogleComputeForwardingRule#region}

---

##### `ServiceDirectoryRegistrations`<sup>Optional</sup> <a name="ServiceDirectoryRegistrations" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.serviceDirectoryRegistrations"></a>

```go
ServiceDirectoryRegistrations interface{}
```

- *Type:* interface{}

service_directory_registrations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#service_directory_registrations GoogleComputeForwardingRule#service_directory_registrations}

---

##### `ServiceLabel`<sup>Optional</sup> <a name="ServiceLabel" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.serviceLabel"></a>

```go
ServiceLabel *string
```

- *Type:* *string

An optional prefix to the service name for this Forwarding Rule.

If specified, the prefix is the first label of the fully qualified service name. The label must be 1-63 characters long, and comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Specifically, the label must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. This field is only used for internal load balancing.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#service_label GoogleComputeForwardingRule#service_label}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

This field is only used for `INTERNAL` load balancing.

For internal load balancing, this field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule. If the network specified is in auto subnet mode, this field is optional. However, if the network is in custom subnet mode, a subnetwork must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#subnetwork GoogleComputeForwardingRule#subnetwork}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

The URL of the target resource to receive the matched traffic.

For regional forwarding rules, this target must live in the same region as the forwarding rule. For global forwarding rules, this target must be a global load balancing resource. The forwarded traffic must be of a type appropriate to the target object. For `INTERNAL_SELF_MANAGED` load balancing, only `targetHttpProxy` is valid, not `targetHttpsProxy`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#target GoogleComputeForwardingRule#target}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeForwardingRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts">GoogleComputeForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#timeouts GoogleComputeForwardingRule#timeouts}

---

### GoogleComputeForwardingRuleServiceDirectoryRegistrations <a name="GoogleComputeForwardingRuleServiceDirectoryRegistrations" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeforwardingrule"

&googlecomputeforwardingrule.GoogleComputeForwardingRuleServiceDirectoryRegistrations {
	Namespace: *string,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations.property.namespace">Namespace</a></code> | <code>*string</code> | Service Directory namespace to register the forwarding rule under. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations.property.service">Service</a></code> | <code>*string</code> | Service Directory service to register the forwarding rule under. |

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Service Directory namespace to register the forwarding rule under.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#namespace GoogleComputeForwardingRule#namespace}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations.property.service"></a>

```go
Service *string
```

- *Type:* *string

Service Directory service to register the forwarding rule under.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#service GoogleComputeForwardingRule#service}

---

### GoogleComputeForwardingRuleTimeouts <a name="GoogleComputeForwardingRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeforwardingrule"

&googlecomputeforwardingrule.GoogleComputeForwardingRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#create GoogleComputeForwardingRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#delete GoogleComputeForwardingRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#update GoogleComputeForwardingRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#create GoogleComputeForwardingRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#delete GoogleComputeForwardingRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_forwarding_rule#update GoogleComputeForwardingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeForwardingRuleServiceDirectoryRegistrationsList <a name="GoogleComputeForwardingRuleServiceDirectoryRegistrationsList" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeforwardingrule"

googlecomputeforwardingrule.NewGoogleComputeForwardingRuleServiceDirectoryRegistrationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeForwardingRuleServiceDirectoryRegistrationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.get"></a>

```go
func Get(index *f64) GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference <a name="GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeforwardingrule"

googlecomputeforwardingrule.NewGoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeForwardingRuleTimeoutsOutputReference <a name="GoogleComputeForwardingRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeforwardingrule"

googlecomputeforwardingrule.NewGoogleComputeForwardingRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeForwardingRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



