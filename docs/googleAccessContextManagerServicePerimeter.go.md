# `googleAccessContextManagerServicePerimeter` Submodule <a name="`googleAccessContextManagerServicePerimeter` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerServicePerimeter <a name="GoogleAccessContextManagerServicePerimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter google_access_context_manager_service_perimeter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeter(scope Construct, id *string, config GoogleAccessContextManagerServicePerimeterConfig) GoogleAccessContextManagerServicePerimeter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig">GoogleAccessContextManagerServicePerimeterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig">GoogleAccessContextManagerServicePerimeterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putStatus">PutStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetPerimeterType">ResetPerimeterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetSpec">ResetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetUseExplicitDryRunSpec">ResetUseExplicitDryRunSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putSpec"></a>

```go
func PutSpec(value GoogleAccessContextManagerServicePerimeterSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a>

---

##### `PutStatus` <a name="PutStatus" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putStatus"></a>

```go
func PutStatus(value GoogleAccessContextManagerServicePerimeterStatus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAccessContextManagerServicePerimeterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts">GoogleAccessContextManagerServicePerimeterTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetId"></a>

```go
func ResetId()
```

##### `ResetPerimeterType` <a name="ResetPerimeterType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetPerimeterType"></a>

```go
func ResetPerimeterType()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetSpec"></a>

```go
func ResetSpec()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUseExplicitDryRunSpec` <a name="ResetUseExplicitDryRunSpec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetUseExplicitDryRunSpec"></a>

```go
func ResetUseExplicitDryRunSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleAccessContextManagerServicePerimeter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleAccessContextManagerServicePerimeter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerServicePerimeter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference">GoogleAccessContextManagerServicePerimeterSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference">GoogleAccessContextManagerServicePerimeterStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.perimeterTypeInput">PerimeterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.statusInput">StatusInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.useExplicitDryRunSpecInput">UseExplicitDryRunSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.perimeterType">PerimeterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.useExplicitDryRunSpec">UseExplicitDryRunSpec</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.spec"></a>

```go
func Spec() GoogleAccessContextManagerServicePerimeterSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference">GoogleAccessContextManagerServicePerimeterSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.status"></a>

```go
func Status() GoogleAccessContextManagerServicePerimeterStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference">GoogleAccessContextManagerServicePerimeterStatusOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.timeouts"></a>

```go
func Timeouts() GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PerimeterTypeInput`<sup>Optional</sup> <a name="PerimeterTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.perimeterTypeInput"></a>

```go
func PerimeterTypeInput() *string
```

- *Type:* *string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.specInput"></a>

```go
func SpecInput() GoogleAccessContextManagerServicePerimeterSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.statusInput"></a>

```go
func StatusInput() GoogleAccessContextManagerServicePerimeterStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `UseExplicitDryRunSpecInput`<sup>Optional</sup> <a name="UseExplicitDryRunSpecInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.useExplicitDryRunSpecInput"></a>

```go
func UseExplicitDryRunSpecInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `PerimeterType`<sup>Required</sup> <a name="PerimeterType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.perimeterType"></a>

```go
func PerimeterType() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UseExplicitDryRunSpec`<sup>Required</sup> <a name="UseExplicitDryRunSpec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.useExplicitDryRunSpec"></a>

```go
func UseExplicitDryRunSpec() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerServicePerimeterConfig <a name="GoogleAccessContextManagerServicePerimeterConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Parent: *string,
	Title: *string,
	Description: *string,
	Id: *string,
	PerimeterType: *string,
	Spec: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec,
	Status: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts,
	UseExplicitDryRunSpec: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.name">Name</a></code> | <code>*string</code> | Resource name for the ServicePerimeter. The short_name component must begin with a letter and only include alphanumeric and '_'. Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.parent">Parent</a></code> | <code>*string</code> | The AccessPolicy this ServicePerimeter lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.title">Title</a></code> | <code>*string</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.description">Description</a></code> | <code>*string</code> | Description of the ServicePerimeter and its use. Does not affect behavior. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#id GoogleAccessContextManagerServicePerimeter#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.perimeterType">PerimeterType</a></code> | <code>*string</code> | Specifies the type of the Perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a></code> | status block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts">GoogleAccessContextManagerServicePerimeterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.useExplicitDryRunSpec">UseExplicitDryRunSpec</a></code> | <code>interface{}</code> | Use explicit dry run spec flag. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Resource name for the ServicePerimeter. The short_name component must begin with a letter and only include alphanumeric and '_'. Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#name GoogleAccessContextManagerServicePerimeter#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The AccessPolicy this ServicePerimeter lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#parent GoogleAccessContextManagerServicePerimeter#parent}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#title GoogleAccessContextManagerServicePerimeter#title}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the ServicePerimeter and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#description GoogleAccessContextManagerServicePerimeter#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#id GoogleAccessContextManagerServicePerimeter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PerimeterType`<sup>Optional</sup> <a name="PerimeterType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.perimeterType"></a>

```go
PerimeterType *string
```

- *Type:* *string

Specifies the type of the Perimeter.

There are two types: regular and
bridge. Regular Service Perimeter contains resources, access levels,
and restricted services. Every resource can be in at most
ONE regular Service Perimeter.

In addition to being in a regular service perimeter, a resource can also
be in zero or more perimeter bridges. A perimeter bridge only contains
resources. Cross project operations are permitted if all effected
resources share some perimeter (whether bridge or regular). Perimeter
Bridge does not contain access levels or services: those are governed
entirely by the regular perimeter that resource is in.

Perimeter Bridges are typically useful when building more complex
topologies with many independent perimeters that need to share some data
with a common perimeter, but should not be able to share data among
themselves. Default value: "PERIMETER_TYPE_REGULAR" Possible values: ["PERIMETER_TYPE_REGULAR", "PERIMETER_TYPE_BRIDGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#perimeter_type GoogleAccessContextManagerServicePerimeter#perimeter_type}

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.spec"></a>

```go
Spec GoogleAccessContextManagerServicePerimeterSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#spec GoogleAccessContextManagerServicePerimeter#spec}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.status"></a>

```go
Status GoogleAccessContextManagerServicePerimeterStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a>

status block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#status GoogleAccessContextManagerServicePerimeter#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.timeouts"></a>

```go
Timeouts GoogleAccessContextManagerServicePerimeterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts">GoogleAccessContextManagerServicePerimeterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#timeouts GoogleAccessContextManagerServicePerimeter#timeouts}

---

##### `UseExplicitDryRunSpec`<sup>Optional</sup> <a name="UseExplicitDryRunSpec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.useExplicitDryRunSpec"></a>

```go
UseExplicitDryRunSpec interface{}
```

- *Type:* interface{}

Use explicit dry run spec flag.

Ordinarily, a dry-run spec implicitly exists
for all Service Perimeters, and that spec is identical to the status for those
Service Perimeters. When this flag is set, it inhibits the generation of the
implicit spec, thereby allowing the user to explicitly provide a
configuration ("spec") to use in a dry-run version of the Service Perimeter.
This allows the user to test changes to the enforced config ("status") without
actually enforcing them. This testing is done through analyzing the differences
between currently enforced and suggested restrictions. useExplicitDryRunSpec must
bet set to True if any of the fields in the spec are set to non-default values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#use_explicit_dry_run_spec GoogleAccessContextManagerServicePerimeter#use_explicit_dry_run_spec}

---

### GoogleAccessContextManagerServicePerimeterSpec <a name="GoogleAccessContextManagerServicePerimeterSpec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterSpec {
	AccessLevels: *[]*string,
	EgressPolicies: interface{},
	IngressPolicies: interface{},
	Resources: *[]*string,
	RestrictedServices: *[]*string,
	VpcAccessibleServices: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.egressPolicies">EgressPolicies</a></code> | <code>interface{}</code> | egress_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.ingressPolicies">IngressPolicies</a></code> | <code>interface{}</code> | ingress_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.restrictedServices">RestrictedServices</a></code> | <code>*[]*string</code> | GCP services that are subject to the Service Perimeter restrictions. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.vpcAccessibleServices">VpcAccessibleServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices</a></code> | vpc_accessible_services block. |

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.accessLevels"></a>

```go
AccessLevels *[]*string
```

- *Type:* *[]*string

A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet.

AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#access_levels GoogleAccessContextManagerServicePerimeter#access_levels}

---

##### `EgressPolicies`<sup>Optional</sup> <a name="EgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.egressPolicies"></a>

```go
EgressPolicies interface{}
```

- *Type:* interface{}

egress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#egress_policies GoogleAccessContextManagerServicePerimeter#egress_policies}

---

##### `IngressPolicies`<sup>Optional</sup> <a name="IngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.ingressPolicies"></a>

```go
IngressPolicies interface{}
```

- *Type:* interface{}

ingress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#ingress_policies GoogleAccessContextManagerServicePerimeter#ingress_policies}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}

---

##### `RestrictedServices`<sup>Optional</sup> <a name="RestrictedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.restrictedServices"></a>

```go
RestrictedServices *[]*string
```

- *Type:* *[]*string

GCP services that are subject to the Service Perimeter restrictions.

Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#restricted_services GoogleAccessContextManagerServicePerimeter#restricted_services}

---

##### `VpcAccessibleServices`<sup>Optional</sup> <a name="VpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.vpcAccessibleServices"></a>

```go
VpcAccessibleServices GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices</a>

vpc_accessible_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#vpc_accessible_services GoogleAccessContextManagerServicePerimeter#vpc_accessible_services}

---

### GoogleAccessContextManagerServicePerimeterSpecEgressPolicies <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies {
	EgressFrom: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom,
	EgressTo: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies.property.egressFrom">EgressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies.property.egressTo">EgressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a></code> | egress_to block. |

---

##### `EgressFrom`<sup>Optional</sup> <a name="EgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies.property.egressFrom"></a>

```go
EgressFrom GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#egress_from GoogleAccessContextManagerServicePerimeter#egress_from}

---

##### `EgressTo`<sup>Optional</sup> <a name="EgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies.property.egressTo"></a>

```go
EgressTo GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#egress_to GoogleAccessContextManagerServicePerimeter#egress_to}

---

### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom {
	Identities: *[]*string,
	IdentityType: *string,
	SourceRestriction: *string,
	Sources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.identities">Identities</a></code> | <code>*[]*string</code> | A list of identities that are allowed access through this 'EgressPolicy'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.identityType">IdentityType</a></code> | <code>*string</code> | Specifies the type of identities that are allowed access to outside the perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.sourceRestriction">SourceRestriction</a></code> | <code>*string</code> | Whether to enforce traffic restrictions based on 'sources' field. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.sources">Sources</a></code> | <code>interface{}</code> | sources block. |

---

##### `Identities`<sup>Optional</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.identities"></a>

```go
Identities *[]*string
```

- *Type:* *[]*string

A list of identities that are allowed access through this 'EgressPolicy'.

Should be in the format of email address. The email address should
represent individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.identityType"></a>

```go
IdentityType *string
```

- *Type:* *string

Specifies the type of identities that are allowed access to outside the perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}

---

##### `SourceRestriction`<sup>Optional</sup> <a name="SourceRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.sourceRestriction"></a>

```go
SourceRestriction *string
```

- *Type:* *string

Whether to enforce traffic restrictions based on 'sources' field.

If the 'sources' field is non-empty, then this field must be set to 'SOURCE_RESTRICTION_ENABLED'. Possible values: ["SOURCE_RESTRICTION_UNSPECIFIED", "SOURCE_RESTRICTION_ENABLED", "SOURCE_RESTRICTION_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#source_restriction GoogleAccessContextManagerServicePerimeter#source_restriction}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.sources"></a>

```go
Sources interface{}
```

- *Type:* interface{}

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#sources GoogleAccessContextManagerServicePerimeter#sources}

---

### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSources <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSources {
	AccessLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSources.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside. |

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSources.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#access_level GoogleAccessContextManagerServicePerimeter#access_level}

---

### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo {
	ExternalResources: *[]*string,
	Operations: interface{},
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.externalResources">ExternalResources</a></code> | <code>*[]*string</code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.operations">Operations</a></code> | <code>interface{}</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza. |

---

##### `ExternalResources`<sup>Optional</sup> <a name="ExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.externalResources"></a>

```go
ExternalResources *[]*string
```

- *Type:* *[]*string

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#external_resources GoogleAccessContextManagerServicePerimeter#external_resources}

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.operations"></a>

```go
Operations interface{}
```

- *Type:* interface{}

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}

---

### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations {
	MethodSelectors: interface{},
	ServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.property.methodSelectors">MethodSelectors</a></code> | <code>interface{}</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.property.serviceName">ServiceName</a></code> | <code>*string</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `MethodSelectors`<sup>Optional</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.property.methodSelectors"></a>

```go
MethodSelectors interface{}
```

- *Type:* interface{}

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}

