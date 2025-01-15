# `googleComputeBackendService` Submodule <a name="`googleComputeBackendService` Submodule" id="@cdktf/provider-google-beta.googleComputeBackendService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeBackendService <a name="GoogleComputeBackendService" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service google_compute_backend_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendService(scope Construct, id *string, config GoogleComputeBackendServiceConfig) GoogleComputeBackendService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig">GoogleComputeBackendServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig">GoogleComputeBackendServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putBackend">PutBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCdnPolicy">PutCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCircuitBreakers">PutCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putConsistentHash">PutConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putIap">PutIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLocalityLbPolicies">PutLocalityLbPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putOutlierDetection">PutOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putSecuritySettings">PutSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putStrongSessionAffinityCookie">PutStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetAffinityCookieTtlSec">ResetAffinityCookieTtlSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCdnPolicy">ResetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCircuitBreakers">ResetCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCompressionMode">ResetCompressionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetConnectionDrainingTimeoutSec">ResetConnectionDrainingTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetConsistentHash">ResetConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCustomRequestHeaders">ResetCustomRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCustomResponseHeaders">ResetCustomResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetEdgeSecurityPolicy">ResetEdgeSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetEnableCdn">ResetEnableCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetHealthChecks">ResetHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetIap">ResetIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetIpAddressSelectionPolicy">ResetIpAddressSelectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLoadBalancingScheme">ResetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLocalityLbPolicies">ResetLocalityLbPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLocalityLbPolicy">ResetLocalityLbPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetOutlierDetection">ResetOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSecuritySettings">ResetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetServiceLbPolicy">ResetServiceLbPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSessionAffinity">ResetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetStrongSessionAffinityCookie">ResetStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetTimeoutSec">ResetTimeoutSec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackend` <a name="PutBackend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putBackend"></a>

```go
func PutBackend(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putBackend.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCdnPolicy` <a name="PutCdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCdnPolicy"></a>

```go
func PutCdnPolicy(value GoogleComputeBackendServiceCdnPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a>

---

##### `PutCircuitBreakers` <a name="PutCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCircuitBreakers"></a>

```go
func PutCircuitBreakers(value GoogleComputeBackendServiceCircuitBreakers)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCircuitBreakers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a>

---

##### `PutConsistentHash` <a name="PutConsistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putConsistentHash"></a>

```go
func PutConsistentHash(value GoogleComputeBackendServiceConsistentHash)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putConsistentHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a>

---

##### `PutIap` <a name="PutIap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putIap"></a>

```go
func PutIap(value GoogleComputeBackendServiceIap)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putIap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a>

---

##### `PutLocalityLbPolicies` <a name="PutLocalityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLocalityLbPolicies"></a>

