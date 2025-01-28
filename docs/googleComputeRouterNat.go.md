# `googleComputeRouterNat` Submodule <a name="`googleComputeRouterNat` Submodule" id="@cdktf/provider-google-beta.googleComputeRouterNat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRouterNat <a name="GoogleComputeRouterNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat google_compute_router_nat}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

googlecomputerouternat.NewGoogleComputeRouterNat(scope Construct, id *string, config GoogleComputeRouterNatConfig) GoogleComputeRouterNat
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig">GoogleComputeRouterNatConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig">GoogleComputeRouterNatConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putSubnetwork">PutSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetAutoNetworkTier">ResetAutoNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetDrainNatIps">ResetDrainNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableDynamicPortAllocation">ResetEnableDynamicPortAllocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableEndpointIndependentMapping">ResetEnableEndpointIndependentMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEndpointTypes">ResetEndpointTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetIcmpIdleTimeoutSec">ResetIcmpIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetInitialNatIps">ResetInitialNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMaxPortsPerVm">ResetMaxPortsPerVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMinPortsPerVm">ResetMinPortsPerVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIpAllocateOption">ResetNatIpAllocateOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIps">ResetNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpEstablishedIdleTimeoutSec">ResetTcpEstablishedIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTimeWaitTimeoutSec">ResetTcpTimeWaitTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTransitoryIdleTimeoutSec">ResetTcpTransitoryIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetUdpIdleTimeoutSec">ResetUdpIdleTimeoutSec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putLogConfig"></a>

```go
func PutLogConfig(value GoogleComputeRouterNatLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSubnetwork` <a name="PutSubnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putSubnetwork"></a>

```go
func PutSubnetwork(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putSubnetwork.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeRouterNatTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a>

---

##### `ResetAutoNetworkTier` <a name="ResetAutoNetworkTier" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetAutoNetworkTier"></a>

```go
func ResetAutoNetworkTier()
```

##### `ResetDrainNatIps` <a name="ResetDrainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetDrainNatIps"></a>

```go
func ResetDrainNatIps()
```

##### `ResetEnableDynamicPortAllocation` <a name="ResetEnableDynamicPortAllocation" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableDynamicPortAllocation"></a>

```go
func ResetEnableDynamicPortAllocation()
```

##### `ResetEnableEndpointIndependentMapping` <a name="ResetEnableEndpointIndependentMapping" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableEndpointIndependentMapping"></a>

```go
func ResetEnableEndpointIndependentMapping()
```

##### `ResetEndpointTypes` <a name="ResetEndpointTypes" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEndpointTypes"></a>

```go
func ResetEndpointTypes()
```

##### `ResetIcmpIdleTimeoutSec` <a name="ResetIcmpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetIcmpIdleTimeoutSec"></a>

```go
func ResetIcmpIdleTimeoutSec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetId"></a>

```go
func ResetId()
```

##### `ResetInitialNatIps` <a name="ResetInitialNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetInitialNatIps"></a>

```go
func ResetInitialNatIps()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetLogConfig"></a>

```go
func ResetLogConfig()
```

##### `ResetMaxPortsPerVm` <a name="ResetMaxPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMaxPortsPerVm"></a>

```go
func ResetMaxPortsPerVm()
```

##### `ResetMinPortsPerVm` <a name="ResetMinPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMinPortsPerVm"></a>

```go
func ResetMinPortsPerVm()
```

##### `ResetNatIpAllocateOption` <a name="ResetNatIpAllocateOption" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIpAllocateOption"></a>

```go
func ResetNatIpAllocateOption()
```

##### `ResetNatIps` <a name="ResetNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIps"></a>

```go
func ResetNatIps()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRules"></a>

```go
func ResetRules()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTcpEstablishedIdleTimeoutSec` <a name="ResetTcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpEstablishedIdleTimeoutSec"></a>

```go
func ResetTcpEstablishedIdleTimeoutSec()
```

##### `ResetTcpTimeWaitTimeoutSec` <a name="ResetTcpTimeWaitTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTimeWaitTimeoutSec"></a>

```go
func ResetTcpTimeWaitTimeoutSec()
```

##### `ResetTcpTransitoryIdleTimeoutSec` <a name="ResetTcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTransitoryIdleTimeoutSec"></a>

```go
func ResetTcpTransitoryIdleTimeoutSec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetType"></a>

```go
func ResetType()
```

##### `ResetUdpIdleTimeoutSec` <a name="ResetUdpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetUdpIdleTimeoutSec"></a>

```go
func ResetUdpIdleTimeoutSec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRouterNat resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

googlecomputerouternat.GoogleComputeRouterNat_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