---

### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors {
	Method: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.property.method">Method</a></code> | <code>*string</code> | Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.property.permission">Permission</a></code> | <code>*string</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.property.method"></a>

```go
Method *string
```

- *Type:* *string

Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}

---

### GoogleAccessContextManagerServicePerimeterSpecIngressPolicies <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies {
	IngressFrom: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom,
	IngressTo: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies.property.ingressFrom">IngressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies.property.ingressTo">IngressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a></code> | ingress_to block. |

---

##### `IngressFrom`<sup>Optional</sup> <a name="IngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies.property.ingressFrom"></a>

```go
IngressFrom GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#ingress_from GoogleAccessContextManagerServicePerimeter#ingress_from}

---

##### `IngressTo`<sup>Optional</sup> <a name="IngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies.property.ingressTo"></a>

```go
IngressTo GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#ingress_to GoogleAccessContextManagerServicePerimeter#ingress_to}

---

### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom {
	Identities: *[]*string,
	IdentityType: *string,
	Sources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.identities">Identities</a></code> | <code>*[]*string</code> | A list of identities that are allowed access through this ingress policy. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.identityType">IdentityType</a></code> | <code>*string</code> | Specifies the type of identities that are allowed access from outside the perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.sources">Sources</a></code> | <code>interface{}</code> | sources block. |

