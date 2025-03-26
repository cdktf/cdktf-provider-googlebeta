# `googleComputeRegionBackendService` Submodule <a name="`googleComputeRegionBackendService` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionBackendService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionBackendService <a name="GoogleComputeRegionBackendService" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service google_compute_region_backend_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendService(scope Construct, id *string, config GoogleComputeRegionBackendServiceConfig) GoogleComputeRegionBackendService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig">GoogleComputeRegionBackendServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig">GoogleComputeRegionBackendServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putBackend">PutBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCdnPolicy">PutCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCircuitBreakers">PutCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConnectionTrackingPolicy">PutConnectionTrackingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConsistentHash">PutConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCustomMetrics">PutCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putFailoverPolicy">PutFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putIap">PutIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putOutlierDetection">PutOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putStrongSessionAffinityCookie">PutStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putSubsetting">PutSubsetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetAffinityCookieTtlSec">ResetAffinityCookieTtlSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetCdnPolicy">ResetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetCircuitBreakers">ResetCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConnectionDrainingTimeoutSec">ResetConnectionDrainingTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConnectionTrackingPolicy">ResetConnectionTrackingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConsistentHash">ResetConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetCustomMetrics">ResetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetEnableCdn">ResetEnableCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetFailoverPolicy">ResetFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetHealthChecks">ResetHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetIap">ResetIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetIpAddressSelectionPolicy">ResetIpAddressSelectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLoadBalancingScheme">ResetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLocalityLbPolicy">ResetLocalityLbPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetOutlierDetection">ResetOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSessionAffinity">ResetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetStrongSessionAffinityCookie">ResetStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSubsetting">ResetSubsetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetTimeoutSec">ResetTimeoutSec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackend` <a name="PutBackend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putBackend"></a>

```go
func PutBackend(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putBackend.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCdnPolicy` <a name="PutCdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCdnPolicy"></a>

```go
func PutCdnPolicy(value GoogleComputeRegionBackendServiceCdnPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a>

---

##### `PutCircuitBreakers` <a name="PutCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCircuitBreakers"></a>

```go
func PutCircuitBreakers(value GoogleComputeRegionBackendServiceCircuitBreakers)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCircuitBreakers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a>

---

##### `PutConnectionTrackingPolicy` <a name="PutConnectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConnectionTrackingPolicy"></a>

```go
func PutConnectionTrackingPolicy(value GoogleComputeRegionBackendServiceConnectionTrackingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConnectionTrackingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

---

##### `PutConsistentHash` <a name="PutConsistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConsistentHash"></a>

```go
func PutConsistentHash(value GoogleComputeRegionBackendServiceConsistentHash)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConsistentHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a>

---

##### `PutCustomMetrics` <a name="PutCustomMetrics" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCustomMetrics"></a>

```go
func PutCustomMetrics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCustomMetrics.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFailoverPolicy` <a name="PutFailoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putFailoverPolicy"></a>

```go
func PutFailoverPolicy(value GoogleComputeRegionBackendServiceFailoverPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putFailoverPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a>

---

##### `PutIap` <a name="PutIap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putIap"></a>

```go
func PutIap(value GoogleComputeRegionBackendServiceIap)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putIap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a>

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putLogConfig"></a>