googlecomputerouternat.GoogleComputeRouterNat_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

googlecomputerouternat.GoogleComputeRouterNat_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

googlecomputerouternat.GoogleComputeRouterNat_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeRouterNat resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeRouterNat to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeRouterNat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRouterNat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference">GoogleComputeRouterNatLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList">GoogleComputeRouterNatRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetwork">Subnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList">GoogleComputeRouterNatSubnetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference">GoogleComputeRouterNatTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTierInput">AutoNetworkTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIpsInput">DrainNatIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocationInput">EnableDynamicPortAllocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMappingInput">EnableEndpointIndependentMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypesInput">EndpointTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSecInput">IcmpIdleTimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIpsInput">InitialNatIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVmInput">MaxPortsPerVmInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVmInput">MinPortsPerVmInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOptionInput">NatIpAllocateOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpsInput">NatIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.routerInput">RouterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput">SourceSubnetworkIpRangesToNatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetworkInput">SubnetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput">TcpEstablishedIdleTimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSecInput">TcpTimeWaitTimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput">TcpTransitoryIdleTimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSecInput">UdpIdleTimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTier">AutoNetworkTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIps">DrainNatIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocation">EnableDynamicPortAllocation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMapping">EnableEndpointIndependentMapping</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypes">EndpointTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSec">IcmpIdleTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIps">InitialNatIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVm">MaxPortsPerVm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVm">MinPortsPerVm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOption">NatIpAllocateOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIps">NatIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.router">Router</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNat">SourceSubnetworkIpRangesToNat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSec">TcpEstablishedIdleTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSec">TcpTimeWaitTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSec">TcpTransitoryIdleTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSec">UdpIdleTimeoutSec</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfig"></a>

```go
func LogConfig() GoogleComputeRouterNatLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference">GoogleComputeRouterNatLogConfigOutputReference</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rules"></a>

```go
func Rules() GoogleComputeRouterNatRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList">GoogleComputeRouterNatRulesList</a>

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetwork"></a>

```go
func Subnetwork() GoogleComputeRouterNatSubnetworkList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList">GoogleComputeRouterNatSubnetworkList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeouts"></a>

```go
func Timeouts() GoogleComputeRouterNatTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference">GoogleComputeRouterNatTimeoutsOutputReference</a>

---

##### `AutoNetworkTierInput`<sup>Optional</sup> <a name="AutoNetworkTierInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTierInput"></a>

```go
func AutoNetworkTierInput() *string
```

- *Type:* *string

---

##### `DrainNatIpsInput`<sup>Optional</sup> <a name="DrainNatIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIpsInput"></a>

```go
func DrainNatIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableDynamicPortAllocationInput`<sup>Optional</sup> <a name="EnableDynamicPortAllocationInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocationInput"></a>

```go
func EnableDynamicPortAllocationInput() interface{}
```

- *Type:* interface{}

---

##### `EnableEndpointIndependentMappingInput`<sup>Optional</sup> <a name="EnableEndpointIndependentMappingInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMappingInput"></a>

```go
func EnableEndpointIndependentMappingInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointTypesInput`<sup>Optional</sup> <a name="EndpointTypesInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypesInput"></a>

```go
func EndpointTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IcmpIdleTimeoutSecInput`<sup>Optional</sup> <a name="IcmpIdleTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSecInput"></a>

```go
func IcmpIdleTimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitialNatIpsInput`<sup>Optional</sup> <a name="InitialNatIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIpsInput"></a>

```go
func InitialNatIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfigInput"></a>

```go
func LogConfigInput() GoogleComputeRouterNatLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

---

##### `MaxPortsPerVmInput`<sup>Optional</sup> <a name="MaxPortsPerVmInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVmInput"></a>

```go
func MaxPortsPerVmInput() *f64
```

- *Type:* *f64

---

##### `MinPortsPerVmInput`<sup>Optional</sup> <a name="MinPortsPerVmInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVmInput"></a>

```go
func MinPortsPerVmInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NatIpAllocateOptionInput`<sup>Optional</sup> <a name="NatIpAllocateOptionInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOptionInput"></a>

```go
func NatIpAllocateOptionInput() *string
```

- *Type:* *string

---

##### `NatIpsInput`<sup>Optional</sup> <a name="NatIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpsInput"></a>

```go
func NatIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.routerInput"></a>

```go
func RouterInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `SourceSubnetworkIpRangesToNatInput`<sup>Optional</sup> <a name="SourceSubnetworkIpRangesToNatInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput"></a>

