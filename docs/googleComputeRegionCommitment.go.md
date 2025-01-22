# `googleComputeRegionCommitment` Submodule <a name="`googleComputeRegionCommitment` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionCommitment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionCommitment <a name="GoogleComputeRegionCommitment" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment google_compute_region_commitment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregioncommitment"

googlecomputeregioncommitment.NewGoogleComputeRegionCommitment(scope Construct, id *string, config GoogleComputeRegionCommitmentConfig) GoogleComputeRegionCommitment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig">GoogleComputeRegionCommitmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig">GoogleComputeRegionCommitmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putLicenseResource">PutLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetAutoRenew">ResetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetExistingReservations">ResetExistingReservations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetLicenseResource">ResetLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLicenseResource` <a name="PutLicenseResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putLicenseResource"></a>

```go
func PutLicenseResource(value GoogleComputeRegionCommitmentLicenseResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putLicenseResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putResources"></a>

```go
func PutResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putResources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeRegionCommitmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>

---

##### `ResetAutoRenew` <a name="ResetAutoRenew" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetAutoRenew"></a>

```go
func ResetAutoRenew()
```

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExistingReservations` <a name="ResetExistingReservations" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetExistingReservations"></a>

```go
func ResetExistingReservations()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetId"></a>

```go
func ResetId()
```

##### `ResetLicenseResource` <a name="ResetLicenseResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetLicenseResource"></a>

```go
func ResetLicenseResource()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetResources"></a>

```go
func ResetResources()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionCommitment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregioncommitment"

googlecomputeregioncommitment.GoogleComputeRegionCommitment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregioncommitment"

googlecomputeregioncommitment.GoogleComputeRegionCommitment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregioncommitment"

googlecomputeregioncommitment.GoogleComputeRegionCommitment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregioncommitment"

googlecomputeregioncommitment.GoogleComputeRegionCommitment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeRegionCommitment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeRegionCommitment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeRegionCommitment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionCommitment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.commitmentId">CommitmentId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.endTimestamp">EndTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResource">LicenseResource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference">GoogleComputeRegionCommitmentLicenseResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList">GoogleComputeRegionCommitmentResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.startTimestamp">StartTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference">GoogleComputeRegionCommitmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenewInput">AutoRenewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservationsInput">ExistingReservationsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResourceInput">LicenseResourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.planInput">PlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resourcesInput">ResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenew">AutoRenew</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservations">ExistingReservations</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CommitmentId`<sup>Required</sup> <a name="CommitmentId" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.commitmentId"></a>

```go
func CommitmentId() *f64
```

- *Type:* *f64

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `EndTimestamp`<sup>Required</sup> <a name="EndTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.endTimestamp"></a>

```go
func EndTimestamp() *string
```

- *Type:* *string

---

##### `LicenseResource`<sup>Required</sup> <a name="LicenseResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResource"></a>

```go
func LicenseResource() GoogleComputeRegionCommitmentLicenseResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference">GoogleComputeRegionCommitmentLicenseResourceOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resources"></a>

```go
func Resources() GoogleComputeRegionCommitmentResourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList">GoogleComputeRegionCommitmentResourcesList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `StartTimestamp`<sup>Required</sup> <a name="StartTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.startTimestamp"></a>

```go
func StartTimestamp() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeouts"></a>

```go
func Timeouts() GoogleComputeRegionCommitmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference">GoogleComputeRegionCommitmentTimeoutsOutputReference</a>

---

##### `AutoRenewInput`<sup>Optional</sup> <a name="AutoRenewInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenewInput"></a>

```go
func AutoRenewInput() interface{}
```

- *Type:* interface{}

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExistingReservationsInput`<sup>Optional</sup> <a name="ExistingReservationsInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservationsInput"></a>

```go
func ExistingReservationsInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseResourceInput`<sup>Optional</sup> <a name="LicenseResourceInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.licenseResourceInput"></a>

```go
func LicenseResourceInput() GoogleComputeRegionCommitmentLicenseResource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.planInput"></a>

```go
func PlanInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.resourcesInput"></a>

```go
func ResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AutoRenew`<sup>Required</sup> <a name="AutoRenew" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.autoRenew"></a>

```go
func AutoRenew() interface{}
```

- *Type:* interface{}

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExistingReservations`<sup>Required</sup> <a name="ExistingReservations" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.existingReservations"></a>

```go
func ExistingReservations() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionCommitmentConfig <a name="GoogleComputeRegionCommitmentConfig" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregioncommitment"

&googlecomputeregioncommitment.GoogleComputeRegionCommitmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Plan: *string,
	AutoRenew: interface{},
	Category: *string,
	Description: *string,
	ExistingReservations: *string,
	Id: *string,
	LicenseResource: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource,
	Project: *string,
	Region: *string,
	Resources: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.plan">Plan</a></code> | <code>*string</code> | The plan for this commitment, which determines duration and discount rate. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.autoRenew">AutoRenew</a></code> | <code>interface{}</code> | Specifies whether to enable automatic renewal for the commitment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.category">Category</a></code> | <code>*string</code> | The category of the commitment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.existingReservations">ExistingReservations</a></code> | <code>*string</code> | Specifies the already existing reservations to attach to the Commitment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#id GoogleComputeRegionCommitment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.licenseResource">LicenseResource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a></code> | license_resource block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#project GoogleComputeRegionCommitment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.region">Region</a></code> | <code>*string</code> | URL of the region where this commitment may be used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.resources">Resources</a></code> | <code>interface{}</code> | resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.type">Type</a></code> | <code>*string</code> | The type of commitment, which affects the discount rate and the eligible resources. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#name GoogleComputeRegionCommitment#name}

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.plan"></a>

```go
Plan *string
```

- *Type:* *string

The plan for this commitment, which determines duration and discount rate.

The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years). Possible values: ["TWELVE_MONTH", "THIRTY_SIX_MONTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#plan GoogleComputeRegionCommitment#plan}

---

##### `AutoRenew`<sup>Optional</sup> <a name="AutoRenew" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.autoRenew"></a>

```go
AutoRenew interface{}
```

- *Type:* interface{}

Specifies whether to enable automatic renewal for the commitment.

The default value is false if not specified.
If the field is set to true, the commitment will be automatically renewed for either
one or three years according to the terms of the existing commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#auto_renew GoogleComputeRegionCommitment#auto_renew}

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.category"></a>

```go
Category *string
```

- *Type:* *string

The category of the commitment.

Category MACHINE specifies commitments composed of
machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE
specifies commitments composed of software licenses, listed in licenseResources.
Note that only MACHINE commitments should have a Type specified. Possible values: ["LICENSE", "MACHINE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#category GoogleComputeRegionCommitment#category}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#description GoogleComputeRegionCommitment#description}

---

##### `ExistingReservations`<sup>Optional</sup> <a name="ExistingReservations" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.existingReservations"></a>

```go
ExistingReservations *string
```

- *Type:* *string

Specifies the already existing reservations to attach to the Commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#existing_reservations GoogleComputeRegionCommitment#existing_reservations}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#id GoogleComputeRegionCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseResource`<sup>Optional</sup> <a name="LicenseResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.licenseResource"></a>

```go
LicenseResource GoogleComputeRegionCommitmentLicenseResource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

license_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#license_resource GoogleComputeRegionCommitment#license_resource}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#project GoogleComputeRegionCommitment#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

URL of the region where this commitment may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#region GoogleComputeRegionCommitment#region}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.resources"></a>

```go
Resources interface{}
```

- *Type:* interface{}

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#resources GoogleComputeRegionCommitment#resources}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeRegionCommitmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts">GoogleComputeRegionCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#timeouts GoogleComputeRegionCommitment#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of commitment, which affects the discount rate and the eligible resources.

The type could be one of the following value: 'MEMORY_OPTIMIZED', 'ACCELERATOR_OPTIMIZED',
'GENERAL_PURPOSE_N1', 'GENERAL_PURPOSE_N2', 'GENERAL_PURPOSE_N2D', 'GENERAL_PURPOSE_E2',
'GENERAL_PURPOSE_T2D', 'GENERAL_PURPOSE_C3', 'COMPUTE_OPTIMIZED_C2', 'COMPUTE_OPTIMIZED_C2D' and
'GRAPHICS_OPTIMIZED_G2'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#type GoogleComputeRegionCommitment#type}

---

### GoogleComputeRegionCommitmentLicenseResource <a name="GoogleComputeRegionCommitmentLicenseResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregioncommitment"

&googlecomputeregioncommitment.GoogleComputeRegionCommitmentLicenseResource {
	License: *string,
	Amount: *string,
	CoresPerLicense: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.license">License</a></code> | <code>*string</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.amount">Amount</a></code> | <code>*string</code> | The number of licenses purchased. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.coresPerLicense">CoresPerLicense</a></code> | <code>*string</code> | Specifies the core range of the instance for which this license applies. |

---

##### `License`<sup>Required</sup> <a name="License" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.license"></a>

```go
License *string
```

- *Type:* *string

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#license GoogleComputeRegionCommitment#license}

---

##### `Amount`<sup>Optional</sup> <a name="Amount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.amount"></a>

```go
Amount *string
```

- *Type:* *string

The number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#amount GoogleComputeRegionCommitment#amount}

---

##### `CoresPerLicense`<sup>Optional</sup> <a name="CoresPerLicense" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource.property.coresPerLicense"></a>

```go
CoresPerLicense *string
```

- *Type:* *string

Specifies the core range of the instance for which this license applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#cores_per_license GoogleComputeRegionCommitment#cores_per_license}

---

### GoogleComputeRegionCommitmentResources <a name="GoogleComputeRegionCommitmentResources" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregioncommitment"

&googlecomputeregioncommitment.GoogleComputeRegionCommitmentResources {
	AcceleratorType: *string,
	Amount: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | Name of the accelerator type resource. Applicable only when the type is ACCELERATOR. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.amount">Amount</a></code> | <code>*string</code> | The amount of the resource purchased (in a type-dependent unit, such as bytes). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.type">Type</a></code> | <code>*string</code> | Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR. |

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

Name of the accelerator type resource. Applicable only when the type is ACCELERATOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#accelerator_type GoogleComputeRegionCommitment#accelerator_type}

---

##### `Amount`<sup>Optional</sup> <a name="Amount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.amount"></a>

```go
Amount *string
```

- *Type:* *string

The amount of the resource purchased (in a type-dependent unit, such as bytes).

For vCPUs, this can just be an integer. For memory,
this must be provided in MB. Memory must be a multiple of 256 MB,
with up to 6.5GB of memory per every vCPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#amount GoogleComputeRegionCommitment#amount}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResources.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#type GoogleComputeRegionCommitment#type}

---

### GoogleComputeRegionCommitmentTimeouts <a name="GoogleComputeRegionCommitmentTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregioncommitment"

&googlecomputeregioncommitment.GoogleComputeRegionCommitmentTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#create GoogleComputeRegionCommitment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#delete GoogleComputeRegionCommitment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#create GoogleComputeRegionCommitment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_region_commitment#delete GoogleComputeRegionCommitment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionCommitmentLicenseResourceOutputReference <a name="GoogleComputeRegionCommitmentLicenseResourceOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregioncommitment"

googlecomputeregioncommitment.NewGoogleComputeRegionCommitmentLicenseResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionCommitmentLicenseResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetAmount">ResetAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetCoresPerLicense">ResetCoresPerLicense</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmount` <a name="ResetAmount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetAmount"></a>

```go
func ResetAmount()
```

##### `ResetCoresPerLicense` <a name="ResetCoresPerLicense" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.resetCoresPerLicense"></a>

```go
func ResetCoresPerLicense()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amountInput">AmountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicenseInput">CoresPerLicenseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.licenseInput">LicenseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amount">Amount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicense">CoresPerLicense</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.license">License</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amountInput"></a>

```go
func AmountInput() *string
```

- *Type:* *string

---

##### `CoresPerLicenseInput`<sup>Optional</sup> <a name="CoresPerLicenseInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicenseInput"></a>

```go
func CoresPerLicenseInput() *string
```

- *Type:* *string

---

##### `LicenseInput`<sup>Optional</sup> <a name="LicenseInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.licenseInput"></a>

```go
func LicenseInput() *string
```

- *Type:* *string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.amount"></a>

```go
func Amount() *string
```

- *Type:* *string

---

##### `CoresPerLicense`<sup>Required</sup> <a name="CoresPerLicense" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.coresPerLicense"></a>

```go
func CoresPerLicense() *string
```

- *Type:* *string

---

##### `License`<sup>Required</sup> <a name="License" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.license"></a>

```go
func License() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionCommitmentLicenseResource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentLicenseResource">GoogleComputeRegionCommitmentLicenseResource</a>

---


### GoogleComputeRegionCommitmentResourcesList <a name="GoogleComputeRegionCommitmentResourcesList" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregioncommitment"

googlecomputeregioncommitment.NewGoogleComputeRegionCommitmentResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionCommitmentResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionCommitmentResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionCommitmentResourcesOutputReference <a name="GoogleComputeRegionCommitmentResourcesOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregioncommitment"

googlecomputeregioncommitment.NewGoogleComputeRegionCommitmentResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionCommitmentResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAmount">ResetAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAcceleratorType"></a>

```go
func ResetAcceleratorType()
```

##### `ResetAmount` <a name="ResetAmount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetAmount"></a>

```go
func ResetAmount()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amountInput">AmountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amount">Amount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amountInput"></a>

```go
func AmountInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.amount"></a>

```go
func Amount() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionCommitmentTimeoutsOutputReference <a name="GoogleComputeRegionCommitmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeregioncommitment"

googlecomputeregioncommitment.NewGoogleComputeRegionCommitmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionCommitmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionCommitment.GoogleComputeRegionCommitmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