---

##### `Identities`<sup>Optional</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.identities"></a>

```go
Identities *[]*string
```

- *Type:* *[]*string

A list of identities that are allowed access through this ingress policy.

Should be in the format of email address. The email address should represent
individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.identityType"></a>

```go
IdentityType *string
```

- *Type:* *string

Specifies the type of identities that are allowed access from outside the perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.sources"></a>

```go
Sources interface{}
```

- *Type:* interface{}

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#sources GoogleAccessContextManagerServicePerimeter#sources}

---

### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources {
	AccessLevel: *string,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.property.resource">Resource</a></code> | <code>*string</code> | A Google Cloud resource that is allowed to ingress the perimeter. |

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet.

'AccessLevels' listed
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
resources within the perimeter can only be accessed via Google Cloud calls
with request origins within the perimeter.
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
If * is specified, then all IngressSources will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#access_level GoogleAccessContextManagerServicePerimeter#access_level}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

A Google Cloud resource that is allowed to ingress the perimeter.

Requests from these resources will be allowed to access perimeter data.
Currently only projects are allowed. Format 'projects/{project_number}'
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the case
of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#resource GoogleAccessContextManagerServicePerimeter#resource}

---

### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo {
	Operations: interface{},
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.property.operations">Operations</a></code> | <code>interface{}</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'. |

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.property.operations"></a>

```go
Operations interface{}
```

- *Type:* interface{}

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}

---

### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations {
	MethodSelectors: interface{},
	ServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.property.methodSelectors">MethodSelectors</a></code> | <code>interface{}</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.property.serviceName">ServiceName</a></code> | <code>*string</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `MethodSelectors`<sup>Optional</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.property.methodSelectors"></a>

```go
MethodSelectors interface{}
```

- *Type:* interface{}

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}

---

### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors {
	Method: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.property.method">Method</a></code> | <code>*string</code> | Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.property.permission">Permission</a></code> | <code>*string</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.property.method"></a>

```go
Method *string
```

- *Type:* *string

Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'.

If '*' used as value for 'method', then
ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}

---

### GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices <a name="GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices {
	AllowedServices: *[]*string,
	EnableRestriction: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices.property.allowedServices">AllowedServices</a></code> | <code>*[]*string</code> | The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices.property.enableRestriction">EnableRestriction</a></code> | <code>interface{}</code> | Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'. |

---

##### `AllowedServices`<sup>Optional</sup> <a name="AllowedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices.property.allowedServices"></a>

```go
AllowedServices *[]*string
```

- *Type:* *[]*string

The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#allowed_services GoogleAccessContextManagerServicePerimeter#allowed_services}

---

##### `EnableRestriction`<sup>Optional</sup> <a name="EnableRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices.property.enableRestriction"></a>

```go
EnableRestriction interface{}
```

- *Type:* interface{}

Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#enable_restriction GoogleAccessContextManagerServicePerimeter#enable_restriction}

---

### GoogleAccessContextManagerServicePerimeterStatus <a name="GoogleAccessContextManagerServicePerimeterStatus" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterStatus {
	AccessLevels: *[]*string,
	EgressPolicies: interface{},
	IngressPolicies: interface{},
	Resources: *[]*string,
	RestrictedServices: *[]*string,
	VpcAccessibleServices: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.egressPolicies">EgressPolicies</a></code> | <code>interface{}</code> | egress_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.ingressPolicies">IngressPolicies</a></code> | <code>interface{}</code> | ingress_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.restrictedServices">RestrictedServices</a></code> | <code>*[]*string</code> | GCP services that are subject to the Service Perimeter restrictions. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.vpcAccessibleServices">VpcAccessibleServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices</a></code> | vpc_accessible_services block. |

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.accessLevels"></a>

```go
AccessLevels *[]*string
```

- *Type:* *[]*string

A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet.

AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#access_levels GoogleAccessContextManagerServicePerimeter#access_levels}

---

##### `EgressPolicies`<sup>Optional</sup> <a name="EgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.egressPolicies"></a>

```go
EgressPolicies interface{}
```

- *Type:* interface{}

egress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#egress_policies GoogleAccessContextManagerServicePerimeter#egress_policies}

---

##### `IngressPolicies`<sup>Optional</sup> <a name="IngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.ingressPolicies"></a>