```go
func SourceSubnetworkIpRangesToNatInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetworkInput"></a>

```go
func SubnetworkInput() interface{}
```

- *Type:* interface{}

---

##### `TcpEstablishedIdleTimeoutSecInput`<sup>Optional</sup> <a name="TcpEstablishedIdleTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput"></a>

```go
func TcpEstablishedIdleTimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `TcpTimeWaitTimeoutSecInput`<sup>Optional</sup> <a name="TcpTimeWaitTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSecInput"></a>

```go
func TcpTimeWaitTimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `TcpTransitoryIdleTimeoutSecInput`<sup>Optional</sup> <a name="TcpTransitoryIdleTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput"></a>

```go
func TcpTransitoryIdleTimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UdpIdleTimeoutSecInput`<sup>Optional</sup> <a name="UdpIdleTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSecInput"></a>

```go
func UdpIdleTimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `AutoNetworkTier`<sup>Required</sup> <a name="AutoNetworkTier" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTier"></a>

```go
func AutoNetworkTier() *string
```

- *Type:* *string

---

##### `DrainNatIps`<sup>Required</sup> <a name="DrainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIps"></a>

```go
func DrainNatIps() *[]*string
```

- *Type:* *[]*string

---

##### `EnableDynamicPortAllocation`<sup>Required</sup> <a name="EnableDynamicPortAllocation" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocation"></a>

```go
func EnableDynamicPortAllocation() interface{}
```

- *Type:* interface{}

---

##### `EnableEndpointIndependentMapping`<sup>Required</sup> <a name="EnableEndpointIndependentMapping" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMapping"></a>

```go
func EnableEndpointIndependentMapping() interface{}
```

- *Type:* interface{}

---

##### `EndpointTypes`<sup>Required</sup> <a name="EndpointTypes" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypes"></a>

```go
func EndpointTypes() *[]*string
```

- *Type:* *[]*string

---

##### `IcmpIdleTimeoutSec`<sup>Required</sup> <a name="IcmpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSec"></a>

```go
func IcmpIdleTimeoutSec() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitialNatIps`<sup>Required</sup> <a name="InitialNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIps"></a>

```go
func InitialNatIps() *[]*string
```

- *Type:* *[]*string

---

##### `MaxPortsPerVm`<sup>Required</sup> <a name="MaxPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVm"></a>

```go
func MaxPortsPerVm() *f64
```

- *Type:* *f64

---

##### `MinPortsPerVm`<sup>Required</sup> <a name="MinPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVm"></a>

```go
func MinPortsPerVm() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NatIpAllocateOption`<sup>Required</sup> <a name="NatIpAllocateOption" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOption"></a>

```go
func NatIpAllocateOption() *string
```

- *Type:* *string

---

##### `NatIps`<sup>Required</sup> <a name="NatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIps"></a>

```go
func NatIps() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.router"></a>

```go
func Router() *string
```

- *Type:* *string

---

##### `SourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="SourceSubnetworkIpRangesToNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNat"></a>

```go
func SourceSubnetworkIpRangesToNat() *string
```

- *Type:* *string

---

##### `TcpEstablishedIdleTimeoutSec`<sup>Required</sup> <a name="TcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSec"></a>

```go
func TcpEstablishedIdleTimeoutSec() *f64
```

- *Type:* *f64

---

##### `TcpTimeWaitTimeoutSec`<sup>Required</sup> <a name="TcpTimeWaitTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSec"></a>

```go
func TcpTimeWaitTimeoutSec() *f64
```

- *Type:* *f64

---

##### `TcpTransitoryIdleTimeoutSec`<sup>Required</sup> <a name="TcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSec"></a>

```go
func TcpTransitoryIdleTimeoutSec() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UdpIdleTimeoutSec`<sup>Required</sup> <a name="UdpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSec"></a>