```go
func PutLogConfig(value GoogleComputeRegionBackendServiceLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a>

---

##### `PutOutlierDetection` <a name="PutOutlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putOutlierDetection"></a>

```go
func PutOutlierDetection(value GoogleComputeRegionBackendServiceOutlierDetection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putOutlierDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a>

---

##### `PutStrongSessionAffinityCookie` <a name="PutStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putStrongSessionAffinityCookie"></a>

```go
func PutStrongSessionAffinityCookie(value GoogleComputeRegionBackendServiceStrongSessionAffinityCookie)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putStrongSessionAffinityCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

---

##### `PutSubsetting` <a name="PutSubsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putSubsetting"></a>

```go
func PutSubsetting(value GoogleComputeRegionBackendServiceSubsetting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putSubsetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeRegionBackendServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a>

---

##### `ResetAffinityCookieTtlSec` <a name="ResetAffinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetAffinityCookieTtlSec"></a>

```go
func ResetAffinityCookieTtlSec()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetCdnPolicy` <a name="ResetCdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetCdnPolicy"></a>

```go
func ResetCdnPolicy()
```

##### `ResetCircuitBreakers` <a name="ResetCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetCircuitBreakers"></a>

```go
func ResetCircuitBreakers()
```

##### `ResetConnectionDrainingTimeoutSec` <a name="ResetConnectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConnectionDrainingTimeoutSec"></a>

```go
func ResetConnectionDrainingTimeoutSec()
```

##### `ResetConnectionTrackingPolicy` <a name="ResetConnectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConnectionTrackingPolicy"></a>

```go
func ResetConnectionTrackingPolicy()
```

##### `ResetConsistentHash` <a name="ResetConsistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConsistentHash"></a>

```go
func ResetConsistentHash()
```

##### `ResetCustomMetrics` <a name="ResetCustomMetrics" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetCustomMetrics"></a>

```go
func ResetCustomMetrics()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableCdn` <a name="ResetEnableCdn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetEnableCdn"></a>

```go
func ResetEnableCdn()
```

##### `ResetFailoverPolicy` <a name="ResetFailoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetFailoverPolicy"></a>

```go
func ResetFailoverPolicy()
```

##### `ResetHealthChecks` <a name="ResetHealthChecks" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetHealthChecks"></a>

```go
func ResetHealthChecks()
```

##### `ResetIap` <a name="ResetIap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetIap"></a>

```go
func ResetIap()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddressSelectionPolicy` <a name="ResetIpAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetIpAddressSelectionPolicy"></a>

```go
func ResetIpAddressSelectionPolicy()
```

##### `ResetLoadBalancingScheme` <a name="ResetLoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLoadBalancingScheme"></a>

```go
func ResetLoadBalancingScheme()
```

##### `ResetLocalityLbPolicy` <a name="ResetLocalityLbPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLocalityLbPolicy"></a>

```go
func ResetLocalityLbPolicy()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLogConfig"></a>

```go
func ResetLogConfig()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetOutlierDetection` <a name="ResetOutlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetOutlierDetection"></a>

```go
func ResetOutlierDetection()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSecurityPolicy"></a>

```go
func ResetSecurityPolicy()
```

##### `ResetSessionAffinity` <a name="ResetSessionAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSessionAffinity"></a>

```go
func ResetSessionAffinity()
```

##### `ResetStrongSessionAffinityCookie` <a name="ResetStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetStrongSessionAffinityCookie"></a>

```go
func ResetStrongSessionAffinityCookie()
```

##### `ResetSubsetting` <a name="ResetSubsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSubsetting"></a>

```go
func ResetSubsetting()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeoutSec` <a name="ResetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetTimeoutSec"></a>

```go
func ResetTimeoutSec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionBackendService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.GoogleComputeRegionBackendService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.GoogleComputeRegionBackendService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.GoogleComputeRegionBackendService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.GoogleComputeRegionBackendService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeRegionBackendService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeRegionBackendService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeRegionBackendService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionBackendService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.backend">Backend</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList">GoogleComputeRegionBackendServiceBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdnPolicy">CdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference">GoogleComputeRegionBackendServiceCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.circuitBreakers">CircuitBreakers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference">GoogleComputeRegionBackendServiceCircuitBreakersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionTrackingPolicy">ConnectionTrackingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference">GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.consistentHash">ConsistentHash</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference">GoogleComputeRegionBackendServiceConsistentHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.customMetrics">CustomMetrics</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList">GoogleComputeRegionBackendServiceCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.failoverPolicy">FailoverPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference">GoogleComputeRegionBackendServiceFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.generatedId">GeneratedId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.iap">Iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference">GoogleComputeRegionBackendServiceIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference">GoogleComputeRegionBackendServiceLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.outlierDetection">OutlierDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.strongSessionAffinityCookie">StrongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.subsetting">Subsetting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference">GoogleComputeRegionBackendServiceSubsettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference">GoogleComputeRegionBackendServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.affinityCookieTtlSecInput">AffinityCookieTtlSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.backendInput">BackendInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdnPolicyInput">CdnPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.circuitBreakersInput">CircuitBreakersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionDrainingTimeoutSecInput">ConnectionDrainingTimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionTrackingPolicyInput">ConnectionTrackingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.consistentHashInput">ConsistentHashInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.customMetricsInput">CustomMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.enableCdnInput">EnableCdnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.failoverPolicyInput">FailoverPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.healthChecksInput">HealthChecksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.iapInput">IapInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.ipAddressSelectionPolicyInput">IpAddressSelectionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.loadBalancingSchemeInput">LoadBalancingSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.localityLbPolicyInput">LocalityLbPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.outlierDetectionInput">OutlierDetectionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.sessionAffinityInput">SessionAffinityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.strongSessionAffinityCookieInput">StrongSessionAffinityCookieInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.subsettingInput">SubsettingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutSecInput">TimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.affinityCookieTtlSec">AffinityCookieTtlSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionDrainingTimeoutSec">ConnectionDrainingTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.enableCdn">EnableCdn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.healthChecks">HealthChecks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.ipAddressSelectionPolicy">IpAddressSelectionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.localityLbPolicy">LocalityLbPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.sessionAffinity">SessionAffinity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.backend"></a>

```go
func Backend() GoogleComputeRegionBackendServiceBackendList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList">GoogleComputeRegionBackendServiceBackendList</a>

---

##### `CdnPolicy`<sup>Required</sup> <a name="CdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdnPolicy"></a>

```go
func CdnPolicy() GoogleComputeRegionBackendServiceCdnPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference">GoogleComputeRegionBackendServiceCdnPolicyOutputReference</a>

---

##### `CircuitBreakers`<sup>Required</sup> <a name="CircuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.circuitBreakers"></a>

```go
func CircuitBreakers() GoogleComputeRegionBackendServiceCircuitBreakersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference">GoogleComputeRegionBackendServiceCircuitBreakersOutputReference</a>

---

##### `ConnectionTrackingPolicy`<sup>Required</sup> <a name="ConnectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionTrackingPolicy"></a>

```go
func ConnectionTrackingPolicy() GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference">GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference</a>

---

##### `ConsistentHash`<sup>Required</sup> <a name="ConsistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.consistentHash"></a>

```go
func ConsistentHash() GoogleComputeRegionBackendServiceConsistentHashOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference">GoogleComputeRegionBackendServiceConsistentHashOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `CustomMetrics`<sup>Required</sup> <a name="CustomMetrics" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.customMetrics"></a>

```go
func CustomMetrics() GoogleComputeRegionBackendServiceCustomMetricsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList">GoogleComputeRegionBackendServiceCustomMetricsList</a>

---

##### `FailoverPolicy`<sup>Required</sup> <a name="FailoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.failoverPolicy"></a>

```go
func FailoverPolicy() GoogleComputeRegionBackendServiceFailoverPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference">GoogleComputeRegionBackendServiceFailoverPolicyOutputReference</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `GeneratedId`<sup>Required</sup> <a name="GeneratedId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.generatedId"></a>

```go
func GeneratedId() *f64
```

- *Type:* *f64

---

##### `Iap`<sup>Required</sup> <a name="Iap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.iap"></a>

```go
func Iap() GoogleComputeRegionBackendServiceIapOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference">GoogleComputeRegionBackendServiceIapOutputReference</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.logConfig"></a>

```go
func LogConfig() GoogleComputeRegionBackendServiceLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference">GoogleComputeRegionBackendServiceLogConfigOutputReference</a>

---

##### `OutlierDetection`<sup>Required</sup> <a name="OutlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.outlierDetection"></a>

```go
func OutlierDetection() GoogleComputeRegionBackendServiceOutlierDetectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `StrongSessionAffinityCookie`<sup>Required</sup> <a name="StrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.strongSessionAffinityCookie"></a>

```go
func StrongSessionAffinityCookie() GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference</a>

---

##### `Subsetting`<sup>Required</sup> <a name="Subsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.subsetting"></a>

```go
func Subsetting() GoogleComputeRegionBackendServiceSubsettingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference">GoogleComputeRegionBackendServiceSubsettingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeouts"></a>

```go
func Timeouts() GoogleComputeRegionBackendServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference">GoogleComputeRegionBackendServiceTimeoutsOutputReference</a>

---

##### `AffinityCookieTtlSecInput`<sup>Optional</sup> <a name="AffinityCookieTtlSecInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.affinityCookieTtlSecInput"></a>

```go
func AffinityCookieTtlSecInput() *f64
```

- *Type:* *f64

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.backendInput"></a>

```go
func BackendInput() interface{}
```

- *Type:* interface{}

---

##### `CdnPolicyInput`<sup>Optional</sup> <a name="CdnPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdnPolicyInput"></a>

```go
func CdnPolicyInput() GoogleComputeRegionBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a>

---

##### `CircuitBreakersInput`<sup>Optional</sup> <a name="CircuitBreakersInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.circuitBreakersInput"></a>

```go
func CircuitBreakersInput() GoogleComputeRegionBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a>

---

##### `ConnectionDrainingTimeoutSecInput`<sup>Optional</sup> <a name="ConnectionDrainingTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionDrainingTimeoutSecInput"></a>

```go
func ConnectionDrainingTimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `ConnectionTrackingPolicyInput`<sup>Optional</sup> <a name="ConnectionTrackingPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionTrackingPolicyInput"></a>

```go
func ConnectionTrackingPolicyInput() GoogleComputeRegionBackendServiceConnectionTrackingPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

---

##### `ConsistentHashInput`<sup>Optional</sup> <a name="ConsistentHashInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.consistentHashInput"></a>

```go
func ConsistentHashInput() GoogleComputeRegionBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a>

---

##### `CustomMetricsInput`<sup>Optional</sup> <a name="CustomMetricsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.customMetricsInput"></a>

```go
func CustomMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnableCdnInput`<sup>Optional</sup> <a name="EnableCdnInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.enableCdnInput"></a>

```go
func EnableCdnInput() interface{}
```

- *Type:* interface{}

---

##### `FailoverPolicyInput`<sup>Optional</sup> <a name="FailoverPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.failoverPolicyInput"></a>

```go
func FailoverPolicyInput() GoogleComputeRegionBackendServiceFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a>

---

##### `HealthChecksInput`<sup>Optional</sup> <a name="HealthChecksInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.healthChecksInput"></a>

```go
func HealthChecksInput() *[]*string
```

- *Type:* *[]*string

---

##### `IapInput`<sup>Optional</sup> <a name="IapInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.iapInput"></a>

```go
func IapInput() GoogleComputeRegionBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressSelectionPolicyInput`<sup>Optional</sup> <a name="IpAddressSelectionPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.ipAddressSelectionPolicyInput"></a>

```go
func IpAddressSelectionPolicyInput() *string
```

- *Type:* *string

---

##### `LoadBalancingSchemeInput`<sup>Optional</sup> <a name="LoadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.loadBalancingSchemeInput"></a>

```go
func LoadBalancingSchemeInput() *string
```

- *Type:* *string

---

##### `LocalityLbPolicyInput`<sup>Optional</sup> <a name="LocalityLbPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.localityLbPolicyInput"></a>

```go
func LocalityLbPolicyInput() *string
```

- *Type:* *string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.logConfigInput"></a>

```go
func LogConfigInput() GoogleComputeRegionBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `OutlierDetectionInput`<sup>Optional</sup> <a name="OutlierDetectionInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.outlierDetectionInput"></a>

```go
func OutlierDetectionInput() GoogleComputeRegionBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a>

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.securityPolicyInput"></a>

```go
func SecurityPolicyInput() *string
```

- *Type:* *string

---

##### `SessionAffinityInput`<sup>Optional</sup> <a name="SessionAffinityInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.sessionAffinityInput"></a>

```go
func SessionAffinityInput() *string
```

- *Type:* *string

---

##### `StrongSessionAffinityCookieInput`<sup>Optional</sup> <a name="StrongSessionAffinityCookieInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.strongSessionAffinityCookieInput"></a>

```go
func StrongSessionAffinityCookieInput() GoogleComputeRegionBackendServiceStrongSessionAffinityCookie
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

---

##### `SubsettingInput`<sup>Optional</sup> <a name="SubsettingInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.subsettingInput"></a>

```go
func SubsettingInput() GoogleComputeRegionBackendServiceSubsetting
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a>

---

##### `TimeoutSecInput`<sup>Optional</sup> <a name="TimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutSecInput"></a>

```go
func TimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AffinityCookieTtlSec`<sup>Required</sup> <a name="AffinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.affinityCookieTtlSec"></a>

```go
func AffinityCookieTtlSec() *f64
```

- *Type:* *f64

---

##### `ConnectionDrainingTimeoutSec`<sup>Required</sup> <a name="ConnectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionDrainingTimeoutSec"></a>

```go
func ConnectionDrainingTimeoutSec() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableCdn`<sup>Required</sup> <a name="EnableCdn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.enableCdn"></a>

```go
func EnableCdn() interface{}
```

- *Type:* interface{}

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.healthChecks"></a>

```go
func HealthChecks() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddressSelectionPolicy`<sup>Required</sup> <a name="IpAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.ipAddressSelectionPolicy"></a>

```go
func IpAddressSelectionPolicy() *string
```

- *Type:* *string

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.loadBalancingScheme"></a>

```go
func LoadBalancingScheme() *string
```

- *Type:* *string

---

##### `LocalityLbPolicy`<sup>Required</sup> <a name="LocalityLbPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.localityLbPolicy"></a>

```go
func LocalityLbPolicy() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.securityPolicy"></a>

```go
func SecurityPolicy() *string
```

- *Type:* *string

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.sessionAffinity"></a>

```go
func SessionAffinity() *string
```

- *Type:* *string

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutSec"></a>

```go
func TimeoutSec() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionBackendServiceBackend <a name="GoogleComputeRegionBackendServiceBackend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceBackend {
	Group: *string,
	BalancingMode: *string,
	CapacityScaler: *f64,
	CustomMetrics: interface{},
	Description: *string,
	Failover: interface{},
	MaxConnections: *f64,
	MaxConnectionsPerEndpoint: *f64,
	MaxConnectionsPerInstance: *f64,
	MaxRate: *f64,
	MaxRatePerEndpoint: *f64,
	MaxRatePerInstance: *f64,
	MaxUtilization: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.group">Group</a></code> | <code>*string</code> | The fully-qualified URL of an Instance Group or Network Endpoint Group resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.balancingMode">BalancingMode</a></code> | <code>*string</code> | Specifies the balancing mode for this backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.capacityScaler">CapacityScaler</a></code> | <code>*f64</code> | A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.customMetrics">CustomMetrics</a></code> | <code>interface{}</code> | custom_metrics block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.failover">Failover</a></code> | <code>interface{}</code> | This field designates whether this is a failover backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | The max number of simultaneous connections for the group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnectionsPerEndpoint">MaxConnectionsPerEndpoint</a></code> | <code>*f64</code> | The max number of simultaneous connections that a single backend network endpoint can handle. Cannot be set for INTERNAL backend services. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnectionsPerInstance">MaxConnectionsPerInstance</a></code> | <code>*f64</code> | The max number of simultaneous connections that a single backend instance can handle. Cannot be set for INTERNAL backend services. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRate">MaxRate</a></code> | <code>*f64</code> | The max requests per second (RPS) of the group. Cannot be set for INTERNAL backend services. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRatePerEndpoint">MaxRatePerEndpoint</a></code> | <code>*f64</code> | The max requests per second (RPS) that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRatePerInstance">MaxRatePerInstance</a></code> | <code>*f64</code> | The max requests per second (RPS) that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxUtilization">MaxUtilization</a></code> | <code>*f64</code> | Used when balancingMode is UTILIZATION. |

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.group"></a>

```go
Group *string
```

- *Type:* *string

The fully-qualified URL of an Instance Group or Network Endpoint Group resource.

In case of instance group this defines the list
of instances that serve traffic. Member virtual machine
instances from each instance group must live in the same zone as
the instance group itself. No two backends in a backend service
are allowed to use same Instance Group resource.

For Network Endpoint Groups this defines list of endpoints. All
endpoints of Network Endpoint Group must be hosted on instances
located in the same zone as the Network Endpoint Group.

Backend services cannot mix Instance Group and
Network Endpoint Group backends.

When the 'load_balancing_scheme' is INTERNAL, only instance groups
are supported.

Note that you must specify an Instance Group or Network Endpoint
Group resource using the fully-qualified URL, rather than a
partial URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#group GoogleComputeRegionBackendService#group}

---

##### `BalancingMode`<sup>Optional</sup> <a name="BalancingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.balancingMode"></a>

```go
BalancingMode *string
```

- *Type:* *string

Specifies the balancing mode for this backend.

See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
for an explanation of load balancing modes. Default value: "UTILIZATION" Possible values: ["UTILIZATION", "RATE", "CONNECTION", "CUSTOM_METRICS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#balancing_mode GoogleComputeRegionBackendService#balancing_mode}

---

##### `CapacityScaler`<sup>Optional</sup> <a name="CapacityScaler" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.capacityScaler"></a>

```go
CapacityScaler *f64
```

- *Type:* *f64

A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION).

~>**NOTE**: This field cannot be set for
INTERNAL region backend services (default loadBalancingScheme),
but is required for non-INTERNAL backend service. The total
capacity_scaler for all backends must be non-zero.

A setting of 0 means the group is completely drained, offering
0% of its available Capacity. Valid range is [0.0,1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#capacity_scaler GoogleComputeRegionBackendService#capacity_scaler}

---

##### `CustomMetrics`<sup>Optional</sup> <a name="CustomMetrics" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.customMetrics"></a>

```go
CustomMetrics interface{}
```

- *Type:* interface{}

custom_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#custom_metrics GoogleComputeRegionBackendService#custom_metrics}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#description GoogleComputeRegionBackendService#description}

---

##### `Failover`<sup>Optional</sup> <a name="Failover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.failover"></a>

```go
Failover interface{}
```

- *Type:* interface{}

This field designates whether this is a failover backend.

More
than one failover backend can be configured for a given RegionBackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#failover GoogleComputeRegionBackendService#failover}

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnections"></a>

```go
MaxConnections *f64
```

- *Type:* *f64

The max number of simultaneous connections for the group.

Can
be used with either CONNECTION or UTILIZATION balancing modes.
Cannot be set for INTERNAL backend services.

For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#max_connections GoogleComputeRegionBackendService#max_connections}

---

##### `MaxConnectionsPerEndpoint`<sup>Optional</sup> <a name="MaxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnectionsPerEndpoint"></a>

```go
MaxConnectionsPerEndpoint *f64
```

- *Type:* *f64

The max number of simultaneous connections that a single backend network endpoint can handle. Cannot be set for INTERNAL backend services.

This is used to calculate the capacity of the group. Can be
used in either CONNECTION or UTILIZATION balancing modes. For
CONNECTION mode, either maxConnections or
maxConnectionsPerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#max_connections_per_endpoint GoogleComputeRegionBackendService#max_connections_per_endpoint}

---

##### `MaxConnectionsPerInstance`<sup>Optional</sup> <a name="MaxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnectionsPerInstance"></a>

```go
MaxConnectionsPerInstance *f64
```

- *Type:* *f64

The max number of simultaneous connections that a single backend instance can handle. Cannot be set for INTERNAL backend services.

This is used to calculate the capacity of the group.
Can be used in either CONNECTION or UTILIZATION balancing modes.
For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#max_connections_per_instance GoogleComputeRegionBackendService#max_connections_per_instance}

---

##### `MaxRate`<sup>Optional</sup> <a name="MaxRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRate"></a>

```go
MaxRate *f64
```

- *Type:* *f64

The max requests per second (RPS) of the group. Cannot be set for INTERNAL backend services.

Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. Either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#max_rate GoogleComputeRegionBackendService#max_rate}

---

##### `MaxRatePerEndpoint`<sup>Optional</sup> <a name="MaxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRatePerEndpoint"></a>

```go
MaxRatePerEndpoint *f64
```

- *Type:* *f64

The max requests per second (RPS) that a single backend network endpoint can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set. Cannot be set
for INTERNAL backend services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#max_rate_per_endpoint GoogleComputeRegionBackendService#max_rate_per_endpoint}

---

##### `MaxRatePerInstance`<sup>Optional</sup> <a name="MaxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRatePerInstance"></a>

```go
MaxRatePerInstance *f64
```

- *Type:* *f64

The max requests per second (RPS) that a single backend instance can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set. Cannot be set
for INTERNAL backend services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#max_rate_per_instance GoogleComputeRegionBackendService#max_rate_per_instance}

---

##### `MaxUtilization`<sup>Optional</sup> <a name="MaxUtilization" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxUtilization"></a>

```go
MaxUtilization *f64
```

- *Type:* *f64

Used when balancingMode is UTILIZATION.

This ratio defines the
CPU utilization target for the group. Valid range is [0.0, 1.0].
Cannot be set for INTERNAL backend services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#max_utilization GoogleComputeRegionBackendService#max_utilization}

---

### GoogleComputeRegionBackendServiceBackendCustomMetrics <a name="GoogleComputeRegionBackendServiceBackendCustomMetrics" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetrics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceBackendCustomMetrics {
	DryRun: interface{},
	Name: *string,
	MaxUtilization: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetrics.property.dryRun">DryRun</a></code> | <code>interface{}</code> | If true, the metric data is collected and reported to Cloud Monitoring, but is not used for load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetrics.property.name">Name</a></code> | <code>*string</code> | Name of a custom utilization signal. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetrics.property.maxUtilization">MaxUtilization</a></code> | <code>*f64</code> | Optional parameter to define a target utilization for the Custom Metrics balancing mode. The valid range is <code>[0.0, 1.0]</code>. |

---

##### `DryRun`<sup>Required</sup> <a name="DryRun" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetrics.property.dryRun"></a>

```go
DryRun interface{}
```

- *Type:* interface{}

If true, the metric data is collected and reported to Cloud Monitoring, but is not used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#dry_run GoogleComputeRegionBackendService#dry_run}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetrics.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of a custom utilization signal.

The name must be 1-64 characters
long and match the regular expression [a-z](%5B-_.a-z0-9%5D*%5Ba-z0-9%5D)? which
means the first character must be a lowercase letter, and all following
characters must be a dash, period, underscore, lowercase letter, or
digit, except the last character, which cannot be a dash, period, or
underscore. For usage guidelines, see Custom Metrics balancing mode. This
field can only be used for a global or regional backend service with the
loadBalancingScheme set to <code>EXTERNAL_MANAGED</code>,
<code>INTERNAL_MANAGED</code> <code>INTERNAL_SELF_MANAGED</code>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}

---

##### `MaxUtilization`<sup>Optional</sup> <a name="MaxUtilization" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetrics.property.maxUtilization"></a>

```go
MaxUtilization *f64
```

- *Type:* *f64

Optional parameter to define a target utilization for the Custom Metrics balancing mode. The valid range is <code>[0.0, 1.0]</code>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#max_utilization GoogleComputeRegionBackendService#max_utilization}

---

### GoogleComputeRegionBackendServiceCdnPolicy <a name="GoogleComputeRegionBackendServiceCdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceCdnPolicy {
	CacheKeyPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy,
	CacheMode: *string,
	ClientTtl: *f64,
	DefaultTtl: *f64,
	MaxTtl: *f64,
	NegativeCaching: interface{},
	NegativeCachingPolicy: interface{},
	ServeWhileStale: *f64,
	SignedUrlCacheMaxAgeSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.cacheKeyPolicy">CacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.cacheMode">CacheMode</a></code> | <code>*string</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.clientTtl">ClientTtl</a></code> | <code>*f64</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.negativeCaching">NegativeCaching</a></code> | <code>interface{}</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.negativeCachingPolicy">NegativeCachingPolicy</a></code> | <code>interface{}</code> | negative_caching_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.serveWhileStale">ServeWhileStale</a></code> | <code>*f64</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec">SignedUrlCacheMaxAgeSec</a></code> | <code>*f64</code> | Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s). |

---

##### `CacheKeyPolicy`<sup>Optional</sup> <a name="CacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.cacheKeyPolicy"></a>

```go
CacheKeyPolicy GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#cache_key_policy GoogleComputeRegionBackendService#cache_key_policy}

---

##### `CacheMode`<sup>Optional</sup> <a name="CacheMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.cacheMode"></a>

```go
CacheMode *string
```

- *Type:* *string

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#cache_mode GoogleComputeRegionBackendService#cache_mode}

---

##### `ClientTtl`<sup>Optional</sup> <a name="ClientTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.clientTtl"></a>

```go
ClientTtl *f64
```

- *Type:* *f64

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#client_ttl GoogleComputeRegionBackendService#client_ttl}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.defaultTtl"></a>

```go
DefaultTtl *f64
```

- *Type:* *f64

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#default_ttl GoogleComputeRegionBackendService#default_ttl}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.maxTtl"></a>

```go
MaxTtl *f64
```

- *Type:* *f64

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#max_ttl GoogleComputeRegionBackendService#max_ttl}

---

##### `NegativeCaching`<sup>Optional</sup> <a name="NegativeCaching" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.negativeCaching"></a>

```go
NegativeCaching interface{}
```

- *Type:* interface{}

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#negative_caching GoogleComputeRegionBackendService#negative_caching}

---

##### `NegativeCachingPolicy`<sup>Optional</sup> <a name="NegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.negativeCachingPolicy"></a>

```go
NegativeCachingPolicy interface{}
```

- *Type:* interface{}

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#negative_caching_policy GoogleComputeRegionBackendService#negative_caching_policy}

---

##### `ServeWhileStale`<sup>Optional</sup> <a name="ServeWhileStale" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.serveWhileStale"></a>

```go
ServeWhileStale *f64
```

- *Type:* *f64

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#serve_while_stale GoogleComputeRegionBackendService#serve_while_stale}

---

##### `SignedUrlCacheMaxAgeSec`<sup>Optional</sup> <a name="SignedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

```go
SignedUrlCacheMaxAgeSec *f64
```

- *Type:* *f64

Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s).

After this
time period, the response will be revalidated before
being served.

When serving responses to signed URL requests, Cloud CDN will
internally behave as though all responses from this backend had a
"Cache-Control: public, max-age=[TTL]" header, regardless of any
existing Cache-Control header. The actual headers served in
responses will not be altered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#signed_url_cache_max_age_sec GoogleComputeRegionBackendService#signed_url_cache_max_age_sec}

---

### GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy <a name="GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy {
	IncludeHost: interface{},
	IncludeNamedCookies: *[]*string,
	IncludeProtocol: interface{},
	IncludeQueryString: interface{},
	QueryStringBlacklist: *[]*string,
	QueryStringWhitelist: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost">IncludeHost</a></code> | <code>interface{}</code> | If true requests to different hosts will be cached separately. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies">IncludeNamedCookies</a></code> | <code>*[]*string</code> | Names of cookies to include in cache keys. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol">IncludeProtocol</a></code> | <code>interface{}</code> | If true, http and https requests will be cached separately. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString">IncludeQueryString</a></code> | <code>interface{}</code> | If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist">QueryStringBlacklist</a></code> | <code>*[]*string</code> | Names of query string parameters to exclude in cache keys. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">QueryStringWhitelist</a></code> | <code>*[]*string</code> | Names of query string parameters to include in cache keys. |

---

##### `IncludeHost`<sup>Optional</sup> <a name="IncludeHost" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost"></a>

```go
IncludeHost interface{}
```

- *Type:* interface{}

If true requests to different hosts will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#include_host GoogleComputeRegionBackendService#include_host}

---

##### `IncludeNamedCookies`<sup>Optional</sup> <a name="IncludeNamedCookies" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies"></a>

```go
IncludeNamedCookies *[]*string
```

- *Type:* *[]*string

Names of cookies to include in cache keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#include_named_cookies GoogleComputeRegionBackendService#include_named_cookies}

---

##### `IncludeProtocol`<sup>Optional</sup> <a name="IncludeProtocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol"></a>

```go
IncludeProtocol interface{}
```

- *Type:* interface{}

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#include_protocol GoogleComputeRegionBackendService#include_protocol}

---

##### `IncludeQueryString`<sup>Optional</sup> <a name="IncludeQueryString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString"></a>

```go
IncludeQueryString interface{}
```

- *Type:* interface{}

If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist.

If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#include_query_string GoogleComputeRegionBackendService#include_query_string}

---

##### `QueryStringBlacklist`<sup>Optional</sup> <a name="QueryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist"></a>

```go
QueryStringBlacklist *[]*string
```

- *Type:* *[]*string

Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#query_string_blacklist GoogleComputeRegionBackendService#query_string_blacklist}

---

##### `QueryStringWhitelist`<sup>Optional</sup> <a name="QueryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```go
QueryStringWhitelist *[]*string
```

- *Type:* *[]*string

Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#query_string_whitelist GoogleComputeRegionBackendService#query_string_whitelist}

---

### GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy <a name="GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy {
	Code: *f64,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.code">Code</a></code> | <code>*f64</code> | The HTTP status code to define a TTL against. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl">Ttl</a></code> | <code>*f64</code> | The TTL (in seconds) for which to cache responses with the corresponding status code. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.code"></a>

```go
Code *f64
```

- *Type:* *f64

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#code GoogleComputeRegionBackendService#code}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

The TTL (in seconds) for which to cache responses with the corresponding status code.

The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#ttl GoogleComputeRegionBackendService#ttl}

---

### GoogleComputeRegionBackendServiceCircuitBreakers <a name="GoogleComputeRegionBackendServiceCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceCircuitBreakers {
	ConnectTimeout: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout,
	MaxConnections: *f64,
	MaxPendingRequests: *f64,
	MaxRequests: *f64,
	MaxRequestsPerConnection: *f64,
	MaxRetries: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.connectTimeout">ConnectTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a></code> | connect_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | The maximum number of connections to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>*f64</code> | The maximum number of pending requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRequests">MaxRequests</a></code> | <code>*f64</code> | The maximum number of parallel requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRequestsPerConnection">MaxRequestsPerConnection</a></code> | <code>*f64</code> | Maximum requests for a single backend connection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | The maximum number of parallel retries to the backend cluster. Defaults to 3. |

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.connectTimeout"></a>

```go
ConnectTimeout GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a>

connect_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#connect_timeout GoogleComputeRegionBackendService#connect_timeout}

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxConnections"></a>

```go
MaxConnections *f64
```

- *Type:* *f64

The maximum number of connections to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#max_connections GoogleComputeRegionBackendService#max_connections}

---

##### `MaxPendingRequests`<sup>Optional</sup> <a name="MaxPendingRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxPendingRequests"></a>

```go
MaxPendingRequests *f64
```

- *Type:* *f64

The maximum number of pending requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#max_pending_requests GoogleComputeRegionBackendService#max_pending_requests}

---

##### `MaxRequests`<sup>Optional</sup> <a name="MaxRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRequests"></a>

```go
MaxRequests *f64
```

- *Type:* *f64

The maximum number of parallel requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#max_requests GoogleComputeRegionBackendService#max_requests}

---

##### `MaxRequestsPerConnection`<sup>Optional</sup> <a name="MaxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRequestsPerConnection"></a>

```go
MaxRequestsPerConnection *f64
```

- *Type:* *f64

Maximum requests for a single backend connection.

This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#max_requests_per_connection GoogleComputeRegionBackendService#max_requests_per_connection}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

The maximum number of parallel retries to the backend cluster. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#max_retries GoogleComputeRegionBackendService#max_retries}

---

### GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout <a name="GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}

---

### GoogleComputeRegionBackendServiceConfig <a name="GoogleComputeRegionBackendServiceConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AffinityCookieTtlSec: *f64,
	Backend: interface{},
	CdnPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy,
	CircuitBreakers: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers,
	ConnectionDrainingTimeoutSec: *f64,
	ConnectionTrackingPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy,
	ConsistentHash: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash,
	CustomMetrics: interface{},
	Description: *string,
	EnableCdn: interface{},
	FailoverPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy,
	HealthChecks: *[]*string,
	Iap: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap,
	Id: *string,
	IpAddressSelectionPolicy: *string,
	LoadBalancingScheme: *string,
	LocalityLbPolicy: *string,
	LogConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig,
	Network: *string,
	OutlierDetection: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection,
	PortName: *string,
	Project: *string,
	Protocol: *string,
	Region: *string,
	SecurityPolicy: *string,
	SessionAffinity: *string,
	StrongSessionAffinityCookie: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie,
	Subsetting: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts,
	TimeoutSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.affinityCookieTtlSec">AffinityCookieTtlSec</a></code> | <code>*f64</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.backend">Backend</a></code> | <code>interface{}</code> | backend block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.cdnPolicy">CdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.circuitBreakers">CircuitBreakers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connectionDrainingTimeoutSec">ConnectionDrainingTimeoutSec</a></code> | <code>*f64</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connectionTrackingPolicy">ConnectionTrackingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a></code> | connection_tracking_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.consistentHash">ConsistentHash</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.customMetrics">CustomMetrics</a></code> | <code>interface{}</code> | custom_metrics block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.enableCdn">EnableCdn</a></code> | <code>interface{}</code> | If true, enable Cloud CDN for this RegionBackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.failoverPolicy">FailoverPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a></code> | failover_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.healthChecks">HealthChecks</a></code> | <code>*[]*string</code> | The set of URLs to HealthCheck resources for health checking this RegionBackendService. Currently at most one health check can be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.iap">Iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#id GoogleComputeRegionBackendService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.ipAddressSelectionPolicy">IpAddressSelectionPolicy</a></code> | <code>*string</code> | Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | Indicates what kind of load balancing this regional backend service will be used for. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.localityLbPolicy">LocalityLbPolicy</a></code> | <code>*string</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.network">Network</a></code> | <code>*string</code> | The URL of the network to which this backend service belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.outlierDetection">OutlierDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.portName">PortName</a></code> | <code>*string</code> | A named port on a backend instance group representing the port for communication to the backend VMs in that group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#project GoogleComputeRegionBackendService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.protocol">Protocol</a></code> | <code>*string</code> | The protocol this RegionBackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.region">Region</a></code> | <code>*string</code> | The Region in which the created backend service should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | The security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.sessionAffinity">SessionAffinity</a></code> | <code>*string</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.strongSessionAffinityCookie">StrongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a></code> | strong_session_affinity_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.subsetting">Subsetting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a></code> | subsetting block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | The backend service timeout has a different meaning depending on the type of load balancer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}

---

##### `AffinityCookieTtlSec`<sup>Optional</sup> <a name="AffinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.affinityCookieTtlSec"></a>

```go
AffinityCookieTtlSec *f64
```

- *Type:* *f64

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#affinity_cookie_ttl_sec GoogleComputeRegionBackendService#affinity_cookie_ttl_sec}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.backend"></a>

```go
Backend interface{}
```

- *Type:* interface{}

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#backend GoogleComputeRegionBackendService#backend}

---

##### `CdnPolicy`<sup>Optional</sup> <a name="CdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.cdnPolicy"></a>

```go
CdnPolicy GoogleComputeRegionBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#cdn_policy GoogleComputeRegionBackendService#cdn_policy}

---

##### `CircuitBreakers`<sup>Optional</sup> <a name="CircuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.circuitBreakers"></a>

```go
CircuitBreakers GoogleComputeRegionBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#circuit_breakers GoogleComputeRegionBackendService#circuit_breakers}

---

##### `ConnectionDrainingTimeoutSec`<sup>Optional</sup> <a name="ConnectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connectionDrainingTimeoutSec"></a>

```go
ConnectionDrainingTimeoutSec *f64
```

- *Type:* *f64

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#connection_draining_timeout_sec GoogleComputeRegionBackendService#connection_draining_timeout_sec}

---

##### `ConnectionTrackingPolicy`<sup>Optional</sup> <a name="ConnectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connectionTrackingPolicy"></a>

```go
ConnectionTrackingPolicy GoogleComputeRegionBackendServiceConnectionTrackingPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

connection_tracking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#connection_tracking_policy GoogleComputeRegionBackendService#connection_tracking_policy}

---

##### `ConsistentHash`<sup>Optional</sup> <a name="ConsistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.consistentHash"></a>

```go
ConsistentHash GoogleComputeRegionBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#consistent_hash GoogleComputeRegionBackendService#consistent_hash}

---

##### `CustomMetrics`<sup>Optional</sup> <a name="CustomMetrics" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.customMetrics"></a>

```go
CustomMetrics interface{}
```

- *Type:* interface{}

custom_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#custom_metrics GoogleComputeRegionBackendService#custom_metrics}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#description GoogleComputeRegionBackendService#description}

---

##### `EnableCdn`<sup>Optional</sup> <a name="EnableCdn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.enableCdn"></a>

```go
EnableCdn interface{}
```

- *Type:* interface{}

If true, enable Cloud CDN for this RegionBackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#enable_cdn GoogleComputeRegionBackendService#enable_cdn}

---

##### `FailoverPolicy`<sup>Optional</sup> <a name="FailoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.failoverPolicy"></a>

```go
FailoverPolicy GoogleComputeRegionBackendServiceFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a>

failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#failover_policy GoogleComputeRegionBackendService#failover_policy}

---

##### `HealthChecks`<sup>Optional</sup> <a name="HealthChecks" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.healthChecks"></a>

```go
HealthChecks *[]*string
```

- *Type:* *[]*string

The set of URLs to HealthCheck resources for health checking this RegionBackendService. Currently at most one health check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#health_checks GoogleComputeRegionBackendService#health_checks}

---

##### `Iap`<sup>Optional</sup> <a name="Iap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.iap"></a>

```go
Iap GoogleComputeRegionBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#iap GoogleComputeRegionBackendService#iap}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#id GoogleComputeRegionBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddressSelectionPolicy`<sup>Optional</sup> <a name="IpAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.ipAddressSelectionPolicy"></a>

```go
IpAddressSelectionPolicy *string
```

- *Type:* *string

Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC).

Possible values: ["IPV4_ONLY", "PREFER_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#ip_address_selection_policy GoogleComputeRegionBackendService#ip_address_selection_policy}

---

##### `LoadBalancingScheme`<sup>Optional</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.loadBalancingScheme"></a>

```go
LoadBalancingScheme *string
```

- *Type:* *string

Indicates what kind of load balancing this regional backend service will be used for.

A backend service created for one type of load
balancing cannot be used with the other(s). For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "INTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#load_balancing_scheme GoogleComputeRegionBackendService#load_balancing_scheme}

---

##### `LocalityLbPolicy`<sup>Optional</sup> <a name="LocalityLbPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.localityLbPolicy"></a>

```go
LocalityLbPolicy *string
```

- *Type:* *string

The load balancing algorithm used within the scope of the locality. The possible values are:.

* 'ROUND_ROBIN': This is a simple policy in which each healthy backend
  is selected in round robin order.
* 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
  hosts and picks the host which has fewer active requests.
* 'RING_HASH': The ring/modulo hash load balancer implements consistent
  hashing to backends. The algorithm has the property that the
  addition/removal of a host from a set of N hosts only affects
  1/N of the requests.
* 'RANDOM': The load balancer selects a random healthy host.
* 'ORIGINAL_DESTINATION': Backend host is selected based on the client
  connection metadata, i.e., connections are opened
  to the same address as the destination address of
  the incoming connection before the connection
  was redirected to the load balancer.
* 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
  Maglev is not as stable as ring hash but has faster table lookup
  build times and host selection times. For more information about
  Maglev, refer to https://ai.google/research/pubs/pub44824
* 'WEIGHTED_MAGLEV': Per-instance weighted Load Balancing via health check
  reported weights. Only applicable to loadBalancingScheme
  EXTERNAL. If set, the Backend Service must
  configure a non legacy HTTP-based Health Check, and
  health check replies are expected to contain
  non-standard HTTP response header field
  X-Load-Balancing-Endpoint-Weight to specify the
  per-instance weights. If set, Load Balancing is weight
  based on the per-instance weights reported in the last
  processed health check replies, as long as every
  instance either reported a valid weight or had
  UNAVAILABLE_WEIGHT. Otherwise, Load Balancing remains
  equal-weight.
* 'WEIGHTED_ROUND_ROBIN': Per-endpoint weighted round-robin Load Balancing using weights computed
  from Backend reported Custom Metrics. If set, the Backend Service
  responses are expected to contain non-standard HTTP response header field
  X-Endpoint-Load-Metrics. The reported metrics
  to use for computing the weights are specified via the
  backends[].customMetrics fields.

locality_lb_policy is applicable to either:

* A regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2,
  and loadBalancingScheme set to INTERNAL_MANAGED.
* A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.
* A regional backend service with loadBalancingScheme set to EXTERNAL (External Network
  Load Balancing). Only MAGLEV and WEIGHTED_MAGLEV values are possible for External
  Network Load Balancing. The default is MAGLEV.

If session_affinity is not NONE, and locality_lb_policy is not set to MAGLEV, WEIGHTED_MAGLEV,
or RING_HASH, session affinity settings will not take effect.

Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV", "WEIGHTED_MAGLEV", "WEIGHTED_ROUND_ROBIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#locality_lb_policy GoogleComputeRegionBackendService#locality_lb_policy}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.logConfig"></a>

```go
LogConfig GoogleComputeRegionBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#log_config GoogleComputeRegionBackendService#log_config}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The URL of the network to which this backend service belongs.

This field can only be specified when the load balancing scheme is set to INTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#network GoogleComputeRegionBackendService#network}

---

##### `OutlierDetection`<sup>Optional</sup> <a name="OutlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.outlierDetection"></a>

```go
OutlierDetection GoogleComputeRegionBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#outlier_detection GoogleComputeRegionBackendService#outlier_detection}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

A named port on a backend instance group representing the port for communication to the backend VMs in that group.

Required when the
loadBalancingScheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED
and the backends are instance groups. The named port must be defined on each
backend instance group. This parameter has no meaning if the backends are NEGs. API sets a
default of "http" if not given.
Must be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#port_name GoogleComputeRegionBackendService#port_name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#project GoogleComputeRegionBackendService#project}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The protocol this RegionBackendService uses to communicate with backends.

The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. Possible values: ["HTTP", "HTTPS", "HTTP2", "SSL", "TCP", "UDP", "GRPC", "UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#protocol GoogleComputeRegionBackendService#protocol}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The Region in which the created backend service should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#region GoogleComputeRegionBackendService#region}

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.securityPolicy"></a>

```go
SecurityPolicy *string
```

- *Type:* *string

The security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#security_policy GoogleComputeRegionBackendService#security_policy}

---

##### `SessionAffinity`<sup>Optional</sup> <a name="SessionAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.sessionAffinity"></a>

```go
SessionAffinity *string
```

- *Type:* *string

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "CLIENT_IP_NO_DESTINATION", "STRONG_COOKIE_AFFINITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#session_affinity GoogleComputeRegionBackendService#session_affinity}

---

##### `StrongSessionAffinityCookie`<sup>Optional</sup> <a name="StrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.strongSessionAffinityCookie"></a>

```go
StrongSessionAffinityCookie GoogleComputeRegionBackendServiceStrongSessionAffinityCookie
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

strong_session_affinity_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#strong_session_affinity_cookie GoogleComputeRegionBackendService#strong_session_affinity_cookie}

---

##### `Subsetting`<sup>Optional</sup> <a name="Subsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.subsetting"></a>

```go
Subsetting GoogleComputeRegionBackendServiceSubsetting
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a>

subsetting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#subsetting GoogleComputeRegionBackendService#subsetting}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeRegionBackendServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#timeouts GoogleComputeRegionBackendService#timeouts}

---

##### `TimeoutSec`<sup>Optional</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.timeoutSec"></a>

```go
TimeoutSec *f64
```

- *Type:* *f64

The backend service timeout has a different meaning depending on the type of load balancer.

For more information see, [Backend service settings](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices).
The default is 30 seconds.
The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#timeout_sec GoogleComputeRegionBackendService#timeout_sec}

---

### GoogleComputeRegionBackendServiceConnectionTrackingPolicy <a name="GoogleComputeRegionBackendServiceConnectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceConnectionTrackingPolicy {
	ConnectionPersistenceOnUnhealthyBackends: *string,
	EnableStrongAffinity: interface{},
	IdleTimeoutSec: *f64,
	TrackingMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.connectionPersistenceOnUnhealthyBackends">ConnectionPersistenceOnUnhealthyBackends</a></code> | <code>*string</code> | Specifies connection persistence when backends are unhealthy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.enableStrongAffinity">EnableStrongAffinity</a></code> | <code>interface{}</code> | Enable Strong Session Affinity for Network Load Balancing. This option is not available publicly. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.idleTimeoutSec">IdleTimeoutSec</a></code> | <code>*f64</code> | Specifies how long to keep a Connection Tracking entry while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.trackingMode">TrackingMode</a></code> | <code>*string</code> | Specifies the key used for connection tracking. |

---

##### `ConnectionPersistenceOnUnhealthyBackends`<sup>Optional</sup> <a name="ConnectionPersistenceOnUnhealthyBackends" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.connectionPersistenceOnUnhealthyBackends"></a>

```go
ConnectionPersistenceOnUnhealthyBackends *string
```

- *Type:* *string

Specifies connection persistence when backends are unhealthy.

If set to 'DEFAULT_FOR_PROTOCOL', the existing connections persist on
unhealthy backends only for connection-oriented protocols (TCP and SCTP)
and only if the Tracking Mode is PER_CONNECTION (default tracking mode)
or the Session Affinity is configured for 5-tuple. They do not persist
for UDP.

If set to 'NEVER_PERSIST', after a backend becomes unhealthy, the existing
connections on the unhealthy backend are never persisted on the unhealthy
backend. They are always diverted to newly selected healthy backends
(unless all backends are unhealthy).

If set to 'ALWAYS_PERSIST', existing connections always persist on
unhealthy backends regardless of protocol and session affinity. It is
generally not recommended to use this mode overriding the default. Default value: "DEFAULT_FOR_PROTOCOL" Possible values: ["DEFAULT_FOR_PROTOCOL", "NEVER_PERSIST", "ALWAYS_PERSIST"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#connection_persistence_on_unhealthy_backends GoogleComputeRegionBackendService#connection_persistence_on_unhealthy_backends}

---

##### `EnableStrongAffinity`<sup>Optional</sup> <a name="EnableStrongAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.enableStrongAffinity"></a>

```go
EnableStrongAffinity interface{}
```

- *Type:* interface{}

Enable Strong Session Affinity for Network Load Balancing. This option is not available publicly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#enable_strong_affinity GoogleComputeRegionBackendService#enable_strong_affinity}

---

##### `IdleTimeoutSec`<sup>Optional</sup> <a name="IdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.idleTimeoutSec"></a>

```go
IdleTimeoutSec *f64
```

- *Type:* *f64

Specifies how long to keep a Connection Tracking entry while there is no matching traffic (in seconds).

For L4 ILB the minimum(default) is 10 minutes and maximum is 16 hours.

For NLB the minimum(default) is 60 seconds and the maximum is 16 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#idle_timeout_sec GoogleComputeRegionBackendService#idle_timeout_sec}

---

##### `TrackingMode`<sup>Optional</sup> <a name="TrackingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.trackingMode"></a>

```go
TrackingMode *string
```

- *Type:* *string

Specifies the key used for connection tracking.

There are two options:
'PER_CONNECTION': The Connection Tracking is performed as per the
Connection Key (default Hash Method) for the specific protocol.

'PER_SESSION': The Connection Tracking is performed as per the
configured Session Affinity. It matches the configured Session Affinity. Default value: "PER_CONNECTION" Possible values: ["PER_CONNECTION", "PER_SESSION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#tracking_mode GoogleComputeRegionBackendService#tracking_mode}

---

### GoogleComputeRegionBackendServiceConsistentHash <a name="GoogleComputeRegionBackendServiceConsistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceConsistentHash {
	HttpCookie: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie,
	HttpHeaderName: *string,
	MinimumRingSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.httpCookie">HttpCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | http_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.httpHeaderName">HttpHeaderName</a></code> | <code>*string</code> | The hash based on the value of the specified header field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.minimumRingSize">MinimumRingSize</a></code> | <code>*f64</code> | The minimum number of virtual nodes to use for the hash ring. |

---

##### `HttpCookie`<sup>Optional</sup> <a name="HttpCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.httpCookie"></a>

```go
HttpCookie GoogleComputeRegionBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a>

http_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#http_cookie GoogleComputeRegionBackendService#http_cookie}

---

##### `HttpHeaderName`<sup>Optional</sup> <a name="HttpHeaderName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.httpHeaderName"></a>

```go
HttpHeaderName *string
```

- *Type:* *string

The hash based on the value of the specified header field.

This field is applicable if the sessionAffinity is set to HEADER_FIELD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#http_header_name GoogleComputeRegionBackendService#http_header_name}

---

##### `MinimumRingSize`<sup>Optional</sup> <a name="MinimumRingSize" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.minimumRingSize"></a>

```go
MinimumRingSize *f64
```

- *Type:* *f64

The minimum number of virtual nodes to use for the hash ring.

Larger ring sizes result in more granular load
distributions. If the number of hosts in the load balancing pool
is larger than the ring size, each host will be assigned a single
virtual node.
Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#minimum_ring_size GoogleComputeRegionBackendService#minimum_ring_size}

---

### GoogleComputeRegionBackendServiceConsistentHashHttpCookie <a name="GoogleComputeRegionBackendServiceConsistentHashHttpCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceConsistentHashHttpCookie {
	Name: *string,
	Path: *string,
	Ttl: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.name">Name</a></code> | <code>*string</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.path">Path</a></code> | <code>*string</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | ttl block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#path GoogleComputeRegionBackendService#path}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.ttl"></a>

```go
Ttl GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#ttl GoogleComputeRegionBackendService#ttl}

---

### GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl <a name="GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}

---

### GoogleComputeRegionBackendServiceCustomMetrics <a name="GoogleComputeRegionBackendServiceCustomMetrics" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetrics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceCustomMetrics {
	DryRun: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetrics.property.dryRun">DryRun</a></code> | <code>interface{}</code> | If true, the metric data is not used for load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetrics.property.name">Name</a></code> | <code>*string</code> | Name of a custom utilization signal. |

---

##### `DryRun`<sup>Required</sup> <a name="DryRun" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetrics.property.dryRun"></a>

```go
DryRun interface{}
```

- *Type:* interface{}

If true, the metric data is not used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#dry_run GoogleComputeRegionBackendService#dry_run}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetrics.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of a custom utilization signal.

The name must be 1-64 characters
long and match the regular expression [a-z](%5B-_.a-z0-9%5D*%5Ba-z0-9%5D)? which
means the first character must be a lowercase letter, and all following
characters must be a dash, period, underscore, lowercase letter, or
digit, except the last character, which cannot be a dash, period, or
underscore. For usage guidelines, see Custom Metrics balancing mode. This
field can only be used for a global or regional backend service with the
loadBalancingScheme set to <code>EXTERNAL_MANAGED</code>,
<code>INTERNAL_MANAGED</code> <code>INTERNAL_SELF_MANAGED</code>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}

---

### GoogleComputeRegionBackendServiceFailoverPolicy <a name="GoogleComputeRegionBackendServiceFailoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceFailoverPolicy {
	DisableConnectionDrainOnFailover: interface{},
	DropTrafficIfUnhealthy: interface{},
	FailoverRatio: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.disableConnectionDrainOnFailover">DisableConnectionDrainOnFailover</a></code> | <code>interface{}</code> | On failover or failback, this field indicates whether connection drain will be honored. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.dropTrafficIfUnhealthy">DropTrafficIfUnhealthy</a></code> | <code>interface{}</code> | This option is used only when no healthy VMs are detected in the primary and backup instance groups. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.failoverRatio">FailoverRatio</a></code> | <code>*f64</code> | The value of the field must be in [0, 1]. |

---

##### `DisableConnectionDrainOnFailover`<sup>Optional</sup> <a name="DisableConnectionDrainOnFailover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.disableConnectionDrainOnFailover"></a>

```go
DisableConnectionDrainOnFailover interface{}
```

- *Type:* interface{}

On failover or failback, this field indicates whether connection drain will be honored.

Setting this to true has the following effect: connections
to the old active pool are not drained. Connections to the new active pool
use the timeout of 10 min (currently fixed). Setting to false has the
following effect: both old and new connections will have a drain timeout
of 10 min.
This can be set to true only if the protocol is TCP.
The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#disable_connection_drain_on_failover GoogleComputeRegionBackendService#disable_connection_drain_on_failover}

---

##### `DropTrafficIfUnhealthy`<sup>Optional</sup> <a name="DropTrafficIfUnhealthy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.dropTrafficIfUnhealthy"></a>

```go
DropTrafficIfUnhealthy interface{}
```

- *Type:* interface{}

This option is used only when no healthy VMs are detected in the primary and backup instance groups.

When set to true, traffic is dropped. When
set to false, new connections are sent across all VMs in the primary group.
The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#drop_traffic_if_unhealthy GoogleComputeRegionBackendService#drop_traffic_if_unhealthy}

---

##### `FailoverRatio`<sup>Optional</sup> <a name="FailoverRatio" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.failoverRatio"></a>

```go
FailoverRatio *f64
```

- *Type:* *f64

The value of the field must be in [0, 1].

If the ratio of the healthy
VMs in the primary backend is at or below this number, traffic arriving
at the load-balanced IP will be directed to the failover backend.
In case where 'failoverRatio' is not set or all the VMs in the backup
backend are unhealthy, the traffic will be directed back to the primary
backend in the "force" mode, where traffic will be spread to the healthy
VMs with the best effort, or to all VMs when no VM is healthy.
This field is only used with l4 load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#failover_ratio GoogleComputeRegionBackendService#failover_ratio}

---

### GoogleComputeRegionBackendServiceIap <a name="GoogleComputeRegionBackendServiceIap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceIap {
	Enabled: interface{},
	Oauth2ClientId: *string,
	Oauth2ClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the serving infrastructure will authenticate and authorize all incoming requests. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.oauth2ClientId">Oauth2ClientId</a></code> | <code>*string</code> | OAuth2 Client ID for IAP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.oauth2ClientSecret">Oauth2ClientSecret</a></code> | <code>*string</code> | OAuth2 Client Secret for IAP. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the serving infrastructure will authenticate and authorize all incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#enabled GoogleComputeRegionBackendService#enabled}

---

##### `Oauth2ClientId`<sup>Optional</sup> <a name="Oauth2ClientId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.oauth2ClientId"></a>

```go
Oauth2ClientId *string
```

- *Type:* *string

OAuth2 Client ID for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#oauth2_client_id GoogleComputeRegionBackendService#oauth2_client_id}

---

##### `Oauth2ClientSecret`<sup>Optional</sup> <a name="Oauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.oauth2ClientSecret"></a>

```go
Oauth2ClientSecret *string
```

- *Type:* *string

OAuth2 Client Secret for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#oauth2_client_secret GoogleComputeRegionBackendService#oauth2_client_secret}

---

### GoogleComputeRegionBackendServiceLogConfig <a name="GoogleComputeRegionBackendServiceLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceLogConfig {
	Enable: interface{},
	OptionalFields: *[]*string,
	OptionalMode: *string,
	SampleRate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.enable">Enable</a></code> | <code>interface{}</code> | Whether to enable logging for the load balancer traffic served by this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.optionalFields">OptionalFields</a></code> | <code>*[]*string</code> | Specifies the fields to include in logging. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.optionalMode">OptionalMode</a></code> | <code>*string</code> | Specifies the optional logging mode for the load balancer traffic. Supported values: INCLUDE_ALL_OPTIONAL, EXCLUDE_ALL_OPTIONAL, CUSTOM. Possible values: ["INCLUDE_ALL_OPTIONAL", "EXCLUDE_ALL_OPTIONAL", "CUSTOM"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | This field can only be specified if logging is enabled for this backend service. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Whether to enable logging for the load balancer traffic served by this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#enable GoogleComputeRegionBackendService#enable}

---

##### `OptionalFields`<sup>Optional</sup> <a name="OptionalFields" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.optionalFields"></a>

```go
OptionalFields *[]*string
```

- *Type:* *[]*string

Specifies the fields to include in logging.

This field can only be specified if logging is enabled for this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#optional_fields GoogleComputeRegionBackendService#optional_fields}

---

##### `OptionalMode`<sup>Optional</sup> <a name="OptionalMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.optionalMode"></a>

```go
OptionalMode *string
```

- *Type:* *string

Specifies the optional logging mode for the load balancer traffic. Supported values: INCLUDE_ALL_OPTIONAL, EXCLUDE_ALL_OPTIONAL, CUSTOM. Possible values: ["INCLUDE_ALL_OPTIONAL", "EXCLUDE_ALL_OPTIONAL", "CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#optional_mode GoogleComputeRegionBackendService#optional_mode}

---

##### `SampleRate`<sup>Optional</sup> <a name="SampleRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.sampleRate"></a>

```go
SampleRate *f64
```

- *Type:* *f64

This field can only be specified if logging is enabled for this backend service.

The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#sample_rate GoogleComputeRegionBackendService#sample_rate}

---

### GoogleComputeRegionBackendServiceOutlierDetection <a name="GoogleComputeRegionBackendServiceOutlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceOutlierDetection {
	BaseEjectionTime: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime,
	ConsecutiveErrors: *f64,
	ConsecutiveGatewayFailure: *f64,
	EnforcingConsecutiveErrors: *f64,
	EnforcingConsecutiveGatewayFailure: *f64,
	EnforcingSuccessRate: *f64,
	Interval: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval,
	MaxEjectionPercent: *f64,
	SuccessRateMinimumHosts: *f64,
	SuccessRateRequestVolume: *f64,
	SuccessRateStdevFactor: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.baseEjectionTime">BaseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | base_ejection_time block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.consecutiveErrors">ConsecutiveErrors</a></code> | <code>*f64</code> | Number of errors before a host is ejected from the connection pool. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.consecutiveGatewayFailure">ConsecutiveGatewayFailure</a></code> | <code>*f64</code> | The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveErrors">EnforcingConsecutiveErrors</a></code> | <code>*f64</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure">EnforcingConsecutiveGatewayFailure</a></code> | <code>*f64</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingSuccessRate">EnforcingSuccessRate</a></code> | <code>*f64</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.interval">Interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a></code> | interval block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.maxEjectionPercent">MaxEjectionPercent</a></code> | <code>*f64</code> | Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateMinimumHosts">SuccessRateMinimumHosts</a></code> | <code>*f64</code> | The number of hosts in a cluster that must have enough request volume to detect success rate outliers. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateRequestVolume">SuccessRateRequestVolume</a></code> | <code>*f64</code> | The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateStdevFactor">SuccessRateStdevFactor</a></code> | <code>*f64</code> | This factor is used to determine the ejection threshold for success rate outlier ejection. |

---

##### `BaseEjectionTime`<sup>Optional</sup> <a name="BaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.baseEjectionTime"></a>

```go
BaseEjectionTime GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

base_ejection_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#base_ejection_time GoogleComputeRegionBackendService#base_ejection_time}

---

##### `ConsecutiveErrors`<sup>Optional</sup> <a name="ConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.consecutiveErrors"></a>

```go
ConsecutiveErrors *f64
```

- *Type:* *f64

Number of errors before a host is ejected from the connection pool.

When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#consecutive_errors GoogleComputeRegionBackendService#consecutive_errors}

---

##### `ConsecutiveGatewayFailure`<sup>Optional</sup> <a name="ConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.consecutiveGatewayFailure"></a>

```go
ConsecutiveGatewayFailure *f64
```

- *Type:* *f64

The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs.

Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#consecutive_gateway_failure GoogleComputeRegionBackendService#consecutive_gateway_failure}

---

##### `EnforcingConsecutiveErrors`<sup>Optional</sup> <a name="EnforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveErrors"></a>

```go
EnforcingConsecutiveErrors *f64
```

- *Type:* *f64

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx.

This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#enforcing_consecutive_errors GoogleComputeRegionBackendService#enforcing_consecutive_errors}

---

##### `EnforcingConsecutiveGatewayFailure`<sup>Optional</sup> <a name="EnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure"></a>

```go
EnforcingConsecutiveGatewayFailure *f64
```

- *Type:* *f64

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures.

This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#enforcing_consecutive_gateway_failure GoogleComputeRegionBackendService#enforcing_consecutive_gateway_failure}

---

##### `EnforcingSuccessRate`<sup>Optional</sup> <a name="EnforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingSuccessRate"></a>

```go
EnforcingSuccessRate *f64
```

- *Type:* *f64

The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics.

This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#enforcing_success_rate GoogleComputeRegionBackendService#enforcing_success_rate}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.interval"></a>

```go
Interval GoogleComputeRegionBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#interval GoogleComputeRegionBackendService#interval}

---

##### `MaxEjectionPercent`<sup>Optional</sup> <a name="MaxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.maxEjectionPercent"></a>

```go
MaxEjectionPercent *f64
```

- *Type:* *f64

Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#max_ejection_percent GoogleComputeRegionBackendService#max_ejection_percent}

---

##### `SuccessRateMinimumHosts`<sup>Optional</sup> <a name="SuccessRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateMinimumHosts"></a>

```go
SuccessRateMinimumHosts *f64
```

- *Type:* *f64

The number of hosts in a cluster that must have enough request volume to detect success rate outliers.

If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#success_rate_minimum_hosts GoogleComputeRegionBackendService#success_rate_minimum_hosts}

---

##### `SuccessRateRequestVolume`<sup>Optional</sup> <a name="SuccessRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateRequestVolume"></a>

```go
SuccessRateRequestVolume *f64
```

- *Type:* *f64

The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection.

If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#success_rate_request_volume GoogleComputeRegionBackendService#success_rate_request_volume}

---

##### `SuccessRateStdevFactor`<sup>Optional</sup> <a name="SuccessRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateStdevFactor"></a>

```go
SuccessRateStdevFactor *f64
```

- *Type:* *f64

This factor is used to determine the ejection threshold for success rate outlier ejection.

The ejection threshold is the difference between the mean success
rate, and the product of this factor and the standard deviation of the mean
success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
by a thousand to get a double. That is, if the desired factor is 1.9, the
runtime value should be 1900. Defaults to 1900.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#success_rate_stdev_factor GoogleComputeRegionBackendService#success_rate_stdev_factor}

---

### GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime <a name="GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}

---

### GoogleComputeRegionBackendServiceOutlierDetectionInterval <a name="GoogleComputeRegionBackendServiceOutlierDetectionInterval" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceOutlierDetectionInterval {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}

---

### GoogleComputeRegionBackendServiceStrongSessionAffinityCookie <a name="GoogleComputeRegionBackendServiceStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie {
	Name: *string,
	Path: *string,
	Ttl: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.name">Name</a></code> | <code>*string</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.path">Path</a></code> | <code>*string</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a></code> | ttl block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#path GoogleComputeRegionBackendService#path}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.ttl"></a>

```go
Ttl GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#ttl GoogleComputeRegionBackendService#ttl}

---

### GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl <a name="GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}

---

### GoogleComputeRegionBackendServiceSubsetting <a name="GoogleComputeRegionBackendServiceSubsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceSubsetting {
	Policy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting.property.policy">Policy</a></code> | <code>*string</code> | The algorithm used for subsetting. Possible values: ["CONSISTENT_HASH_SUBSETTING"]. |

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

The algorithm used for subsetting. Possible values: ["CONSISTENT_HASH_SUBSETTING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#policy GoogleComputeRegionBackendService#policy}

---

### GoogleComputeRegionBackendServiceTimeouts <a name="GoogleComputeRegionBackendServiceTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

&googlecomputeregionbackendservice.GoogleComputeRegionBackendServiceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#create GoogleComputeRegionBackendService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#delete GoogleComputeRegionBackendService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#update GoogleComputeRegionBackendService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#create GoogleComputeRegionBackendService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#delete GoogleComputeRegionBackendService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_region_backend_service#update GoogleComputeRegionBackendService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionBackendServiceBackendCustomMetricsList <a name="GoogleComputeRegionBackendServiceBackendCustomMetricsList" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceBackendCustomMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionBackendServiceBackendCustomMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference <a name="GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.resetMaxUtilization">ResetMaxUtilization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxUtilization` <a name="ResetMaxUtilization" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.resetMaxUtilization"></a>

```go
func ResetMaxUtilization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.dryRunInput">DryRunInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.maxUtilizationInput">MaxUtilizationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.dryRun">DryRun</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.maxUtilization">MaxUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DryRunInput`<sup>Optional</sup> <a name="DryRunInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.dryRunInput"></a>

```go
func DryRunInput() interface{}
```

- *Type:* interface{}

---

##### `MaxUtilizationInput`<sup>Optional</sup> <a name="MaxUtilizationInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.maxUtilizationInput"></a>

```go
func MaxUtilizationInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `DryRun`<sup>Required</sup> <a name="DryRun" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.dryRun"></a>

```go
func DryRun() interface{}
```

- *Type:* interface{}

---

##### `MaxUtilization`<sup>Required</sup> <a name="MaxUtilization" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.maxUtilization"></a>

```go
func MaxUtilization() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionBackendServiceBackendList <a name="GoogleComputeRegionBackendServiceBackendList" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceBackendList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionBackendServiceBackendList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionBackendServiceBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionBackendServiceBackendOutputReference <a name="GoogleComputeRegionBackendServiceBackendOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceBackendOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionBackendServiceBackendOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.putCustomMetrics">PutCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetBalancingMode">ResetBalancingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetCapacityScaler">ResetCapacityScaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetCustomMetrics">ResetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetFailover">ResetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnections">ResetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint">ResetMaxConnectionsPerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance">ResetMaxConnectionsPerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRate">ResetMaxRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerEndpoint">ResetMaxRatePerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerInstance">ResetMaxRatePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxUtilization">ResetMaxUtilization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomMetrics` <a name="PutCustomMetrics" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.putCustomMetrics"></a>

```go
func PutCustomMetrics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.putCustomMetrics.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBalancingMode` <a name="ResetBalancingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetBalancingMode"></a>

```go
func ResetBalancingMode()
```

##### `ResetCapacityScaler` <a name="ResetCapacityScaler" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetCapacityScaler"></a>

```go
func ResetCapacityScaler()
```

##### `ResetCustomMetrics` <a name="ResetCustomMetrics" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetCustomMetrics"></a>

```go
func ResetCustomMetrics()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFailover` <a name="ResetFailover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetFailover"></a>

```go
func ResetFailover()
```

##### `ResetMaxConnections` <a name="ResetMaxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnections"></a>

```go
func ResetMaxConnections()
```

##### `ResetMaxConnectionsPerEndpoint` <a name="ResetMaxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint"></a>

```go
func ResetMaxConnectionsPerEndpoint()
```

##### `ResetMaxConnectionsPerInstance` <a name="ResetMaxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance"></a>

```go
func ResetMaxConnectionsPerInstance()
```

##### `ResetMaxRate` <a name="ResetMaxRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRate"></a>

```go
func ResetMaxRate()
```

##### `ResetMaxRatePerEndpoint` <a name="ResetMaxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerEndpoint"></a>

```go
func ResetMaxRatePerEndpoint()
```

##### `ResetMaxRatePerInstance` <a name="ResetMaxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerInstance"></a>

```go
func ResetMaxRatePerInstance()
```

##### `ResetMaxUtilization` <a name="ResetMaxUtilization" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxUtilization"></a>

```go
func ResetMaxUtilization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.customMetrics">CustomMetrics</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList">GoogleComputeRegionBackendServiceBackendCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.balancingModeInput">BalancingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScalerInput">CapacityScalerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.customMetricsInput">CustomMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.failoverInput">FailoverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.groupInput">GroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput">MaxConnectionsPerEndpointInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput">MaxConnectionsPerInstanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRateInput">MaxRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpointInput">MaxRatePerEndpointInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstanceInput">MaxRatePerInstanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilizationInput">MaxUtilizationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.balancingMode">BalancingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScaler">CapacityScaler</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.failover">Failover</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint">MaxConnectionsPerEndpoint</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance">MaxConnectionsPerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRate">MaxRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint">MaxRatePerEndpoint</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance">MaxRatePerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilization">MaxUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomMetrics`<sup>Required</sup> <a name="CustomMetrics" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.customMetrics"></a>

```go
func CustomMetrics() GoogleComputeRegionBackendServiceBackendCustomMetricsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendCustomMetricsList">GoogleComputeRegionBackendServiceBackendCustomMetricsList</a>

---

##### `BalancingModeInput`<sup>Optional</sup> <a name="BalancingModeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.balancingModeInput"></a>

```go
func BalancingModeInput() *string
```

- *Type:* *string

---

##### `CapacityScalerInput`<sup>Optional</sup> <a name="CapacityScalerInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScalerInput"></a>

```go
func CapacityScalerInput() *f64
```

- *Type:* *f64

---

##### `CustomMetricsInput`<sup>Optional</sup> <a name="CustomMetricsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.customMetricsInput"></a>

```go
func CustomMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FailoverInput`<sup>Optional</sup> <a name="FailoverInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.failoverInput"></a>

```go
func FailoverInput() interface{}
```

- *Type:* interface{}

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.groupInput"></a>

```go
func GroupInput() *string
```

- *Type:* *string

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsInput"></a>

```go
func MaxConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxConnectionsPerEndpointInput`<sup>Optional</sup> <a name="MaxConnectionsPerEndpointInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput"></a>

```go
func MaxConnectionsPerEndpointInput() *f64
```

- *Type:* *f64

---

##### `MaxConnectionsPerInstanceInput`<sup>Optional</sup> <a name="MaxConnectionsPerInstanceInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput"></a>

```go
func MaxConnectionsPerInstanceInput() *f64
```

- *Type:* *f64

---

##### `MaxRateInput`<sup>Optional</sup> <a name="MaxRateInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRateInput"></a>

```go
func MaxRateInput() *f64
```

- *Type:* *f64

---

##### `MaxRatePerEndpointInput`<sup>Optional</sup> <a name="MaxRatePerEndpointInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpointInput"></a>

```go
func MaxRatePerEndpointInput() *f64
```

- *Type:* *f64

---

##### `MaxRatePerInstanceInput`<sup>Optional</sup> <a name="MaxRatePerInstanceInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstanceInput"></a>

```go
func MaxRatePerInstanceInput() *f64
```

- *Type:* *f64

---

##### `MaxUtilizationInput`<sup>Optional</sup> <a name="MaxUtilizationInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilizationInput"></a>

```go
func MaxUtilizationInput() *f64
```

- *Type:* *f64

---

##### `BalancingMode`<sup>Required</sup> <a name="BalancingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.balancingMode"></a>

```go
func BalancingMode() *string
```

- *Type:* *string

---

##### `CapacityScaler`<sup>Required</sup> <a name="CapacityScaler" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScaler"></a>

```go
func CapacityScaler() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Failover`<sup>Required</sup> <a name="Failover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.failover"></a>

```go
func Failover() interface{}
```

- *Type:* interface{}

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnections"></a>

```go
func MaxConnections() *f64
```

- *Type:* *f64

---

##### `MaxConnectionsPerEndpoint`<sup>Required</sup> <a name="MaxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint"></a>

```go
func MaxConnectionsPerEndpoint() *f64
```

- *Type:* *f64

---

##### `MaxConnectionsPerInstance`<sup>Required</sup> <a name="MaxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance"></a>

```go
func MaxConnectionsPerInstance() *f64
```

- *Type:* *f64

---

##### `MaxRate`<sup>Required</sup> <a name="MaxRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRate"></a>

```go
func MaxRate() *f64
```

- *Type:* *f64

---

##### `MaxRatePerEndpoint`<sup>Required</sup> <a name="MaxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint"></a>

```go
func MaxRatePerEndpoint() *f64
```

- *Type:* *f64

---

##### `MaxRatePerInstance`<sup>Required</sup> <a name="MaxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance"></a>

```go
func MaxRatePerInstance() *f64
```

- *Type:* *f64

---

##### `MaxUtilization`<sup>Required</sup> <a name="MaxUtilization" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilization"></a>

```go
func MaxUtilization() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference <a name="GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost">ResetIncludeHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies">ResetIncludeNamedCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol">ResetIncludeProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString">ResetIncludeQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist">ResetQueryStringBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">ResetQueryStringWhitelist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeHost` <a name="ResetIncludeHost" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost"></a>

```go
func ResetIncludeHost()
```

##### `ResetIncludeNamedCookies` <a name="ResetIncludeNamedCookies" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies"></a>

```go
func ResetIncludeNamedCookies()
```

##### `ResetIncludeProtocol` <a name="ResetIncludeProtocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol"></a>

```go
func ResetIncludeProtocol()
```

##### `ResetIncludeQueryString` <a name="ResetIncludeQueryString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString"></a>

```go
func ResetIncludeQueryString()
```

##### `ResetQueryStringBlacklist` <a name="ResetQueryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist"></a>

```go
func ResetQueryStringBlacklist()
```

##### `ResetQueryStringWhitelist` <a name="ResetQueryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```go
func ResetQueryStringWhitelist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput">IncludeHostInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput">IncludeNamedCookiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput">IncludeProtocolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput">IncludeQueryStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput">QueryStringBlacklistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">QueryStringWhitelistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost">IncludeHost</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies">IncludeNamedCookies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">IncludeProtocol</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString">IncludeQueryString</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist">QueryStringBlacklist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">QueryStringWhitelist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeHostInput`<sup>Optional</sup> <a name="IncludeHostInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput"></a>

```go
func IncludeHostInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeNamedCookiesInput`<sup>Optional</sup> <a name="IncludeNamedCookiesInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput"></a>

```go
func IncludeNamedCookiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeProtocolInput`<sup>Optional</sup> <a name="IncludeProtocolInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput"></a>

```go
func IncludeProtocolInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeQueryStringInput`<sup>Optional</sup> <a name="IncludeQueryStringInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput"></a>

```go
func IncludeQueryStringInput() interface{}
```

- *Type:* interface{}

---

##### `QueryStringBlacklistInput`<sup>Optional</sup> <a name="QueryStringBlacklistInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput"></a>

```go
func QueryStringBlacklistInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringWhitelistInput`<sup>Optional</sup> <a name="QueryStringWhitelistInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```go
func QueryStringWhitelistInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeHost`<sup>Required</sup> <a name="IncludeHost" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost"></a>

```go
func IncludeHost() interface{}
```

- *Type:* interface{}

---

##### `IncludeNamedCookies`<sup>Required</sup> <a name="IncludeNamedCookies" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies"></a>

```go
func IncludeNamedCookies() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeProtocol`<sup>Required</sup> <a name="IncludeProtocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```go
func IncludeProtocol() interface{}
```

- *Type:* interface{}

---

##### `IncludeQueryString`<sup>Required</sup> <a name="IncludeQueryString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString"></a>

```go
func IncludeQueryString() interface{}
```

- *Type:* interface{}

---

##### `QueryStringBlacklist`<sup>Required</sup> <a name="QueryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist"></a>

```go
func QueryStringBlacklist() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringWhitelist`<sup>Required</sup> <a name="QueryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```go
func QueryStringWhitelist() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---


### GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList <a name="GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference <a name="GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```go
func ResetCode()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">CodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```go
func CodeInput() *f64
```

- *Type:* *f64

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionBackendServiceCdnPolicyOutputReference <a name="GoogleComputeRegionBackendServiceCdnPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceCdnPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceCdnPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy">PutCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy">PutNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy">ResetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheMode">ResetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetClientTtl">ResetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCaching">ResetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy">ResetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetServeWhileStale">ResetServeWhileStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">ResetSignedUrlCacheMaxAgeSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCacheKeyPolicy` <a name="PutCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```go
func PutCacheKeyPolicy(value GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `PutNegativeCachingPolicy` <a name="PutNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```go
func PutNegativeCachingPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCacheKeyPolicy` <a name="ResetCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```go
func ResetCacheKeyPolicy()
```

##### `ResetCacheMode` <a name="ResetCacheMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheMode"></a>

```go
func ResetCacheMode()
```

##### `ResetClientTtl` <a name="ResetClientTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetClientTtl"></a>

```go
func ResetClientTtl()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetDefaultTtl"></a>

```go
func ResetDefaultTtl()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNegativeCaching` <a name="ResetNegativeCaching" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCaching"></a>

```go
func ResetNegativeCaching()
```

##### `ResetNegativeCachingPolicy` <a name="ResetNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```go
func ResetNegativeCachingPolicy()
```

##### `ResetServeWhileStale` <a name="ResetServeWhileStale" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetServeWhileStale"></a>

```go
func ResetServeWhileStale()
```

##### `ResetSignedUrlCacheMaxAgeSec` <a name="ResetSignedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```go
func ResetSignedUrlCacheMaxAgeSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy">CacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy">NegativeCachingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput">CacheKeyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheModeInput">CacheModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtlInput">ClientTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtlInput">MaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingInput">NegativeCachingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput">NegativeCachingPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput">ServeWhileStaleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">SignedUrlCacheMaxAgeSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode">CacheMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl">ClientTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching">NegativeCaching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale">ServeWhileStale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">SignedUrlCacheMaxAgeSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheKeyPolicy`<sup>Required</sup> <a name="CacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```go
func CacheKeyPolicy() GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `NegativeCachingPolicy`<sup>Required</sup> <a name="NegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```go
func NegativeCachingPolicy() GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a>

---

##### `CacheKeyPolicyInput`<sup>Optional</sup> <a name="CacheKeyPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```go
func CacheKeyPolicyInput() GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `CacheModeInput`<sup>Optional</sup> <a name="CacheModeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheModeInput"></a>

```go
func CacheModeInput() *string
```

- *Type:* *string

---

##### `ClientTtlInput`<sup>Optional</sup> <a name="ClientTtlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtlInput"></a>

```go
func ClientTtlInput() *f64
```

- *Type:* *f64

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtlInput"></a>

```go
func DefaultTtlInput() *f64
```

- *Type:* *f64

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtlInput"></a>

```go
func MaxTtlInput() *f64
```

- *Type:* *f64

---

##### `NegativeCachingInput`<sup>Optional</sup> <a name="NegativeCachingInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingInput"></a>

```go
func NegativeCachingInput() interface{}
```

- *Type:* interface{}

---

##### `NegativeCachingPolicyInput`<sup>Optional</sup> <a name="NegativeCachingPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```go
func NegativeCachingPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `ServeWhileStaleInput`<sup>Optional</sup> <a name="ServeWhileStaleInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```go
func ServeWhileStaleInput() *f64
```

- *Type:* *f64

---

##### `SignedUrlCacheMaxAgeSecInput`<sup>Optional</sup> <a name="SignedUrlCacheMaxAgeSecInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```go
func SignedUrlCacheMaxAgeSecInput() *f64
```

- *Type:* *f64

---

##### `CacheMode`<sup>Required</sup> <a name="CacheMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode"></a>

```go
func CacheMode() *string
```

- *Type:* *string

---

##### `ClientTtl`<sup>Required</sup> <a name="ClientTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl"></a>

```go
func ClientTtl() *f64
```

- *Type:* *f64

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl"></a>

```go
func DefaultTtl() *f64
```

- *Type:* *f64

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl"></a>

```go
func MaxTtl() *f64
```

- *Type:* *f64

---

##### `NegativeCaching`<sup>Required</sup> <a name="NegativeCaching" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching"></a>

```go
func NegativeCaching() interface{}
```

- *Type:* interface{}

---

##### `ServeWhileStale`<sup>Required</sup> <a name="ServeWhileStale" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale"></a>

```go
func ServeWhileStale() *f64
```

- *Type:* *f64

---

##### `SignedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="SignedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```go
func SignedUrlCacheMaxAgeSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a>

---


### GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference <a name="GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a>

---


### GoogleComputeRegionBackendServiceCircuitBreakersOutputReference <a name="GoogleComputeRegionBackendServiceCircuitBreakersOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceCircuitBreakersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceCircuitBreakersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.putConnectTimeout">PutConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxConnections">ResetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests">ResetMaxPendingRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequests">ResetMaxRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection">ResetMaxRequestsPerConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnectTimeout` <a name="PutConnectTimeout" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.putConnectTimeout"></a>

```go
func PutConnectTimeout(value GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.putConnectTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a>

---

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetConnectTimeout"></a>

```go
func ResetConnectTimeout()
```

##### `ResetMaxConnections` <a name="ResetMaxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxConnections"></a>

```go
func ResetMaxConnections()
```

##### `ResetMaxPendingRequests` <a name="ResetMaxPendingRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests"></a>

```go
func ResetMaxPendingRequests()
```

##### `ResetMaxRequests` <a name="ResetMaxRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequests"></a>

```go
func ResetMaxRequests()
```

##### `ResetMaxRequestsPerConnection` <a name="ResetMaxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection"></a>

```go
func ResetMaxRequestsPerConnection()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput">MaxPendingRequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput">MaxRequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput">MaxRequestsPerConnectionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests">MaxRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection">MaxRequestsPerConnection</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeout"></a>

```go
func ConnectTimeout() GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference</a>

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeoutInput"></a>

```go
func ConnectTimeoutInput() GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a>

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput"></a>

```go
func MaxConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxPendingRequestsInput`<sup>Optional</sup> <a name="MaxPendingRequestsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput"></a>

```go
func MaxPendingRequestsInput() *f64
```

- *Type:* *f64

---

##### `MaxRequestsInput`<sup>Optional</sup> <a name="MaxRequestsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput"></a>

```go
func MaxRequestsInput() *f64
```

- *Type:* *f64

---

##### `MaxRequestsPerConnectionInput`<sup>Optional</sup> <a name="MaxRequestsPerConnectionInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput"></a>

```go
func MaxRequestsPerConnectionInput() *f64
```

- *Type:* *f64

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections"></a>

```go
func MaxConnections() *f64
```

- *Type:* *f64

---

##### `MaxPendingRequests`<sup>Required</sup> <a name="MaxPendingRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests"></a>

```go
func MaxPendingRequests() *f64
```

- *Type:* *f64

---

##### `MaxRequests`<sup>Required</sup> <a name="MaxRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests"></a>

```go
func MaxRequests() *f64
```

- *Type:* *f64

---

##### `MaxRequestsPerConnection`<sup>Required</sup> <a name="MaxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection"></a>

```go
func MaxRequestsPerConnection() *f64
```

- *Type:* *f64

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a>

---


### GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference <a name="GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetConnectionPersistenceOnUnhealthyBackends">ResetConnectionPersistenceOnUnhealthyBackends</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetEnableStrongAffinity">ResetEnableStrongAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetIdleTimeoutSec">ResetIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetTrackingMode">ResetTrackingMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionPersistenceOnUnhealthyBackends` <a name="ResetConnectionPersistenceOnUnhealthyBackends" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetConnectionPersistenceOnUnhealthyBackends"></a>

```go
func ResetConnectionPersistenceOnUnhealthyBackends()
```

##### `ResetEnableStrongAffinity` <a name="ResetEnableStrongAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetEnableStrongAffinity"></a>

```go
func ResetEnableStrongAffinity()
```

##### `ResetIdleTimeoutSec` <a name="ResetIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetIdleTimeoutSec"></a>

```go
func ResetIdleTimeoutSec()
```

##### `ResetTrackingMode` <a name="ResetTrackingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetTrackingMode"></a>

```go
func ResetTrackingMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackendsInput">ConnectionPersistenceOnUnhealthyBackendsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinityInput">EnableStrongAffinityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSecInput">IdleTimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingModeInput">TrackingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackends">ConnectionPersistenceOnUnhealthyBackends</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinity">EnableStrongAffinity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSec">IdleTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingMode">TrackingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionPersistenceOnUnhealthyBackendsInput`<sup>Optional</sup> <a name="ConnectionPersistenceOnUnhealthyBackendsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackendsInput"></a>

```go
func ConnectionPersistenceOnUnhealthyBackendsInput() *string
```

- *Type:* *string

---

##### `EnableStrongAffinityInput`<sup>Optional</sup> <a name="EnableStrongAffinityInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinityInput"></a>

```go
func EnableStrongAffinityInput() interface{}
```

- *Type:* interface{}

---

##### `IdleTimeoutSecInput`<sup>Optional</sup> <a name="IdleTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSecInput"></a>

```go
func IdleTimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `TrackingModeInput`<sup>Optional</sup> <a name="TrackingModeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingModeInput"></a>

```go
func TrackingModeInput() *string
```

- *Type:* *string

---

##### `ConnectionPersistenceOnUnhealthyBackends`<sup>Required</sup> <a name="ConnectionPersistenceOnUnhealthyBackends" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackends"></a>

```go
func ConnectionPersistenceOnUnhealthyBackends() *string
```

- *Type:* *string

---

##### `EnableStrongAffinity`<sup>Required</sup> <a name="EnableStrongAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinity"></a>

```go
func EnableStrongAffinity() interface{}
```

- *Type:* interface{}

---

##### `IdleTimeoutSec`<sup>Required</sup> <a name="IdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSec"></a>

```go
func IdleTimeoutSec() *f64
```

- *Type:* *f64

---

##### `TrackingMode`<sup>Required</sup> <a name="TrackingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingMode"></a>

```go
func TrackingMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceConnectionTrackingPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

---


### GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference <a name="GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl">PutTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTtl` <a name="PutTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl"></a>

```go
func PutTtl(value GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput">TtlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl"></a>

```go
func Ttl() GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput"></a>

```go
func TtlInput() GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a>

---


### GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference <a name="GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---


### GoogleComputeRegionBackendServiceConsistentHashOutputReference <a name="GoogleComputeRegionBackendServiceConsistentHashOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceConsistentHashOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceConsistentHashOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie">PutHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetHttpCookie">ResetHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetHttpHeaderName">ResetHttpHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetMinimumRingSize">ResetMinimumRingSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpCookie` <a name="PutHttpCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie"></a>

```go
func PutHttpCookie(value GoogleComputeRegionBackendServiceConsistentHashHttpCookie)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a>

---

##### `ResetHttpCookie` <a name="ResetHttpCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetHttpCookie"></a>

```go
func ResetHttpCookie()
```

##### `ResetHttpHeaderName` <a name="ResetHttpHeaderName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetHttpHeaderName"></a>

```go
func ResetHttpHeaderName()
```

##### `ResetMinimumRingSize` <a name="ResetMinimumRingSize" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetMinimumRingSize"></a>

```go
func ResetMinimumRingSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie">HttpCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference">GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookieInput">HttpCookieInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput">HttpHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput">MinimumRingSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName">HttpHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize">MinimumRingSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpCookie`<sup>Required</sup> <a name="HttpCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie"></a>

```go
func HttpCookie() GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference">GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference</a>

---

##### `HttpCookieInput`<sup>Optional</sup> <a name="HttpCookieInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookieInput"></a>

```go
func HttpCookieInput() GoogleComputeRegionBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a>

---

##### `HttpHeaderNameInput`<sup>Optional</sup> <a name="HttpHeaderNameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput"></a>

```go
func HttpHeaderNameInput() *string
```

- *Type:* *string

---

##### `MinimumRingSizeInput`<sup>Optional</sup> <a name="MinimumRingSizeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput"></a>

```go
func MinimumRingSizeInput() *f64
```

- *Type:* *f64

---

##### `HttpHeaderName`<sup>Required</sup> <a name="HttpHeaderName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName"></a>

```go
func HttpHeaderName() *string
```

- *Type:* *string

---

##### `MinimumRingSize`<sup>Required</sup> <a name="MinimumRingSize" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize"></a>

```go
func MinimumRingSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a>

---


### GoogleComputeRegionBackendServiceCustomMetricsList <a name="GoogleComputeRegionBackendServiceCustomMetricsList" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceCustomMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionBackendServiceCustomMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionBackendServiceCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionBackendServiceCustomMetricsOutputReference <a name="GoogleComputeRegionBackendServiceCustomMetricsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceCustomMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionBackendServiceCustomMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.dryRunInput">DryRunInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.dryRun">DryRun</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DryRunInput`<sup>Optional</sup> <a name="DryRunInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.dryRunInput"></a>

```go
func DryRunInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `DryRun`<sup>Required</sup> <a name="DryRun" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.dryRun"></a>

```go
func DryRun() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionBackendServiceFailoverPolicyOutputReference <a name="GoogleComputeRegionBackendServiceFailoverPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceFailoverPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceFailoverPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetDisableConnectionDrainOnFailover">ResetDisableConnectionDrainOnFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetDropTrafficIfUnhealthy">ResetDropTrafficIfUnhealthy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetFailoverRatio">ResetFailoverRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableConnectionDrainOnFailover` <a name="ResetDisableConnectionDrainOnFailover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetDisableConnectionDrainOnFailover"></a>

```go
func ResetDisableConnectionDrainOnFailover()
```

##### `ResetDropTrafficIfUnhealthy` <a name="ResetDropTrafficIfUnhealthy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetDropTrafficIfUnhealthy"></a>

```go
func ResetDropTrafficIfUnhealthy()
```

##### `ResetFailoverRatio` <a name="ResetFailoverRatio" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetFailoverRatio"></a>

```go
func ResetFailoverRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailoverInput">DisableConnectionDrainOnFailoverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthyInput">DropTrafficIfUnhealthyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatioInput">FailoverRatioInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover">DisableConnectionDrainOnFailover</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy">DropTrafficIfUnhealthy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio">FailoverRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableConnectionDrainOnFailoverInput`<sup>Optional</sup> <a name="DisableConnectionDrainOnFailoverInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailoverInput"></a>

```go
func DisableConnectionDrainOnFailoverInput() interface{}
```

- *Type:* interface{}

---

##### `DropTrafficIfUnhealthyInput`<sup>Optional</sup> <a name="DropTrafficIfUnhealthyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthyInput"></a>

```go
func DropTrafficIfUnhealthyInput() interface{}
```

- *Type:* interface{}

---

##### `FailoverRatioInput`<sup>Optional</sup> <a name="FailoverRatioInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatioInput"></a>

```go
func FailoverRatioInput() *f64
```

- *Type:* *f64

---

##### `DisableConnectionDrainOnFailover`<sup>Required</sup> <a name="DisableConnectionDrainOnFailover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover"></a>

```go
func DisableConnectionDrainOnFailover() interface{}
```

- *Type:* interface{}

---

##### `DropTrafficIfUnhealthy`<sup>Required</sup> <a name="DropTrafficIfUnhealthy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy"></a>

```go
func DropTrafficIfUnhealthy() interface{}
```

- *Type:* interface{}

---

##### `FailoverRatio`<sup>Required</sup> <a name="FailoverRatio" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio"></a>

```go
func FailoverRatio() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a>

---


### GoogleComputeRegionBackendServiceIapOutputReference <a name="GoogleComputeRegionBackendServiceIapOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceIapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceIapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resetOauth2ClientId">ResetOauth2ClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resetOauth2ClientSecret">ResetOauth2ClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauth2ClientId` <a name="ResetOauth2ClientId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resetOauth2ClientId"></a>

```go
func ResetOauth2ClientId()
```

##### `ResetOauth2ClientSecret` <a name="ResetOauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resetOauth2ClientSecret"></a>

```go
func ResetOauth2ClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256">Oauth2ClientSecretSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientIdInput">Oauth2ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretInput">Oauth2ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId">Oauth2ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret">Oauth2ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Oauth2ClientSecretSha256`<sup>Required</sup> <a name="Oauth2ClientSecretSha256" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256"></a>

```go
func Oauth2ClientSecretSha256() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Oauth2ClientIdInput`<sup>Optional</sup> <a name="Oauth2ClientIdInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientIdInput"></a>

```go
func Oauth2ClientIdInput() *string
```

- *Type:* *string

---

##### `Oauth2ClientSecretInput`<sup>Optional</sup> <a name="Oauth2ClientSecretInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretInput"></a>

```go
func Oauth2ClientSecretInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Oauth2ClientId`<sup>Required</sup> <a name="Oauth2ClientId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId"></a>

```go
func Oauth2ClientId() *string
```

- *Type:* *string

---

##### `Oauth2ClientSecret`<sup>Required</sup> <a name="Oauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret"></a>

```go
func Oauth2ClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a>

---


### GoogleComputeRegionBackendServiceLogConfigOutputReference <a name="GoogleComputeRegionBackendServiceLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetOptionalFields">ResetOptionalFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetOptionalMode">ResetOptionalMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetSampleRate">ResetSampleRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetOptionalFields` <a name="ResetOptionalFields" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetOptionalFields"></a>

```go
func ResetOptionalFields()
```

##### `ResetOptionalMode` <a name="ResetOptionalMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetOptionalMode"></a>

```go
func ResetOptionalMode()
```

##### `ResetSampleRate` <a name="ResetSampleRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetSampleRate"></a>

```go
func ResetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalFieldsInput">OptionalFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalModeInput">OptionalModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRateInput">SampleRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalFields">OptionalFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalMode">OptionalMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `OptionalFieldsInput`<sup>Optional</sup> <a name="OptionalFieldsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalFieldsInput"></a>

```go
func OptionalFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OptionalModeInput`<sup>Optional</sup> <a name="OptionalModeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalModeInput"></a>

```go
func OptionalModeInput() *string
```

- *Type:* *string

---

##### `SampleRateInput`<sup>Optional</sup> <a name="SampleRateInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRateInput"></a>

```go
func SampleRateInput() *f64
```

- *Type:* *f64

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `OptionalFields`<sup>Required</sup> <a name="OptionalFields" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalFields"></a>

```go
func OptionalFields() *[]*string
```

- *Type:* *[]*string

---

##### `OptionalMode`<sup>Required</sup> <a name="OptionalMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalMode"></a>

```go
func OptionalMode() *string
```

- *Type:* *string

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate"></a>

```go
func SampleRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a>

---


### GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference <a name="GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---


### GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference <a name="GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a>

---


### GoogleComputeRegionBackendServiceOutlierDetectionOutputReference <a name="GoogleComputeRegionBackendServiceOutlierDetectionOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceOutlierDetectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceOutlierDetectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime">PutBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval">PutInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime">ResetBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors">ResetConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure">ResetConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors">ResetEnforcingConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure">ResetEnforcingConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate">ResetEnforcingSuccessRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent">ResetMaxEjectionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts">ResetSuccessRateMinimumHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume">ResetSuccessRateRequestVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor">ResetSuccessRateStdevFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseEjectionTime` <a name="PutBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime"></a>

```go
func PutBaseEjectionTime(value GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `PutInterval` <a name="PutInterval" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval"></a>

```go
func PutInterval(value GoogleComputeRegionBackendServiceOutlierDetectionInterval)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a>

---

##### `ResetBaseEjectionTime` <a name="ResetBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime"></a>

```go
func ResetBaseEjectionTime()
```

##### `ResetConsecutiveErrors` <a name="ResetConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors"></a>

```go
func ResetConsecutiveErrors()
```

##### `ResetConsecutiveGatewayFailure` <a name="ResetConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure"></a>

```go
func ResetConsecutiveGatewayFailure()
```

##### `ResetEnforcingConsecutiveErrors` <a name="ResetEnforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors"></a>

```go
func ResetEnforcingConsecutiveErrors()
```

##### `ResetEnforcingConsecutiveGatewayFailure` <a name="ResetEnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure"></a>

```go
func ResetEnforcingConsecutiveGatewayFailure()
```

##### `ResetEnforcingSuccessRate` <a name="ResetEnforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate"></a>

```go
func ResetEnforcingSuccessRate()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetMaxEjectionPercent` <a name="ResetMaxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent"></a>

```go
func ResetMaxEjectionPercent()
```

##### `ResetSuccessRateMinimumHosts` <a name="ResetSuccessRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts"></a>

```go
func ResetSuccessRateMinimumHosts()
```

##### `ResetSuccessRateRequestVolume` <a name="ResetSuccessRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume"></a>

```go
func ResetSuccessRateRequestVolume()
```

##### `ResetSuccessRateStdevFactor` <a name="ResetSuccessRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor"></a>

```go
func ResetSuccessRateStdevFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime">BaseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval">Interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput">BaseEjectionTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput">ConsecutiveErrorsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput">ConsecutiveGatewayFailureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput">EnforcingConsecutiveErrorsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput">EnforcingConsecutiveGatewayFailureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput">EnforcingSuccessRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.intervalInput">IntervalInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput">MaxEjectionPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput">SuccessRateMinimumHostsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput">SuccessRateRequestVolumeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput">SuccessRateStdevFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors">ConsecutiveErrors</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure">ConsecutiveGatewayFailure</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors">EnforcingConsecutiveErrors</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure">EnforcingConsecutiveGatewayFailure</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate">EnforcingSuccessRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent">MaxEjectionPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts">SuccessRateMinimumHosts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume">SuccessRateRequestVolume</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor">SuccessRateStdevFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseEjectionTime`<sup>Required</sup> <a name="BaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime"></a>

```go
func BaseEjectionTime() GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a>

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval"></a>

```go
func Interval() GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference</a>

---

##### `BaseEjectionTimeInput`<sup>Optional</sup> <a name="BaseEjectionTimeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput"></a>

```go
func BaseEjectionTimeInput() GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `ConsecutiveErrorsInput`<sup>Optional</sup> <a name="ConsecutiveErrorsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput"></a>

```go
func ConsecutiveErrorsInput() *f64
```

- *Type:* *f64

---

##### `ConsecutiveGatewayFailureInput`<sup>Optional</sup> <a name="ConsecutiveGatewayFailureInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput"></a>

```go
func ConsecutiveGatewayFailureInput() *f64
```

- *Type:* *f64

---

##### `EnforcingConsecutiveErrorsInput`<sup>Optional</sup> <a name="EnforcingConsecutiveErrorsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput"></a>

```go
func EnforcingConsecutiveErrorsInput() *f64
```

- *Type:* *f64

---

##### `EnforcingConsecutiveGatewayFailureInput`<sup>Optional</sup> <a name="EnforcingConsecutiveGatewayFailureInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput"></a>

```go
func EnforcingConsecutiveGatewayFailureInput() *f64
```

- *Type:* *f64

---

##### `EnforcingSuccessRateInput`<sup>Optional</sup> <a name="EnforcingSuccessRateInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput"></a>

```go
func EnforcingSuccessRateInput() *f64
```

- *Type:* *f64

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.intervalInput"></a>

```go
func IntervalInput() GoogleComputeRegionBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a>

---

##### `MaxEjectionPercentInput`<sup>Optional</sup> <a name="MaxEjectionPercentInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput"></a>

```go
func MaxEjectionPercentInput() *f64
```

- *Type:* *f64

---

##### `SuccessRateMinimumHostsInput`<sup>Optional</sup> <a name="SuccessRateMinimumHostsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput"></a>

```go
func SuccessRateMinimumHostsInput() *f64
```

- *Type:* *f64

---

##### `SuccessRateRequestVolumeInput`<sup>Optional</sup> <a name="SuccessRateRequestVolumeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput"></a>

```go
func SuccessRateRequestVolumeInput() *f64
```

- *Type:* *f64

---

##### `SuccessRateStdevFactorInput`<sup>Optional</sup> <a name="SuccessRateStdevFactorInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput"></a>

```go
func SuccessRateStdevFactorInput() *f64
```

- *Type:* *f64

---

##### `ConsecutiveErrors`<sup>Required</sup> <a name="ConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors"></a>

```go
func ConsecutiveErrors() *f64
```

- *Type:* *f64

---

##### `ConsecutiveGatewayFailure`<sup>Required</sup> <a name="ConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure"></a>

```go
func ConsecutiveGatewayFailure() *f64
```

- *Type:* *f64

---

##### `EnforcingConsecutiveErrors`<sup>Required</sup> <a name="EnforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors"></a>

```go
func EnforcingConsecutiveErrors() *f64
```

- *Type:* *f64

---

##### `EnforcingConsecutiveGatewayFailure`<sup>Required</sup> <a name="EnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure"></a>

```go
func EnforcingConsecutiveGatewayFailure() *f64
```

- *Type:* *f64

---

##### `EnforcingSuccessRate`<sup>Required</sup> <a name="EnforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate"></a>

```go
func EnforcingSuccessRate() *f64
```

- *Type:* *f64

---

##### `MaxEjectionPercent`<sup>Required</sup> <a name="MaxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent"></a>

```go
func MaxEjectionPercent() *f64
```

- *Type:* *f64

---

##### `SuccessRateMinimumHosts`<sup>Required</sup> <a name="SuccessRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts"></a>

```go
func SuccessRateMinimumHosts() *f64
```

- *Type:* *f64

---

##### `SuccessRateRequestVolume`<sup>Required</sup> <a name="SuccessRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume"></a>

```go
func SuccessRateRequestVolume() *f64
```

- *Type:* *f64

---

##### `SuccessRateStdevFactor`<sup>Required</sup> <a name="SuccessRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor"></a>

```go
func SuccessRateStdevFactor() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a>

---


### GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference <a name="GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.putTtl">PutTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTtl` <a name="PutTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.putTtl"></a>

```go
func PutTtl(value GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput">TtlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl"></a>

```go
func Ttl() GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput"></a>

```go
func TtlInput() GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceStrongSessionAffinityCookie
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

---


### GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference <a name="GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a>

---


### GoogleComputeRegionBackendServiceSubsettingOutputReference <a name="GoogleComputeRegionBackendServiceSubsettingOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceSubsettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceSubsettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionBackendServiceSubsetting
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a>

---


### GoogleComputeRegionBackendServiceTimeoutsOutputReference <a name="GoogleComputeRegionBackendServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregionbackendservice"

googlecomputeregionbackendservice.NewGoogleComputeRegionBackendServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionBackendServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