```go
IngressPolicies interface{}
```

- *Type:* interface{}

ingress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#ingress_policies GoogleAccessContextManagerServicePerimeter#ingress_policies}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}

---

##### `RestrictedServices`<sup>Optional</sup> <a name="RestrictedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.restrictedServices"></a>

```go
RestrictedServices *[]*string
```

- *Type:* *[]*string

GCP services that are subject to the Service Perimeter restrictions.

Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#restricted_services GoogleAccessContextManagerServicePerimeter#restricted_services}

---

##### `VpcAccessibleServices`<sup>Optional</sup> <a name="VpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.vpcAccessibleServices"></a>

```go
VpcAccessibleServices GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices</a>

vpc_accessible_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#vpc_accessible_services GoogleAccessContextManagerServicePerimeter#vpc_accessible_services}

---

### GoogleAccessContextManagerServicePerimeterStatusEgressPolicies <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies {
	EgressFrom: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom,
	EgressTo: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies.property.egressFrom">EgressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies.property.egressTo">EgressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a></code> | egress_to block. |

---

##### `EgressFrom`<sup>Optional</sup> <a name="EgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies.property.egressFrom"></a>

```go
EgressFrom GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#egress_from GoogleAccessContextManagerServicePerimeter#egress_from}

---

##### `EgressTo`<sup>Optional</sup> <a name="EgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies.property.egressTo"></a>

```go
EgressTo GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#egress_to GoogleAccessContextManagerServicePerimeter#egress_to}

---

### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom {
	Identities: *[]*string,
	IdentityType: *string,
	SourceRestriction: *string,
	Sources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.identities">Identities</a></code> | <code>*[]*string</code> | Identities can be an individual user, service account, Google group, or third-party identity. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.identityType">IdentityType</a></code> | <code>*string</code> | Specifies the type of identities that are allowed access to outside the perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.sourceRestriction">SourceRestriction</a></code> | <code>*string</code> | Whether to enforce traffic restrictions based on 'sources' field. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.sources">Sources</a></code> | <code>interface{}</code> | sources block. |

---

##### `Identities`<sup>Optional</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.identities"></a>

```go
Identities *[]*string
```

- *Type:* *[]*string

Identities can be an individual user, service account, Google group, or third-party identity.

For third-party identity, only single identities
are supported and other identity types are not supported.The v1 identities
that have the prefix user, group and serviceAccount in
https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.identityType"></a>

```go
IdentityType *string
```

- *Type:* *string

Specifies the type of identities that are allowed access to outside the perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}

---

##### `SourceRestriction`<sup>Optional</sup> <a name="SourceRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.sourceRestriction"></a>

```go
SourceRestriction *string
```

- *Type:* *string

Whether to enforce traffic restrictions based on 'sources' field.

If the 'sources' field is non-empty, then this field must be set to 'SOURCE_RESTRICTION_ENABLED'. Possible values: ["SOURCE_RESTRICTION_UNSPECIFIED", "SOURCE_RESTRICTION_ENABLED", "SOURCE_RESTRICTION_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#source_restriction GoogleAccessContextManagerServicePerimeter#source_restriction}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.sources"></a>

```go
Sources interface{}
```

- *Type:* interface{}

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#sources GoogleAccessContextManagerServicePerimeter#sources}

---

### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSources <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSources {
	AccessLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSources.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside. |

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSources.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#access_level GoogleAccessContextManagerServicePerimeter#access_level}

---

### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo {
	ExternalResources: *[]*string,
	Operations: interface{},
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.externalResources">ExternalResources</a></code> | <code>*[]*string</code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.operations">Operations</a></code> | <code>interface{}</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza. |

---

##### `ExternalResources`<sup>Optional</sup> <a name="ExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.externalResources"></a>

```go
ExternalResources *[]*string
```

- *Type:* *[]*string

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#external_resources GoogleAccessContextManagerServicePerimeter#external_resources}

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.operations"></a>

```go
Operations interface{}
```

- *Type:* interface{}

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}

---

### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations {
	MethodSelectors: interface{},
	ServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.property.methodSelectors">MethodSelectors</a></code> | <code>interface{}</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.property.serviceName">ServiceName</a></code> | <code>*string</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `MethodSelectors`<sup>Optional</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.property.methodSelectors"></a>

```go
MethodSelectors interface{}
```

- *Type:* interface{}

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}

---

### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors {
	Method: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.property.method">Method</a></code> | <code>*string</code> | Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.property.permission">Permission</a></code> | <code>*string</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.property.method"></a>

```go
Method *string
```

- *Type:* *string

Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}

---

### GoogleAccessContextManagerServicePerimeterStatusIngressPolicies <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies {
	IngressFrom: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom,
	IngressTo: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies.property.ingressFrom">IngressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies.property.ingressTo">IngressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a></code> | ingress_to block. |

---

##### `IngressFrom`<sup>Optional</sup> <a name="IngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies.property.ingressFrom"></a>

```go
IngressFrom GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#ingress_from GoogleAccessContextManagerServicePerimeter#ingress_from}

---

##### `IngressTo`<sup>Optional</sup> <a name="IngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies.property.ingressTo"></a>