```go
func UdpIdleTimeoutSec() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRouterNatConfig <a name="GoogleComputeRouterNatConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

&googlecomputerouternat.GoogleComputeRouterNatConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Router: *string,
	SourceSubnetworkIpRangesToNat: *string,
	AutoNetworkTier: *string,
	DrainNatIps: *[]*string,
	EnableDynamicPortAllocation: interface{},
	EnableEndpointIndependentMapping: interface{},
	EndpointTypes: *[]*string,
	IcmpIdleTimeoutSec: *f64,
	Id: *string,
	InitialNatIps: *[]*string,
	LogConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRouterNat.GoogleComputeRouterNatLogConfig,
	MaxPortsPerVm: *f64,
	MinPortsPerVm: *f64,
	NatIpAllocateOption: *string,
	NatIps: *[]*string,
	Project: *string,
	Region: *string,
	Rules: interface{},
	Subnetwork: interface{},
	TcpEstablishedIdleTimeoutSec: *f64,
	TcpTimeWaitTimeoutSec: *f64,
	TcpTransitoryIdleTimeoutSec: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRouterNat.GoogleComputeRouterNatTimeouts,
	Type: *string,
	UdpIdleTimeoutSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.name">Name</a></code> | <code>*string</code> | Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.router">Router</a></code> | <code>*string</code> | The name of the Cloud Router in which this NAT will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat">SourceSubnetworkIpRangesToNat</a></code> | <code>*string</code> | How NAT should be configured per Subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.autoNetworkTier">AutoNetworkTier</a></code> | <code>*string</code> | The network tier to use when automatically reserving NAT IP addresses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.drainNatIps">DrainNatIps</a></code> | <code>*[]*string</code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableDynamicPortAllocation">EnableDynamicPortAllocation</a></code> | <code>interface{}</code> | Enable Dynamic Port Allocation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableEndpointIndependentMapping">EnableEndpointIndependentMapping</a></code> | <code>interface{}</code> | Enable endpoint independent mapping. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.endpointTypes">EndpointTypes</a></code> | <code>*[]*string</code> | Specifies the endpoint Types supported by the NAT Gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.icmpIdleTimeoutSec">IcmpIdleTimeoutSec</a></code> | <code>*f64</code> | Timeout (in seconds) for ICMP connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#id GoogleComputeRouterNat#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.initialNatIps">InitialNatIps</a></code> | <code>*[]*string</code> | Self-links of NAT IPs to be used as initial value for creation alongside a RouterNatAddress resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.maxPortsPerVm">MaxPortsPerVm</a></code> | <code>*f64</code> | Maximum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.minPortsPerVm">MinPortsPerVm</a></code> | <code>*f64</code> | Minimum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIpAllocateOption">NatIpAllocateOption</a></code> | <code>*string</code> | How external IPs should be allocated for this NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIps">NatIps</a></code> | <code>*[]*string</code> | Self-links of NAT IPs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#project GoogleComputeRouterNat#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.region">Region</a></code> | <code>*string</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.subnetwork">Subnetwork</a></code> | <code>interface{}</code> | subnetwork block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec">TcpEstablishedIdleTimeoutSec</a></code> | <code>*f64</code> | Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec">TcpTimeWaitTimeoutSec</a></code> | <code>*f64</code> | Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec">TcpTransitoryIdleTimeoutSec</a></code> | <code>*f64</code> | Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.type">Type</a></code> | <code>*string</code> | Indicates whether this NAT is used for public or private IP translation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.udpIdleTimeoutSec">UdpIdleTimeoutSec</a></code> | <code>*f64</code> | Timeout (in seconds) for UDP connections. Defaults to 30s if not set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#name GoogleComputeRouterNat#name}

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.router"></a>

```go
Router *string
```

- *Type:* *string

The name of the Cloud Router in which this NAT will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#router GoogleComputeRouterNat#router}

---

##### `SourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="SourceSubnetworkIpRangesToNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat"></a>

```go
SourceSubnetworkIpRangesToNat *string
```

- *Type:* *string

How NAT should be configured per Subnetwork.

If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the
IP ranges in every Subnetwork are allowed to Nat.
If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP
ranges in every Subnetwork are allowed to Nat.
'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat
(specified in the field subnetwork below). Note that if this field
contains ALL_SUBNETWORKS_ALL_IP_RANGES or
ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
other RouterNat section in any Router for this network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES", "LIST_OF_SUBNETWORKS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#source_subnetwork_ip_ranges_to_nat GoogleComputeRouterNat#source_subnetwork_ip_ranges_to_nat}

---

##### `AutoNetworkTier`<sup>Optional</sup> <a name="AutoNetworkTier" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.autoNetworkTier"></a>

```go
AutoNetworkTier *string
```

- *Type:* *string

The network tier to use when automatically reserving NAT IP addresses.

Must be one of: PREMIUM, STANDARD. If not specified, then the current
project-level default tier is used. Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#auto_network_tier GoogleComputeRouterNat#auto_network_tier}

---

##### `DrainNatIps`<sup>Optional</sup> <a name="DrainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.drainNatIps"></a>

```go
DrainNatIps *[]*string
```

- *Type:* *[]*string

A list of URLs of the IP resources to be drained.

These IPs must be
valid static external IPs that have been assigned to the NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#drain_nat_ips GoogleComputeRouterNat#drain_nat_ips}

---

##### `EnableDynamicPortAllocation`<sup>Optional</sup> <a name="EnableDynamicPortAllocation" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableDynamicPortAllocation"></a>

```go
EnableDynamicPortAllocation interface{}
```

