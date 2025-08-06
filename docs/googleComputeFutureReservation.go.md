# `googleComputeFutureReservation` Submodule <a name="`googleComputeFutureReservation` Submodule" id="@cdktf/provider-google-beta.googleComputeFutureReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeFutureReservation <a name="GoogleComputeFutureReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation google_compute_future_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservation(scope Construct, id *string, config GoogleComputeFutureReservationConfig) GoogleComputeFutureReservation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig">GoogleComputeFutureReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig">GoogleComputeFutureReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAggregateReservation">PutAggregateReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAutoCreatedReservationsDuration">PutAutoCreatedReservationsDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putCommitmentInfo">PutCommitmentInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putShareSettings">PutShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putSpecificSkuProperties">PutSpecificSkuProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeWindow">PutTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAggregateReservation">ResetAggregateReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDeleteTime">ResetAutoCreatedReservationsDeleteTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDuration">ResetAutoCreatedReservationsDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoDeleteAutoCreatedReservations">ResetAutoDeleteAutoCreatedReservations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetCommitmentInfo">ResetCommitmentInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetPlanningStatus">ResetPlanningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationMode">ResetReservationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationName">ResetReservationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSchedulingType">ResetSchedulingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetShareSettings">ResetShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificReservationRequired">ResetSpecificReservationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificSkuProperties">ResetSpecificSkuProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAggregateReservation` <a name="PutAggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAggregateReservation"></a>