```go
IngressTo GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#ingress_to GoogleAccessContextManagerServicePerimeter#ingress_to}

---

### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom {
	Identities: *[]*string,
	IdentityType: *string,
	Sources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.identities">Identities</a></code> | <code>*[]*string</code> | Identities can be an individual user, service account, Google group, or third-party identity. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.identityType">IdentityType</a></code> | <code>*string</code> | Specifies the type of identities that are allowed access from outside the perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.sources">Sources</a></code> | <code>interface{}</code> | sources block. |

---

##### `Identities`<sup>Optional</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.identities"></a>

```go
Identities *[]*string
```

- *Type:* *[]*string

Identities can be an individual user, service account, Google group, or third-party identity.

For third-party identity, only single identities
are supported and other identity types are not supported.The v1 identities
that have the prefix user, group and serviceAccount in
https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.identityType"></a>

```go
IdentityType *string
```

- *Type:* *string

Specifies the type of identities that are allowed access from outside the perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.sources"></a>

```go
Sources interface{}
```

- *Type:* interface{}

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#sources GoogleAccessContextManagerServicePerimeter#sources}

---

### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources {
	AccessLevel: *string,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.property.resource">Resource</a></code> | <code>*string</code> | A Google Cloud resource that is allowed to ingress the perimeter. |

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet.

'AccessLevels' listed
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
resources within the perimeter can only be accessed via Google Cloud calls
with request origins within the perimeter.
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
If * is specified, then all IngressSources will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#access_level GoogleAccessContextManagerServicePerimeter#access_level}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

A Google Cloud resource that is allowed to ingress the perimeter.

Requests from these resources will be allowed to access perimeter data.
Currently only projects and VPCs are allowed.
Project format: 'projects/{projectNumber}'
VPC network format:
'//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}'.
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the case
of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#resource GoogleAccessContextManagerServicePerimeter#resource}

---

### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo {
	Operations: interface{},
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.property.operations">Operations</a></code> | <code>interface{}</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'. |

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.property.operations"></a>

```go
Operations interface{}
```

- *Type:* interface{}

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}

---

### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations {
	MethodSelectors: interface{},
	ServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.property.methodSelectors">MethodSelectors</a></code> | <code>interface{}</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.property.serviceName">ServiceName</a></code> | <code>*string</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `MethodSelectors`<sup>Optional</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.property.methodSelectors"></a>

```go
MethodSelectors interface{}
```

- *Type:* interface{}

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}

---

### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors {
	Method: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.property.method">Method</a></code> | <code>*string</code> | Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.property.permission">Permission</a></code> | <code>*string</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.property.method"></a>

```go
Method *string
```

- *Type:* *string

Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'.

If '*' used as value for 'method', then
ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}

---

### GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices <a name="GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices {
	AllowedServices: *[]*string,
	EnableRestriction: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices.property.allowedServices">AllowedServices</a></code> | <code>*[]*string</code> | The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices.property.enableRestriction">EnableRestriction</a></code> | <code>interface{}</code> | Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'. |

---

##### `AllowedServices`<sup>Optional</sup> <a name="AllowedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices.property.allowedServices"></a>

```go
AllowedServices *[]*string
```

- *Type:* *[]*string

The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#allowed_services GoogleAccessContextManagerServicePerimeter#allowed_services}

---

##### `EnableRestriction`<sup>Optional</sup> <a name="EnableRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices.property.enableRestriction"></a>

```go
EnableRestriction interface{}
```

- *Type:* interface{}

Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#enable_restriction GoogleAccessContextManagerServicePerimeter#enable_restriction}

---

### GoogleAccessContextManagerServicePerimeterTimeouts <a name="GoogleAccessContextManagerServicePerimeterTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

&googleaccesscontextmanagerserviceperimeter.GoogleAccessContextManagerServicePerimeterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#create GoogleAccessContextManagerServicePerimeter#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#delete GoogleAccessContextManagerServicePerimeter#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#update GoogleAccessContextManagerServicePerimeter#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#create GoogleAccessContextManagerServicePerimeter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#delete GoogleAccessContextManagerServicePerimeter#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_access_context_manager_service_perimeter#update GoogleAccessContextManagerServicePerimeter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetIdentities">ResetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetSourceRestriction">ResetSourceRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSources` <a name="PutSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.putSources"></a>

```go
func PutSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.putSources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIdentities` <a name="ResetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetIdentities"></a>

```go
func ResetIdentities()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetIdentityType"></a>

```go
func ResetIdentityType()
```

##### `ResetSourceRestriction` <a name="ResetSourceRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetSourceRestriction"></a>

```go
func ResetSourceRestriction()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetSources"></a>

```go
func ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identitiesInput">IdentitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.sourceRestrictionInput">SourceRestrictionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identities">Identities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.sourceRestriction">SourceRestriction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.sources"></a>

```go
func Sources() GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList</a>

---

##### `IdentitiesInput`<sup>Optional</sup> <a name="IdentitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identitiesInput"></a>

```go
func IdentitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identityTypeInput"></a>

```go
func IdentityTypeInput() *string
```

- *Type:* *string

---

##### `SourceRestrictionInput`<sup>Optional</sup> <a name="SourceRestrictionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.sourceRestrictionInput"></a>

```go
func SourceRestrictionInput() *string
```

- *Type:* *string

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `Identities`<sup>Required</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identities"></a>

```go
func Identities() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `SourceRestriction`<sup>Required</sup> <a name="SourceRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.sourceRestriction"></a>

```go
func SourceRestriction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```go
func ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors">PutMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors">ResetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMethodSelectors` <a name="PutMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors"></a>

```go
func PutMethodSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMethodSelectors` <a name="ResetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors"></a>

```go
func ResetMethodSelectors()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors">MethodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput">MethodSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodSelectors`<sup>Required</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors"></a>

```go
func MethodSelectors() GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList</a>

---

##### `MethodSelectorsInput`<sup>Optional</sup> <a name="MethodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```go
func MethodSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetExternalResources">ResetExternalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.putOperations"></a>

```go
func PutOperations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExternalResources` <a name="ResetExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetExternalResources"></a>

```go
func ResetExternalResources()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetOperations"></a>

```go
func ResetOperations()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.externalResourcesInput">ExternalResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.operationsInput">OperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.externalResources">ExternalResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.operations"></a>

```go
func Operations() GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList</a>

---

##### `ExternalResourcesInput`<sup>Optional</sup> <a name="ExternalResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.externalResourcesInput"></a>

```go
func ExternalResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.operationsInput"></a>

```go
func OperationsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalResources`<sup>Required</sup> <a name="ExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.externalResources"></a>

```go
func ExternalResources() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a>

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressFrom">PutEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressTo">PutEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resetEgressFrom">ResetEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resetEgressTo">ResetEgressTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgressFrom` <a name="PutEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressFrom"></a>