- *Type:* interface{}

Enable Dynamic Port Allocation.

If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.

Mutually exclusive with enableEndpointIndependentMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#enable_dynamic_port_allocation GoogleComputeRouterNat#enable_dynamic_port_allocation}

---

##### `EnableEndpointIndependentMapping`<sup>Optional</sup> <a name="EnableEndpointIndependentMapping" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableEndpointIndependentMapping"></a>

```go
EnableEndpointIndependentMapping interface{}
```

- *Type:* interface{}

Enable endpoint independent mapping. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#enable_endpoint_independent_mapping GoogleComputeRouterNat#enable_endpoint_independent_mapping}

---

##### `EndpointTypes`<sup>Optional</sup> <a name="EndpointTypes" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.endpointTypes"></a>

```go
EndpointTypes *[]*string
```

- *Type:* *[]*string

Specifies the endpoint Types supported by the NAT Gateway.

Supported values include:
'ENDPOINT_TYPE_VM', 'ENDPOINT_TYPE_SWG',
'ENDPOINT_TYPE_MANAGED_PROXY_LB'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#endpoint_types GoogleComputeRouterNat#endpoint_types}

---

##### `IcmpIdleTimeoutSec`<sup>Optional</sup> <a name="IcmpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.icmpIdleTimeoutSec"></a>

```go
IcmpIdleTimeoutSec *f64
```

- *Type:* *f64

Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#icmp_idle_timeout_sec GoogleComputeRouterNat#icmp_idle_timeout_sec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#id GoogleComputeRouterNat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialNatIps`<sup>Optional</sup> <a name="InitialNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.initialNatIps"></a>

```go
InitialNatIps *[]*string
```

- *Type:* *[]*string

Self-links of NAT IPs to be used as initial value for creation alongside a RouterNatAddress resource.

Conflicts with natIps and drainNatIps. Only valid if natIpAllocateOption is set to MANUAL_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#initial_nat_ips GoogleComputeRouterNat#initial_nat_ips}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.logConfig"></a>