```go
func PutAggregateReservation(value GoogleComputeFutureReservationAggregateReservation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAggregateReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

---

##### `PutAutoCreatedReservationsDuration` <a name="PutAutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAutoCreatedReservationsDuration"></a>

```go
func PutAutoCreatedReservationsDuration(value GoogleComputeFutureReservationAutoCreatedReservationsDuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAutoCreatedReservationsDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

---

##### `PutCommitmentInfo` <a name="PutCommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putCommitmentInfo"></a>

```go
func PutCommitmentInfo(value GoogleComputeFutureReservationCommitmentInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putCommitmentInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

---

##### `PutShareSettings` <a name="PutShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putShareSettings"></a>

```go
func PutShareSettings(value GoogleComputeFutureReservationShareSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putShareSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

---

##### `PutSpecificSkuProperties` <a name="PutSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putSpecificSkuProperties"></a>

```go
func PutSpecificSkuProperties(value GoogleComputeFutureReservationSpecificSkuProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putSpecificSkuProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeFutureReservationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a>

---

##### `PutTimeWindow` <a name="PutTimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeWindow"></a>

```go
func PutTimeWindow(value GoogleComputeFutureReservationTimeWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

---

##### `ResetAggregateReservation` <a name="ResetAggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAggregateReservation"></a>

```go
func ResetAggregateReservation()
```

##### `ResetAutoCreatedReservationsDeleteTime` <a name="ResetAutoCreatedReservationsDeleteTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDeleteTime"></a>

```go
func ResetAutoCreatedReservationsDeleteTime()
```

##### `ResetAutoCreatedReservationsDuration` <a name="ResetAutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDuration"></a>

```go
func ResetAutoCreatedReservationsDuration()
```

##### `ResetAutoDeleteAutoCreatedReservations` <a name="ResetAutoDeleteAutoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoDeleteAutoCreatedReservations"></a>

```go
func ResetAutoDeleteAutoCreatedReservations()
```

##### `ResetCommitmentInfo` <a name="ResetCommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetCommitmentInfo"></a>

```go
func ResetCommitmentInfo()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDeploymentType"></a>

```go
func ResetDeploymentType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetId"></a>

```go
func ResetId()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetPlanningStatus` <a name="ResetPlanningStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetPlanningStatus"></a>

```go
func ResetPlanningStatus()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReservationMode` <a name="ResetReservationMode" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationMode"></a>

```go
func ResetReservationMode()
```

##### `ResetReservationName` <a name="ResetReservationName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationName"></a>

```go
func ResetReservationName()
```

##### `ResetSchedulingType` <a name="ResetSchedulingType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSchedulingType"></a>

```go
func ResetSchedulingType()
```

##### `ResetShareSettings` <a name="ResetShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetShareSettings"></a>

```go
func ResetShareSettings()
```

##### `ResetSpecificReservationRequired` <a name="ResetSpecificReservationRequired" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificReservationRequired"></a>

```go
func ResetSpecificReservationRequired()
```

##### `ResetSpecificSkuProperties` <a name="ResetSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificSkuProperties"></a>

```go
func ResetSpecificSkuProperties()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeFutureReservation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.GoogleComputeFutureReservation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.GoogleComputeFutureReservation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.GoogleComputeFutureReservation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.GoogleComputeFutureReservation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeFutureReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeFutureReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeFutureReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeFutureReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservation">AggregateReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference">GoogleComputeFutureReservationAggregateReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDuration">AutoCreatedReservationsDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference">GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfo">CommitmentInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference">GoogleComputeFutureReservationCommitmentInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference">GoogleComputeFutureReservationShareSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuProperties">SpecificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList">GoogleComputeFutureReservationStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference">GoogleComputeFutureReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference">GoogleComputeFutureReservationTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservationInput">AggregateReservationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTimeInput">AutoCreatedReservationsDeleteTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDurationInput">AutoCreatedReservationsDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservationsInput">AutoDeleteAutoCreatedReservationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfoInput">CommitmentInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatusInput">PlanningStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationModeInput">ReservationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationNameInput">ReservationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingTypeInput">SchedulingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettingsInput">ShareSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequiredInput">SpecificReservationRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuPropertiesInput">SpecificSkuPropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindowInput">TimeWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTime">AutoCreatedReservationsDeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservations">AutoDeleteAutoCreatedReservations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatus">PlanningStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationMode">ReservationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationName">ReservationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingType">SchedulingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequired">SpecificReservationRequired</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AggregateReservation`<sup>Required</sup> <a name="AggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservation"></a>

```go
func AggregateReservation() GoogleComputeFutureReservationAggregateReservationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference">GoogleComputeFutureReservationAggregateReservationOutputReference</a>

---

##### `AutoCreatedReservationsDuration`<sup>Required</sup> <a name="AutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDuration"></a>

```go
func AutoCreatedReservationsDuration() GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference">GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference</a>

---

##### `CommitmentInfo`<sup>Required</sup> <a name="CommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfo"></a>

```go
func CommitmentInfo() GoogleComputeFutureReservationCommitmentInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference">GoogleComputeFutureReservationCommitmentInfoOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLinkWithId"></a>

```go
func SelfLinkWithId() *string
```

- *Type:* *string

---

##### `ShareSettings`<sup>Required</sup> <a name="ShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettings"></a>

```go
func ShareSettings() GoogleComputeFutureReservationShareSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference">GoogleComputeFutureReservationShareSettingsOutputReference</a>

---

##### `SpecificSkuProperties`<sup>Required</sup> <a name="SpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuProperties"></a>

```go
func SpecificSkuProperties() GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.status"></a>

```go
func Status() GoogleComputeFutureReservationStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList">GoogleComputeFutureReservationStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeouts"></a>

```go
func Timeouts() GoogleComputeFutureReservationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference">GoogleComputeFutureReservationTimeoutsOutputReference</a>

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindow"></a>

```go
func TimeWindow() GoogleComputeFutureReservationTimeWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference">GoogleComputeFutureReservationTimeWindowOutputReference</a>

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `AggregateReservationInput`<sup>Optional</sup> <a name="AggregateReservationInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservationInput"></a>

```go
func AggregateReservationInput() GoogleComputeFutureReservationAggregateReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

---

##### `AutoCreatedReservationsDeleteTimeInput`<sup>Optional</sup> <a name="AutoCreatedReservationsDeleteTimeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTimeInput"></a>

```go
func AutoCreatedReservationsDeleteTimeInput() *string
```

- *Type:* *string

---

##### `AutoCreatedReservationsDurationInput`<sup>Optional</sup> <a name="AutoCreatedReservationsDurationInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDurationInput"></a>

```go
func AutoCreatedReservationsDurationInput() GoogleComputeFutureReservationAutoCreatedReservationsDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

---

##### `AutoDeleteAutoCreatedReservationsInput`<sup>Optional</sup> <a name="AutoDeleteAutoCreatedReservationsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservationsInput"></a>

```go
func AutoDeleteAutoCreatedReservationsInput() interface{}
```

- *Type:* interface{}

---

##### `CommitmentInfoInput`<sup>Optional</sup> <a name="CommitmentInfoInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfoInput"></a>

```go
func CommitmentInfoInput() GoogleComputeFutureReservationCommitmentInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentTypeInput"></a>

```go
func DeploymentTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `PlanningStatusInput`<sup>Optional</sup> <a name="PlanningStatusInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatusInput"></a>

```go
func PlanningStatusInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReservationModeInput`<sup>Optional</sup> <a name="ReservationModeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationModeInput"></a>

```go
func ReservationModeInput() *string
```

- *Type:* *string

---

##### `ReservationNameInput`<sup>Optional</sup> <a name="ReservationNameInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationNameInput"></a>

```go
func ReservationNameInput() *string
```

- *Type:* *string

---

##### `SchedulingTypeInput`<sup>Optional</sup> <a name="SchedulingTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingTypeInput"></a>

```go
func SchedulingTypeInput() *string
```

- *Type:* *string

---

##### `ShareSettingsInput`<sup>Optional</sup> <a name="ShareSettingsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettingsInput"></a>

```go
func ShareSettingsInput() GoogleComputeFutureReservationShareSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

---

##### `SpecificReservationRequiredInput`<sup>Optional</sup> <a name="SpecificReservationRequiredInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequiredInput"></a>

```go
func SpecificReservationRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `SpecificSkuPropertiesInput`<sup>Optional</sup> <a name="SpecificSkuPropertiesInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuPropertiesInput"></a>

```go
func SpecificSkuPropertiesInput() GoogleComputeFutureReservationSpecificSkuProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindowInput"></a>

```go
func TimeWindowInput() GoogleComputeFutureReservationTimeWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

---

##### `AutoCreatedReservationsDeleteTime`<sup>Required</sup> <a name="AutoCreatedReservationsDeleteTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTime"></a>

```go
func AutoCreatedReservationsDeleteTime() *string
```

- *Type:* *string

---

##### `AutoDeleteAutoCreatedReservations`<sup>Required</sup> <a name="AutoDeleteAutoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservations"></a>

```go
func AutoDeleteAutoCreatedReservations() interface{}
```

- *Type:* interface{}

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `PlanningStatus`<sup>Required</sup> <a name="PlanningStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatus"></a>

```go
func PlanningStatus() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReservationMode`<sup>Required</sup> <a name="ReservationMode" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationMode"></a>

```go
func ReservationMode() *string
```

- *Type:* *string

---

##### `ReservationName`<sup>Required</sup> <a name="ReservationName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationName"></a>

```go
func ReservationName() *string
```

- *Type:* *string

---

##### `SchedulingType`<sup>Required</sup> <a name="SchedulingType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingType"></a>

```go
func SchedulingType() *string
```

- *Type:* *string

---

##### `SpecificReservationRequired`<sup>Required</sup> <a name="SpecificReservationRequired" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequired"></a>

```go
func SpecificReservationRequired() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeFutureReservationAggregateReservation <a name="GoogleComputeFutureReservationAggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationAggregateReservation {
	ReservedResources: interface{},
	VmFamily: *string,
	WorkloadType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.reservedResources">ReservedResources</a></code> | <code>interface{}</code> | reserved_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.vmFamily">VmFamily</a></code> | <code>*string</code> | The VM family that all instances scheduled against this reservation must belong to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.workloadType">WorkloadType</a></code> | <code>*string</code> | The workload type of the instances that will target this reservation. Possible values: ["BATCH", "SERVING", "UNSPECIFIED"]. |

---

##### `ReservedResources`<sup>Required</sup> <a name="ReservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.reservedResources"></a>

```go
ReservedResources interface{}
```

- *Type:* interface{}

reserved_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#reserved_resources GoogleComputeFutureReservation#reserved_resources}

---

##### `VmFamily`<sup>Optional</sup> <a name="VmFamily" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.vmFamily"></a>

```go
VmFamily *string
```

- *Type:* *string

The VM family that all instances scheduled against this reservation must belong to.

Possible values: ["VM_FAMILY_CLOUD_TPU_DEVICE_CT3", "VM_FAMILY_CLOUD_TPU_LITE_DEVICE_CT5L", "VM_FAMILY_CLOUD_TPU_LITE_POD_SLICE_CT5LP", "VM_FAMILY_CLOUD_TPU_LITE_POD_SLICE_CT6E", "VM_FAMILY_CLOUD_TPU_POD_SLICE_CT3P", "VM_FAMILY_CLOUD_TPU_POD_SLICE_CT4P", "VM_FAMILY_CLOUD_TPU_POD_SLICE_CT5P"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#vm_family GoogleComputeFutureReservation#vm_family}

---

##### `WorkloadType`<sup>Optional</sup> <a name="WorkloadType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.workloadType"></a>

```go
WorkloadType *string
```

- *Type:* *string

The workload type of the instances that will target this reservation. Possible values: ["BATCH", "SERVING", "UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#workload_type GoogleComputeFutureReservation#workload_type}

---

### GoogleComputeFutureReservationAggregateReservationReservedResources <a name="GoogleComputeFutureReservationAggregateReservationReservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationAggregateReservationReservedResources {
	Accelerator: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources.property.accelerator">Accelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a></code> | accelerator block. |

---

##### `Accelerator`<sup>Optional</sup> <a name="Accelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources.property.accelerator"></a>

```go
Accelerator GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#accelerator GoogleComputeFutureReservation#accelerator}

---

### GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator {
	AcceleratorCount: *f64,
	AcceleratorType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | Number of accelerators of specified type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | Full or partial URL to accelerator type. e.g. "projects/{PROJECT}/zones/{ZONE}/acceleratorTypes/ct4l". |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorCount"></a>

```go
AcceleratorCount *f64
```

- *Type:* *f64

Number of accelerators of specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#accelerator_count GoogleComputeFutureReservation#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

Full or partial URL to accelerator type. e.g. "projects/{PROJECT}/zones/{ZONE}/acceleratorTypes/ct4l".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#accelerator_type GoogleComputeFutureReservation#accelerator_type}

---

### GoogleComputeFutureReservationAutoCreatedReservationsDuration <a name="GoogleComputeFutureReservationAutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration {
	Nanos: *f64,
	Seconds: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.seconds">Seconds</a></code> | <code>*string</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#nanos GoogleComputeFutureReservation#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.seconds"></a>

```go
Seconds *string
```

- *Type:* *string

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#seconds GoogleComputeFutureReservation#seconds}

---

### GoogleComputeFutureReservationCommitmentInfo <a name="GoogleComputeFutureReservationCommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationCommitmentInfo {
	CommitmentName: *string,
	CommitmentPlan: *string,
	PreviousCommitmentTerms: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentName">CommitmentName</a></code> | <code>*string</code> | name of the commitment where capacity is being delivered to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentPlan">CommitmentPlan</a></code> | <code>*string</code> | Indicates if a Commitment needs to be created as part of FR delivery. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.previousCommitmentTerms">PreviousCommitmentTerms</a></code> | <code>*string</code> | Only applicable if FR is delivering to the same reservation. |

---

##### `CommitmentName`<sup>Optional</sup> <a name="CommitmentName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentName"></a>

```go
CommitmentName *string
```

- *Type:* *string

name of the commitment where capacity is being delivered to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#commitment_name GoogleComputeFutureReservation#commitment_name}

---

##### `CommitmentPlan`<sup>Optional</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentPlan"></a>

```go
CommitmentPlan *string
```

- *Type:* *string

Indicates if a Commitment needs to be created as part of FR delivery.

If this field is not present, then no commitment needs to be created. Possible values: ["INVALID", "THIRTY_SIX_MONTH", "TWELVE_MONTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#commitment_plan GoogleComputeFutureReservation#commitment_plan}

---

##### `PreviousCommitmentTerms`<sup>Optional</sup> <a name="PreviousCommitmentTerms" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.previousCommitmentTerms"></a>

```go
PreviousCommitmentTerms *string
```

- *Type:* *string

Only applicable if FR is delivering to the same reservation.

If set, all parent commitments will be extended to match the end date of the plan for this commitment. Possible values: ["EXTEND"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#previous_commitment_terms GoogleComputeFutureReservation#previous_commitment_terms}

---

### GoogleComputeFutureReservationConfig <a name="GoogleComputeFutureReservationConfig" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	TimeWindow: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow,
	AggregateReservation: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation,
	AutoCreatedReservationsDeleteTime: *string,
	AutoCreatedReservationsDuration: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration,
	AutoDeleteAutoCreatedReservations: interface{},
	CommitmentInfo: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo,
	DeploymentType: *string,
	Description: *string,
	Id: *string,
	NamePrefix: *string,
	PlanningStatus: *string,
	Project: *string,
	ReservationMode: *string,
	ReservationName: *string,
	SchedulingType: *string,
	ShareSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings,
	SpecificReservationRequired: interface{},
	SpecificSkuProperties: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.aggregateReservation">AggregateReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a></code> | aggregate_reservation block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDeleteTime">AutoCreatedReservationsDeleteTime</a></code> | <code>*string</code> | Future timestamp when the FR auto-created reservations will be deleted by Compute Engine. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDuration">AutoCreatedReservationsDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a></code> | auto_created_reservations_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoDeleteAutoCreatedReservations">AutoDeleteAutoCreatedReservations</a></code> | <code>interface{}</code> | Setting for enabling or disabling automatic deletion for auto-created reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.commitmentInfo">CommitmentInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a></code> | commitment_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | Type of the deployment requested as part of future reservation. Possible values: ["DENSE", "FLEXIBLE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Name prefix for the reservations to be created at the time of delivery. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.planningStatus">PlanningStatus</a></code> | <code>*string</code> | Planning state before being submitted for evaluation Possible values: ["DRAFT", "SUBMITTED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#project GoogleComputeFutureReservation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationMode">ReservationMode</a></code> | <code>*string</code> | The reservation mode which determines reservation-termination behavior and expected pricing. Possible values: ["CALENDAR", "DEFAULT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationName">ReservationName</a></code> | <code>*string</code> | Name of reservations where the capacity is provisioned at the time of delivery of future reservations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.schedulingType">SchedulingType</a></code> | <code>*string</code> | Maintenance information for this reservation Possible values: ["GROUPED", "INDEPENDENT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificReservationRequired">SpecificReservationRequired</a></code> | <code>interface{}</code> | Indicates whether the auto-created reservation can be consumed by VMs with affinity for "any" reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificSkuProperties">SpecificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a></code> | specific_sku_properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.name"></a>

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
characters must be a dash, lowercase letter, or digit, except the las
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#name GoogleComputeFutureReservation#name}

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeWindow"></a>

```go
TimeWindow GoogleComputeFutureReservationTimeWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#time_window GoogleComputeFutureReservation#time_window}

---

##### `AggregateReservation`<sup>Optional</sup> <a name="AggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.aggregateReservation"></a>

```go
AggregateReservation GoogleComputeFutureReservationAggregateReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

aggregate_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#aggregate_reservation GoogleComputeFutureReservation#aggregate_reservation}

---

##### `AutoCreatedReservationsDeleteTime`<sup>Optional</sup> <a name="AutoCreatedReservationsDeleteTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDeleteTime"></a>

```go
AutoCreatedReservationsDeleteTime *string
```

- *Type:* *string

Future timestamp when the FR auto-created reservations will be deleted by Compute Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#auto_created_reservations_delete_time GoogleComputeFutureReservation#auto_created_reservations_delete_time}

---

##### `AutoCreatedReservationsDuration`<sup>Optional</sup> <a name="AutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDuration"></a>

```go
AutoCreatedReservationsDuration GoogleComputeFutureReservationAutoCreatedReservationsDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

auto_created_reservations_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#auto_created_reservations_duration GoogleComputeFutureReservation#auto_created_reservations_duration}

---

##### `AutoDeleteAutoCreatedReservations`<sup>Optional</sup> <a name="AutoDeleteAutoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoDeleteAutoCreatedReservations"></a>

```go
AutoDeleteAutoCreatedReservations interface{}
```

- *Type:* interface{}

Setting for enabling or disabling automatic deletion for auto-created reservation.

If set to true, auto-created reservations will be deleted at Future Reservation's end time (default) or at user's defined timestamp if any of the [autoCreatedReservationsDeleteTime, autoCreatedReservationsDuration] values is specified. For keeping auto-created reservation indefinitely, this value should be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#auto_delete_auto_created_reservations GoogleComputeFutureReservation#auto_delete_auto_created_reservations}

---

##### `CommitmentInfo`<sup>Optional</sup> <a name="CommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.commitmentInfo"></a>

```go
CommitmentInfo GoogleComputeFutureReservationCommitmentInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

commitment_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#commitment_info GoogleComputeFutureReservation#commitment_info}

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.deploymentType"></a>

```go
DeploymentType *string
```

- *Type:* *string

Type of the deployment requested as part of future reservation. Possible values: ["DENSE", "FLEXIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#deployment_type GoogleComputeFutureReservation#deployment_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#description GoogleComputeFutureReservation#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Name prefix for the reservations to be created at the time of delivery.

The name prefix must comply with RFC1035. Maximum allowed length for name prefix is 20. Automatically created reservations name format will be -date-####.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#name_prefix GoogleComputeFutureReservation#name_prefix}

---

##### `PlanningStatus`<sup>Optional</sup> <a name="PlanningStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.planningStatus"></a>

```go
PlanningStatus *string
```

- *Type:* *string

Planning state before being submitted for evaluation Possible values: ["DRAFT", "SUBMITTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#planning_status GoogleComputeFutureReservation#planning_status}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#project GoogleComputeFutureReservation#project}.

---

##### `ReservationMode`<sup>Optional</sup> <a name="ReservationMode" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationMode"></a>

```go
ReservationMode *string
```

- *Type:* *string

The reservation mode which determines reservation-termination behavior and expected pricing. Possible values: ["CALENDAR", "DEFAULT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#reservation_mode GoogleComputeFutureReservation#reservation_mode}

---

##### `ReservationName`<sup>Optional</sup> <a name="ReservationName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationName"></a>

```go
ReservationName *string
```

- *Type:* *string

Name of reservations where the capacity is provisioned at the time of delivery of future reservations.

If the reservation with the given name does not exist already, it is created automatically at the time of Approval with INACTIVE state till specified start-time. Either provide the reservationName or a namePrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#reservation_name GoogleComputeFutureReservation#reservation_name}

---

##### `SchedulingType`<sup>Optional</sup> <a name="SchedulingType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.schedulingType"></a>

```go
SchedulingType *string
```

- *Type:* *string

Maintenance information for this reservation Possible values: ["GROUPED", "INDEPENDENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#scheduling_type GoogleComputeFutureReservation#scheduling_type}

---

##### `ShareSettings`<sup>Optional</sup> <a name="ShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.shareSettings"></a>

```go
ShareSettings GoogleComputeFutureReservationShareSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#share_settings GoogleComputeFutureReservation#share_settings}

---

##### `SpecificReservationRequired`<sup>Optional</sup> <a name="SpecificReservationRequired" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificReservationRequired"></a>

```go
SpecificReservationRequired interface{}
```

- *Type:* interface{}

Indicates whether the auto-created reservation can be consumed by VMs with affinity for "any" reservation.

If the field is set, then only VMs that target the reservation by name can consume from the delivered reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#specific_reservation_required GoogleComputeFutureReservation#specific_reservation_required}

---

##### `SpecificSkuProperties`<sup>Optional</sup> <a name="SpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificSkuProperties"></a>

```go
SpecificSkuProperties GoogleComputeFutureReservationSpecificSkuProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

specific_sku_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#specific_sku_properties GoogleComputeFutureReservation#specific_sku_properties}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeFutureReservationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#timeouts GoogleComputeFutureReservation#timeouts}

---

### GoogleComputeFutureReservationShareSettings <a name="GoogleComputeFutureReservationShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationShareSettings {
	ProjectMap: interface{},
	Projects: *[]*string,
	ShareType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projectMap">ProjectMap</a></code> | <code>interface{}</code> | project_map block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projects">Projects</a></code> | <code>*[]*string</code> | list of Project names to specify consumer projects for this shared-reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.shareType">ShareType</a></code> | <code>*string</code> | Type of sharing for this future reservation. Possible values: ["LOCAL", "SPECIFIC_PROJECTS"]. |

---

##### `ProjectMap`<sup>Optional</sup> <a name="ProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projectMap"></a>

```go
ProjectMap interface{}
```

- *Type:* interface{}

project_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#project_map GoogleComputeFutureReservation#project_map}

---

##### `Projects`<sup>Optional</sup> <a name="Projects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projects"></a>

```go
Projects *[]*string
```

- *Type:* *[]*string

list of Project names to specify consumer projects for this shared-reservation.

This is only valid when shareType's value is SPECIFIC_PROJECTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#projects GoogleComputeFutureReservation#projects}

---

##### `ShareType`<sup>Optional</sup> <a name="ShareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.shareType"></a>

```go
ShareType *string
```

- *Type:* *string

Type of sharing for this future reservation. Possible values: ["LOCAL", "SPECIFIC_PROJECTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#share_type GoogleComputeFutureReservation#share_type}

---

### GoogleComputeFutureReservationShareSettingsProjectMap <a name="GoogleComputeFutureReservationShareSettingsProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationShareSettingsProjectMap {
	Id: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.projectId">ProjectId</a></code> | <code>*string</code> | The project ID, should be same as the key of this project config in the parent map. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The project ID, should be same as the key of this project config in the parent map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#project_id GoogleComputeFutureReservation#project_id}

---

### GoogleComputeFutureReservationSpecificSkuProperties <a name="GoogleComputeFutureReservationSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationSpecificSkuProperties {
	InstanceProperties: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties,
	SourceInstanceTemplate: *string,
	TotalCount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.instanceProperties">InstanceProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a></code> | instance_properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.sourceInstanceTemplate">SourceInstanceTemplate</a></code> | <code>*string</code> | The instance template that will be used to populate the ReservedInstanceProperties of the future reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.totalCount">TotalCount</a></code> | <code>*string</code> | Total number of instances for which capacity assurance is requested at a future time period. |

---

##### `InstanceProperties`<sup>Optional</sup> <a name="InstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.instanceProperties"></a>

```go
InstanceProperties GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

instance_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#instance_properties GoogleComputeFutureReservation#instance_properties}

---

##### `SourceInstanceTemplate`<sup>Optional</sup> <a name="SourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.sourceInstanceTemplate"></a>

```go
SourceInstanceTemplate *string
```

- *Type:* *string

The instance template that will be used to populate the ReservedInstanceProperties of the future reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#source_instance_template GoogleComputeFutureReservation#source_instance_template}

---

##### `TotalCount`<sup>Optional</sup> <a name="TotalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.totalCount"></a>

```go
TotalCount *string
```

- *Type:* *string

Total number of instances for which capacity assurance is requested at a future time period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#total_count GoogleComputeFutureReservation#total_count}

---

### GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties {
	GuestAccelerators: interface{},
	LocalSsds: interface{},
	LocationHint: *string,
	MachineType: *string,
	MaintenanceFreezeDurationHours: *f64,
	MaintenanceInterval: *string,
	MinCpuPlatform: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.guestAccelerators">GuestAccelerators</a></code> | <code>interface{}</code> | guest_accelerators block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.localSsds">LocalSsds</a></code> | <code>interface{}</code> | local_ssds block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.locationHint">LocationHint</a></code> | <code>*string</code> | An opaque location hint used to place the allocation close to other resources. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.machineType">MachineType</a></code> | <code>*string</code> | Specifies type of machine (name only) which has fixed number of vCPUs and fixed amount of memory. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceFreezeDurationHours">MaintenanceFreezeDurationHours</a></code> | <code>*f64</code> | Specifies the number of hours after reservation creation where instances using the reservation won't be scheduled for maintenance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>*string</code> | Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC Possible values: ["PERIODIC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>*string</code> | Minimum cpu platform the reservation. |

---

##### `GuestAccelerators`<sup>Optional</sup> <a name="GuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.guestAccelerators"></a>

```go
GuestAccelerators interface{}
```

- *Type:* interface{}

guest_accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#guest_accelerators GoogleComputeFutureReservation#guest_accelerators}

---

##### `LocalSsds`<sup>Optional</sup> <a name="LocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.localSsds"></a>

```go
LocalSsds interface{}
```

- *Type:* interface{}

local_ssds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#local_ssds GoogleComputeFutureReservation#local_ssds}

---

##### `LocationHint`<sup>Optional</sup> <a name="LocationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.locationHint"></a>

```go
LocationHint *string
```

- *Type:* *string

An opaque location hint used to place the allocation close to other resources.

This field is for use by internal tools that use the public API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#location_hint GoogleComputeFutureReservation#location_hint}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

Specifies type of machine (name only) which has fixed number of vCPUs and fixed amount of memory.

This also includes specifying custom machine type following custom-NUMBER_OF_CPUS-AMOUNT_OF_MEMORY pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#machine_type GoogleComputeFutureReservation#machine_type}

---

##### `MaintenanceFreezeDurationHours`<sup>Optional</sup> <a name="MaintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceFreezeDurationHours"></a>

```go
MaintenanceFreezeDurationHours *f64
```

- *Type:* *f64

Specifies the number of hours after reservation creation where instances using the reservation won't be scheduled for maintenance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#maintenance_freeze_duration_hours GoogleComputeFutureReservation#maintenance_freeze_duration_hours}

---

##### `MaintenanceInterval`<sup>Optional</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceInterval"></a>

```go
MaintenanceInterval *string
```

- *Type:* *string

Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC Possible values: ["PERIODIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#maintenance_interval GoogleComputeFutureReservation#maintenance_interval}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.minCpuPlatform"></a>

```go
MinCpuPlatform *string
```

- *Type:* *string

Minimum cpu platform the reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#min_cpu_platform GoogleComputeFutureReservation#min_cpu_platform}

---

### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators {
	AcceleratorCount: *f64,
	AcceleratorType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | Full or partial URL of the accelerator type resource to attach to this instance. |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorCount"></a>

```go
AcceleratorCount *f64
```

- *Type:* *f64

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#accelerator_count GoogleComputeFutureReservation#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

Full or partial URL of the accelerator type resource to attach to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#accelerator_type GoogleComputeFutureReservation#accelerator_type}

---

### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds {
	DiskSizeGb: *string,
	Interface: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.diskSizeGb">DiskSizeGb</a></code> | <code>*string</code> | Specifies the size of the disk in base-2 GB. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.interface">Interface</a></code> | <code>*string</code> | Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. |

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.diskSizeGb"></a>

```go
DiskSizeGb *string
```

- *Type:* *string

Specifies the size of the disk in base-2 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#disk_size_gb GoogleComputeFutureReservation#disk_size_gb}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.interface"></a>

```go
Interface *string
```

- *Type:* *string

Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.

The default is SCSI. Possible values: ["SCSI", "NVME"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#interface GoogleComputeFutureReservation#interface}

---

### GoogleComputeFutureReservationStatus <a name="GoogleComputeFutureReservationStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationStatus {

}
```


### GoogleComputeFutureReservationStatusLastKnownGoodState <a name="GoogleComputeFutureReservationStatusLastKnownGoodState" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationStatusLastKnownGoodState {

}
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo {

}
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs {

}
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings {

}
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap {

}
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties {

}
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties {

}
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators {

}
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds {

}
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow {

}
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration {

}
```


### GoogleComputeFutureReservationStatusSpecificSkuProperties <a name="GoogleComputeFutureReservationStatusSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationStatusSpecificSkuProperties {

}
```


### GoogleComputeFutureReservationTimeouts <a name="GoogleComputeFutureReservationTimeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#create GoogleComputeFutureReservation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#delete GoogleComputeFutureReservation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#update GoogleComputeFutureReservation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#create GoogleComputeFutureReservation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#delete GoogleComputeFutureReservation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#update GoogleComputeFutureReservation#update}.

---

### GoogleComputeFutureReservationTimeWindow <a name="GoogleComputeFutureReservationTimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationTimeWindow {
	StartTime: *string,
	Duration: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration,
	EndTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.startTime">StartTime</a></code> | <code>*string</code> | Start time of the future reservation in RFC3339 format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.duration">Duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a></code> | duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.endTime">EndTime</a></code> | <code>*string</code> | End time of the future reservation in RFC3339 format. |

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Start time of the future reservation in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#start_time GoogleComputeFutureReservation#start_time}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.duration"></a>

```go
Duration GoogleComputeFutureReservationTimeWindowDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#duration GoogleComputeFutureReservation#duration}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

End time of the future reservation in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#end_time GoogleComputeFutureReservation#end_time}

---

### GoogleComputeFutureReservationTimeWindowDuration <a name="GoogleComputeFutureReservationTimeWindowDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

&googlecomputefuturereservation.GoogleComputeFutureReservationTimeWindowDuration {
	Nanos: *f64,
	Seconds: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.seconds">Seconds</a></code> | <code>*string</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#nanos GoogleComputeFutureReservation#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.seconds"></a>

```go
Seconds *string
```

- *Type:* *string

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_compute_future_reservation#seconds GoogleComputeFutureReservation#seconds}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeFutureReservationAggregateReservationOutputReference <a name="GoogleComputeFutureReservationAggregateReservationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationAggregateReservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeFutureReservationAggregateReservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.putReservedResources">PutReservedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetVmFamily">ResetVmFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetWorkloadType">ResetWorkloadType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReservedResources` <a name="PutReservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.putReservedResources"></a>

```go
func PutReservedResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.putReservedResources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetVmFamily` <a name="ResetVmFamily" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetVmFamily"></a>

```go
func ResetVmFamily()
```

##### `ResetWorkloadType` <a name="ResetWorkloadType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetWorkloadType"></a>

```go
func ResetWorkloadType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResources">ReservedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList">GoogleComputeFutureReservationAggregateReservationReservedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResourcesInput">ReservedResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamilyInput">VmFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadTypeInput">WorkloadTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamily">VmFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadType">WorkloadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReservedResources`<sup>Required</sup> <a name="ReservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResources"></a>

```go
func ReservedResources() GoogleComputeFutureReservationAggregateReservationReservedResourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList">GoogleComputeFutureReservationAggregateReservationReservedResourcesList</a>

---

##### `ReservedResourcesInput`<sup>Optional</sup> <a name="ReservedResourcesInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResourcesInput"></a>

```go
func ReservedResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `VmFamilyInput`<sup>Optional</sup> <a name="VmFamilyInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamilyInput"></a>

```go
func VmFamilyInput() *string
```

- *Type:* *string

---

##### `WorkloadTypeInput`<sup>Optional</sup> <a name="WorkloadTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadTypeInput"></a>

```go
func WorkloadTypeInput() *string
```

- *Type:* *string

---

##### `VmFamily`<sup>Required</sup> <a name="VmFamily" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamily"></a>

```go
func VmFamily() *string
```

- *Type:* *string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadType"></a>

```go
func WorkloadType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationAggregateReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

---


### GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorCount"></a>

```go
func ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorType"></a>

```go
func ResetAcceleratorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCountInput"></a>

```go
func AcceleratorCountInput() *f64
```

- *Type:* *f64

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

---


### GoogleComputeFutureReservationAggregateReservationReservedResourcesList <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationAggregateReservationReservedResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationAggregateReservationReservedResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.putAccelerator">PutAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resetAccelerator">ResetAccelerator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccelerator` <a name="PutAccelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.putAccelerator"></a>

```go
func PutAccelerator(value GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.putAccelerator.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

---

##### `ResetAccelerator` <a name="ResetAccelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resetAccelerator"></a>

```go
func ResetAccelerator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.accelerator">Accelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference">GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.acceleratorInput">AcceleratorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Accelerator`<sup>Required</sup> <a name="Accelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.accelerator"></a>

```go
func Accelerator() GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference">GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference</a>

---

##### `AcceleratorInput`<sup>Optional</sup> <a name="AcceleratorInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.acceleratorInput"></a>

```go
func AcceleratorInput() GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference <a name="GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetSeconds"></a>

```go
func ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.seconds">Seconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *string
```

- *Type:* *string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.seconds"></a>

```go
func Seconds() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationAutoCreatedReservationsDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

---


### GoogleComputeFutureReservationCommitmentInfoOutputReference <a name="GoogleComputeFutureReservationCommitmentInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationCommitmentInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeFutureReservationCommitmentInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentName">ResetCommitmentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentPlan">ResetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetPreviousCommitmentTerms">ResetPreviousCommitmentTerms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitmentName` <a name="ResetCommitmentName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentName"></a>

```go
func ResetCommitmentName()
```

##### `ResetCommitmentPlan` <a name="ResetCommitmentPlan" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentPlan"></a>

```go
func ResetCommitmentPlan()
```

##### `ResetPreviousCommitmentTerms` <a name="ResetPreviousCommitmentTerms" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetPreviousCommitmentTerms"></a>

```go
func ResetPreviousCommitmentTerms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentNameInput">CommitmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlanInput">CommitmentPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTermsInput">PreviousCommitmentTermsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentName">CommitmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlan">CommitmentPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTerms">PreviousCommitmentTerms</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommitmentNameInput`<sup>Optional</sup> <a name="CommitmentNameInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentNameInput"></a>

```go
func CommitmentNameInput() *string
```

- *Type:* *string

---

##### `CommitmentPlanInput`<sup>Optional</sup> <a name="CommitmentPlanInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlanInput"></a>

```go
func CommitmentPlanInput() *string
```

- *Type:* *string

---

##### `PreviousCommitmentTermsInput`<sup>Optional</sup> <a name="PreviousCommitmentTermsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTermsInput"></a>

```go
func PreviousCommitmentTermsInput() *string
```

- *Type:* *string

---

##### `CommitmentName`<sup>Required</sup> <a name="CommitmentName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentName"></a>

```go
func CommitmentName() *string
```

- *Type:* *string

---

##### `CommitmentPlan`<sup>Required</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlan"></a>

```go
func CommitmentPlan() *string
```

- *Type:* *string

---

##### `PreviousCommitmentTerms`<sup>Required</sup> <a name="PreviousCommitmentTerms" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTerms"></a>

```go
func PreviousCommitmentTerms() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationCommitmentInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

---


### GoogleComputeFutureReservationShareSettingsOutputReference <a name="GoogleComputeFutureReservationShareSettingsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationShareSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeFutureReservationShareSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.putProjectMap">PutProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjectMap">ResetProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjects">ResetProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetShareType">ResetShareType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProjectMap` <a name="PutProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.putProjectMap"></a>

```go
func PutProjectMap(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.putProjectMap.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProjectMap` <a name="ResetProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjectMap"></a>

```go
func ResetProjectMap()
```

##### `ResetProjects` <a name="ResetProjects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjects"></a>

```go
func ResetProjects()
```

##### `ResetShareType` <a name="ResetShareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetShareType"></a>

```go
func ResetShareType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMap">ProjectMap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList">GoogleComputeFutureReservationShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMapInput">ProjectMapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectsInput">ProjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareTypeInput">ShareTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projects">Projects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareType">ShareType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectMap`<sup>Required</sup> <a name="ProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMap"></a>

```go
func ProjectMap() GoogleComputeFutureReservationShareSettingsProjectMapList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList">GoogleComputeFutureReservationShareSettingsProjectMapList</a>

---

##### `ProjectMapInput`<sup>Optional</sup> <a name="ProjectMapInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMapInput"></a>

```go
func ProjectMapInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectsInput`<sup>Optional</sup> <a name="ProjectsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectsInput"></a>

```go
func ProjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ShareTypeInput`<sup>Optional</sup> <a name="ShareTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareTypeInput"></a>

```go
func ShareTypeInput() *string
```

- *Type:* *string

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projects"></a>

```go
func Projects() *[]*string
```

- *Type:* *[]*string

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareType"></a>

```go
func ShareType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationShareSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

---


### GoogleComputeFutureReservationShareSettingsProjectMapList <a name="GoogleComputeFutureReservationShareSettingsProjectMapList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationShareSettingsProjectMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationShareSettingsProjectMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationShareSettingsProjectMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeFutureReservationShareSettingsProjectMapOutputReference <a name="GoogleComputeFutureReservationShareSettingsProjectMapOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationShareSettingsProjectMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationShareSettingsProjectMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorCount"></a>

```go
func ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorType"></a>

```go
func ResetAcceleratorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput"></a>

```go
func AcceleratorCountInput() *f64
```

- *Type:* *f64

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetInterface">ResetInterface</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetInterface` <a name="ResetInterface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetInterface"></a>

```go
func ResetInterface()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface">Interface</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *string
```

- *Type:* *string

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interfaceInput"></a>

```go
func InterfaceInput() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *string
```

- *Type:* *string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface"></a>

```go
func Interface() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putGuestAccelerators">PutGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putLocalSsds">PutLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetGuestAccelerators">ResetGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocalSsds">ResetLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocationHint">ResetLocationHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceFreezeDurationHours">ResetMaintenanceFreezeDurationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceInterval">ResetMaintenanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGuestAccelerators` <a name="PutGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putGuestAccelerators"></a>

```go
func PutGuestAccelerators(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putGuestAccelerators.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLocalSsds` <a name="PutLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putLocalSsds"></a>

```go
func PutLocalSsds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putLocalSsds.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGuestAccelerators` <a name="ResetGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetGuestAccelerators"></a>

```go
func ResetGuestAccelerators()
```

##### `ResetLocalSsds` <a name="ResetLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocalSsds"></a>

```go
func ResetLocalSsds()
```

##### `ResetLocationHint` <a name="ResetLocationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocationHint"></a>

```go
func ResetLocationHint()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetMaintenanceFreezeDurationHours` <a name="ResetMaintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceFreezeDurationHours"></a>

```go
func ResetMaintenanceFreezeDurationHours()
```

##### `ResetMaintenanceInterval` <a name="ResetMaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceInterval"></a>

```go
func ResetMaintenanceInterval()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMinCpuPlatform"></a>

```go
func ResetMinCpuPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators">GuestAccelerators</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds">LocalSsds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAcceleratorsInput">GuestAcceleratorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsdsInput">LocalSsdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHintInput">LocationHintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHoursInput">MaintenanceFreezeDurationHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceIntervalInput">MaintenanceIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint">LocationHint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours">MaintenanceFreezeDurationHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuestAccelerators`<sup>Required</sup> <a name="GuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators"></a>

```go
func GuestAccelerators() GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a>

---

##### `LocalSsds`<sup>Required</sup> <a name="LocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds"></a>

```go
func LocalSsds() GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a>

---

##### `GuestAcceleratorsInput`<sup>Optional</sup> <a name="GuestAcceleratorsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAcceleratorsInput"></a>

```go
func GuestAcceleratorsInput() interface{}
```

- *Type:* interface{}

---

##### `LocalSsdsInput`<sup>Optional</sup> <a name="LocalSsdsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsdsInput"></a>

```go
func LocalSsdsInput() interface{}
```

- *Type:* interface{}

---

##### `LocationHintInput`<sup>Optional</sup> <a name="LocationHintInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHintInput"></a>

```go
func LocationHintInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MaintenanceFreezeDurationHoursInput`<sup>Optional</sup> <a name="MaintenanceFreezeDurationHoursInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHoursInput"></a>

```go
func MaintenanceFreezeDurationHoursInput() *f64
```

- *Type:* *f64

---

##### `MaintenanceIntervalInput`<sup>Optional</sup> <a name="MaintenanceIntervalInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceIntervalInput"></a>

```go
func MaintenanceIntervalInput() *string
```

- *Type:* *string

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatformInput"></a>

```go
func MinCpuPlatformInput() *string
```

- *Type:* *string

---

##### `LocationHint`<sup>Required</sup> <a name="LocationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint"></a>

```go
func LocationHint() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MaintenanceFreezeDurationHours`<sup>Required</sup> <a name="MaintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours"></a>

```go
func MaintenanceFreezeDurationHours() *f64
```

- *Type:* *f64

---

##### `MaintenanceInterval`<sup>Required</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval"></a>

```go
func MaintenanceInterval() *string
```

- *Type:* *string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform"></a>

```go
func MinCpuPlatform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

---


### GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationSpecificSkuPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.putInstanceProperties">PutInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetInstanceProperties">ResetInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetSourceInstanceTemplate">ResetSourceInstanceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetTotalCount">ResetTotalCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstanceProperties` <a name="PutInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.putInstanceProperties"></a>

```go
func PutInstanceProperties(value GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.putInstanceProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

---

##### `ResetInstanceProperties` <a name="ResetInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetInstanceProperties"></a>

```go
func ResetInstanceProperties()
```

##### `ResetSourceInstanceTemplate` <a name="ResetSourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetSourceInstanceTemplate"></a>

```go
func ResetSourceInstanceTemplate()
```

##### `ResetTotalCount` <a name="ResetTotalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetTotalCount"></a>

```go
func ResetTotalCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instanceProperties">InstanceProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instancePropertiesInput">InstancePropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateInput">SourceInstanceTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCountInput">TotalCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate">SourceInstanceTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCount">TotalCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceProperties`<sup>Required</sup> <a name="InstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instanceProperties"></a>

```go
func InstanceProperties() GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference</a>

---

##### `InstancePropertiesInput`<sup>Optional</sup> <a name="InstancePropertiesInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instancePropertiesInput"></a>

```go
func InstancePropertiesInput() GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

---

##### `SourceInstanceTemplateInput`<sup>Optional</sup> <a name="SourceInstanceTemplateInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateInput"></a>

```go
func SourceInstanceTemplateInput() *string
```

- *Type:* *string

---

##### `TotalCountInput`<sup>Optional</sup> <a name="TotalCountInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCountInput"></a>

```go
func TotalCountInput() *string
```

- *Type:* *string

---

##### `SourceInstanceTemplate`<sup>Required</sup> <a name="SourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate"></a>

```go
func SourceInstanceTemplate() *string
```

- *Type:* *string

---

##### `TotalCount`<sup>Required</sup> <a name="TotalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCount"></a>

```go
func TotalCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationSpecificSkuProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.count">Count</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.timeStamp">TimeStamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.count"></a>

```go
func Count() *string
```

- *Type:* *string

---

##### `TimeStamp`<sup>Required</sup> <a name="TimeStamp" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.timeStamp"></a>

```go
func TimeStamp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.specificSkuProperties">SpecificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShareSettings`<sup>Required</sup> <a name="ShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.shareSettings"></a>

```go
func ShareSettings() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList</a>

---

##### `SpecificSkuProperties`<sup>Required</sup> <a name="SpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.specificSkuProperties"></a>

```go
func SpecificSkuProperties() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList</a>

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.timeWindow"></a>

```go
func TimeWindow() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projectMap">ProjectMap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projects">Projects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.shareType">ShareType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectMap`<sup>Required</sup> <a name="ProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projectMap"></a>

```go
func ProjectMap() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList</a>

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projects"></a>

```go
func Projects() *[]*string
```

- *Type:* *[]*string

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.shareType"></a>

```go
func ShareType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface">Interface</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *string
```

- *Type:* *string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface"></a>

```go
func Interface() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators">GuestAccelerators</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds">LocalSsds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint">LocationHint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours">MaintenanceFreezeDurationHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuestAccelerators`<sup>Required</sup> <a name="GuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators"></a>

```go
func GuestAccelerators() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a>

---

##### `LocalSsds`<sup>Required</sup> <a name="LocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds"></a>

```go
func LocalSsds() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a>

---

##### `LocationHint`<sup>Required</sup> <a name="LocationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint"></a>

```go
func LocationHint() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MaintenanceFreezeDurationHours`<sup>Required</sup> <a name="MaintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours"></a>

```go
func MaintenanceFreezeDurationHours() *f64
```

- *Type:* *f64

---

##### `MaintenanceInterval`<sup>Required</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval"></a>

```go
func MaintenanceInterval() *string
```

- *Type:* *string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform"></a>

```go
func MinCpuPlatform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.instanceProperties">InstanceProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate">SourceInstanceTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.totalCount">TotalCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceProperties`<sup>Required</sup> <a name="InstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.instanceProperties"></a>

```go
func InstanceProperties() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList</a>

---

##### `SourceInstanceTemplate`<sup>Required</sup> <a name="SourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate"></a>

```go
func SourceInstanceTemplate() *string
```

- *Type:* *string

---

##### `TotalCount`<sup>Required</sup> <a name="TotalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.totalCount"></a>

```go
func TotalCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.seconds">Seconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.seconds"></a>

```go
func Seconds() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.duration">Duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.duration"></a>

```go
func Duration() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.existingMatchingUsageInfo">ExistingMatchingUsageInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.futureReservationSpecs">FutureReservationSpecs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.lockTime">LockTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.procurementStatus">ProcurementStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState">GoogleComputeFutureReservationStatusLastKnownGoodState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExistingMatchingUsageInfo`<sup>Required</sup> <a name="ExistingMatchingUsageInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.existingMatchingUsageInfo"></a>

```go
func ExistingMatchingUsageInfo() GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList</a>

---

##### `FutureReservationSpecs`<sup>Required</sup> <a name="FutureReservationSpecs" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.futureReservationSpecs"></a>

```go
func FutureReservationSpecs() GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList</a>

---

##### `LockTime`<sup>Required</sup> <a name="LockTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.lockTime"></a>

```go
func LockTime() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `ProcurementStatus`<sup>Required</sup> <a name="ProcurementStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.procurementStatus"></a>

```go
func ProcurementStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationStatusLastKnownGoodState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState">GoogleComputeFutureReservationStatusLastKnownGoodState</a>

---


### GoogleComputeFutureReservationStatusList <a name="GoogleComputeFutureReservationStatusList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeFutureReservationStatusOutputReference <a name="GoogleComputeFutureReservationStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.amendmentStatus">AmendmentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.autoCreatedReservations">AutoCreatedReservations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fulfilledCount">FulfilledCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lastKnownGoodState">LastKnownGoodState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList">GoogleComputeFutureReservationStatusLastKnownGoodStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lockTime">LockTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.procurementStatus">ProcurementStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.specificSkuProperties">SpecificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusSpecificSkuPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus">GoogleComputeFutureReservationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmendmentStatus`<sup>Required</sup> <a name="AmendmentStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.amendmentStatus"></a>

```go
func AmendmentStatus() *string
```

- *Type:* *string

---

##### `AutoCreatedReservations`<sup>Required</sup> <a name="AutoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.autoCreatedReservations"></a>

```go
func AutoCreatedReservations() *[]*string
```

- *Type:* *[]*string

---

##### `FulfilledCount`<sup>Required</sup> <a name="FulfilledCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fulfilledCount"></a>

```go
func FulfilledCount() *string
```

- *Type:* *string

---

##### `LastKnownGoodState`<sup>Required</sup> <a name="LastKnownGoodState" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lastKnownGoodState"></a>

```go
func LastKnownGoodState() GoogleComputeFutureReservationStatusLastKnownGoodStateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList">GoogleComputeFutureReservationStatusLastKnownGoodStateList</a>

---

##### `LockTime`<sup>Required</sup> <a name="LockTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lockTime"></a>

```go
func LockTime() *string
```

- *Type:* *string

---

##### `ProcurementStatus`<sup>Required</sup> <a name="ProcurementStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.procurementStatus"></a>

```go
func ProcurementStatus() *string
```

- *Type:* *string

---

##### `SpecificSkuProperties`<sup>Required</sup> <a name="SpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.specificSkuProperties"></a>

```go
func SpecificSkuProperties() GoogleComputeFutureReservationStatusSpecificSkuPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusSpecificSkuPropertiesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus">GoogleComputeFutureReservationStatus</a>

---


### GoogleComputeFutureReservationStatusSpecificSkuPropertiesList <a name="GoogleComputeFutureReservationStatusSpecificSkuPropertiesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusSpecificSkuPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeFutureReservationStatusSpecificSkuPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.get"></a>

```go
func Get(index *f64) GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference <a name="GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateId">SourceInstanceTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties">GoogleComputeFutureReservationStatusSpecificSkuProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceInstanceTemplateId`<sup>Required</sup> <a name="SourceInstanceTemplateId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateId"></a>

```go
func SourceInstanceTemplateId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationStatusSpecificSkuProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties">GoogleComputeFutureReservationStatusSpecificSkuProperties</a>

---


### GoogleComputeFutureReservationTimeoutsOutputReference <a name="GoogleComputeFutureReservationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeFutureReservationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeFutureReservationTimeWindowDurationOutputReference <a name="GoogleComputeFutureReservationTimeWindowDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationTimeWindowDurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeFutureReservationTimeWindowDurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetSeconds"></a>

```go
func ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.seconds">Seconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *string
```

- *Type:* *string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.seconds"></a>

```go
func Seconds() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationTimeWindowDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

---


### GoogleComputeFutureReservationTimeWindowOutputReference <a name="GoogleComputeFutureReservationTimeWindowOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputefuturereservation"

googlecomputefuturereservation.NewGoogleComputeFutureReservationTimeWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeFutureReservationTimeWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.putDuration">PutDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDuration` <a name="PutDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.putDuration"></a>

```go
func PutDuration(value GoogleComputeFutureReservationTimeWindowDuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

---

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.duration">Duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference">GoogleComputeFutureReservationTimeWindowDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.durationInput">DurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.duration"></a>

```go
func Duration() GoogleComputeFutureReservationTimeWindowDurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference">GoogleComputeFutureReservationTimeWindowDurationOutputReference</a>

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.durationInput"></a>

```go
func DurationInput() GoogleComputeFutureReservationTimeWindowDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeFutureReservationTimeWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

---