```go
func PutEgressFrom(value GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a>

---

##### `PutEgressTo` <a name="PutEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressTo"></a>

```go
func PutEgressTo(value GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a>

---

##### `ResetEgressFrom` <a name="ResetEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resetEgressFrom"></a>

```go
func ResetEgressFrom()
```

##### `ResetEgressTo` <a name="ResetEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resetEgressTo"></a>

```go
func ResetEgressTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressFrom">EgressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressTo">EgressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressFromInput">EgressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressToInput">EgressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EgressFrom`<sup>Required</sup> <a name="EgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressFrom"></a>

```go
func EgressFrom() GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference</a>

---

##### `EgressTo`<sup>Required</sup> <a name="EgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressTo"></a>

```go
func EgressTo() GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference</a>

---

##### `EgressFromInput`<sup>Optional</sup> <a name="EgressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressFromInput"></a>

```go
func EgressFromInput() GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a>

---

##### `EgressToInput`<sup>Optional</sup> <a name="EgressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressToInput"></a>

```go
func EgressToInput() GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetIdentities">ResetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSources` <a name="PutSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.putSources"></a>

```go
func PutSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.putSources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIdentities` <a name="ResetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetIdentities"></a>

```go
func ResetIdentities()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetIdentityType"></a>

```go
func ResetIdentityType()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetSources"></a>

```go
func ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identitiesInput">IdentitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identities">Identities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.sources"></a>

```go
func Sources() GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList</a>

---

##### `IdentitiesInput`<sup>Optional</sup> <a name="IdentitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identitiesInput"></a>

```go
func IdentitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identityTypeInput"></a>

```go
func IdentityTypeInput() *string
```

- *Type:* *string

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `Identities`<sup>Required</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identities"></a>

```go
func Identities() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```go
func ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors">PutMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors">ResetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMethodSelectors` <a name="PutMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors"></a>

```go
func PutMethodSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMethodSelectors` <a name="ResetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors"></a>

```go
func ResetMethodSelectors()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors">MethodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput">MethodSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodSelectors`<sup>Required</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors"></a>

```go
func MethodSelectors() GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList</a>

---

##### `MethodSelectorsInput`<sup>Optional</sup> <a name="MethodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput"></a>

```go
func MethodSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.putOperations"></a>

```go
func PutOperations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.putOperations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resetOperations"></a>

```go
func ResetOperations()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.operationsInput">OperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.operations"></a>

```go
func Operations() GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList</a>

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.operationsInput"></a>

```go
func OperationsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a>

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressFrom">PutIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressTo">PutIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resetIngressFrom">ResetIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resetIngressTo">ResetIngressTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIngressFrom` <a name="PutIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressFrom"></a>

```go
func PutIngressFrom(value GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a>

---

##### `PutIngressTo` <a name="PutIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressTo"></a>

```go
func PutIngressTo(value GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a>

---

##### `ResetIngressFrom` <a name="ResetIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resetIngressFrom"></a>

```go
func ResetIngressFrom()
```

##### `ResetIngressTo` <a name="ResetIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resetIngressTo"></a>

```go
func ResetIngressTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressFrom">IngressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressTo">IngressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressFromInput">IngressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressToInput">IngressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IngressFrom`<sup>Required</sup> <a name="IngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressFrom"></a>

```go
func IngressFrom() GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference</a>

---

##### `IngressTo`<sup>Required</sup> <a name="IngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressTo"></a>

```go
func IngressTo() GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference</a>

---

##### `IngressFromInput`<sup>Optional</sup> <a name="IngressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressFromInput"></a>

```go
func IngressFromInput() GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a>

---

##### `IngressToInput`<sup>Optional</sup> <a name="IngressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressToInput"></a>

```go
func IngressToInput() GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterSpecOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putEgressPolicies">PutEgressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putIngressPolicies">PutIngressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putVpcAccessibleServices">PutVpcAccessibleServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetEgressPolicies">ResetEgressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetIngressPolicies">ResetIngressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetRestrictedServices">ResetRestrictedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetVpcAccessibleServices">ResetVpcAccessibleServices</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgressPolicies` <a name="PutEgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putEgressPolicies"></a>

```go
func PutEgressPolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putEgressPolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIngressPolicies` <a name="PutIngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putIngressPolicies"></a>

```go
func PutIngressPolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putIngressPolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpcAccessibleServices` <a name="PutVpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putVpcAccessibleServices"></a>

```go
func PutVpcAccessibleServices(value GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putVpcAccessibleServices.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices</a>

---

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetAccessLevels"></a>

```go
func ResetAccessLevels()
```

##### `ResetEgressPolicies` <a name="ResetEgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetEgressPolicies"></a>

```go
func ResetEgressPolicies()
```

##### `ResetIngressPolicies` <a name="ResetIngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetIngressPolicies"></a>

```go
func ResetIngressPolicies()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetRestrictedServices` <a name="ResetRestrictedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetRestrictedServices"></a>

```go
func ResetRestrictedServices()
```

##### `ResetVpcAccessibleServices` <a name="ResetVpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetVpcAccessibleServices"></a>

```go
func ResetVpcAccessibleServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.egressPolicies">EgressPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.ingressPolicies">IngressPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.vpcAccessibleServices">VpcAccessibleServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.egressPoliciesInput">EgressPoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.ingressPoliciesInput">IngressPoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.restrictedServicesInput">RestrictedServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.vpcAccessibleServicesInput">VpcAccessibleServicesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.restrictedServices">RestrictedServices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EgressPolicies`<sup>Required</sup> <a name="EgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.egressPolicies"></a>

```go
func EgressPolicies() GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList</a>

---

##### `IngressPolicies`<sup>Required</sup> <a name="IngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.ingressPolicies"></a>

```go
func IngressPolicies() GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList</a>

---

##### `VpcAccessibleServices`<sup>Required</sup> <a name="VpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.vpcAccessibleServices"></a>

```go
func VpcAccessibleServices() GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference</a>

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.accessLevelsInput"></a>

```go
func AccessLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EgressPoliciesInput`<sup>Optional</sup> <a name="EgressPoliciesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.egressPoliciesInput"></a>

```go
func EgressPoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `IngressPoliciesInput`<sup>Optional</sup> <a name="IngressPoliciesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.ingressPoliciesInput"></a>

```go
func IngressPoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictedServicesInput`<sup>Optional</sup> <a name="RestrictedServicesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.restrictedServicesInput"></a>

```go
func RestrictedServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcAccessibleServicesInput`<sup>Optional</sup> <a name="VpcAccessibleServicesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.vpcAccessibleServicesInput"></a>

```go
func VpcAccessibleServicesInput() GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices</a>

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.accessLevels"></a>

```go
func AccessLevels() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictedServices`<sup>Required</sup> <a name="RestrictedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.restrictedServices"></a>

```go
func RestrictedServices() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a>

---


### GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resetAllowedServices">ResetAllowedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resetEnableRestriction">ResetEnableRestriction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedServices` <a name="ResetAllowedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resetAllowedServices"></a>

```go
func ResetAllowedServices()
```

##### `ResetEnableRestriction` <a name="ResetEnableRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resetEnableRestriction"></a>

```go
func ResetEnableRestriction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.allowedServicesInput">AllowedServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.enableRestrictionInput">EnableRestrictionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.allowedServices">AllowedServices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.enableRestriction">EnableRestriction</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedServicesInput`<sup>Optional</sup> <a name="AllowedServicesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.allowedServicesInput"></a>

```go
func AllowedServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableRestrictionInput`<sup>Optional</sup> <a name="EnableRestrictionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.enableRestrictionInput"></a>

```go
func EnableRestrictionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedServices`<sup>Required</sup> <a name="AllowedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.allowedServices"></a>

```go
func AllowedServices() *[]*string
```

- *Type:* *[]*string

---

##### `EnableRestriction`<sup>Required</sup> <a name="EnableRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.enableRestriction"></a>

```go
func EnableRestriction() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices</a>

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetIdentities">ResetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetSourceRestriction">ResetSourceRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSources` <a name="PutSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.putSources"></a>

```go
func PutSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.putSources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIdentities` <a name="ResetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetIdentities"></a>

```go
func ResetIdentities()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetIdentityType"></a>

```go
func ResetIdentityType()
```

##### `ResetSourceRestriction` <a name="ResetSourceRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetSourceRestriction"></a>

```go
func ResetSourceRestriction()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetSources"></a>

```go
func ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identitiesInput">IdentitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.sourceRestrictionInput">SourceRestrictionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identities">Identities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.sourceRestriction">SourceRestriction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.sources"></a>

```go
func Sources() GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList</a>

---

##### `IdentitiesInput`<sup>Optional</sup> <a name="IdentitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identitiesInput"></a>

```go
func IdentitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identityTypeInput"></a>

```go
func IdentityTypeInput() *string
```

- *Type:* *string

---

##### `SourceRestrictionInput`<sup>Optional</sup> <a name="SourceRestrictionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.sourceRestrictionInput"></a>

```go
func SourceRestrictionInput() *string
```

- *Type:* *string

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `Identities`<sup>Required</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identities"></a>

```go
func Identities() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `SourceRestriction`<sup>Required</sup> <a name="SourceRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.sourceRestriction"></a>

```go
func SourceRestriction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```go
func ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors">PutMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors">ResetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMethodSelectors` <a name="PutMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors"></a>

```go
func PutMethodSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMethodSelectors` <a name="ResetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors"></a>

```go
func ResetMethodSelectors()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors">MethodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput">MethodSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodSelectors`<sup>Required</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors"></a>

```go
func MethodSelectors() GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList</a>

---

##### `MethodSelectorsInput`<sup>Optional</sup> <a name="MethodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```go
func MethodSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetExternalResources">ResetExternalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.putOperations"></a>

```go
func PutOperations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExternalResources` <a name="ResetExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetExternalResources"></a>

```go
func ResetExternalResources()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetOperations"></a>

```go
func ResetOperations()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.externalResourcesInput">ExternalResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.operationsInput">OperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.externalResources">ExternalResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.operations"></a>

```go
func Operations() GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList</a>

---

##### `ExternalResourcesInput`<sup>Optional</sup> <a name="ExternalResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.externalResourcesInput"></a>

```go
func ExternalResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.operationsInput"></a>

```go
func OperationsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalResources`<sup>Required</sup> <a name="ExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.externalResources"></a>

```go
func ExternalResources() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a>

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressFrom">PutEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressTo">PutEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resetEgressFrom">ResetEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resetEgressTo">ResetEgressTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgressFrom` <a name="PutEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressFrom"></a>

```go
func PutEgressFrom(value GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a>

---

##### `PutEgressTo` <a name="PutEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressTo"></a>

```go
func PutEgressTo(value GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a>

---

##### `ResetEgressFrom` <a name="ResetEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resetEgressFrom"></a>

```go
func ResetEgressFrom()
```

##### `ResetEgressTo` <a name="ResetEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resetEgressTo"></a>

```go
func ResetEgressTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressFrom">EgressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressTo">EgressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressFromInput">EgressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressToInput">EgressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EgressFrom`<sup>Required</sup> <a name="EgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressFrom"></a>

```go
func EgressFrom() GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference</a>

---

##### `EgressTo`<sup>Required</sup> <a name="EgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressTo"></a>

```go
func EgressTo() GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference</a>

---

##### `EgressFromInput`<sup>Optional</sup> <a name="EgressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressFromInput"></a>

```go
func EgressFromInput() GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a>

---

##### `EgressToInput`<sup>Optional</sup> <a name="EgressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressToInput"></a>

```go
func EgressToInput() GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetIdentities">ResetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSources` <a name="PutSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.putSources"></a>

```go
func PutSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.putSources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIdentities` <a name="ResetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetIdentities"></a>

```go
func ResetIdentities()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetIdentityType"></a>

```go
func ResetIdentityType()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetSources"></a>

```go
func ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identitiesInput">IdentitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identities">Identities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.sources"></a>

```go
func Sources() GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList</a>

---

##### `IdentitiesInput`<sup>Optional</sup> <a name="IdentitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identitiesInput"></a>

```go
func IdentitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identityTypeInput"></a>

```go
func IdentityTypeInput() *string
```

- *Type:* *string

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `Identities`<sup>Required</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identities"></a>

```go
func Identities() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```go
func ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors">PutMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors">ResetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMethodSelectors` <a name="PutMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors"></a>

```go
func PutMethodSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMethodSelectors` <a name="ResetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors"></a>

```go
func ResetMethodSelectors()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors">MethodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput">MethodSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodSelectors`<sup>Required</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors"></a>

```go
func MethodSelectors() GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList</a>

---

##### `MethodSelectorsInput`<sup>Optional</sup> <a name="MethodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput"></a>

```go
func MethodSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.putOperations"></a>

```go
func PutOperations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.putOperations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resetOperations"></a>

```go
func ResetOperations()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.operationsInput">OperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.operations"></a>

```go
func Operations() GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList</a>

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.operationsInput"></a>

```go
func OperationsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a>

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressFrom">PutIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressTo">PutIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resetIngressFrom">ResetIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resetIngressTo">ResetIngressTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIngressFrom` <a name="PutIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressFrom"></a>

```go
func PutIngressFrom(value GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a>

---

##### `PutIngressTo` <a name="PutIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressTo"></a>

```go
func PutIngressTo(value GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a>

---

##### `ResetIngressFrom` <a name="ResetIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resetIngressFrom"></a>

```go
func ResetIngressFrom()
```

##### `ResetIngressTo` <a name="ResetIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resetIngressTo"></a>

```go
func ResetIngressTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressFrom">IngressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressTo">IngressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressFromInput">IngressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressToInput">IngressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IngressFrom`<sup>Required</sup> <a name="IngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressFrom"></a>

```go
func IngressFrom() GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference</a>

---

##### `IngressTo`<sup>Required</sup> <a name="IngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressTo"></a>

```go
func IngressTo() GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference</a>

---

##### `IngressFromInput`<sup>Optional</sup> <a name="IngressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressFromInput"></a>

```go
func IngressFromInput() GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a>

---

##### `IngressToInput`<sup>Optional</sup> <a name="IngressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressToInput"></a>

```go
func IngressToInput() GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterStatusOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putEgressPolicies">PutEgressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putIngressPolicies">PutIngressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putVpcAccessibleServices">PutVpcAccessibleServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetEgressPolicies">ResetEgressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetIngressPolicies">ResetIngressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetRestrictedServices">ResetRestrictedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetVpcAccessibleServices">ResetVpcAccessibleServices</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgressPolicies` <a name="PutEgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putEgressPolicies"></a>

```go
func PutEgressPolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putEgressPolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIngressPolicies` <a name="PutIngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putIngressPolicies"></a>

```go
func PutIngressPolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putIngressPolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpcAccessibleServices` <a name="PutVpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putVpcAccessibleServices"></a>

```go
func PutVpcAccessibleServices(value GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putVpcAccessibleServices.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices</a>

---

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetAccessLevels"></a>

```go
func ResetAccessLevels()
```

##### `ResetEgressPolicies` <a name="ResetEgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetEgressPolicies"></a>

```go
func ResetEgressPolicies()
```

##### `ResetIngressPolicies` <a name="ResetIngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetIngressPolicies"></a>

```go
func ResetIngressPolicies()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetRestrictedServices` <a name="ResetRestrictedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetRestrictedServices"></a>

```go
func ResetRestrictedServices()
```

##### `ResetVpcAccessibleServices` <a name="ResetVpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetVpcAccessibleServices"></a>

```go
func ResetVpcAccessibleServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.egressPolicies">EgressPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.ingressPolicies">IngressPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.vpcAccessibleServices">VpcAccessibleServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.egressPoliciesInput">EgressPoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.ingressPoliciesInput">IngressPoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.restrictedServicesInput">RestrictedServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.vpcAccessibleServicesInput">VpcAccessibleServicesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.restrictedServices">RestrictedServices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EgressPolicies`<sup>Required</sup> <a name="EgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.egressPolicies"></a>

```go
func EgressPolicies() GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList</a>

---

##### `IngressPolicies`<sup>Required</sup> <a name="IngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.ingressPolicies"></a>

```go
func IngressPolicies() GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList</a>

---

##### `VpcAccessibleServices`<sup>Required</sup> <a name="VpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.vpcAccessibleServices"></a>

```go
func VpcAccessibleServices() GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference</a>

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.accessLevelsInput"></a>

```go
func AccessLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EgressPoliciesInput`<sup>Optional</sup> <a name="EgressPoliciesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.egressPoliciesInput"></a>

```go
func EgressPoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `IngressPoliciesInput`<sup>Optional</sup> <a name="IngressPoliciesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.ingressPoliciesInput"></a>

```go
func IngressPoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictedServicesInput`<sup>Optional</sup> <a name="RestrictedServicesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.restrictedServicesInput"></a>

```go
func RestrictedServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcAccessibleServicesInput`<sup>Optional</sup> <a name="VpcAccessibleServicesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.vpcAccessibleServicesInput"></a>

```go
func VpcAccessibleServicesInput() GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices</a>

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.accessLevels"></a>

```go
func AccessLevels() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictedServices`<sup>Required</sup> <a name="RestrictedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.restrictedServices"></a>

```go
func RestrictedServices() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a>

---


### GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resetAllowedServices">ResetAllowedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resetEnableRestriction">ResetEnableRestriction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedServices` <a name="ResetAllowedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resetAllowedServices"></a>

```go
func ResetAllowedServices()
```

##### `ResetEnableRestriction` <a name="ResetEnableRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resetEnableRestriction"></a>

```go
func ResetEnableRestriction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.allowedServicesInput">AllowedServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.enableRestrictionInput">EnableRestrictionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.allowedServices">AllowedServices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.enableRestriction">EnableRestriction</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedServicesInput`<sup>Optional</sup> <a name="AllowedServicesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.allowedServicesInput"></a>

```go
func AllowedServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableRestrictionInput`<sup>Optional</sup> <a name="EnableRestrictionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.enableRestrictionInput"></a>

```go
func EnableRestrictionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedServices`<sup>Required</sup> <a name="AllowedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.allowedServices"></a>

```go
func AllowedServices() *[]*string
```

- *Type:* *[]*string

---

##### `EnableRestriction`<sup>Required</sup> <a name="EnableRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.enableRestriction"></a>

```go
func EnableRestriction() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices</a>

---


### GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference <a name="GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanagerserviceperimeter"

googleaccesscontextmanagerserviceperimeter.NewGoogleAccessContextManagerServicePerimeterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