```go
LogConfig GoogleComputeRouterNatLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#log_config GoogleComputeRouterNat#log_config}

---

##### `MaxPortsPerVm`<sup>Optional</sup> <a name="MaxPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.maxPortsPerVm"></a>

```go
MaxPortsPerVm *f64
```

- *Type:* *f64

Maximum number of ports allocated to a VM from this NAT.

This field can only be set when enableDynamicPortAllocation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#max_ports_per_vm GoogleComputeRouterNat#max_ports_per_vm}

---

##### `MinPortsPerVm`<sup>Optional</sup> <a name="MinPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.minPortsPerVm"></a>

```go
MinPortsPerVm *f64
```

- *Type:* *f64

Minimum number of ports allocated to a VM from this NAT.

Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#min_ports_per_vm GoogleComputeRouterNat#min_ports_per_vm}

---

##### `NatIpAllocateOption`<sup>Optional</sup> <a name="NatIpAllocateOption" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIpAllocateOption"></a>

```go
NatIpAllocateOption *string
```

- *Type:* *string

How external IPs should be allocated for this NAT.

Valid values are
'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#nat_ip_allocate_option GoogleComputeRouterNat#nat_ip_allocate_option}

---

##### `NatIps`<sup>Optional</sup> <a name="NatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIps"></a>

```go
NatIps *[]*string
```

- *Type:* *[]*string

Self-links of NAT IPs.

Only valid if natIpAllocateOption
is set to MANUAL_ONLY.
If this field is used alongside with a count created list of address resources 'google_compute_address.foobar.*.self_link',
the access level resource for the address resource must have a 'lifecycle' block with 'create_before_destroy = true' so
the number of resources can be increased/decreased without triggering the 'resourceInUseByAnotherResource' error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#nat_ips GoogleComputeRouterNat#nat_ips}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#project GoogleComputeRouterNat#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#region GoogleComputeRouterNat#region}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#rules GoogleComputeRouterNat#rules}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.subnetwork"></a>

```go
Subnetwork interface{}
```

- *Type:* interface{}

subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#subnetwork GoogleComputeRouterNat#subnetwork}

---

##### `TcpEstablishedIdleTimeoutSec`<sup>Optional</sup> <a name="TcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec"></a>

```go
TcpEstablishedIdleTimeoutSec *f64
```

- *Type:* *f64

Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#tcp_established_idle_timeout_sec GoogleComputeRouterNat#tcp_established_idle_timeout_sec}

---

##### `TcpTimeWaitTimeoutSec`<sup>Optional</sup> <a name="TcpTimeWaitTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec"></a>

```go
TcpTimeWaitTimeoutSec *f64
```

- *Type:* *f64

Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#tcp_time_wait_timeout_sec GoogleComputeRouterNat#tcp_time_wait_timeout_sec}

---

##### `TcpTransitoryIdleTimeoutSec`<sup>Optional</sup> <a name="TcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec"></a>

```go
TcpTransitoryIdleTimeoutSec *f64
```

- *Type:* *f64

Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#tcp_transitory_idle_timeout_sec GoogleComputeRouterNat#tcp_transitory_idle_timeout_sec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeRouterNatTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#timeouts GoogleComputeRouterNat#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Indicates whether this NAT is used for public or private IP translation.

If unspecified, it defaults to PUBLIC.
If 'PUBLIC' NAT used for public IP translation.
If 'PRIVATE' NAT used for private IP translation. Default value: "PUBLIC" Possible values: ["PUBLIC", "PRIVATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#type GoogleComputeRouterNat#type}

---

##### `UdpIdleTimeoutSec`<sup>Optional</sup> <a name="UdpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.udpIdleTimeoutSec"></a>

```go
UdpIdleTimeoutSec *f64
```

- *Type:* *f64

Timeout (in seconds) for UDP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#udp_idle_timeout_sec GoogleComputeRouterNat#udp_idle_timeout_sec}

---

### GoogleComputeRouterNatLogConfig <a name="GoogleComputeRouterNatLogConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

&googlecomputerouternat.GoogleComputeRouterNatLogConfig {
	Enable: interface{},
	Filter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.enable">Enable</a></code> | <code>interface{}</code> | Indicates whether or not to export logs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.filter">Filter</a></code> | <code>*string</code> | Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Indicates whether or not to export logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#enable GoogleComputeRouterNat#enable}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#filter GoogleComputeRouterNat#filter}

---

### GoogleComputeRouterNatRules <a name="GoogleComputeRouterNatRules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

&googlecomputerouternat.GoogleComputeRouterNatRules {
	Match: *string,
	RuleNumber: *f64,
	Action: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRouterNat.GoogleComputeRouterNatRulesAction,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.match">Match</a></code> | <code>*string</code> | CEL expression that specifies the match condition that egress traffic from a VM is evaluated against. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.ruleNumber">RuleNumber</a></code> | <code>*f64</code> | An integer uniquely identifying a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.description">Description</a></code> | <code>*string</code> | An optional description of this rule. |

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.match"></a>

```go
Match *string
```

- *Type:* *string

CEL expression that specifies the match condition that egress traffic from a VM is evaluated against.

If it evaluates to true, the corresponding action is enforced.

The following examples are valid match expressions for public NAT:

"inIpRange(destination.ip, '1.1.0.0/16') || inIpRange(destination.ip, '2.2.0.0/16')"

"destination.ip == '1.1.0.1' || destination.ip == '8.8.8.8'"

The following example is a valid match expression for private NAT:

"nexthop.hub == 'https://networkconnectivity.googleapis.com/v1alpha1/projects/my-project/global/hub/hub-1'"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#match GoogleComputeRouterNat#match}

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.ruleNumber"></a>

```go
RuleNumber *f64
```

- *Type:* *f64

An integer uniquely identifying a rule in the list.

The rule number must be a positive value between 0 and 65000, and must be unique among rules within a NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#rule_number GoogleComputeRouterNat#rule_number}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.action"></a>

```go
Action GoogleComputeRouterNatRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#action GoogleComputeRouterNat#action}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#description GoogleComputeRouterNat#description}

---

### GoogleComputeRouterNatRulesAction <a name="GoogleComputeRouterNatRulesAction" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