```go
func PutLocalityLbPolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLocalityLbPolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLogConfig"></a>

```go
func PutLogConfig(value GoogleComputeBackendServiceLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a>

---

##### `PutOutlierDetection` <a name="PutOutlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putOutlierDetection"></a>

```go
func PutOutlierDetection(value GoogleComputeBackendServiceOutlierDetection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putOutlierDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a>

---

##### `PutSecuritySettings` <a name="PutSecuritySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putSecuritySettings"></a>

```go
func PutSecuritySettings(value GoogleComputeBackendServiceSecuritySettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putSecuritySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a>

---

##### `PutStrongSessionAffinityCookie` <a name="PutStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putStrongSessionAffinityCookie"></a>

```go
func PutStrongSessionAffinityCookie(value GoogleComputeBackendServiceStrongSessionAffinityCookie)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putStrongSessionAffinityCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeBackendServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts">GoogleComputeBackendServiceTimeouts</a>

---

##### `ResetAffinityCookieTtlSec` <a name="ResetAffinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetAffinityCookieTtlSec"></a>

```go
func ResetAffinityCookieTtlSec()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetCdnPolicy` <a name="ResetCdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCdnPolicy"></a>

```go
func ResetCdnPolicy()
```

##### `ResetCircuitBreakers` <a name="ResetCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCircuitBreakers"></a>

```go
func ResetCircuitBreakers()
```

##### `ResetCompressionMode` <a name="ResetCompressionMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCompressionMode"></a>

```go
func ResetCompressionMode()
```

##### `ResetConnectionDrainingTimeoutSec` <a name="ResetConnectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetConnectionDrainingTimeoutSec"></a>

```go
func ResetConnectionDrainingTimeoutSec()
```

##### `ResetConsistentHash` <a name="ResetConsistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetConsistentHash"></a>

```go
func ResetConsistentHash()
```

##### `ResetCustomRequestHeaders` <a name="ResetCustomRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCustomRequestHeaders"></a>

```go
func ResetCustomRequestHeaders()
```

##### `ResetCustomResponseHeaders` <a name="ResetCustomResponseHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCustomResponseHeaders"></a>

```go
func ResetCustomResponseHeaders()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEdgeSecurityPolicy` <a name="ResetEdgeSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetEdgeSecurityPolicy"></a>

```go
func ResetEdgeSecurityPolicy()
```

##### `ResetEnableCdn` <a name="ResetEnableCdn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetEnableCdn"></a>

```go
func ResetEnableCdn()
```

##### `ResetHealthChecks` <a name="ResetHealthChecks" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetHealthChecks"></a>

```go
func ResetHealthChecks()
```

##### `ResetIap` <a name="ResetIap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetIap"></a>

```go
func ResetIap()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddressSelectionPolicy` <a name="ResetIpAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetIpAddressSelectionPolicy"></a>

```go
func ResetIpAddressSelectionPolicy()
```

##### `ResetLoadBalancingScheme` <a name="ResetLoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLoadBalancingScheme"></a>

```go
func ResetLoadBalancingScheme()
```

##### `ResetLocalityLbPolicies` <a name="ResetLocalityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLocalityLbPolicies"></a>

```go
func ResetLocalityLbPolicies()
```

##### `ResetLocalityLbPolicy` <a name="ResetLocalityLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLocalityLbPolicy"></a>

```go
func ResetLocalityLbPolicy()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLogConfig"></a>

```go
func ResetLogConfig()
```

##### `ResetOutlierDetection` <a name="ResetOutlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetOutlierDetection"></a>

```go
func ResetOutlierDetection()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSecurityPolicy"></a>

```go
func ResetSecurityPolicy()
```

##### `ResetSecuritySettings` <a name="ResetSecuritySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSecuritySettings"></a>

```go
func ResetSecuritySettings()
```

##### `ResetServiceLbPolicy` <a name="ResetServiceLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetServiceLbPolicy"></a>

```go
func ResetServiceLbPolicy()
```

##### `ResetSessionAffinity` <a name="ResetSessionAffinity" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSessionAffinity"></a>

```go
func ResetSessionAffinity()
```

##### `ResetStrongSessionAffinityCookie` <a name="ResetStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetStrongSessionAffinityCookie"></a>

```go
func ResetStrongSessionAffinityCookie()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeoutSec` <a name="ResetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetTimeoutSec"></a>

```go
func ResetTimeoutSec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeBackendService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.GoogleComputeBackendService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.GoogleComputeBackendService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.GoogleComputeBackendService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.GoogleComputeBackendService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeBackendService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeBackendService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeBackendService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeBackendService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.backend">Backend</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList">GoogleComputeBackendServiceBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdnPolicy">CdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference">GoogleComputeBackendServiceCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.circuitBreakers">CircuitBreakers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference">GoogleComputeBackendServiceCircuitBreakersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.consistentHash">ConsistentHash</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference">GoogleComputeBackendServiceConsistentHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.generatedId">GeneratedId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.iap">Iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference">GoogleComputeBackendServiceIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicies">LocalityLbPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList">GoogleComputeBackendServiceLocalityLbPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference">GoogleComputeBackendServiceLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.outlierDetection">OutlierDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference">GoogleComputeBackendServiceOutlierDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securitySettings">SecuritySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference">GoogleComputeBackendServiceSecuritySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.strongSessionAffinityCookie">StrongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference">GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference">GoogleComputeBackendServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.affinityCookieTtlSecInput">AffinityCookieTtlSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.backendInput">BackendInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdnPolicyInput">CdnPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.circuitBreakersInput">CircuitBreakersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.compressionModeInput">CompressionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connectionDrainingTimeoutSecInput">ConnectionDrainingTimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.consistentHashInput">ConsistentHashInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customRequestHeadersInput">CustomRequestHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customResponseHeadersInput">CustomResponseHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.edgeSecurityPolicyInput">EdgeSecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.enableCdnInput">EnableCdnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.healthChecksInput">HealthChecksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.iapInput">IapInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.ipAddressSelectionPolicyInput">IpAddressSelectionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.loadBalancingSchemeInput">LoadBalancingSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPoliciesInput">LocalityLbPoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicyInput">LocalityLbPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.outlierDetectionInput">OutlierDetectionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securitySettingsInput">SecuritySettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.serviceLbPolicyInput">ServiceLbPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.sessionAffinityInput">SessionAffinityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.strongSessionAffinityCookieInput">StrongSessionAffinityCookieInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutSecInput">TimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.affinityCookieTtlSec">AffinityCookieTtlSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.compressionMode">CompressionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connectionDrainingTimeoutSec">ConnectionDrainingTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customRequestHeaders">CustomRequestHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customResponseHeaders">CustomResponseHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.edgeSecurityPolicy">EdgeSecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.enableCdn">EnableCdn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.healthChecks">HealthChecks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.ipAddressSelectionPolicy">IpAddressSelectionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicy">LocalityLbPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.serviceLbPolicy">ServiceLbPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.sessionAffinity">SessionAffinity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.backend"></a>

```go
func Backend() GoogleComputeBackendServiceBackendList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList">GoogleComputeBackendServiceBackendList</a>

---

##### `CdnPolicy`<sup>Required</sup> <a name="CdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdnPolicy"></a>

```go
func CdnPolicy() GoogleComputeBackendServiceCdnPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference">GoogleComputeBackendServiceCdnPolicyOutputReference</a>

---

##### `CircuitBreakers`<sup>Required</sup> <a name="CircuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.circuitBreakers"></a>

```go
func CircuitBreakers() GoogleComputeBackendServiceCircuitBreakersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference">GoogleComputeBackendServiceCircuitBreakersOutputReference</a>

---

##### `ConsistentHash`<sup>Required</sup> <a name="ConsistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.consistentHash"></a>

```go
func ConsistentHash() GoogleComputeBackendServiceConsistentHashOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference">GoogleComputeBackendServiceConsistentHashOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `GeneratedId`<sup>Required</sup> <a name="GeneratedId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.generatedId"></a>

```go
func GeneratedId() *f64
```

- *Type:* *f64

---

##### `Iap`<sup>Required</sup> <a name="Iap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.iap"></a>

```go
func Iap() GoogleComputeBackendServiceIapOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference">GoogleComputeBackendServiceIapOutputReference</a>

---

##### `LocalityLbPolicies`<sup>Required</sup> <a name="LocalityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicies"></a>

```go
func LocalityLbPolicies() GoogleComputeBackendServiceLocalityLbPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList">GoogleComputeBackendServiceLocalityLbPoliciesList</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.logConfig"></a>

```go
func LogConfig() GoogleComputeBackendServiceLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference">GoogleComputeBackendServiceLogConfigOutputReference</a>

---

##### `OutlierDetection`<sup>Required</sup> <a name="OutlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.outlierDetection"></a>

```go
func OutlierDetection() GoogleComputeBackendServiceOutlierDetectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference">GoogleComputeBackendServiceOutlierDetectionOutputReference</a>

---

##### `SecuritySettings`<sup>Required</sup> <a name="SecuritySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securitySettings"></a>

```go
func SecuritySettings() GoogleComputeBackendServiceSecuritySettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference">GoogleComputeBackendServiceSecuritySettingsOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `StrongSessionAffinityCookie`<sup>Required</sup> <a name="StrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.strongSessionAffinityCookie"></a>

```go
func StrongSessionAffinityCookie() GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference">GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeouts"></a>

```go
func Timeouts() GoogleComputeBackendServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference">GoogleComputeBackendServiceTimeoutsOutputReference</a>

---

##### `AffinityCookieTtlSecInput`<sup>Optional</sup> <a name="AffinityCookieTtlSecInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.affinityCookieTtlSecInput"></a>

```go
func AffinityCookieTtlSecInput() *f64
```

- *Type:* *f64

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.backendInput"></a>

```go
func BackendInput() interface{}
```

- *Type:* interface{}

---

##### `CdnPolicyInput`<sup>Optional</sup> <a name="CdnPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdnPolicyInput"></a>

```go
func CdnPolicyInput() GoogleComputeBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a>

---

##### `CircuitBreakersInput`<sup>Optional</sup> <a name="CircuitBreakersInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.circuitBreakersInput"></a>

```go
func CircuitBreakersInput() GoogleComputeBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a>

---

##### `CompressionModeInput`<sup>Optional</sup> <a name="CompressionModeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.compressionModeInput"></a>

```go
func CompressionModeInput() *string
```

- *Type:* *string

---

##### `ConnectionDrainingTimeoutSecInput`<sup>Optional</sup> <a name="ConnectionDrainingTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connectionDrainingTimeoutSecInput"></a>

```go
func ConnectionDrainingTimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `ConsistentHashInput`<sup>Optional</sup> <a name="ConsistentHashInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.consistentHashInput"></a>

```go
func ConsistentHashInput() GoogleComputeBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a>

---

##### `CustomRequestHeadersInput`<sup>Optional</sup> <a name="CustomRequestHeadersInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customRequestHeadersInput"></a>

```go
func CustomRequestHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomResponseHeadersInput`<sup>Optional</sup> <a name="CustomResponseHeadersInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customResponseHeadersInput"></a>

```go
func CustomResponseHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EdgeSecurityPolicyInput`<sup>Optional</sup> <a name="EdgeSecurityPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.edgeSecurityPolicyInput"></a>

```go
func EdgeSecurityPolicyInput() *string
```

- *Type:* *string

---

##### `EnableCdnInput`<sup>Optional</sup> <a name="EnableCdnInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.enableCdnInput"></a>

```go
func EnableCdnInput() interface{}
```

- *Type:* interface{}

---

##### `HealthChecksInput`<sup>Optional</sup> <a name="HealthChecksInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.healthChecksInput"></a>

```go
func HealthChecksInput() *[]*string
```

- *Type:* *[]*string

---

##### `IapInput`<sup>Optional</sup> <a name="IapInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.iapInput"></a>

```go
func IapInput() GoogleComputeBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressSelectionPolicyInput`<sup>Optional</sup> <a name="IpAddressSelectionPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.ipAddressSelectionPolicyInput"></a>

```go
func IpAddressSelectionPolicyInput() *string
```

- *Type:* *string

---

##### `LoadBalancingSchemeInput`<sup>Optional</sup> <a name="LoadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.loadBalancingSchemeInput"></a>

```go
func LoadBalancingSchemeInput() *string
```

- *Type:* *string

---

##### `LocalityLbPoliciesInput`<sup>Optional</sup> <a name="LocalityLbPoliciesInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPoliciesInput"></a>

```go
func LocalityLbPoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `LocalityLbPolicyInput`<sup>Optional</sup> <a name="LocalityLbPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicyInput"></a>

```go
func LocalityLbPolicyInput() *string
```

- *Type:* *string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.logConfigInput"></a>

```go
func LogConfigInput() GoogleComputeBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutlierDetectionInput`<sup>Optional</sup> <a name="OutlierDetectionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.outlierDetectionInput"></a>

```go
func OutlierDetectionInput() GoogleComputeBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a>

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securityPolicyInput"></a>

```go
func SecurityPolicyInput() *string
```

- *Type:* *string

---

##### `SecuritySettingsInput`<sup>Optional</sup> <a name="SecuritySettingsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securitySettingsInput"></a>

```go
func SecuritySettingsInput() GoogleComputeBackendServiceSecuritySettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a>

---

##### `ServiceLbPolicyInput`<sup>Optional</sup> <a name="ServiceLbPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.serviceLbPolicyInput"></a>

```go
func ServiceLbPolicyInput() *string
```

- *Type:* *string

---

##### `SessionAffinityInput`<sup>Optional</sup> <a name="SessionAffinityInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.sessionAffinityInput"></a>

```go
func SessionAffinityInput() *string
```

- *Type:* *string

---

##### `StrongSessionAffinityCookieInput`<sup>Optional</sup> <a name="StrongSessionAffinityCookieInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.strongSessionAffinityCookieInput"></a>

```go
func StrongSessionAffinityCookieInput() GoogleComputeBackendServiceStrongSessionAffinityCookie
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a>

---

##### `TimeoutSecInput`<sup>Optional</sup> <a name="TimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutSecInput"></a>

```go
func TimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AffinityCookieTtlSec`<sup>Required</sup> <a name="AffinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.affinityCookieTtlSec"></a>

```go
func AffinityCookieTtlSec() *f64
```

- *Type:* *f64

---

##### `CompressionMode`<sup>Required</sup> <a name="CompressionMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.compressionMode"></a>

```go
func CompressionMode() *string
```

- *Type:* *string

---

##### `ConnectionDrainingTimeoutSec`<sup>Required</sup> <a name="ConnectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connectionDrainingTimeoutSec"></a>

```go
func ConnectionDrainingTimeoutSec() *f64
```

- *Type:* *f64

---

##### `CustomRequestHeaders`<sup>Required</sup> <a name="CustomRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customRequestHeaders"></a>

```go
func CustomRequestHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `CustomResponseHeaders`<sup>Required</sup> <a name="CustomResponseHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customResponseHeaders"></a>

```go
func CustomResponseHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EdgeSecurityPolicy`<sup>Required</sup> <a name="EdgeSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.edgeSecurityPolicy"></a>

```go
func EdgeSecurityPolicy() *string
```

- *Type:* *string

---

##### `EnableCdn`<sup>Required</sup> <a name="EnableCdn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.enableCdn"></a>

```go
func EnableCdn() interface{}
```

- *Type:* interface{}

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.healthChecks"></a>

```go
func HealthChecks() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddressSelectionPolicy`<sup>Required</sup> <a name="IpAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.ipAddressSelectionPolicy"></a>

```go
func IpAddressSelectionPolicy() *string
```

- *Type:* *string

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.loadBalancingScheme"></a>

```go
func LoadBalancingScheme() *string
```

- *Type:* *string

---

##### `LocalityLbPolicy`<sup>Required</sup> <a name="LocalityLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicy"></a>

```go
func LocalityLbPolicy() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securityPolicy"></a>

```go
func SecurityPolicy() *string
```

- *Type:* *string

---

##### `ServiceLbPolicy`<sup>Required</sup> <a name="ServiceLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.serviceLbPolicy"></a>

```go
func ServiceLbPolicy() *string
```

- *Type:* *string

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.sessionAffinity"></a>

```go
func SessionAffinity() *string
```

- *Type:* *string

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutSec"></a>

```go
func TimeoutSec() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeBackendServiceBackend <a name="GoogleComputeBackendServiceBackend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceBackend {
	Group: *string,
	BalancingMode: *string,
	CapacityScaler: *f64,
	Description: *string,
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.group">Group</a></code> | <code>*string</code> | The fully-qualified URL of an Instance Group or Network Endpoint Group resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.balancingMode">BalancingMode</a></code> | <code>*string</code> | Specifies the balancing mode for this backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.capacityScaler">CapacityScaler</a></code> | <code>*f64</code> | A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | The max number of simultaneous connections for the group. Can be used with either CONNECTION or UTILIZATION balancing modes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnectionsPerEndpoint">MaxConnectionsPerEndpoint</a></code> | <code>*f64</code> | The max number of simultaneous connections that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnectionsPerInstance">MaxConnectionsPerInstance</a></code> | <code>*f64</code> | The max number of simultaneous connections that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRate">MaxRate</a></code> | <code>*f64</code> | The max requests per second (RPS) of the group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRatePerEndpoint">MaxRatePerEndpoint</a></code> | <code>*f64</code> | The max requests per second (RPS) that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRatePerInstance">MaxRatePerInstance</a></code> | <code>*f64</code> | The max requests per second (RPS) that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxUtilization">MaxUtilization</a></code> | <code>*f64</code> | Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. Valid range is [0.0, 1.0]. |

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.group"></a>

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

Note that you must specify an Instance Group or Network Endpoint
Group resource using the fully-qualified URL, rather than a
partial URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#group GoogleComputeBackendService#group}

---

##### `BalancingMode`<sup>Optional</sup> <a name="BalancingMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.balancingMode"></a>

```go
BalancingMode *string
```

- *Type:* *string

Specifies the balancing mode for this backend.

For global HTTP(S) or TCP/SSL load balancing, the default is
UTILIZATION. Valid values are UTILIZATION, RATE (for HTTP(S))
and CONNECTION (for TCP/SSL).

See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
for an explanation of load balancing modes. Default value: "UTILIZATION" Possible values: ["UTILIZATION", "RATE", "CONNECTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#balancing_mode GoogleComputeBackendService#balancing_mode}

---

##### `CapacityScaler`<sup>Optional</sup> <a name="CapacityScaler" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.capacityScaler"></a>

```go
CapacityScaler *f64
```

- *Type:* *f64

A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION).

Default value is 1, which means the group will serve up to 100%
of its configured capacity (depending on balancingMode). A
setting of 0 means the group is completely drained, offering
0% of its available Capacity. Valid range is [0.0,1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#capacity_scaler GoogleComputeBackendService#capacity_scaler}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#description GoogleComputeBackendService#description}

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnections"></a>

```go
MaxConnections *f64
```

- *Type:* *f64

The max number of simultaneous connections for the group. Can be used with either CONNECTION or UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_connections GoogleComputeBackendService#max_connections}

---

##### `MaxConnectionsPerEndpoint`<sup>Optional</sup> <a name="MaxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnectionsPerEndpoint"></a>

```go
MaxConnectionsPerEndpoint *f64
```

- *Type:* *f64

The max number of simultaneous connections that a single backend network endpoint can handle.

This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either
maxConnections or maxConnectionsPerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_connections_per_endpoint GoogleComputeBackendService#max_connections_per_endpoint}

---

##### `MaxConnectionsPerInstance`<sup>Optional</sup> <a name="MaxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnectionsPerInstance"></a>

```go
MaxConnectionsPerInstance *f64
```

- *Type:* *f64

The max number of simultaneous connections that a single backend instance can handle.

This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_connections_per_instance GoogleComputeBackendService#max_connections_per_instance}

---

##### `MaxRate`<sup>Optional</sup> <a name="MaxRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRate"></a>

```go
MaxRate *f64
```

- *Type:* *f64

The max requests per second (RPS) of the group.

Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. For RATE mode, either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_rate GoogleComputeBackendService#max_rate}

---

##### `MaxRatePerEndpoint`<sup>Optional</sup> <a name="MaxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRatePerEndpoint"></a>

```go
MaxRatePerEndpoint *f64
```

- *Type:* *f64

The max requests per second (RPS) that a single backend network endpoint can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_rate_per_endpoint GoogleComputeBackendService#max_rate_per_endpoint}

---

##### `MaxRatePerInstance`<sup>Optional</sup> <a name="MaxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRatePerInstance"></a>

```go
MaxRatePerInstance *f64
```

- *Type:* *f64

The max requests per second (RPS) that a single backend instance can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_rate_per_instance GoogleComputeBackendService#max_rate_per_instance}

---

##### `MaxUtilization`<sup>Optional</sup> <a name="MaxUtilization" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxUtilization"></a>

```go
MaxUtilization *f64
```

- *Type:* *f64

Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. Valid range is [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_utilization GoogleComputeBackendService#max_utilization}

---

### GoogleComputeBackendServiceCdnPolicy <a name="GoogleComputeBackendServiceCdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceCdnPolicy {
	BypassCacheOnRequestHeaders: interface{},
	CacheKeyPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy,
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.bypassCacheOnRequestHeaders">BypassCacheOnRequestHeaders</a></code> | <code>interface{}</code> | bypass_cache_on_request_headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.cacheKeyPolicy">CacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.cacheMode">CacheMode</a></code> | <code>*string</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.clientTtl">ClientTtl</a></code> | <code>*f64</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.negativeCaching">NegativeCaching</a></code> | <code>interface{}</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.negativeCachingPolicy">NegativeCachingPolicy</a></code> | <code>interface{}</code> | negative_caching_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.serveWhileStale">ServeWhileStale</a></code> | <code>*f64</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec">SignedUrlCacheMaxAgeSec</a></code> | <code>*f64</code> | Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s). |

---

##### `BypassCacheOnRequestHeaders`<sup>Optional</sup> <a name="BypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.bypassCacheOnRequestHeaders"></a>

```go
BypassCacheOnRequestHeaders interface{}
```

- *Type:* interface{}

bypass_cache_on_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#bypass_cache_on_request_headers GoogleComputeBackendService#bypass_cache_on_request_headers}

---

##### `CacheKeyPolicy`<sup>Optional</sup> <a name="CacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.cacheKeyPolicy"></a>

```go
CacheKeyPolicy GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#cache_key_policy GoogleComputeBackendService#cache_key_policy}

---

##### `CacheMode`<sup>Optional</sup> <a name="CacheMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.cacheMode"></a>

```go
CacheMode *string
```

- *Type:* *string

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#cache_mode GoogleComputeBackendService#cache_mode}

---

##### `ClientTtl`<sup>Optional</sup> <a name="ClientTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.clientTtl"></a>

```go
ClientTtl *f64
```

- *Type:* *f64

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#client_ttl GoogleComputeBackendService#client_ttl}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.defaultTtl"></a>

```go
DefaultTtl *f64
```

- *Type:* *f64

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#default_ttl GoogleComputeBackendService#default_ttl}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.maxTtl"></a>

```go
MaxTtl *f64
```

- *Type:* *f64

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_ttl GoogleComputeBackendService#max_ttl}

---

##### `NegativeCaching`<sup>Optional</sup> <a name="NegativeCaching" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.negativeCaching"></a>

```go
NegativeCaching interface{}
```

- *Type:* interface{}

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#negative_caching GoogleComputeBackendService#negative_caching}

---

##### `NegativeCachingPolicy`<sup>Optional</sup> <a name="NegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.negativeCachingPolicy"></a>

```go
NegativeCachingPolicy interface{}
```

- *Type:* interface{}

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#negative_caching_policy GoogleComputeBackendService#negative_caching_policy}

---

##### `ServeWhileStale`<sup>Optional</sup> <a name="ServeWhileStale" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.serveWhileStale"></a>

```go
ServeWhileStale *f64
```

- *Type:* *f64

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#serve_while_stale GoogleComputeBackendService#serve_while_stale}

---

##### `SignedUrlCacheMaxAgeSec`<sup>Optional</sup> <a name="SignedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#signed_url_cache_max_age_sec GoogleComputeBackendService#signed_url_cache_max_age_sec}

---

### GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders <a name="GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders {
	HeaderName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.property.headerName">HeaderName</a></code> | <code>*string</code> | The header field name to match on when bypassing cache. Values are case-insensitive. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

The header field name to match on when bypassing cache. Values are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#header_name GoogleComputeBackendService#header_name}

---

### GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy <a name="GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy {
	IncludeHost: interface{},
	IncludeHttpHeaders: *[]*string,
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost">IncludeHost</a></code> | <code>interface{}</code> | If true requests to different hosts will be cached separately. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHttpHeaders">IncludeHttpHeaders</a></code> | <code>*[]*string</code> | Allows HTTP request headers (by name) to be used in the cache key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies">IncludeNamedCookies</a></code> | <code>*[]*string</code> | Names of cookies to include in cache keys. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol">IncludeProtocol</a></code> | <code>interface{}</code> | If true, http and https requests will be cached separately. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString">IncludeQueryString</a></code> | <code>interface{}</code> | If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist">QueryStringBlacklist</a></code> | <code>*[]*string</code> | Names of query string parameters to exclude in cache keys. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">QueryStringWhitelist</a></code> | <code>*[]*string</code> | Names of query string parameters to include in cache keys. |

---

##### `IncludeHost`<sup>Optional</sup> <a name="IncludeHost" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost"></a>

```go
IncludeHost interface{}
```

- *Type:* interface{}

If true requests to different hosts will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#include_host GoogleComputeBackendService#include_host}

---

##### `IncludeHttpHeaders`<sup>Optional</sup> <a name="IncludeHttpHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHttpHeaders"></a>

```go
IncludeHttpHeaders *[]*string
```

- *Type:* *[]*string

Allows HTTP request headers (by name) to be used in the cache key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#include_http_headers GoogleComputeBackendService#include_http_headers}

---

##### `IncludeNamedCookies`<sup>Optional</sup> <a name="IncludeNamedCookies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies"></a>

```go
IncludeNamedCookies *[]*string
```

- *Type:* *[]*string

Names of cookies to include in cache keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#include_named_cookies GoogleComputeBackendService#include_named_cookies}

---

##### `IncludeProtocol`<sup>Optional</sup> <a name="IncludeProtocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol"></a>

```go
IncludeProtocol interface{}
```

- *Type:* interface{}

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#include_protocol GoogleComputeBackendService#include_protocol}

---

##### `IncludeQueryString`<sup>Optional</sup> <a name="IncludeQueryString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString"></a>

```go
IncludeQueryString interface{}
```

- *Type:* interface{}

If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist.

If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#include_query_string GoogleComputeBackendService#include_query_string}

---

##### `QueryStringBlacklist`<sup>Optional</sup> <a name="QueryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist"></a>

```go
QueryStringBlacklist *[]*string
```

- *Type:* *[]*string

Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#query_string_blacklist GoogleComputeBackendService#query_string_blacklist}

---

##### `QueryStringWhitelist`<sup>Optional</sup> <a name="QueryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```go
QueryStringWhitelist *[]*string
```

- *Type:* *[]*string

Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#query_string_whitelist GoogleComputeBackendService#query_string_whitelist}

---

### GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy <a name="GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy {
	Code: *f64,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.code">Code</a></code> | <code>*f64</code> | The HTTP status code to define a TTL against. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl">Ttl</a></code> | <code>*f64</code> | The TTL (in seconds) for which to cache responses with the corresponding status code. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.code"></a>

```go
Code *f64
```

- *Type:* *f64

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#code GoogleComputeBackendService#code}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

The TTL (in seconds) for which to cache responses with the corresponding status code.

The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#ttl GoogleComputeBackendService#ttl}

---

### GoogleComputeBackendServiceCircuitBreakers <a name="GoogleComputeBackendServiceCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceCircuitBreakers {
	ConnectTimeout: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout,
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.connectTimeout">ConnectTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a></code> | connect_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | The maximum number of connections to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>*f64</code> | The maximum number of pending requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRequests">MaxRequests</a></code> | <code>*f64</code> | The maximum number of parallel requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRequestsPerConnection">MaxRequestsPerConnection</a></code> | <code>*f64</code> | Maximum requests for a single backend connection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | The maximum number of parallel retries to the backend cluster. Defaults to 3. |

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.connectTimeout"></a>

```go
ConnectTimeout GoogleComputeBackendServiceCircuitBreakersConnectTimeout
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a>

connect_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#connect_timeout GoogleComputeBackendService#connect_timeout}

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxConnections"></a>

```go
MaxConnections *f64
```

- *Type:* *f64

The maximum number of connections to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_connections GoogleComputeBackendService#max_connections}

---

##### `MaxPendingRequests`<sup>Optional</sup> <a name="MaxPendingRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxPendingRequests"></a>

```go
MaxPendingRequests *f64
```

- *Type:* *f64

The maximum number of pending requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_pending_requests GoogleComputeBackendService#max_pending_requests}

---

##### `MaxRequests`<sup>Optional</sup> <a name="MaxRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRequests"></a>

```go
MaxRequests *f64
```

- *Type:* *f64

The maximum number of parallel requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_requests GoogleComputeBackendService#max_requests}

---

##### `MaxRequestsPerConnection`<sup>Optional</sup> <a name="MaxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRequestsPerConnection"></a>

```go
MaxRequestsPerConnection *f64
```

- *Type:* *f64

Maximum requests for a single backend connection.

This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_requests_per_connection GoogleComputeBackendService#max_requests_per_connection}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

The maximum number of parallel retries to the backend cluster. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_retries GoogleComputeBackendService#max_retries}

---

### GoogleComputeBackendServiceCircuitBreakersConnectTimeout <a name="GoogleComputeBackendServiceCircuitBreakersConnectTimeout" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceCircuitBreakersConnectTimeout {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}

---

### GoogleComputeBackendServiceConfig <a name="GoogleComputeBackendServiceConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceConfig {
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
	CdnPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy,
	CircuitBreakers: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers,
	CompressionMode: *string,
	ConnectionDrainingTimeoutSec: *f64,
	ConsistentHash: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash,
	CustomRequestHeaders: *[]*string,
	CustomResponseHeaders: *[]*string,
	Description: *string,
	EdgeSecurityPolicy: *string,
	EnableCdn: interface{},
	HealthChecks: *[]*string,
	Iap: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceIap,
	Id: *string,
	IpAddressSelectionPolicy: *string,
	LoadBalancingScheme: *string,
	LocalityLbPolicies: interface{},
	LocalityLbPolicy: *string,
	LogConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig,
	OutlierDetection: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection,
	PortName: *string,
	Project: *string,
	Protocol: *string,
	SecurityPolicy: *string,
	SecuritySettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings,
	ServiceLbPolicy: *string,
	SessionAffinity: *string,
	StrongSessionAffinityCookie: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts,
	TimeoutSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.affinityCookieTtlSec">AffinityCookieTtlSec</a></code> | <code>*f64</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.backend">Backend</a></code> | <code>interface{}</code> | backend block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.cdnPolicy">CdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.circuitBreakers">CircuitBreakers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.compressionMode">CompressionMode</a></code> | <code>*string</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.connectionDrainingTimeoutSec">ConnectionDrainingTimeoutSec</a></code> | <code>*f64</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.consistentHash">ConsistentHash</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.customRequestHeaders">CustomRequestHeaders</a></code> | <code>*[]*string</code> | Headers that the HTTP/S load balancer should add to proxied requests. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.customResponseHeaders">CustomResponseHeaders</a></code> | <code>*[]*string</code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.edgeSecurityPolicy">EdgeSecurityPolicy</a></code> | <code>*string</code> | The resource URL for the edge security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.enableCdn">EnableCdn</a></code> | <code>interface{}</code> | If true, enable Cloud CDN for this BackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.healthChecks">HealthChecks</a></code> | <code>*[]*string</code> | The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.iap">Iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#id GoogleComputeBackendService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.ipAddressSelectionPolicy">IpAddressSelectionPolicy</a></code> | <code>*string</code> | Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | Indicates whether the backend service will be used with internal or external load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.localityLbPolicies">LocalityLbPolicies</a></code> | <code>interface{}</code> | locality_lb_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.localityLbPolicy">LocalityLbPolicy</a></code> | <code>*string</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.outlierDetection">OutlierDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.portName">PortName</a></code> | <code>*string</code> | Name of backend port. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#project GoogleComputeBackendService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.protocol">Protocol</a></code> | <code>*string</code> | The protocol this BackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | The security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.securitySettings">SecuritySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a></code> | security_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.serviceLbPolicy">ServiceLbPolicy</a></code> | <code>*string</code> | URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.sessionAffinity">SessionAffinity</a></code> | <code>*string</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.strongSessionAffinityCookie">StrongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a></code> | strong_session_affinity_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts">GoogleComputeBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | The backend service timeout has a different meaning depending on the type of load balancer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

##### `AffinityCookieTtlSec`<sup>Optional</sup> <a name="AffinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.affinityCookieTtlSec"></a>

```go
AffinityCookieTtlSec *f64
```

- *Type:* *f64

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#affinity_cookie_ttl_sec GoogleComputeBackendService#affinity_cookie_ttl_sec}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.backend"></a>

```go
Backend interface{}
```

- *Type:* interface{}

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#backend GoogleComputeBackendService#backend}

---

##### `CdnPolicy`<sup>Optional</sup> <a name="CdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.cdnPolicy"></a>

```go
CdnPolicy GoogleComputeBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#cdn_policy GoogleComputeBackendService#cdn_policy}

---

##### `CircuitBreakers`<sup>Optional</sup> <a name="CircuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.circuitBreakers"></a>

```go
CircuitBreakers GoogleComputeBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#circuit_breakers GoogleComputeBackendService#circuit_breakers}

---

##### `CompressionMode`<sup>Optional</sup> <a name="CompressionMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.compressionMode"></a>

```go
CompressionMode *string
```

- *Type:* *string

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#compression_mode GoogleComputeBackendService#compression_mode}

---

##### `ConnectionDrainingTimeoutSec`<sup>Optional</sup> <a name="ConnectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.connectionDrainingTimeoutSec"></a>

```go
ConnectionDrainingTimeoutSec *f64
```

- *Type:* *f64

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#connection_draining_timeout_sec GoogleComputeBackendService#connection_draining_timeout_sec}

---

##### `ConsistentHash`<sup>Optional</sup> <a name="ConsistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.consistentHash"></a>

```go
ConsistentHash GoogleComputeBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#consistent_hash GoogleComputeBackendService#consistent_hash}

---

##### `CustomRequestHeaders`<sup>Optional</sup> <a name="CustomRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.customRequestHeaders"></a>

```go
CustomRequestHeaders *[]*string
```

- *Type:* *[]*string

Headers that the HTTP/S load balancer should add to proxied requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#custom_request_headers GoogleComputeBackendService#custom_request_headers}

---

##### `CustomResponseHeaders`<sup>Optional</sup> <a name="CustomResponseHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.customResponseHeaders"></a>

```go
CustomResponseHeaders *[]*string
```

- *Type:* *[]*string

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#custom_response_headers GoogleComputeBackendService#custom_response_headers}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#description GoogleComputeBackendService#description}

---

##### `EdgeSecurityPolicy`<sup>Optional</sup> <a name="EdgeSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.edgeSecurityPolicy"></a>

```go
EdgeSecurityPolicy *string
```

- *Type:* *string

The resource URL for the edge security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#edge_security_policy GoogleComputeBackendService#edge_security_policy}

---

##### `EnableCdn`<sup>Optional</sup> <a name="EnableCdn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.enableCdn"></a>

```go
EnableCdn interface{}
```

- *Type:* interface{}

If true, enable Cloud CDN for this BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#enable_cdn GoogleComputeBackendService#enable_cdn}

---

##### `HealthChecks`<sup>Optional</sup> <a name="HealthChecks" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.healthChecks"></a>

```go
HealthChecks *[]*string
```

- *Type:* *[]*string

The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService.

Currently at most one health
check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

For internal load balancing, a URL to a HealthCheck resource must be specified instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#health_checks GoogleComputeBackendService#health_checks}

---

##### `Iap`<sup>Optional</sup> <a name="Iap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.iap"></a>

```go
Iap GoogleComputeBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#iap GoogleComputeBackendService#iap}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#id GoogleComputeBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddressSelectionPolicy`<sup>Optional</sup> <a name="IpAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.ipAddressSelectionPolicy"></a>

```go
IpAddressSelectionPolicy *string
```

- *Type:* *string

Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC).

Possible values: ["IPV4_ONLY", "PREFER_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#ip_address_selection_policy GoogleComputeBackendService#ip_address_selection_policy}

---

##### `LoadBalancingScheme`<sup>Optional</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.loadBalancingScheme"></a>

```go
LoadBalancingScheme *string
```

- *Type:* *string

Indicates whether the backend service will be used with internal or external load balancing.

A backend service created for one type of
load balancing cannot be used with the other. For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL_SELF_MANAGED", "INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#load_balancing_scheme GoogleComputeBackendService#load_balancing_scheme}

---

##### `LocalityLbPolicies`<sup>Optional</sup> <a name="LocalityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.localityLbPolicies"></a>

```go
LocalityLbPolicies interface{}
```

- *Type:* interface{}

locality_lb_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#locality_lb_policies GoogleComputeBackendService#locality_lb_policies}

---

##### `LocalityLbPolicy`<sup>Optional</sup> <a name="LocalityLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.localityLbPolicy"></a>

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
field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV", "WEIGHTED_MAGLEV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#locality_lb_policy GoogleComputeBackendService#locality_lb_policy}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.logConfig"></a>

```go
LogConfig GoogleComputeBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#log_config GoogleComputeBackendService#log_config}

---

##### `OutlierDetection`<sup>Optional</sup> <a name="OutlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.outlierDetection"></a>

```go
OutlierDetection GoogleComputeBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#outlier_detection GoogleComputeBackendService#outlier_detection}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

Name of backend port.

The same name should appear in the instance
groups referenced by this service. Required when the load balancing
scheme is EXTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#port_name GoogleComputeBackendService#port_name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#project GoogleComputeBackendService#project}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The protocol this BackendService uses to communicate with backends.

The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. **NOTE**: With protocol “UNSPECIFIED”,
the backend service can be used by Layer 4 Internal Load Balancing or Network Load Balancing
with TCP/UDP/L3_DEFAULT Forwarding Rule protocol. Possible values: ["HTTP", "HTTPS", "HTTP2", "TCP", "SSL", "GRPC", "UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#protocol GoogleComputeBackendService#protocol}

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.securityPolicy"></a>

```go
SecurityPolicy *string
```

- *Type:* *string

The security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#security_policy GoogleComputeBackendService#security_policy}

---

##### `SecuritySettings`<sup>Optional</sup> <a name="SecuritySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.securitySettings"></a>

```go
SecuritySettings GoogleComputeBackendServiceSecuritySettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#security_settings GoogleComputeBackendService#security_settings}

---

##### `ServiceLbPolicy`<sup>Optional</sup> <a name="ServiceLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.serviceLbPolicy"></a>

```go
ServiceLbPolicy *string
```

- *Type:* *string

URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#service_lb_policy GoogleComputeBackendService#service_lb_policy}

---

##### `SessionAffinity`<sup>Optional</sup> <a name="SessionAffinity" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.sessionAffinity"></a>

```go
SessionAffinity *string
```

- *Type:* *string

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "STRONG_COOKIE_AFFINITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#session_affinity GoogleComputeBackendService#session_affinity}

---

##### `StrongSessionAffinityCookie`<sup>Optional</sup> <a name="StrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.strongSessionAffinityCookie"></a>

```go
StrongSessionAffinityCookie GoogleComputeBackendServiceStrongSessionAffinityCookie
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a>

strong_session_affinity_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#strong_session_affinity_cookie GoogleComputeBackendService#strong_session_affinity_cookie}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeBackendServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts">GoogleComputeBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#timeouts GoogleComputeBackendService#timeouts}

---

##### `TimeoutSec`<sup>Optional</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.timeoutSec"></a>

```go
TimeoutSec *f64
```

- *Type:* *f64

The backend service timeout has a different meaning depending on the type of load balancer.

For more information see, [Backend service settings](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices).
The default is 30 seconds.
The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#timeout_sec GoogleComputeBackendService#timeout_sec}

---

### GoogleComputeBackendServiceConsistentHash <a name="GoogleComputeBackendServiceConsistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceConsistentHash {
	HttpCookie: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie,
	HttpHeaderName: *string,
	MinimumRingSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.httpCookie">HttpCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a></code> | http_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.httpHeaderName">HttpHeaderName</a></code> | <code>*string</code> | The hash based on the value of the specified header field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.minimumRingSize">MinimumRingSize</a></code> | <code>*f64</code> | The minimum number of virtual nodes to use for the hash ring. |

---

##### `HttpCookie`<sup>Optional</sup> <a name="HttpCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.httpCookie"></a>

```go
HttpCookie GoogleComputeBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a>

http_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#http_cookie GoogleComputeBackendService#http_cookie}

---

##### `HttpHeaderName`<sup>Optional</sup> <a name="HttpHeaderName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.httpHeaderName"></a>

```go
HttpHeaderName *string
```

- *Type:* *string

The hash based on the value of the specified header field.

This field is applicable if the sessionAffinity is set to HEADER_FIELD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#http_header_name GoogleComputeBackendService#http_header_name}

---

##### `MinimumRingSize`<sup>Optional</sup> <a name="MinimumRingSize" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.minimumRingSize"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#minimum_ring_size GoogleComputeBackendService#minimum_ring_size}

---

### GoogleComputeBackendServiceConsistentHashHttpCookie <a name="GoogleComputeBackendServiceConsistentHashHttpCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceConsistentHashHttpCookie {
	Name: *string,
	Path: *string,
	Ttl: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.name">Name</a></code> | <code>*string</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.path">Path</a></code> | <code>*string</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | ttl block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#path GoogleComputeBackendService#path}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.ttl"></a>

```go
Ttl GoogleComputeBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#ttl GoogleComputeBackendService#ttl}

---

### GoogleComputeBackendServiceConsistentHashHttpCookieTtl <a name="GoogleComputeBackendServiceConsistentHashHttpCookieTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceConsistentHashHttpCookieTtl {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}

---

### GoogleComputeBackendServiceIap <a name="GoogleComputeBackendServiceIap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceIap {
	Enabled: interface{},
	Oauth2ClientId: *string,
	Oauth2ClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the serving infrastructure will authenticate and authorize all incoming requests. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.oauth2ClientId">Oauth2ClientId</a></code> | <code>*string</code> | OAuth2 Client ID for IAP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.oauth2ClientSecret">Oauth2ClientSecret</a></code> | <code>*string</code> | OAuth2 Client Secret for IAP. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the serving infrastructure will authenticate and authorize all incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#enabled GoogleComputeBackendService#enabled}

---

##### `Oauth2ClientId`<sup>Optional</sup> <a name="Oauth2ClientId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.oauth2ClientId"></a>

```go
Oauth2ClientId *string
```

- *Type:* *string

OAuth2 Client ID for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#oauth2_client_id GoogleComputeBackendService#oauth2_client_id}

---

##### `Oauth2ClientSecret`<sup>Optional</sup> <a name="Oauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.oauth2ClientSecret"></a>

```go
Oauth2ClientSecret *string
```

- *Type:* *string

OAuth2 Client Secret for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#oauth2_client_secret GoogleComputeBackendService#oauth2_client_secret}

---

### GoogleComputeBackendServiceLocalityLbPolicies <a name="GoogleComputeBackendServiceLocalityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceLocalityLbPolicies {
	CustomPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy,
	Policy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies.property.customPolicy">CustomPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | policy block. |

---

##### `CustomPolicy`<sup>Optional</sup> <a name="CustomPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies.property.customPolicy"></a>

```go
CustomPolicy GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#custom_policy GoogleComputeBackendService#custom_policy}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies.property.policy"></a>

```go
Policy GoogleComputeBackendServiceLocalityLbPoliciesPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#policy GoogleComputeBackendService#policy}

---

### GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy <a name="GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy {
	Name: *string,
	Data: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.name">Name</a></code> | <code>*string</code> | Identifies the custom policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.data">Data</a></code> | <code>*string</code> | An optional, arbitrary JSON object with configuration data, understood by a locally installed custom policy implementation. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.name"></a>

```go
Name *string
```

- *Type:* *string

Identifies the custom policy.

The value should match the type the custom implementation is registered
with on the gRPC clients. It should follow protocol buffer
message naming conventions and include the full path (e.g.
myorg.CustomLbPolicy). The maximum length is 256 characters.

Note that specifying the same custom policy more than once for a
backend is not a valid configuration and will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.data"></a>

```go
Data *string
```

- *Type:* *string

An optional, arbitrary JSON object with configuration data, understood by a locally installed custom policy implementation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#data GoogleComputeBackendService#data}

---

### GoogleComputeBackendServiceLocalityLbPoliciesPolicy <a name="GoogleComputeBackendServiceLocalityLbPoliciesPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceLocalityLbPoliciesPolicy {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy.property.name">Name</a></code> | <code>*string</code> | The name of a locality load balancer policy to be used. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of a locality load balancer policy to be used.

The value
should be one of the predefined ones as supported by localityLbPolicy,
although at the moment only ROUND_ROBIN is supported.

This field should only be populated when the customPolicy field is not
used.

Note that specifying the same policy more than once for a backend is
not a valid configuration and will be rejected.

The possible values are:

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
  Maglev, refer to https://ai.google/research/pubs/pub44824 Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

### GoogleComputeBackendServiceLogConfig <a name="GoogleComputeBackendServiceLogConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceLogConfig {
	Enable: interface{},
	SampleRate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig.property.enable">Enable</a></code> | <code>interface{}</code> | Whether to enable logging for the load balancer traffic served by this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | This field can only be specified if logging is enabled for this backend service. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Whether to enable logging for the load balancer traffic served by this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#enable GoogleComputeBackendService#enable}

---

##### `SampleRate`<sup>Optional</sup> <a name="SampleRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig.property.sampleRate"></a>

```go
SampleRate *f64
```

- *Type:* *f64

This field can only be specified if logging is enabled for this backend service.

The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#sample_rate GoogleComputeBackendService#sample_rate}

---

### GoogleComputeBackendServiceOutlierDetection <a name="GoogleComputeBackendServiceOutlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceOutlierDetection {
	BaseEjectionTime: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime,
	ConsecutiveErrors: *f64,
	ConsecutiveGatewayFailure: *f64,
	EnforcingConsecutiveErrors: *f64,
	EnforcingConsecutiveGatewayFailure: *f64,
	EnforcingSuccessRate: *f64,
	Interval: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval,
	MaxEjectionPercent: *f64,
	SuccessRateMinimumHosts: *f64,
	SuccessRateRequestVolume: *f64,
	SuccessRateStdevFactor: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.baseEjectionTime">BaseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | base_ejection_time block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.consecutiveErrors">ConsecutiveErrors</a></code> | <code>*f64</code> | Number of errors before a host is ejected from the connection pool. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.consecutiveGatewayFailure">ConsecutiveGatewayFailure</a></code> | <code>*f64</code> | The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingConsecutiveErrors">EnforcingConsecutiveErrors</a></code> | <code>*f64</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure">EnforcingConsecutiveGatewayFailure</a></code> | <code>*f64</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingSuccessRate">EnforcingSuccessRate</a></code> | <code>*f64</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.interval">Interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a></code> | interval block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.maxEjectionPercent">MaxEjectionPercent</a></code> | <code>*f64</code> | Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateMinimumHosts">SuccessRateMinimumHosts</a></code> | <code>*f64</code> | The number of hosts in a cluster that must have enough request volume to detect success rate outliers. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateRequestVolume">SuccessRateRequestVolume</a></code> | <code>*f64</code> | The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateStdevFactor">SuccessRateStdevFactor</a></code> | <code>*f64</code> | This factor is used to determine the ejection threshold for success rate outlier ejection. |

---

##### `BaseEjectionTime`<sup>Optional</sup> <a name="BaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.baseEjectionTime"></a>

```go
BaseEjectionTime GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

base_ejection_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#base_ejection_time GoogleComputeBackendService#base_ejection_time}

---

##### `ConsecutiveErrors`<sup>Optional</sup> <a name="ConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.consecutiveErrors"></a>

```go
ConsecutiveErrors *f64
```

- *Type:* *f64

Number of errors before a host is ejected from the connection pool.

When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#consecutive_errors GoogleComputeBackendService#consecutive_errors}

---

##### `ConsecutiveGatewayFailure`<sup>Optional</sup> <a name="ConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.consecutiveGatewayFailure"></a>

```go
ConsecutiveGatewayFailure *f64
```

- *Type:* *f64

The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs.

Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#consecutive_gateway_failure GoogleComputeBackendService#consecutive_gateway_failure}

---

##### `EnforcingConsecutiveErrors`<sup>Optional</sup> <a name="EnforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingConsecutiveErrors"></a>

```go
EnforcingConsecutiveErrors *f64
```

- *Type:* *f64

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx.

This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#enforcing_consecutive_errors GoogleComputeBackendService#enforcing_consecutive_errors}

---

##### `EnforcingConsecutiveGatewayFailure`<sup>Optional</sup> <a name="EnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure"></a>

```go
EnforcingConsecutiveGatewayFailure *f64
```

- *Type:* *f64

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures.

This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#enforcing_consecutive_gateway_failure GoogleComputeBackendService#enforcing_consecutive_gateway_failure}

---

##### `EnforcingSuccessRate`<sup>Optional</sup> <a name="EnforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingSuccessRate"></a>

```go
EnforcingSuccessRate *f64
```

- *Type:* *f64

The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics.

This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#enforcing_success_rate GoogleComputeBackendService#enforcing_success_rate}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.interval"></a>

```go
Interval GoogleComputeBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#interval GoogleComputeBackendService#interval}

---

##### `MaxEjectionPercent`<sup>Optional</sup> <a name="MaxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.maxEjectionPercent"></a>

```go
MaxEjectionPercent *f64
```

- *Type:* *f64

Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_ejection_percent GoogleComputeBackendService#max_ejection_percent}

---

##### `SuccessRateMinimumHosts`<sup>Optional</sup> <a name="SuccessRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateMinimumHosts"></a>

```go
SuccessRateMinimumHosts *f64
```

- *Type:* *f64

The number of hosts in a cluster that must have enough request volume to detect success rate outliers.

If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#success_rate_minimum_hosts GoogleComputeBackendService#success_rate_minimum_hosts}

---

##### `SuccessRateRequestVolume`<sup>Optional</sup> <a name="SuccessRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateRequestVolume"></a>

```go
SuccessRateRequestVolume *f64
```

- *Type:* *f64

The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection.

If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#success_rate_request_volume GoogleComputeBackendService#success_rate_request_volume}

---

##### `SuccessRateStdevFactor`<sup>Optional</sup> <a name="SuccessRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateStdevFactor"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#success_rate_stdev_factor GoogleComputeBackendService#success_rate_stdev_factor}

---

### GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime <a name="GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}

---

### GoogleComputeBackendServiceOutlierDetectionInterval <a name="GoogleComputeBackendServiceOutlierDetectionInterval" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceOutlierDetectionInterval {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}

---

### GoogleComputeBackendServiceSecuritySettings <a name="GoogleComputeBackendServiceSecuritySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceSecuritySettings {
	AwsV4Authentication: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication,
	ClientTlsPolicy: *string,
	SubjectAltNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.awsV4Authentication">AwsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | aws_v4_authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.clientTlsPolicy">ClientTlsPolicy</a></code> | <code>*string</code> | ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.subjectAltNames">SubjectAltNames</a></code> | <code>*[]*string</code> | A list of alternate names to verify the subject identity in the certificate. |

---

##### `AwsV4Authentication`<sup>Optional</sup> <a name="AwsV4Authentication" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.awsV4Authentication"></a>

```go
AwsV4Authentication GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

aws_v4_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#aws_v4_authentication GoogleComputeBackendService#aws_v4_authentication}

---

##### `ClientTlsPolicy`<sup>Optional</sup> <a name="ClientTlsPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.clientTlsPolicy"></a>

```go
ClientTlsPolicy *string
```

- *Type:* *string

ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service.

This resource itself does not affect
configuration unless it is attached to a backend service resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#client_tls_policy GoogleComputeBackendService#client_tls_policy}

---

##### `SubjectAltNames`<sup>Optional</sup> <a name="SubjectAltNames" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.subjectAltNames"></a>

```go
SubjectAltNames *[]*string
```

- *Type:* *[]*string

A list of alternate names to verify the subject identity in the certificate.

If specified, the client will verify that the server certificate's subject
alt name matches one of the specified values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#subject_alt_names GoogleComputeBackendService#subject_alt_names}

---

### GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication <a name="GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication {
	AccessKey: *string,
	AccessKeyId: *string,
	AccessKeyVersion: *string,
	OriginRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKey">AccessKey</a></code> | <code>*string</code> | The access key used for s3 bucket authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | The identifier of an access key used for s3 bucket authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyVersion">AccessKeyVersion</a></code> | <code>*string</code> | The optional version identifier for the access key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.originRegion">OriginRegion</a></code> | <code>*string</code> | The name of the cloud region of your origin. |

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKey"></a>

```go
AccessKey *string
```

- *Type:* *string

The access key used for s3 bucket authentication.

Required for updating or creating a backend that uses AWS v4 signature authentication, but will not be returned as part of the configuration when queried with a REST API GET request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#access_key GoogleComputeBackendService#access_key}

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyId"></a>

```go
AccessKeyId *string
```

- *Type:* *string

The identifier of an access key used for s3 bucket authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#access_key_id GoogleComputeBackendService#access_key_id}

---

##### `AccessKeyVersion`<sup>Optional</sup> <a name="AccessKeyVersion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyVersion"></a>

```go
AccessKeyVersion *string
```

- *Type:* *string

The optional version identifier for the access key.

You can use this to keep track of different iterations of your access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#access_key_version GoogleComputeBackendService#access_key_version}

---

##### `OriginRegion`<sup>Optional</sup> <a name="OriginRegion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.originRegion"></a>

```go
OriginRegion *string
```

- *Type:* *string

The name of the cloud region of your origin.

This is a free-form field with the name of the region your cloud uses to host your origin.
For example, "us-east-1" for AWS or "us-ashburn-1" for OCI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#origin_region GoogleComputeBackendService#origin_region}

---

### GoogleComputeBackendServiceStrongSessionAffinityCookie <a name="GoogleComputeBackendServiceStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceStrongSessionAffinityCookie {
	Name: *string,
	Path: *string,
	Ttl: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.name">Name</a></code> | <code>*string</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.path">Path</a></code> | <code>*string</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | ttl block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#path GoogleComputeBackendService#path}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.ttl"></a>

```go
Ttl GoogleComputeBackendServiceStrongSessionAffinityCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#ttl GoogleComputeBackendService#ttl}

---

### GoogleComputeBackendServiceStrongSessionAffinityCookieTtl <a name="GoogleComputeBackendServiceStrongSessionAffinityCookieTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}

---

### GoogleComputeBackendServiceTimeouts <a name="GoogleComputeBackendServiceTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

&googlecomputebackendservice.GoogleComputeBackendServiceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#create GoogleComputeBackendService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#delete GoogleComputeBackendService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#update GoogleComputeBackendService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#create GoogleComputeBackendService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#delete GoogleComputeBackendService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#update GoogleComputeBackendService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeBackendServiceBackendList <a name="GoogleComputeBackendServiceBackendList" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceBackendList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeBackendServiceBackendList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.get"></a>

```go
func Get(index *f64) GoogleComputeBackendServiceBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeBackendServiceBackendOutputReference <a name="GoogleComputeBackendServiceBackendOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceBackendOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeBackendServiceBackendOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetBalancingMode">ResetBalancingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetCapacityScaler">ResetCapacityScaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnections">ResetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint">ResetMaxConnectionsPerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance">ResetMaxConnectionsPerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRate">ResetMaxRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRatePerEndpoint">ResetMaxRatePerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRatePerInstance">ResetMaxRatePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxUtilization">ResetMaxUtilization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBalancingMode` <a name="ResetBalancingMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetBalancingMode"></a>

```go
func ResetBalancingMode()
```

##### `ResetCapacityScaler` <a name="ResetCapacityScaler" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetCapacityScaler"></a>

```go
func ResetCapacityScaler()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetMaxConnections` <a name="ResetMaxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnections"></a>

```go
func ResetMaxConnections()
```

##### `ResetMaxConnectionsPerEndpoint` <a name="ResetMaxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint"></a>

```go
func ResetMaxConnectionsPerEndpoint()
```

##### `ResetMaxConnectionsPerInstance` <a name="ResetMaxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance"></a>

```go
func ResetMaxConnectionsPerInstance()
```

##### `ResetMaxRate` <a name="ResetMaxRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRate"></a>

```go
func ResetMaxRate()
```

##### `ResetMaxRatePerEndpoint` <a name="ResetMaxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRatePerEndpoint"></a>

```go
func ResetMaxRatePerEndpoint()
```

##### `ResetMaxRatePerInstance` <a name="ResetMaxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRatePerInstance"></a>

```go
func ResetMaxRatePerInstance()
```

##### `ResetMaxUtilization` <a name="ResetMaxUtilization" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxUtilization"></a>

```go
func ResetMaxUtilization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.balancingModeInput">BalancingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.capacityScalerInput">CapacityScalerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.groupInput">GroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput">MaxConnectionsPerEndpointInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput">MaxConnectionsPerInstanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRateInput">MaxRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerEndpointInput">MaxRatePerEndpointInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerInstanceInput">MaxRatePerInstanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxUtilizationInput">MaxUtilizationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.balancingMode">BalancingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.capacityScaler">CapacityScaler</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint">MaxConnectionsPerEndpoint</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstance">MaxConnectionsPerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRate">MaxRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerEndpoint">MaxRatePerEndpoint</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerInstance">MaxRatePerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxUtilization">MaxUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BalancingModeInput`<sup>Optional</sup> <a name="BalancingModeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.balancingModeInput"></a>

```go
func BalancingModeInput() *string
```

- *Type:* *string

---

##### `CapacityScalerInput`<sup>Optional</sup> <a name="CapacityScalerInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.capacityScalerInput"></a>

```go
func CapacityScalerInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.groupInput"></a>

```go
func GroupInput() *string
```

- *Type:* *string

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsInput"></a>

```go
func MaxConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxConnectionsPerEndpointInput`<sup>Optional</sup> <a name="MaxConnectionsPerEndpointInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput"></a>

```go
func MaxConnectionsPerEndpointInput() *f64
```

- *Type:* *f64

---

##### `MaxConnectionsPerInstanceInput`<sup>Optional</sup> <a name="MaxConnectionsPerInstanceInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput"></a>

```go
func MaxConnectionsPerInstanceInput() *f64
```

- *Type:* *f64

---

##### `MaxRateInput`<sup>Optional</sup> <a name="MaxRateInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRateInput"></a>

```go
func MaxRateInput() *f64
```

- *Type:* *f64

---

##### `MaxRatePerEndpointInput`<sup>Optional</sup> <a name="MaxRatePerEndpointInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerEndpointInput"></a>

```go
func MaxRatePerEndpointInput() *f64
```

- *Type:* *f64

---

##### `MaxRatePerInstanceInput`<sup>Optional</sup> <a name="MaxRatePerInstanceInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerInstanceInput"></a>

```go
func MaxRatePerInstanceInput() *f64
```

- *Type:* *f64

---

##### `MaxUtilizationInput`<sup>Optional</sup> <a name="MaxUtilizationInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxUtilizationInput"></a>

```go
func MaxUtilizationInput() *f64
```

- *Type:* *f64

---

##### `BalancingMode`<sup>Required</sup> <a name="BalancingMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.balancingMode"></a>

```go
func BalancingMode() *string
```

- *Type:* *string

---

##### `CapacityScaler`<sup>Required</sup> <a name="CapacityScaler" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.capacityScaler"></a>

```go
func CapacityScaler() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnections"></a>

```go
func MaxConnections() *f64
```

- *Type:* *f64

---

##### `MaxConnectionsPerEndpoint`<sup>Required</sup> <a name="MaxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint"></a>

```go
func MaxConnectionsPerEndpoint() *f64
```

- *Type:* *f64

---

##### `MaxConnectionsPerInstance`<sup>Required</sup> <a name="MaxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstance"></a>

```go
func MaxConnectionsPerInstance() *f64
```

- *Type:* *f64

---

##### `MaxRate`<sup>Required</sup> <a name="MaxRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRate"></a>

```go
func MaxRate() *f64
```

- *Type:* *f64

---

##### `MaxRatePerEndpoint`<sup>Required</sup> <a name="MaxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerEndpoint"></a>

```go
func MaxRatePerEndpoint() *f64
```

- *Type:* *f64

---

##### `MaxRatePerInstance`<sup>Required</sup> <a name="MaxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerInstance"></a>

```go
func MaxRatePerInstance() *f64
```

- *Type:* *f64

---

##### `MaxUtilization`<sup>Required</sup> <a name="MaxUtilization" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxUtilization"></a>

```go
func MaxUtilization() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList <a name="GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get"></a>

```go
func Get(index *f64) GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference <a name="GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference <a name="GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost">ResetIncludeHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders">ResetIncludeHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies">ResetIncludeNamedCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol">ResetIncludeProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString">ResetIncludeQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist">ResetQueryStringBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">ResetQueryStringWhitelist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeHost` <a name="ResetIncludeHost" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost"></a>

```go
func ResetIncludeHost()
```

##### `ResetIncludeHttpHeaders` <a name="ResetIncludeHttpHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders"></a>

```go
func ResetIncludeHttpHeaders()
```

##### `ResetIncludeNamedCookies` <a name="ResetIncludeNamedCookies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies"></a>

```go
func ResetIncludeNamedCookies()
```

##### `ResetIncludeProtocol` <a name="ResetIncludeProtocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol"></a>

```go
func ResetIncludeProtocol()
```

##### `ResetIncludeQueryString` <a name="ResetIncludeQueryString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString"></a>

```go
func ResetIncludeQueryString()
```

##### `ResetQueryStringBlacklist` <a name="ResetQueryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist"></a>

```go
func ResetQueryStringBlacklist()
```

##### `ResetQueryStringWhitelist` <a name="ResetQueryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```go
func ResetQueryStringWhitelist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput">IncludeHostInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput">IncludeHttpHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput">IncludeNamedCookiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput">IncludeProtocolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput">IncludeQueryStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput">QueryStringBlacklistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">QueryStringWhitelistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost">IncludeHost</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders">IncludeHttpHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies">IncludeNamedCookies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">IncludeProtocol</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString">IncludeQueryString</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist">QueryStringBlacklist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">QueryStringWhitelist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeHostInput`<sup>Optional</sup> <a name="IncludeHostInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput"></a>

```go
func IncludeHostInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeHttpHeadersInput`<sup>Optional</sup> <a name="IncludeHttpHeadersInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput"></a>

```go
func IncludeHttpHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeNamedCookiesInput`<sup>Optional</sup> <a name="IncludeNamedCookiesInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput"></a>

```go
func IncludeNamedCookiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeProtocolInput`<sup>Optional</sup> <a name="IncludeProtocolInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput"></a>

```go
func IncludeProtocolInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeQueryStringInput`<sup>Optional</sup> <a name="IncludeQueryStringInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput"></a>

```go
func IncludeQueryStringInput() interface{}
```

- *Type:* interface{}

---

##### `QueryStringBlacklistInput`<sup>Optional</sup> <a name="QueryStringBlacklistInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput"></a>

```go
func QueryStringBlacklistInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringWhitelistInput`<sup>Optional</sup> <a name="QueryStringWhitelistInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```go
func QueryStringWhitelistInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeHost`<sup>Required</sup> <a name="IncludeHost" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost"></a>

```go
func IncludeHost() interface{}
```

- *Type:* interface{}

---

##### `IncludeHttpHeaders`<sup>Required</sup> <a name="IncludeHttpHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders"></a>

```go
func IncludeHttpHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeNamedCookies`<sup>Required</sup> <a name="IncludeNamedCookies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies"></a>

```go
func IncludeNamedCookies() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeProtocol`<sup>Required</sup> <a name="IncludeProtocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```go
func IncludeProtocol() interface{}
```

- *Type:* interface{}

---

##### `IncludeQueryString`<sup>Required</sup> <a name="IncludeQueryString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString"></a>

```go
func IncludeQueryString() interface{}
```

- *Type:* interface{}

---

##### `QueryStringBlacklist`<sup>Required</sup> <a name="QueryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist"></a>

```go
func QueryStringBlacklist() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringWhitelist`<sup>Required</sup> <a name="QueryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```go
func QueryStringWhitelist() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---


### GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList <a name="GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get"></a>

```go
func Get(index *f64) GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference <a name="GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```go
func ResetCode()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">CodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```go
func CodeInput() *f64
```

- *Type:* *f64

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeBackendServiceCdnPolicyOutputReference <a name="GoogleComputeBackendServiceCdnPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceCdnPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceCdnPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders">PutBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy">PutCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy">PutNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders">ResetBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy">ResetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetCacheMode">ResetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetClientTtl">ResetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetNegativeCaching">ResetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy">ResetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetServeWhileStale">ResetServeWhileStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">ResetSignedUrlCacheMaxAgeSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBypassCacheOnRequestHeaders` <a name="PutBypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders"></a>

```go
func PutBypassCacheOnRequestHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCacheKeyPolicy` <a name="PutCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```go
func PutCacheKeyPolicy(value GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `PutNegativeCachingPolicy` <a name="PutNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```go
func PutNegativeCachingPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBypassCacheOnRequestHeaders` <a name="ResetBypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders"></a>

```go
func ResetBypassCacheOnRequestHeaders()
```

##### `ResetCacheKeyPolicy` <a name="ResetCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```go
func ResetCacheKeyPolicy()
```

##### `ResetCacheMode` <a name="ResetCacheMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetCacheMode"></a>

```go
func ResetCacheMode()
```

##### `ResetClientTtl` <a name="ResetClientTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetClientTtl"></a>

```go
func ResetClientTtl()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetDefaultTtl"></a>

```go
func ResetDefaultTtl()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNegativeCaching` <a name="ResetNegativeCaching" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetNegativeCaching"></a>

```go
func ResetNegativeCaching()
```

##### `ResetNegativeCachingPolicy` <a name="ResetNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```go
func ResetNegativeCachingPolicy()
```

##### `ResetServeWhileStale` <a name="ResetServeWhileStale" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetServeWhileStale"></a>

```go
func ResetServeWhileStale()
```

##### `ResetSignedUrlCacheMaxAgeSec` <a name="ResetSignedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```go
func ResetSignedUrlCacheMaxAgeSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders">BypassCacheOnRequestHeaders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList">GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy">CacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy">NegativeCachingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList">GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput">BypassCacheOnRequestHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput">CacheKeyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheModeInput">CacheModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.clientTtlInput">ClientTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.maxTtlInput">MaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingInput">NegativeCachingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput">NegativeCachingPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput">ServeWhileStaleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">SignedUrlCacheMaxAgeSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheMode">CacheMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.clientTtl">ClientTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCaching">NegativeCaching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStale">ServeWhileStale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">SignedUrlCacheMaxAgeSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BypassCacheOnRequestHeaders`<sup>Required</sup> <a name="BypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders"></a>

```go
func BypassCacheOnRequestHeaders() GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList">GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList</a>

---

##### `CacheKeyPolicy`<sup>Required</sup> <a name="CacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```go
func CacheKeyPolicy() GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `NegativeCachingPolicy`<sup>Required</sup> <a name="NegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```go
func NegativeCachingPolicy() GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList">GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList</a>

---

##### `BypassCacheOnRequestHeadersInput`<sup>Optional</sup> <a name="BypassCacheOnRequestHeadersInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput"></a>

```go
func BypassCacheOnRequestHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `CacheKeyPolicyInput`<sup>Optional</sup> <a name="CacheKeyPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```go
func CacheKeyPolicyInput() GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `CacheModeInput`<sup>Optional</sup> <a name="CacheModeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheModeInput"></a>

```go
func CacheModeInput() *string
```

- *Type:* *string

---

##### `ClientTtlInput`<sup>Optional</sup> <a name="ClientTtlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.clientTtlInput"></a>

```go
func ClientTtlInput() *f64
```

- *Type:* *f64

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.defaultTtlInput"></a>

```go
func DefaultTtlInput() *f64
```

- *Type:* *f64

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.maxTtlInput"></a>

```go
func MaxTtlInput() *f64
```

- *Type:* *f64

---

##### `NegativeCachingInput`<sup>Optional</sup> <a name="NegativeCachingInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingInput"></a>

```go
func NegativeCachingInput() interface{}
```

- *Type:* interface{}

---

##### `NegativeCachingPolicyInput`<sup>Optional</sup> <a name="NegativeCachingPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```go
func NegativeCachingPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `ServeWhileStaleInput`<sup>Optional</sup> <a name="ServeWhileStaleInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```go
func ServeWhileStaleInput() *f64
```

- *Type:* *f64

---

##### `SignedUrlCacheMaxAgeSecInput`<sup>Optional</sup> <a name="SignedUrlCacheMaxAgeSecInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```go
func SignedUrlCacheMaxAgeSecInput() *f64
```

- *Type:* *f64

---

##### `CacheMode`<sup>Required</sup> <a name="CacheMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheMode"></a>

```go
func CacheMode() *string
```

- *Type:* *string

---

##### `ClientTtl`<sup>Required</sup> <a name="ClientTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.clientTtl"></a>

```go
func ClientTtl() *f64
```

- *Type:* *f64

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.defaultTtl"></a>

```go
func DefaultTtl() *f64
```

- *Type:* *f64

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.maxTtl"></a>

```go
func MaxTtl() *f64
```

- *Type:* *f64

---

##### `NegativeCaching`<sup>Required</sup> <a name="NegativeCaching" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCaching"></a>

```go
func NegativeCaching() interface{}
```

- *Type:* interface{}

---

##### `ServeWhileStale`<sup>Required</sup> <a name="ServeWhileStale" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStale"></a>

```go
func ServeWhileStale() *f64
```

- *Type:* *f64

---

##### `SignedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="SignedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```go
func SignedUrlCacheMaxAgeSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a>

---


### GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference <a name="GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceCircuitBreakersConnectTimeout
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a>

---


### GoogleComputeBackendServiceCircuitBreakersOutputReference <a name="GoogleComputeBackendServiceCircuitBreakersOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceCircuitBreakersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceCircuitBreakersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.putConnectTimeout">PutConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxConnections">ResetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests">ResetMaxPendingRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequests">ResetMaxRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection">ResetMaxRequestsPerConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnectTimeout` <a name="PutConnectTimeout" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.putConnectTimeout"></a>

```go
func PutConnectTimeout(value GoogleComputeBackendServiceCircuitBreakersConnectTimeout)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.putConnectTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a>

---

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetConnectTimeout"></a>

```go
func ResetConnectTimeout()
```

##### `ResetMaxConnections` <a name="ResetMaxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxConnections"></a>

```go
func ResetMaxConnections()
```

##### `ResetMaxPendingRequests` <a name="ResetMaxPendingRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests"></a>

```go
func ResetMaxPendingRequests()
```

##### `ResetMaxRequests` <a name="ResetMaxRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequests"></a>

```go
func ResetMaxRequests()
```

##### `ResetMaxRequestsPerConnection` <a name="ResetMaxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection"></a>

```go
func ResetMaxRequestsPerConnection()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference">GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput">MaxPendingRequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput">MaxRequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput">MaxRequestsPerConnectionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequests">MaxRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection">MaxRequestsPerConnection</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.connectTimeout"></a>

```go
func ConnectTimeout() GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference">GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference</a>

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.connectTimeoutInput"></a>

```go
func ConnectTimeoutInput() GoogleComputeBackendServiceCircuitBreakersConnectTimeout
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a>

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput"></a>

```go
func MaxConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxPendingRequestsInput`<sup>Optional</sup> <a name="MaxPendingRequestsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput"></a>

```go
func MaxPendingRequestsInput() *f64
```

- *Type:* *f64

---

##### `MaxRequestsInput`<sup>Optional</sup> <a name="MaxRequestsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput"></a>

```go
func MaxRequestsInput() *f64
```

- *Type:* *f64

---

##### `MaxRequestsPerConnectionInput`<sup>Optional</sup> <a name="MaxRequestsPerConnectionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput"></a>

```go
func MaxRequestsPerConnectionInput() *f64
```

- *Type:* *f64

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxConnections"></a>

```go
func MaxConnections() *f64
```

- *Type:* *f64

---

##### `MaxPendingRequests`<sup>Required</sup> <a name="MaxPendingRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests"></a>

```go
func MaxPendingRequests() *f64
```

- *Type:* *f64

---

##### `MaxRequests`<sup>Required</sup> <a name="MaxRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequests"></a>

```go
func MaxRequests() *f64
```

- *Type:* *f64

---

##### `MaxRequestsPerConnection`<sup>Required</sup> <a name="MaxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection"></a>

```go
func MaxRequestsPerConnection() *f64
```

- *Type:* *f64

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a>

---


### GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference <a name="GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceConsistentHashHttpCookieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl">PutTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTtl` <a name="PutTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl"></a>

```go
func PutTtl(value GoogleComputeBackendServiceConsistentHashHttpCookieTtl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference">GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput">TtlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttl"></a>

```go
func Ttl() GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference">GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput"></a>

```go
func TtlInput() GoogleComputeBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a>

---


### GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference <a name="GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a>

---


### GoogleComputeBackendServiceConsistentHashOutputReference <a name="GoogleComputeBackendServiceConsistentHashOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceConsistentHashOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceConsistentHashOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.putHttpCookie">PutHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetHttpCookie">ResetHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetHttpHeaderName">ResetHttpHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetMinimumRingSize">ResetMinimumRingSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpCookie` <a name="PutHttpCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.putHttpCookie"></a>

```go
func PutHttpCookie(value GoogleComputeBackendServiceConsistentHashHttpCookie)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.putHttpCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a>

---

##### `ResetHttpCookie` <a name="ResetHttpCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetHttpCookie"></a>

```go
func ResetHttpCookie()
```

##### `ResetHttpHeaderName` <a name="ResetHttpHeaderName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetHttpHeaderName"></a>

```go
func ResetHttpHeaderName()
```

##### `ResetMinimumRingSize` <a name="ResetMinimumRingSize" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetMinimumRingSize"></a>

```go
func ResetMinimumRingSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpCookie">HttpCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference">GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpCookieInput">HttpCookieInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput">HttpHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput">MinimumRingSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpHeaderName">HttpHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.minimumRingSize">MinimumRingSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpCookie`<sup>Required</sup> <a name="HttpCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpCookie"></a>

```go
func HttpCookie() GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference">GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference</a>

---

##### `HttpCookieInput`<sup>Optional</sup> <a name="HttpCookieInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpCookieInput"></a>

```go
func HttpCookieInput() GoogleComputeBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a>

---

##### `HttpHeaderNameInput`<sup>Optional</sup> <a name="HttpHeaderNameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput"></a>

```go
func HttpHeaderNameInput() *string
```

- *Type:* *string

---

##### `MinimumRingSizeInput`<sup>Optional</sup> <a name="MinimumRingSizeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput"></a>

```go
func MinimumRingSizeInput() *f64
```

- *Type:* *f64

---

##### `HttpHeaderName`<sup>Required</sup> <a name="HttpHeaderName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpHeaderName"></a>

```go
func HttpHeaderName() *string
```

- *Type:* *string

---

##### `MinimumRingSize`<sup>Required</sup> <a name="MinimumRingSize" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.minimumRingSize"></a>

```go
func MinimumRingSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a>

---


### GoogleComputeBackendServiceIapOutputReference <a name="GoogleComputeBackendServiceIapOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceIapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceIapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resetOauth2ClientId">ResetOauth2ClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resetOauth2ClientSecret">ResetOauth2ClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauth2ClientId` <a name="ResetOauth2ClientId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resetOauth2ClientId"></a>

```go
func ResetOauth2ClientId()
```

##### `ResetOauth2ClientSecret` <a name="ResetOauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resetOauth2ClientSecret"></a>

```go
func ResetOauth2ClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecretSha256">Oauth2ClientSecretSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientIdInput">Oauth2ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecretInput">Oauth2ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientId">Oauth2ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecret">Oauth2ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Oauth2ClientSecretSha256`<sup>Required</sup> <a name="Oauth2ClientSecretSha256" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecretSha256"></a>

```go
func Oauth2ClientSecretSha256() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Oauth2ClientIdInput`<sup>Optional</sup> <a name="Oauth2ClientIdInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientIdInput"></a>

```go
func Oauth2ClientIdInput() *string
```

- *Type:* *string

---

##### `Oauth2ClientSecretInput`<sup>Optional</sup> <a name="Oauth2ClientSecretInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecretInput"></a>

```go
func Oauth2ClientSecretInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Oauth2ClientId`<sup>Required</sup> <a name="Oauth2ClientId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientId"></a>

```go
func Oauth2ClientId() *string
```

- *Type:* *string

---

##### `Oauth2ClientSecret`<sup>Required</sup> <a name="Oauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecret"></a>

```go
func Oauth2ClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a>

---


### GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference <a name="GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resetData">ResetData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetData` <a name="ResetData" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resetData"></a>

```go
func ResetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---


### GoogleComputeBackendServiceLocalityLbPoliciesList <a name="GoogleComputeBackendServiceLocalityLbPoliciesList" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceLocalityLbPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeBackendServiceLocalityLbPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.get"></a>

```go
func Get(index *f64) GoogleComputeBackendServiceLocalityLbPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeBackendServiceLocalityLbPoliciesOutputReference <a name="GoogleComputeBackendServiceLocalityLbPoliciesOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceLocalityLbPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeBackendServiceLocalityLbPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy">PutCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resetCustomPolicy">ResetCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPolicy` <a name="PutCustomPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy"></a>

```go
func PutCustomPolicy(value GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---

##### `PutPolicy` <a name="PutPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy"></a>

```go
func PutPolicy(value GoogleComputeBackendServiceLocalityLbPoliciesPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a>

---

##### `ResetCustomPolicy` <a name="ResetCustomPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resetCustomPolicy"></a>

```go
func ResetCustomPolicy()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resetPolicy"></a>

```go
func ResetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicy">CustomPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference">GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicyInput">CustomPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.policyInput">PolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomPolicy`<sup>Required</sup> <a name="CustomPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicy"></a>

```go
func CustomPolicy() GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference</a>

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.policy"></a>

```go
func Policy() GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference">GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference</a>

---

##### `CustomPolicyInput`<sup>Optional</sup> <a name="CustomPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicyInput"></a>

```go
func CustomPolicyInput() GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.policyInput"></a>

```go
func PolicyInput() GoogleComputeBackendServiceLocalityLbPoliciesPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference <a name="GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceLocalityLbPoliciesPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a>

---


### GoogleComputeBackendServiceLogConfigOutputReference <a name="GoogleComputeBackendServiceLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resetSampleRate">ResetSampleRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetSampleRate` <a name="ResetSampleRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resetSampleRate"></a>

```go
func ResetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.sampleRateInput">SampleRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `SampleRateInput`<sup>Optional</sup> <a name="SampleRateInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.sampleRateInput"></a>

```go
func SampleRateInput() *f64
```

- *Type:* *f64

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.sampleRate"></a>

```go
func SampleRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a>

---


### GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference <a name="GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---


### GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference <a name="GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceOutlierDetectionIntervalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a>

---


### GoogleComputeBackendServiceOutlierDetectionOutputReference <a name="GoogleComputeBackendServiceOutlierDetectionOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceOutlierDetectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceOutlierDetectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime">PutBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putInterval">PutInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime">ResetBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors">ResetConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure">ResetConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors">ResetEnforcingConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure">ResetEnforcingConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate">ResetEnforcingSuccessRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent">ResetMaxEjectionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts">ResetSuccessRateMinimumHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume">ResetSuccessRateRequestVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor">ResetSuccessRateStdevFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseEjectionTime` <a name="PutBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime"></a>

```go
func PutBaseEjectionTime(value GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `PutInterval` <a name="PutInterval" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putInterval"></a>

```go
func PutInterval(value GoogleComputeBackendServiceOutlierDetectionInterval)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putInterval.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a>

---

##### `ResetBaseEjectionTime` <a name="ResetBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime"></a>

```go
func ResetBaseEjectionTime()
```

##### `ResetConsecutiveErrors` <a name="ResetConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors"></a>

```go
func ResetConsecutiveErrors()
```

##### `ResetConsecutiveGatewayFailure` <a name="ResetConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure"></a>

```go
func ResetConsecutiveGatewayFailure()
```

##### `ResetEnforcingConsecutiveErrors` <a name="ResetEnforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors"></a>

```go
func ResetEnforcingConsecutiveErrors()
```

##### `ResetEnforcingConsecutiveGatewayFailure` <a name="ResetEnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure"></a>

```go
func ResetEnforcingConsecutiveGatewayFailure()
```

##### `ResetEnforcingSuccessRate` <a name="ResetEnforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate"></a>

```go
func ResetEnforcingSuccessRate()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetMaxEjectionPercent` <a name="ResetMaxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent"></a>

```go
func ResetMaxEjectionPercent()
```

##### `ResetSuccessRateMinimumHosts` <a name="ResetSuccessRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts"></a>

```go
func ResetSuccessRateMinimumHosts()
```

##### `ResetSuccessRateRequestVolume` <a name="ResetSuccessRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume"></a>

```go
func ResetSuccessRateRequestVolume()
```

##### `ResetSuccessRateStdevFactor` <a name="ResetSuccessRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor"></a>

```go
func ResetSuccessRateStdevFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime">BaseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.interval">Interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference">GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput">BaseEjectionTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput">ConsecutiveErrorsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput">ConsecutiveGatewayFailureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput">EnforcingConsecutiveErrorsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput">EnforcingConsecutiveGatewayFailureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput">EnforcingSuccessRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.intervalInput">IntervalInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput">MaxEjectionPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput">SuccessRateMinimumHostsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput">SuccessRateRequestVolumeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput">SuccessRateStdevFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors">ConsecutiveErrors</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure">ConsecutiveGatewayFailure</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors">EnforcingConsecutiveErrors</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure">EnforcingConsecutiveGatewayFailure</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate">EnforcingSuccessRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent">MaxEjectionPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts">SuccessRateMinimumHosts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume">SuccessRateRequestVolume</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor">SuccessRateStdevFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseEjectionTime`<sup>Required</sup> <a name="BaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime"></a>

```go
func BaseEjectionTime() GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a>

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.interval"></a>

```go
func Interval() GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference">GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference</a>

---

##### `BaseEjectionTimeInput`<sup>Optional</sup> <a name="BaseEjectionTimeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput"></a>

```go
func BaseEjectionTimeInput() GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `ConsecutiveErrorsInput`<sup>Optional</sup> <a name="ConsecutiveErrorsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput"></a>

```go
func ConsecutiveErrorsInput() *f64
```

- *Type:* *f64

---

##### `ConsecutiveGatewayFailureInput`<sup>Optional</sup> <a name="ConsecutiveGatewayFailureInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput"></a>

```go
func ConsecutiveGatewayFailureInput() *f64
```

- *Type:* *f64

---

##### `EnforcingConsecutiveErrorsInput`<sup>Optional</sup> <a name="EnforcingConsecutiveErrorsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput"></a>

```go
func EnforcingConsecutiveErrorsInput() *f64
```

- *Type:* *f64

---

##### `EnforcingConsecutiveGatewayFailureInput`<sup>Optional</sup> <a name="EnforcingConsecutiveGatewayFailureInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput"></a>

```go
func EnforcingConsecutiveGatewayFailureInput() *f64
```

- *Type:* *f64

---

##### `EnforcingSuccessRateInput`<sup>Optional</sup> <a name="EnforcingSuccessRateInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput"></a>

```go
func EnforcingSuccessRateInput() *f64
```

- *Type:* *f64

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.intervalInput"></a>

```go
func IntervalInput() GoogleComputeBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a>

---

##### `MaxEjectionPercentInput`<sup>Optional</sup> <a name="MaxEjectionPercentInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput"></a>

```go
func MaxEjectionPercentInput() *f64
```

- *Type:* *f64

---

##### `SuccessRateMinimumHostsInput`<sup>Optional</sup> <a name="SuccessRateMinimumHostsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput"></a>

```go
func SuccessRateMinimumHostsInput() *f64
```

- *Type:* *f64

---

##### `SuccessRateRequestVolumeInput`<sup>Optional</sup> <a name="SuccessRateRequestVolumeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput"></a>

```go
func SuccessRateRequestVolumeInput() *f64
```

- *Type:* *f64

---

##### `SuccessRateStdevFactorInput`<sup>Optional</sup> <a name="SuccessRateStdevFactorInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput"></a>

```go
func SuccessRateStdevFactorInput() *f64
```

- *Type:* *f64

---

##### `ConsecutiveErrors`<sup>Required</sup> <a name="ConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors"></a>

```go
func ConsecutiveErrors() *f64
```

- *Type:* *f64

---

##### `ConsecutiveGatewayFailure`<sup>Required</sup> <a name="ConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure"></a>

```go
func ConsecutiveGatewayFailure() *f64
```

- *Type:* *f64

---

##### `EnforcingConsecutiveErrors`<sup>Required</sup> <a name="EnforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors"></a>

```go
func EnforcingConsecutiveErrors() *f64
```

- *Type:* *f64

---

##### `EnforcingConsecutiveGatewayFailure`<sup>Required</sup> <a name="EnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure"></a>

```go
func EnforcingConsecutiveGatewayFailure() *f64
```

- *Type:* *f64

---

##### `EnforcingSuccessRate`<sup>Required</sup> <a name="EnforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate"></a>

```go
func EnforcingSuccessRate() *f64
```

- *Type:* *f64

---

##### `MaxEjectionPercent`<sup>Required</sup> <a name="MaxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent"></a>

```go
func MaxEjectionPercent() *f64
```

- *Type:* *f64

---

##### `SuccessRateMinimumHosts`<sup>Required</sup> <a name="SuccessRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts"></a>

```go
func SuccessRateMinimumHosts() *f64
```

- *Type:* *f64

---

##### `SuccessRateRequestVolume`<sup>Required</sup> <a name="SuccessRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume"></a>

```go
func SuccessRateRequestVolume() *f64
```

- *Type:* *f64

---

##### `SuccessRateStdevFactor`<sup>Required</sup> <a name="SuccessRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor"></a>

```go
func SuccessRateStdevFactor() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a>

---


### GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference <a name="GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyVersion">ResetAccessKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetOriginRegion">ResetOriginRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKey"></a>

```go
func ResetAccessKey()
```

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyId"></a>

```go
func ResetAccessKeyId()
```

##### `ResetAccessKeyVersion` <a name="ResetAccessKeyVersion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyVersion"></a>

```go
func ResetAccessKeyVersion()
```

##### `ResetOriginRegion` <a name="ResetOriginRegion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetOriginRegion"></a>

```go
func ResetOriginRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyInput">AccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersionInput">AccessKeyVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegionInput">OriginRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKey">AccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersion">AccessKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegion">OriginRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyIdInput"></a>

```go
func AccessKeyIdInput() *string
```

- *Type:* *string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyInput"></a>

```go
func AccessKeyInput() *string
```

- *Type:* *string

---

##### `AccessKeyVersionInput`<sup>Optional</sup> <a name="AccessKeyVersionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersionInput"></a>

```go
func AccessKeyVersionInput() *string
```

- *Type:* *string

---

##### `OriginRegionInput`<sup>Optional</sup> <a name="OriginRegionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegionInput"></a>

```go
func OriginRegionInput() *string
```

- *Type:* *string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKey"></a>

```go
func AccessKey() *string
```

- *Type:* *string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `AccessKeyVersion`<sup>Required</sup> <a name="AccessKeyVersion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersion"></a>

```go
func AccessKeyVersion() *string
```

- *Type:* *string

---

##### `OriginRegion`<sup>Required</sup> <a name="OriginRegion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegion"></a>

```go
func OriginRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---


### GoogleComputeBackendServiceSecuritySettingsOutputReference <a name="GoogleComputeBackendServiceSecuritySettingsOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceSecuritySettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceSecuritySettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.putAwsV4Authentication">PutAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetAwsV4Authentication">ResetAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetClientTlsPolicy">ResetClientTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetSubjectAltNames">ResetSubjectAltNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsV4Authentication` <a name="PutAwsV4Authentication" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.putAwsV4Authentication"></a>

```go
func PutAwsV4Authentication(value GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.putAwsV4Authentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---

##### `ResetAwsV4Authentication` <a name="ResetAwsV4Authentication" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetAwsV4Authentication"></a>

```go
func ResetAwsV4Authentication()
```

##### `ResetClientTlsPolicy` <a name="ResetClientTlsPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetClientTlsPolicy"></a>

```go
func ResetClientTlsPolicy()
```

##### `ResetSubjectAltNames` <a name="ResetSubjectAltNames" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetSubjectAltNames"></a>

```go
func ResetSubjectAltNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.awsV4Authentication">AwsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference">GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.awsV4AuthenticationInput">AwsV4AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicyInput">ClientTlsPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNamesInput">SubjectAltNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicy">ClientTlsPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNames">SubjectAltNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsV4Authentication`<sup>Required</sup> <a name="AwsV4Authentication" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.awsV4Authentication"></a>

```go
func AwsV4Authentication() GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference">GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference</a>

---

##### `AwsV4AuthenticationInput`<sup>Optional</sup> <a name="AwsV4AuthenticationInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.awsV4AuthenticationInput"></a>

```go
func AwsV4AuthenticationInput() GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---

##### `ClientTlsPolicyInput`<sup>Optional</sup> <a name="ClientTlsPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicyInput"></a>

```go
func ClientTlsPolicyInput() *string
```

- *Type:* *string

---

##### `SubjectAltNamesInput`<sup>Optional</sup> <a name="SubjectAltNamesInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNamesInput"></a>

```go
func SubjectAltNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientTlsPolicy`<sup>Required</sup> <a name="ClientTlsPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicy"></a>

```go
func ClientTlsPolicy() *string
```

- *Type:* *string

---

##### `SubjectAltNames`<sup>Required</sup> <a name="SubjectAltNames" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNames"></a>

```go
func SubjectAltNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceSecuritySettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a>

---


### GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference <a name="GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.putTtl">PutTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTtl` <a name="PutTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.putTtl"></a>

```go
func PutTtl(value GoogleComputeBackendServiceStrongSessionAffinityCookieTtl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference">GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput">TtlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl"></a>

```go
func Ttl() GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference">GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput"></a>

```go
func TtlInput() GoogleComputeBackendServiceStrongSessionAffinityCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceStrongSessionAffinityCookie
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a>

---


### GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference <a name="GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeBackendServiceStrongSessionAffinityCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---


### GoogleComputeBackendServiceTimeoutsOutputReference <a name="GoogleComputeBackendServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputebackendservice"

googlecomputebackendservice.NewGoogleComputeBackendServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeBackendServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



