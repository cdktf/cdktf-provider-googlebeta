# `googleComputeReservation` Submodule <a name="`googleComputeReservation` Submodule" id="@cdktf/provider-google-beta.googleComputeReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeReservation <a name="GoogleComputeReservation" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation google_compute_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

googlecomputereservation.NewGoogleComputeReservation(scope Construct, id *string, config GoogleComputeReservationConfig) GoogleComputeReservation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig">GoogleComputeReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig">GoogleComputeReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.putShareSettings">PutShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.putSpecificReservation">PutSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.resetShareSettings">ResetShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.resetSpecificReservationRequired">ResetSpecificReservationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutShareSettings` <a name="PutShareSettings" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.putShareSettings"></a>

```go
func PutShareSettings(value GoogleComputeReservationShareSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.putShareSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettings">GoogleComputeReservationShareSettings</a>

---

##### `PutSpecificReservation` <a name="PutSpecificReservation" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.putSpecificReservation"></a>

```go
func PutSpecificReservation(value GoogleComputeReservationSpecificReservation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservation">GoogleComputeReservationSpecificReservation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeReservationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeouts">GoogleComputeReservationTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetShareSettings` <a name="ResetShareSettings" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.resetShareSettings"></a>

```go
func ResetShareSettings()
```

##### `ResetSpecificReservationRequired` <a name="ResetSpecificReservationRequired" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.resetSpecificReservationRequired"></a>

```go
func ResetSpecificReservationRequired()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeReservation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

googlecomputereservation.GoogleComputeReservation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

googlecomputereservation.GoogleComputeReservation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

googlecomputereservation.GoogleComputeReservation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

googlecomputereservation.GoogleComputeReservation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.commitment">Commitment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference">GoogleComputeReservationShareSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference">GoogleComputeReservationSpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference">GoogleComputeReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.shareSettingsInput">ShareSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettings">GoogleComputeReservationShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.specificReservationInput">SpecificReservationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservation">GoogleComputeReservationSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.specificReservationRequiredInput">SpecificReservationRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.specificReservationRequired">SpecificReservationRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.commitment"></a>

```go
func Commitment() *string
```

- *Type:* *string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ShareSettings`<sup>Required</sup> <a name="ShareSettings" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.shareSettings"></a>

```go
func ShareSettings() GoogleComputeReservationShareSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference">GoogleComputeReservationShareSettingsOutputReference</a>

---

##### `SpecificReservation`<sup>Required</sup> <a name="SpecificReservation" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.specificReservation"></a>

```go
func SpecificReservation() GoogleComputeReservationSpecificReservationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference">GoogleComputeReservationSpecificReservationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.timeouts"></a>

```go
func Timeouts() GoogleComputeReservationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference">GoogleComputeReservationTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ShareSettingsInput`<sup>Optional</sup> <a name="ShareSettingsInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.shareSettingsInput"></a>

```go
func ShareSettingsInput() GoogleComputeReservationShareSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettings">GoogleComputeReservationShareSettings</a>

---

##### `SpecificReservationInput`<sup>Optional</sup> <a name="SpecificReservationInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.specificReservationInput"></a>

```go
func SpecificReservationInput() GoogleComputeReservationSpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservation">GoogleComputeReservationSpecificReservation</a>

---

##### `SpecificReservationRequiredInput`<sup>Optional</sup> <a name="SpecificReservationRequiredInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.specificReservationRequiredInput"></a>

```go
func SpecificReservationRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SpecificReservationRequired`<sup>Required</sup> <a name="SpecificReservationRequired" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.specificReservationRequired"></a>

```go
func SpecificReservationRequired() interface{}
```

- *Type:* interface{}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeReservationConfig <a name="GoogleComputeReservationConfig" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

&googlecomputereservation.GoogleComputeReservationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SpecificReservation: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeReservation.GoogleComputeReservationSpecificReservation,
	Zone: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	ShareSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeReservation.GoogleComputeReservationShareSettings,
	SpecificReservationRequired: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeReservation.GoogleComputeReservationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservation">GoogleComputeReservationSpecificReservation</a></code> | specific_reservation block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.zone">Zone</a></code> | <code>*string</code> | The zone where the reservation is made. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#id GoogleComputeReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#project GoogleComputeReservation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettings">GoogleComputeReservationShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.specificReservationRequired">SpecificReservationRequired</a></code> | <code>interface{}</code> | When set to true, only VMs that target this reservation by name can consume this reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeouts">GoogleComputeReservationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#name GoogleComputeReservation#name}

---

##### `SpecificReservation`<sup>Required</sup> <a name="SpecificReservation" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.specificReservation"></a>

```go
SpecificReservation GoogleComputeReservationSpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservation">GoogleComputeReservationSpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#specific_reservation GoogleComputeReservation#specific_reservation}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The zone where the reservation is made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#zone GoogleComputeReservation#zone}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#description GoogleComputeReservation#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#id GoogleComputeReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#project GoogleComputeReservation#project}.

---

##### `ShareSettings`<sup>Optional</sup> <a name="ShareSettings" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.shareSettings"></a>

```go
ShareSettings GoogleComputeReservationShareSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettings">GoogleComputeReservationShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#share_settings GoogleComputeReservation#share_settings}

---

##### `SpecificReservationRequired`<sup>Optional</sup> <a name="SpecificReservationRequired" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.specificReservationRequired"></a>

```go
SpecificReservationRequired interface{}
```

- *Type:* interface{}

When set to true, only VMs that target this reservation by name can consume this reservation.

Otherwise, it can be consumed by VMs with
affinity for any reservation. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#specific_reservation_required GoogleComputeReservation#specific_reservation_required}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeReservationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeouts">GoogleComputeReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#timeouts GoogleComputeReservation#timeouts}

---

### GoogleComputeReservationShareSettings <a name="GoogleComputeReservationShareSettings" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

&googlecomputereservation.GoogleComputeReservationShareSettings {
	ProjectMap: interface{},
	ShareType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettings.property.projectMap">ProjectMap</a></code> | <code>interface{}</code> | project_map block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettings.property.shareType">ShareType</a></code> | <code>*string</code> | Type of sharing for this shared-reservation Possible values: ["LOCAL", "SPECIFIC_PROJECTS"]. |

---

##### `ProjectMap`<sup>Optional</sup> <a name="ProjectMap" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettings.property.projectMap"></a>

```go
ProjectMap interface{}
```

- *Type:* interface{}

project_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#project_map GoogleComputeReservation#project_map}

---

##### `ShareType`<sup>Optional</sup> <a name="ShareType" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettings.property.shareType"></a>

```go
ShareType *string
```

- *Type:* *string

Type of sharing for this shared-reservation Possible values: ["LOCAL", "SPECIFIC_PROJECTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#share_type GoogleComputeReservation#share_type}

---

### GoogleComputeReservationShareSettingsProjectMap <a name="GoogleComputeReservationShareSettingsProjectMap" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

&googlecomputereservation.GoogleComputeReservationShareSettingsProjectMap {
	Id: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMap.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#id GoogleComputeReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMap.property.projectId">ProjectId</a></code> | <code>*string</code> | The project id/number, should be same as the key of this project config in the project map. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMap.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#id GoogleComputeReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMap.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The project id/number, should be same as the key of this project config in the project map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#project_id GoogleComputeReservation#project_id}

---

### GoogleComputeReservationSpecificReservation <a name="GoogleComputeReservationSpecificReservation" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

&googlecomputereservation.GoogleComputeReservationSpecificReservation {
	Count: *f64,
	InstanceProperties: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservation.property.count">Count</a></code> | <code>*f64</code> | The number of resources that are allocated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservation.property.instanceProperties">InstanceProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties">GoogleComputeReservationSpecificReservationInstanceProperties</a></code> | instance_properties block. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservation.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

The number of resources that are allocated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#count GoogleComputeReservation#count}

---

##### `InstanceProperties`<sup>Required</sup> <a name="InstanceProperties" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservation.property.instanceProperties"></a>

```go
InstanceProperties GoogleComputeReservationSpecificReservationInstanceProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties">GoogleComputeReservationSpecificReservationInstanceProperties</a>

instance_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#instance_properties GoogleComputeReservation#instance_properties}

---

### GoogleComputeReservationSpecificReservationInstanceProperties <a name="GoogleComputeReservationSpecificReservationInstanceProperties" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

&googlecomputereservation.GoogleComputeReservationSpecificReservationInstanceProperties {
	MachineType: *string,
	GuestAccelerators: interface{},
	LocalSsds: interface{},
	MinCpuPlatform: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties.property.machineType">MachineType</a></code> | <code>*string</code> | The name of the machine type to reserve. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties.property.guestAccelerators">GuestAccelerators</a></code> | <code>interface{}</code> | guest_accelerators block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties.property.localSsds">LocalSsds</a></code> | <code>interface{}</code> | local_ssds block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>*string</code> | The minimum CPU platform for the reservation. |

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The name of the machine type to reserve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#machine_type GoogleComputeReservation#machine_type}

---

##### `GuestAccelerators`<sup>Optional</sup> <a name="GuestAccelerators" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties.property.guestAccelerators"></a>

```go
GuestAccelerators interface{}
```

- *Type:* interface{}

guest_accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#guest_accelerators GoogleComputeReservation#guest_accelerators}

---

##### `LocalSsds`<sup>Optional</sup> <a name="LocalSsds" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties.property.localSsds"></a>

```go
LocalSsds interface{}
```

- *Type:* interface{}

local_ssds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#local_ssds GoogleComputeReservation#local_ssds}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties.property.minCpuPlatform"></a>

```go
MinCpuPlatform *string
```

- *Type:* *string

The minimum CPU platform for the reservation.

For example,
'"Intel Skylake"'. See
the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)
for information on available CPU platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#min_cpu_platform GoogleComputeReservation#min_cpu_platform}

---

### GoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators <a name="GoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

&googlecomputereservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators {
	AcceleratorCount: *f64,
	AcceleratorType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | The full or partial URL of the accelerator type to attach to this instance. For example: 'projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100'. |

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorCount"></a>

```go
AcceleratorCount *f64
```

- *Type:* *f64

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#accelerator_count GoogleComputeReservation#accelerator_count}

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

The full or partial URL of the accelerator type to attach to this instance. For example: 'projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100'.

If you are creating an instance template, specify only the accelerator name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#accelerator_type GoogleComputeReservation#accelerator_type}

---

### GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds <a name="GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

&googlecomputereservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds {
	DiskSizeGb: *f64,
	Interface: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | The size of the disk in base-2 GB. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.interface">Interface</a></code> | <code>*string</code> | The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"]. |

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

The size of the disk in base-2 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#disk_size_gb GoogleComputeReservation#disk_size_gb}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.interface"></a>

```go
Interface *string
```

- *Type:* *string

The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#interface GoogleComputeReservation#interface}

---

### GoogleComputeReservationTimeouts <a name="GoogleComputeReservationTimeouts" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

&googlecomputereservation.GoogleComputeReservationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#create GoogleComputeReservation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#delete GoogleComputeReservation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#update GoogleComputeReservation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#create GoogleComputeReservation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#delete GoogleComputeReservation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_compute_reservation#update GoogleComputeReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeReservationShareSettingsOutputReference <a name="GoogleComputeReservationShareSettingsOutputReference" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

googlecomputereservation.NewGoogleComputeReservationShareSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeReservationShareSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.putProjectMap">PutProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.resetProjectMap">ResetProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.resetShareType">ResetShareType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProjectMap` <a name="PutProjectMap" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.putProjectMap"></a>

```go
func PutProjectMap(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.putProjectMap.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProjectMap` <a name="ResetProjectMap" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.resetProjectMap"></a>

```go
func ResetProjectMap()
```

##### `ResetShareType` <a name="ResetShareType" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.resetShareType"></a>

```go
func ResetShareType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.property.projectMap">ProjectMap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList">GoogleComputeReservationShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.property.projectMapInput">ProjectMapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.property.shareTypeInput">ShareTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.property.shareType">ShareType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettings">GoogleComputeReservationShareSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectMap`<sup>Required</sup> <a name="ProjectMap" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.property.projectMap"></a>

```go
func ProjectMap() GoogleComputeReservationShareSettingsProjectMapList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList">GoogleComputeReservationShareSettingsProjectMapList</a>

---

##### `ProjectMapInput`<sup>Optional</sup> <a name="ProjectMapInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.property.projectMapInput"></a>

```go
func ProjectMapInput() interface{}
```

- *Type:* interface{}

---

##### `ShareTypeInput`<sup>Optional</sup> <a name="ShareTypeInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.property.shareTypeInput"></a>

```go
func ShareTypeInput() *string
```

- *Type:* *string

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.property.shareType"></a>

```go
func ShareType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeReservationShareSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettings">GoogleComputeReservationShareSettings</a>

---


### GoogleComputeReservationShareSettingsProjectMapList <a name="GoogleComputeReservationShareSettingsProjectMapList" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

googlecomputereservation.NewGoogleComputeReservationShareSettingsProjectMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeReservationShareSettingsProjectMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.get"></a>

```go
func Get(index *f64) GoogleComputeReservationShareSettingsProjectMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeReservationShareSettingsProjectMapOutputReference <a name="GoogleComputeReservationShareSettingsProjectMapOutputReference" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

googlecomputereservation.NewGoogleComputeReservationShareSettingsProjectMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeReservationShareSettingsProjectMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationShareSettingsProjectMapOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList <a name="GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

googlecomputereservation.NewGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.get"></a>

```go
func Get(index *f64) GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference <a name="GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

googlecomputereservation.NewGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput"></a>

```go
func AcceleratorCountInput() *f64
```

- *Type:* *f64

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList <a name="GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

googlecomputereservation.NewGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.get"></a>

```go
func Get(index *f64) GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference <a name="GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

googlecomputereservation.NewGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resetInterface">ResetInterface</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterface` <a name="ResetInterface" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resetInterface"></a>

```go
func ResetInterface()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interface">Interface</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interfaceInput"></a>

```go
func InterfaceInput() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interface"></a>

```go
func Interface() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference <a name="GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

googlecomputereservation.NewGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.putGuestAccelerators">PutGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.putLocalSsds">PutLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.resetGuestAccelerators">ResetGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.resetLocalSsds">ResetLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGuestAccelerators` <a name="PutGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.putGuestAccelerators"></a>

```go
func PutGuestAccelerators(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.putGuestAccelerators.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLocalSsds` <a name="PutLocalSsds" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.putLocalSsds"></a>

```go
func PutLocalSsds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.putLocalSsds.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGuestAccelerators` <a name="ResetGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.resetGuestAccelerators"></a>

```go
func ResetGuestAccelerators()
```

##### `ResetLocalSsds` <a name="ResetLocalSsds" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.resetLocalSsds"></a>

```go
func ResetLocalSsds()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.resetMinCpuPlatform"></a>

```go
func ResetMinCpuPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAccelerators">GuestAccelerators</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList">GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsds">LocalSsds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList">GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAcceleratorsInput">GuestAcceleratorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsdsInput">LocalSsdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties">GoogleComputeReservationSpecificReservationInstanceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuestAccelerators`<sup>Required</sup> <a name="GuestAccelerators" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAccelerators"></a>

```go
func GuestAccelerators() GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList">GoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList</a>

---

##### `LocalSsds`<sup>Required</sup> <a name="LocalSsds" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsds"></a>

```go
func LocalSsds() GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList">GoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList</a>

---

##### `GuestAcceleratorsInput`<sup>Optional</sup> <a name="GuestAcceleratorsInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAcceleratorsInput"></a>

```go
func GuestAcceleratorsInput() interface{}
```

- *Type:* interface{}

---

##### `LocalSsdsInput`<sup>Optional</sup> <a name="LocalSsdsInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsdsInput"></a>

```go
func LocalSsdsInput() interface{}
```

- *Type:* interface{}

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatformInput"></a>

```go
func MinCpuPlatformInput() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatform"></a>

```go
func MinCpuPlatform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeReservationSpecificReservationInstanceProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties">GoogleComputeReservationSpecificReservationInstanceProperties</a>

---


### GoogleComputeReservationSpecificReservationOutputReference <a name="GoogleComputeReservationSpecificReservationOutputReference" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

googlecomputereservation.NewGoogleComputeReservationSpecificReservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeReservationSpecificReservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.putInstanceProperties">PutInstanceProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstanceProperties` <a name="PutInstanceProperties" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.putInstanceProperties"></a>

```go
func PutInstanceProperties(value GoogleComputeReservationSpecificReservationInstanceProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.putInstanceProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties">GoogleComputeReservationSpecificReservationInstanceProperties</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.instanceProperties">InstanceProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference">GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.inUseCount">InUseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.instancePropertiesInput">InstancePropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties">GoogleComputeReservationSpecificReservationInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservation">GoogleComputeReservationSpecificReservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceProperties`<sup>Required</sup> <a name="InstanceProperties" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.instanceProperties"></a>

```go
func InstanceProperties() GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference">GoogleComputeReservationSpecificReservationInstancePropertiesOutputReference</a>

---

##### `InUseCount`<sup>Required</sup> <a name="InUseCount" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.inUseCount"></a>

```go
func InUseCount() *f64
```

- *Type:* *f64

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `InstancePropertiesInput`<sup>Optional</sup> <a name="InstancePropertiesInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.instancePropertiesInput"></a>

```go
func InstancePropertiesInput() GoogleComputeReservationSpecificReservationInstanceProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationInstanceProperties">GoogleComputeReservationSpecificReservationInstanceProperties</a>

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeReservationSpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationSpecificReservation">GoogleComputeReservationSpecificReservation</a>

---


### GoogleComputeReservationTimeoutsOutputReference <a name="GoogleComputeReservationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputereservation"

googlecomputereservation.NewGoogleComputeReservationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeReservationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeReservation.GoogleComputeReservationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