&googlecomputerouternat.GoogleComputeRouterNatRulesAction {
	SourceNatActiveIps: *[]*string,
	SourceNatActiveRanges: *[]*string,
	SourceNatDrainIps: *[]*string,
	SourceNatDrainRanges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveIps">SourceNatActiveIps</a></code> | <code>*[]*string</code> | A list of URLs of the IP resources used for this NAT rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveRanges">SourceNatActiveRanges</a></code> | <code>*[]*string</code> | A list of URLs of the subnetworks used as source ranges for this NAT Rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainIps">SourceNatDrainIps</a></code> | <code>*[]*string</code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainRanges">SourceNatDrainRanges</a></code> | <code>*[]*string</code> | A list of URLs of subnetworks representing source ranges to be drained. |

---

##### `SourceNatActiveIps`<sup>Optional</sup> <a name="SourceNatActiveIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveIps"></a>

```go
SourceNatActiveIps *[]*string
```

- *Type:* *[]*string

A list of URLs of the IP resources used for this NAT rule.

These IP addresses must be valid static external IP addresses assigned to the project.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#source_nat_active_ips GoogleComputeRouterNat#source_nat_active_ips}

---

##### `SourceNatActiveRanges`<sup>Optional</sup> <a name="SourceNatActiveRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveRanges"></a>

```go
SourceNatActiveRanges *[]*string
```

- *Type:* *[]*string

A list of URLs of the subnetworks used as source ranges for this NAT Rule.

These subnetworks must have purpose set to PRIVATE_NAT.
This field is used for private NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#source_nat_active_ranges GoogleComputeRouterNat#source_nat_active_ranges}

---

##### `SourceNatDrainIps`<sup>Optional</sup> <a name="SourceNatDrainIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainIps"></a>

```go
SourceNatDrainIps *[]*string
```

- *Type:* *[]*string

A list of URLs of the IP resources to be drained.

These IPs must be valid static external IPs that have been assigned to the NAT.
These IPs should be used for updating/patching a NAT rule only.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#source_nat_drain_ips GoogleComputeRouterNat#source_nat_drain_ips}

---

##### `SourceNatDrainRanges`<sup>Optional</sup> <a name="SourceNatDrainRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainRanges"></a>

```go
SourceNatDrainRanges *[]*string
```

- *Type:* *[]*string

A list of URLs of subnetworks representing source ranges to be drained.

This is only supported on patch/update, and these subnetworks must have previously been used as active ranges in this NAT Rule.
This field is used for private NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#source_nat_drain_ranges GoogleComputeRouterNat#source_nat_drain_ranges}

---

### GoogleComputeRouterNatSubnetwork <a name="GoogleComputeRouterNatSubnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

&googlecomputerouternat.GoogleComputeRouterNatSubnetwork {
	Name: *string,
	SourceIpRangesToNat: *[]*string,
	SecondaryIpRangeNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.name">Name</a></code> | <code>*string</code> | Self-link of subnetwork to NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.sourceIpRangesToNat">SourceIpRangesToNat</a></code> | <code>*[]*string</code> | List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.secondaryIpRangeNames">SecondaryIpRangeNames</a></code> | <code>*[]*string</code> | List of the secondary ranges of the subnetwork that are allowed to use NAT. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.name"></a>

```go
Name *string
```

- *Type:* *string

Self-link of subnetwork to NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#name GoogleComputeRouterNat#name}

---

##### `SourceIpRangesToNat`<sup>Required</sup> <a name="SourceIpRangesToNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.sourceIpRangesToNat"></a>

```go
SourceIpRangesToNat *[]*string
```

- *Type:* *[]*string

List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#source_ip_ranges_to_nat GoogleComputeRouterNat#source_ip_ranges_to_nat}

---

##### `SecondaryIpRangeNames`<sup>Optional</sup> <a name="SecondaryIpRangeNames" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.secondaryIpRangeNames"></a>

```go
SecondaryIpRangeNames *[]*string
```

- *Type:* *[]*string

List of the secondary ranges of the subnetwork that are allowed to use NAT.

This can be populated only if
'LIST_OF_SECONDARY_IP_RANGES' is one of the values in
sourceIpRangesToNat

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#secondary_ip_range_names GoogleComputeRouterNat#secondary_ip_range_names}

---

### GoogleComputeRouterNatTimeouts <a name="GoogleComputeRouterNatTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

&googlecomputerouternat.GoogleComputeRouterNatTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#create GoogleComputeRouterNat#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#delete GoogleComputeRouterNat#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#update GoogleComputeRouterNat#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#create GoogleComputeRouterNat#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#delete GoogleComputeRouterNat#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_router_nat#update GoogleComputeRouterNat#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRouterNatLogConfigOutputReference <a name="GoogleComputeRouterNatLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

googlecomputerouternat.NewGoogleComputeRouterNatLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRouterNatLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRouterNatLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

---


### GoogleComputeRouterNatRulesActionOutputReference <a name="GoogleComputeRouterNatRulesActionOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

googlecomputerouternat.NewGoogleComputeRouterNatRulesActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRouterNatRulesActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps">ResetSourceNatActiveIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveRanges">ResetSourceNatActiveRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps">ResetSourceNatDrainIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainRanges">ResetSourceNatDrainRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceNatActiveIps` <a name="ResetSourceNatActiveIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps"></a>

```go
func ResetSourceNatActiveIps()
```

##### `ResetSourceNatActiveRanges` <a name="ResetSourceNatActiveRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveRanges"></a>

```go
func ResetSourceNatActiveRanges()
```

##### `ResetSourceNatDrainIps` <a name="ResetSourceNatDrainIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps"></a>

```go
func ResetSourceNatDrainIps()
```

##### `ResetSourceNatDrainRanges` <a name="ResetSourceNatDrainRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainRanges"></a>

```go
func ResetSourceNatDrainRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput">SourceNatActiveIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRangesInput">SourceNatActiveRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput">SourceNatDrainIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRangesInput">SourceNatDrainRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps">SourceNatActiveIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRanges">SourceNatActiveRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps">SourceNatDrainIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRanges">SourceNatDrainRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceNatActiveIpsInput`<sup>Optional</sup> <a name="SourceNatActiveIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput"></a>

```go
func SourceNatActiveIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceNatActiveRangesInput`<sup>Optional</sup> <a name="SourceNatActiveRangesInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRangesInput"></a>

```go
func SourceNatActiveRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceNatDrainIpsInput`<sup>Optional</sup> <a name="SourceNatDrainIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput"></a>

```go
func SourceNatDrainIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceNatDrainRangesInput`<sup>Optional</sup> <a name="SourceNatDrainRangesInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRangesInput"></a>

```go
func SourceNatDrainRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceNatActiveIps`<sup>Required</sup> <a name="SourceNatActiveIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps"></a>

```go
func SourceNatActiveIps() *[]*string
```

- *Type:* *[]*string

---

##### `SourceNatActiveRanges`<sup>Required</sup> <a name="SourceNatActiveRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRanges"></a>

```go
func SourceNatActiveRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SourceNatDrainIps`<sup>Required</sup> <a name="SourceNatDrainIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps"></a>

```go
func SourceNatDrainIps() *[]*string
```

- *Type:* *[]*string

---

##### `SourceNatDrainRanges`<sup>Required</sup> <a name="SourceNatDrainRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRanges"></a>

```go
func SourceNatDrainRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRouterNatRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a>

---


### GoogleComputeRouterNatRulesList <a name="GoogleComputeRouterNatRulesList" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

googlecomputerouternat.NewGoogleComputeRouterNatRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRouterNatRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.get"></a>

```go
func Get(index *f64) GoogleComputeRouterNatRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRouterNatRulesOutputReference <a name="GoogleComputeRouterNatRulesOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

googlecomputerouternat.NewGoogleComputeRouterNatRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRouterNatRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.putAction"></a>

```go
func PutAction(value GoogleComputeRouterNatRulesAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference">GoogleComputeRouterNatRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.matchInput">MatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumberInput">RuleNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.match">Match</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumber">RuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.action"></a>

```go
func Action() GoogleComputeRouterNatRulesActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference">GoogleComputeRouterNatRulesActionOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() GoogleComputeRouterNatRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.matchInput"></a>

```go
func MatchInput() *string
```

- *Type:* *string

---

##### `RuleNumberInput`<sup>Optional</sup> <a name="RuleNumberInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumberInput"></a>

```go
func RuleNumberInput() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.match"></a>

```go
func Match() *string
```

- *Type:* *string

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumber"></a>

```go
func RuleNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRouterNatSubnetworkList <a name="GoogleComputeRouterNatSubnetworkList" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

googlecomputerouternat.NewGoogleComputeRouterNatSubnetworkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRouterNatSubnetworkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.get"></a>

```go
func Get(index *f64) GoogleComputeRouterNatSubnetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRouterNatSubnetworkOutputReference <a name="GoogleComputeRouterNatSubnetworkOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

googlecomputerouternat.NewGoogleComputeRouterNatSubnetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRouterNatSubnetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames">ResetSecondaryIpRangeNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecondaryIpRangeNames` <a name="ResetSecondaryIpRangeNames" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames"></a>

```go
func ResetSecondaryIpRangeNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput">SecondaryIpRangeNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput">SourceIpRangesToNatInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames">SecondaryIpRangeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat">SourceIpRangesToNat</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecondaryIpRangeNamesInput`<sup>Optional</sup> <a name="SecondaryIpRangeNamesInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput"></a>

```go
func SecondaryIpRangeNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceIpRangesToNatInput`<sup>Optional</sup> <a name="SourceIpRangesToNatInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput"></a>

```go
func SourceIpRangesToNatInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecondaryIpRangeNames`<sup>Required</sup> <a name="SecondaryIpRangeNames" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames"></a>

```go
func SecondaryIpRangeNames() *[]*string
```

- *Type:* *[]*string

---

##### `SourceIpRangesToNat`<sup>Required</sup> <a name="SourceIpRangesToNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat"></a>

```go
func SourceIpRangesToNat() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRouterNatTimeoutsOutputReference <a name="GoogleComputeRouterNatTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputerouternat"

googlecomputerouternat.NewGoogleComputeRouterNatTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRouterNatTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



