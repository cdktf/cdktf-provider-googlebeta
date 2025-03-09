# `googleAccessContextManagerAccessLevel` Submodule <a name="`googleAccessContextManagerAccessLevel` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerAccessLevel <a name="GoogleAccessContextManagerAccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level google_access_context_manager_access_level}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.NewGoogleAccessContextManagerAccessLevel(scope Construct, id *string, config GoogleAccessContextManagerAccessLevelConfig) GoogleAccessContextManagerAccessLevel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig">GoogleAccessContextManagerAccessLevelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig">GoogleAccessContextManagerAccessLevelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putBasic">PutBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetBasic">ResetBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBasic` <a name="PutBasic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putBasic"></a>

```go
func PutBasic(value GoogleAccessContextManagerAccessLevelBasic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic">GoogleAccessContextManagerAccessLevelBasic</a>

---

##### `PutCustom` <a name="PutCustom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putCustom"></a>

```go
func PutCustom(value GoogleAccessContextManagerAccessLevelCustom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom">GoogleAccessContextManagerAccessLevelCustom</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAccessContextManagerAccessLevelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts">GoogleAccessContextManagerAccessLevelTimeouts</a>

---

##### `ResetBasic` <a name="ResetBasic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetBasic"></a>

```go
func ResetBasic()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetCustom"></a>

```go
func ResetCustom()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerAccessLevel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.GoogleAccessContextManagerAccessLevel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.GoogleAccessContextManagerAccessLevel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.GoogleAccessContextManagerAccessLevel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.GoogleAccessContextManagerAccessLevel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleAccessContextManagerAccessLevel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleAccessContextManagerAccessLevel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleAccessContextManagerAccessLevel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerAccessLevel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.basic">Basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference">GoogleAccessContextManagerAccessLevelBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.custom">Custom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference">GoogleAccessContextManagerAccessLevelCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference">GoogleAccessContextManagerAccessLevelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.basicInput">BasicInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic">GoogleAccessContextManagerAccessLevelBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.customInput">CustomInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom">GoogleAccessContextManagerAccessLevelCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.title">Title</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Basic`<sup>Required</sup> <a name="Basic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.basic"></a>

```go
func Basic() GoogleAccessContextManagerAccessLevelBasicOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference">GoogleAccessContextManagerAccessLevelBasicOutputReference</a>

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.custom"></a>

```go
func Custom() GoogleAccessContextManagerAccessLevelCustomOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference">GoogleAccessContextManagerAccessLevelCustomOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.timeouts"></a>

```go
func Timeouts() GoogleAccessContextManagerAccessLevelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference">GoogleAccessContextManagerAccessLevelTimeoutsOutputReference</a>

---

##### `BasicInput`<sup>Optional</sup> <a name="BasicInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.basicInput"></a>

```go
func BasicInput() GoogleAccessContextManagerAccessLevelBasic
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic">GoogleAccessContextManagerAccessLevelBasic</a>

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.customInput"></a>

```go
func CustomInput() GoogleAccessContextManagerAccessLevelCustom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom">GoogleAccessContextManagerAccessLevelCustom</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerAccessLevelBasic <a name="GoogleAccessContextManagerAccessLevelBasic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

&googleaccesscontextmanageraccesslevel.GoogleAccessContextManagerAccessLevelBasic {
	Conditions: interface{},
	CombiningFunction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic.property.combiningFunction">CombiningFunction</a></code> | <code>*string</code> | How the conditions list should be combined to determine if a request is granted this AccessLevel. |

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#conditions GoogleAccessContextManagerAccessLevel#conditions}

---

##### `CombiningFunction`<sup>Optional</sup> <a name="CombiningFunction" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic.property.combiningFunction"></a>

```go
CombiningFunction *string
```

- *Type:* *string

How the conditions list should be combined to determine if a request is granted this AccessLevel.

If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#combining_function GoogleAccessContextManagerAccessLevel#combining_function}

---

### GoogleAccessContextManagerAccessLevelBasicConditions <a name="GoogleAccessContextManagerAccessLevelBasicConditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

&googleaccesscontextmanageraccesslevel.GoogleAccessContextManagerAccessLevelBasicConditions {
	DevicePolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy,
	IpSubnetworks: *[]*string,
	Members: *[]*string,
	Negate: interface{},
	Regions: *[]*string,
	RequiredAccessLevels: *[]*string,
	VpcNetworkSources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.devicePolicy">DevicePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.ipSubnetworks">IpSubnetworks</a></code> | <code>*[]*string</code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.members">Members</a></code> | <code>*[]*string</code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.negate">Negate</a></code> | <code>interface{}</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.regions">Regions</a></code> | <code>*[]*string</code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.requiredAccessLevels">RequiredAccessLevels</a></code> | <code>*[]*string</code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.vpcNetworkSources">VpcNetworkSources</a></code> | <code>interface{}</code> | vpc_network_sources block. |

---

##### `DevicePolicy`<sup>Optional</sup> <a name="DevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.devicePolicy"></a>

```go
DevicePolicy GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#device_policy GoogleAccessContextManagerAccessLevel#device_policy}

---

##### `IpSubnetworks`<sup>Optional</sup> <a name="IpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.ipSubnetworks"></a>

```go
IpSubnetworks *[]*string
```

- *Type:* *[]*string

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#ip_subnetworks GoogleAccessContextManagerAccessLevel#ip_subnetworks}

---

##### `Members`<sup>Optional</sup> <a name="Members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#members GoogleAccessContextManagerAccessLevel#members}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.negate"></a>

```go
Negate interface{}
```

- *Type:* interface{}

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#negate GoogleAccessContextManagerAccessLevel#negate}

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#regions GoogleAccessContextManagerAccessLevel#regions}

---

##### `RequiredAccessLevels`<sup>Optional</sup> <a name="RequiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.requiredAccessLevels"></a>

```go
RequiredAccessLevels *[]*string
```

- *Type:* *[]*string

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#required_access_levels GoogleAccessContextManagerAccessLevel#required_access_levels}

---

##### `VpcNetworkSources`<sup>Optional</sup> <a name="VpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.vpcNetworkSources"></a>

```go
VpcNetworkSources interface{}
```

- *Type:* interface{}

vpc_network_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#vpc_network_sources GoogleAccessContextManagerAccessLevel#vpc_network_sources}

---

### GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy <a name="GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

&googleaccesscontextmanageraccesslevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy {
	AllowedDeviceManagementLevels: *[]*string,
	AllowedEncryptionStatuses: *[]*string,
	OsConstraints: interface{},
	RequireAdminApproval: interface{},
	RequireCorpOwned: interface{},
	RequireScreenLock: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels">AllowedDeviceManagementLevels</a></code> | <code>*[]*string</code> | A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedEncryptionStatuses">AllowedEncryptionStatuses</a></code> | <code>*[]*string</code> | A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.osConstraints">OsConstraints</a></code> | <code>interface{}</code> | os_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireAdminApproval">RequireAdminApproval</a></code> | <code>interface{}</code> | Whether the device needs to be approved by the customer admin. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireCorpOwned">RequireCorpOwned</a></code> | <code>interface{}</code> | Whether the device needs to be corp owned. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireScreenLock">RequireScreenLock</a></code> | <code>interface{}</code> | Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false. |

---

##### `AllowedDeviceManagementLevels`<sup>Optional</sup> <a name="AllowedDeviceManagementLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels"></a>

```go
AllowedDeviceManagementLevels *[]*string
```

- *Type:* *[]*string

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#allowed_device_management_levels GoogleAccessContextManagerAccessLevel#allowed_device_management_levels}

---

##### `AllowedEncryptionStatuses`<sup>Optional</sup> <a name="AllowedEncryptionStatuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedEncryptionStatuses"></a>

```go
AllowedEncryptionStatuses *[]*string
```

- *Type:* *[]*string

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#allowed_encryption_statuses GoogleAccessContextManagerAccessLevel#allowed_encryption_statuses}

---

##### `OsConstraints`<sup>Optional</sup> <a name="OsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.osConstraints"></a>

```go
OsConstraints interface{}
```

- *Type:* interface{}

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#os_constraints GoogleAccessContextManagerAccessLevel#os_constraints}

---

##### `RequireAdminApproval`<sup>Optional</sup> <a name="RequireAdminApproval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireAdminApproval"></a>

```go
RequireAdminApproval interface{}
```

- *Type:* interface{}

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#require_admin_approval GoogleAccessContextManagerAccessLevel#require_admin_approval}

---

##### `RequireCorpOwned`<sup>Optional</sup> <a name="RequireCorpOwned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireCorpOwned"></a>

```go
RequireCorpOwned interface{}
```

- *Type:* interface{}

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#require_corp_owned GoogleAccessContextManagerAccessLevel#require_corp_owned}

---

##### `RequireScreenLock`<sup>Optional</sup> <a name="RequireScreenLock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireScreenLock"></a>

```go
RequireScreenLock interface{}
```

- *Type:* interface{}

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#require_screen_lock GoogleAccessContextManagerAccessLevel#require_screen_lock}

---

### GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints <a name="GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

&googleaccesscontextmanageraccesslevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints {
	OsType: *string,
	MinimumVersion: *string,
	RequireVerifiedChromeOs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.osType">OsType</a></code> | <code>*string</code> | The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.minimumVersion">MinimumVersion</a></code> | <code>*string</code> | The minimum allowed OS version. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.requireVerifiedChromeOs">RequireVerifiedChromeOs</a></code> | <code>interface{}</code> | If you specify DESKTOP_CHROME_OS for osType, you can optionally include requireVerifiedChromeOs to require Chrome Verified Access. |

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.osType"></a>

```go
OsType *string
```

- *Type:* *string

The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#os_type GoogleAccessContextManagerAccessLevel#os_type}

---

##### `MinimumVersion`<sup>Optional</sup> <a name="MinimumVersion" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.minimumVersion"></a>

```go
MinimumVersion *string
```

- *Type:* *string

The minimum allowed OS version.

If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#minimum_version GoogleAccessContextManagerAccessLevel#minimum_version}

---

##### `RequireVerifiedChromeOs`<sup>Optional</sup> <a name="RequireVerifiedChromeOs" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.requireVerifiedChromeOs"></a>

```go
RequireVerifiedChromeOs interface{}
```

- *Type:* interface{}

If you specify DESKTOP_CHROME_OS for osType, you can optionally include requireVerifiedChromeOs to require Chrome Verified Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#require_verified_chrome_os GoogleAccessContextManagerAccessLevel#require_verified_chrome_os}

---

### GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources <a name="GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

&googleaccesscontextmanageraccesslevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources {
	VpcSubnetwork: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources.property.vpcSubnetwork">VpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | vpc_subnetwork block. |

---

##### `VpcSubnetwork`<sup>Optional</sup> <a name="VpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources.property.vpcSubnetwork"></a>

```go
VpcSubnetwork GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

vpc_subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#vpc_subnetwork GoogleAccessContextManagerAccessLevel#vpc_subnetwork}

---

### GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork <a name="GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

&googleaccesscontextmanageraccesslevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork {
	Network: *string,
	VpcIpSubnetworks: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network">Network</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks">VpcIpSubnetworks</a></code> | <code>*[]*string</code> | A list of CIDR block IP subnetwork specification. Must be IPv4. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network"></a>

```go
Network *string
```

- *Type:* *string

Required.

Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#network GoogleAccessContextManagerAccessLevel#network}

---

##### `VpcIpSubnetworks`<sup>Optional</sup> <a name="VpcIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks"></a>

```go
VpcIpSubnetworks *[]*string
```

- *Type:* *[]*string

A list of CIDR block IP subnetwork specification. Must be IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#vpc_ip_subnetworks GoogleAccessContextManagerAccessLevel#vpc_ip_subnetworks}

---

### GoogleAccessContextManagerAccessLevelConfig <a name="GoogleAccessContextManagerAccessLevelConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

&googleaccesscontextmanageraccesslevel.GoogleAccessContextManagerAccessLevelConfig {
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
	Basic: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic,
	Custom: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.name">Name</a></code> | <code>*string</code> | Resource name for the Access Level. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.parent">Parent</a></code> | <code>*string</code> | The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.title">Title</a></code> | <code>*string</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.basic">Basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic">GoogleAccessContextManagerAccessLevelBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.custom">Custom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom">GoogleAccessContextManagerAccessLevelCustom</a></code> | custom block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.description">Description</a></code> | <code>*string</code> | Description of the AccessLevel and its use. Does not affect behavior. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#id GoogleAccessContextManagerAccessLevel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts">GoogleAccessContextManagerAccessLevelTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Resource name for the Access Level.

The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#name GoogleAccessContextManagerAccessLevel#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#parent GoogleAccessContextManagerAccessLevel#parent}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#title GoogleAccessContextManagerAccessLevel#title}

---

##### `Basic`<sup>Optional</sup> <a name="Basic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.basic"></a>

```go
Basic GoogleAccessContextManagerAccessLevelBasic
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic">GoogleAccessContextManagerAccessLevelBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#basic GoogleAccessContextManagerAccessLevel#basic}

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.custom"></a>

```go
Custom GoogleAccessContextManagerAccessLevelCustom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom">GoogleAccessContextManagerAccessLevelCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#custom GoogleAccessContextManagerAccessLevel#custom}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the AccessLevel and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#description GoogleAccessContextManagerAccessLevel#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#id GoogleAccessContextManagerAccessLevel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.timeouts"></a>

```go
Timeouts GoogleAccessContextManagerAccessLevelTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts">GoogleAccessContextManagerAccessLevelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#timeouts GoogleAccessContextManagerAccessLevel#timeouts}

---

### GoogleAccessContextManagerAccessLevelCustom <a name="GoogleAccessContextManagerAccessLevelCustom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

&googleaccesscontextmanageraccesslevel.GoogleAccessContextManagerAccessLevelCustom {
	Expr: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr">GoogleAccessContextManagerAccessLevelCustomExpr</a></code> | expr block. |

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom.property.expr"></a>

```go
Expr GoogleAccessContextManagerAccessLevelCustomExpr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr">GoogleAccessContextManagerAccessLevelCustomExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#expr GoogleAccessContextManagerAccessLevel#expr}

---

### GoogleAccessContextManagerAccessLevelCustomExpr <a name="GoogleAccessContextManagerAccessLevelCustomExpr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

&googleaccesscontextmanageraccesslevel.GoogleAccessContextManagerAccessLevelCustomExpr {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#expression GoogleAccessContextManagerAccessLevel#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#description GoogleAccessContextManagerAccessLevel#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#location GoogleAccessContextManagerAccessLevel#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#title GoogleAccessContextManagerAccessLevel#title}

---

### GoogleAccessContextManagerAccessLevelTimeouts <a name="GoogleAccessContextManagerAccessLevelTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

&googleaccesscontextmanageraccesslevel.GoogleAccessContextManagerAccessLevelTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#create GoogleAccessContextManagerAccessLevel#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#delete GoogleAccessContextManagerAccessLevel#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#update GoogleAccessContextManagerAccessLevel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#create GoogleAccessContextManagerAccessLevel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#delete GoogleAccessContextManagerAccessLevel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_access_level#update GoogleAccessContextManagerAccessLevel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList <a name="GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.NewGoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference <a name="GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.NewGoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion">ResetMinimumVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetRequireVerifiedChromeOs">ResetRequireVerifiedChromeOs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinimumVersion` <a name="ResetMinimumVersion" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion"></a>

```go
func ResetMinimumVersion()
```

##### `ResetRequireVerifiedChromeOs` <a name="ResetRequireVerifiedChromeOs" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetRequireVerifiedChromeOs"></a>

```go
func ResetRequireVerifiedChromeOs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput">MinimumVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput">OsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOsInput">RequireVerifiedChromeOsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion">MinimumVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOs">RequireVerifiedChromeOs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MinimumVersionInput`<sup>Optional</sup> <a name="MinimumVersionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput"></a>

```go
func MinimumVersionInput() *string
```

- *Type:* *string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput"></a>

```go
func OsTypeInput() *string
```

- *Type:* *string

---

##### `RequireVerifiedChromeOsInput`<sup>Optional</sup> <a name="RequireVerifiedChromeOsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOsInput"></a>

```go
func RequireVerifiedChromeOsInput() interface{}
```

- *Type:* interface{}

---

##### `MinimumVersion`<sup>Required</sup> <a name="MinimumVersion" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion"></a>

```go
func MinimumVersion() *string
```

- *Type:* *string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `RequireVerifiedChromeOs`<sup>Required</sup> <a name="RequireVerifiedChromeOs" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOs"></a>

```go
func RequireVerifiedChromeOs() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference <a name="GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.NewGoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.putOsConstraints">PutOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels">ResetAllowedDeviceManagementLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses">ResetAllowedEncryptionStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetOsConstraints">ResetOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval">ResetRequireAdminApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned">ResetRequireCorpOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock">ResetRequireScreenLock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOsConstraints` <a name="PutOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.putOsConstraints"></a>

```go
func PutOsConstraints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.putOsConstraints.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedDeviceManagementLevels` <a name="ResetAllowedDeviceManagementLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels"></a>

```go
func ResetAllowedDeviceManagementLevels()
```

##### `ResetAllowedEncryptionStatuses` <a name="ResetAllowedEncryptionStatuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses"></a>

```go
func ResetAllowedEncryptionStatuses()
```

##### `ResetOsConstraints` <a name="ResetOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetOsConstraints"></a>

```go
func ResetOsConstraints()
```

##### `ResetRequireAdminApproval` <a name="ResetRequireAdminApproval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval"></a>

```go
func ResetRequireAdminApproval()
```

##### `ResetRequireCorpOwned` <a name="ResetRequireCorpOwned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned"></a>

```go
func ResetRequireCorpOwned()
```

##### `ResetRequireScreenLock` <a name="ResetRequireScreenLock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock"></a>

```go
func ResetRequireScreenLock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraints">OsConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput">AllowedDeviceManagementLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput">AllowedEncryptionStatusesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput">OsConstraintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput">RequireAdminApprovalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput">RequireCorpOwnedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput">RequireScreenLockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels">AllowedDeviceManagementLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses">AllowedEncryptionStatuses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval">RequireAdminApproval</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned">RequireCorpOwned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLock">RequireScreenLock</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OsConstraints`<sup>Required</sup> <a name="OsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraints"></a>

```go
func OsConstraints() GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList</a>

---

##### `AllowedDeviceManagementLevelsInput`<sup>Optional</sup> <a name="AllowedDeviceManagementLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput"></a>

```go
func AllowedDeviceManagementLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedEncryptionStatusesInput`<sup>Optional</sup> <a name="AllowedEncryptionStatusesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput"></a>

```go
func AllowedEncryptionStatusesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OsConstraintsInput`<sup>Optional</sup> <a name="OsConstraintsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput"></a>

```go
func OsConstraintsInput() interface{}
```

- *Type:* interface{}

---

##### `RequireAdminApprovalInput`<sup>Optional</sup> <a name="RequireAdminApprovalInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput"></a>

```go
func RequireAdminApprovalInput() interface{}
```

- *Type:* interface{}

---

##### `RequireCorpOwnedInput`<sup>Optional</sup> <a name="RequireCorpOwnedInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput"></a>

```go
func RequireCorpOwnedInput() interface{}
```

- *Type:* interface{}

---

##### `RequireScreenLockInput`<sup>Optional</sup> <a name="RequireScreenLockInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput"></a>

```go
func RequireScreenLockInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedDeviceManagementLevels`<sup>Required</sup> <a name="AllowedDeviceManagementLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels"></a>

```go
func AllowedDeviceManagementLevels() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedEncryptionStatuses`<sup>Required</sup> <a name="AllowedEncryptionStatuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses"></a>

```go
func AllowedEncryptionStatuses() *[]*string
```

- *Type:* *[]*string

---

##### `RequireAdminApproval`<sup>Required</sup> <a name="RequireAdminApproval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval"></a>

```go
func RequireAdminApproval() interface{}
```

- *Type:* interface{}

---

##### `RequireCorpOwned`<sup>Required</sup> <a name="RequireCorpOwned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned"></a>

```go
func RequireCorpOwned() interface{}
```

- *Type:* interface{}

---

##### `RequireScreenLock`<sup>Required</sup> <a name="RequireScreenLock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLock"></a>

```go
func RequireScreenLock() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy</a>

---


### GoogleAccessContextManagerAccessLevelBasicConditionsList <a name="GoogleAccessContextManagerAccessLevelBasicConditionsList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.NewGoogleAccessContextManagerAccessLevelBasicConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerAccessLevelBasicConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference <a name="GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.NewGoogleAccessContextManagerAccessLevelBasicConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy">PutDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.putVpcNetworkSources">PutVpcNetworkSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetDevicePolicy">ResetDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetIpSubnetworks">ResetIpSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetMembers">ResetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetRequiredAccessLevels">ResetRequiredAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetVpcNetworkSources">ResetVpcNetworkSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDevicePolicy` <a name="PutDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy"></a>

```go
func PutDevicePolicy(value GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy</a>

---

##### `PutVpcNetworkSources` <a name="PutVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.putVpcNetworkSources"></a>

```go
func PutVpcNetworkSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.putVpcNetworkSources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDevicePolicy` <a name="ResetDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetDevicePolicy"></a>

```go
func ResetDevicePolicy()
```

##### `ResetIpSubnetworks` <a name="ResetIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetIpSubnetworks"></a>

```go
func ResetIpSubnetworks()
```

##### `ResetMembers` <a name="ResetMembers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetMembers"></a>

```go
func ResetMembers()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetNegate"></a>

```go
func ResetNegate()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetRegions"></a>

```go
func ResetRegions()
```

##### `ResetRequiredAccessLevels` <a name="ResetRequiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetRequiredAccessLevels"></a>

```go
func ResetRequiredAccessLevels()
```

##### `ResetVpcNetworkSources` <a name="ResetVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetVpcNetworkSources"></a>

```go
func ResetVpcNetworkSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicy">DevicePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSources">VpcNetworkSources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicyInput">DevicePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworksInput">IpSubnetworksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.negateInput">NegateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevelsInput">RequiredAccessLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSourcesInput">VpcNetworkSourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworks">IpSubnetworks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.negate">Negate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevels">RequiredAccessLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DevicePolicy`<sup>Required</sup> <a name="DevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicy"></a>

```go
func DevicePolicy() GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference</a>

---

##### `VpcNetworkSources`<sup>Required</sup> <a name="VpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSources"></a>

```go
func VpcNetworkSources() GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList</a>

---

##### `DevicePolicyInput`<sup>Optional</sup> <a name="DevicePolicyInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicyInput"></a>

```go
func DevicePolicyInput() GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy</a>

---

##### `IpSubnetworksInput`<sup>Optional</sup> <a name="IpSubnetworksInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworksInput"></a>

```go
func IpSubnetworksInput() *[]*string
```

- *Type:* *[]*string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.negateInput"></a>

```go
func NegateInput() interface{}
```

- *Type:* interface{}

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequiredAccessLevelsInput`<sup>Optional</sup> <a name="RequiredAccessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevelsInput"></a>

```go
func RequiredAccessLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcNetworkSourcesInput`<sup>Optional</sup> <a name="VpcNetworkSourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSourcesInput"></a>

```go
func VpcNetworkSourcesInput() interface{}
```

- *Type:* interface{}

---

##### `IpSubnetworks`<sup>Required</sup> <a name="IpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworks"></a>

```go
func IpSubnetworks() *[]*string
```

- *Type:* *[]*string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.negate"></a>

```go
func Negate() interface{}
```

- *Type:* interface{}

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `RequiredAccessLevels`<sup>Required</sup> <a name="RequiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevels"></a>

```go
func RequiredAccessLevels() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList <a name="GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.NewGoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference <a name="GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.NewGoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork">PutVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork">ResetVpcSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcSubnetwork` <a name="PutVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork"></a>

```go
func PutVpcSubnetwork(value GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---

##### `ResetVpcSubnetwork` <a name="ResetVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork"></a>

```go
func ResetVpcSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork">VpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput">VpcSubnetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcSubnetwork`<sup>Required</sup> <a name="VpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork"></a>

```go
func VpcSubnetwork() GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a>

---

##### `VpcSubnetworkInput`<sup>Optional</sup> <a name="VpcSubnetworkInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput"></a>

```go
func VpcSubnetworkInput() GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference <a name="GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.NewGoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks">ResetVpcIpSubnetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcIpSubnetworks` <a name="ResetVpcIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks"></a>

```go
func ResetVpcIpSubnetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput">VpcIpSubnetworksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks">VpcIpSubnetworks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `VpcIpSubnetworksInput`<sup>Optional</sup> <a name="VpcIpSubnetworksInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput"></a>

```go
func VpcIpSubnetworksInput() *[]*string
```

- *Type:* *[]*string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `VpcIpSubnetworks`<sup>Required</sup> <a name="VpcIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks"></a>

```go
func VpcIpSubnetworks() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---


### GoogleAccessContextManagerAccessLevelBasicOutputReference <a name="GoogleAccessContextManagerAccessLevelBasicOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.NewGoogleAccessContextManagerAccessLevelBasicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerAccessLevelBasicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.resetCombiningFunction">ResetCombiningFunction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCombiningFunction` <a name="ResetCombiningFunction" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.resetCombiningFunction"></a>

```go
func ResetCombiningFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList">GoogleAccessContextManagerAccessLevelBasicConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.combiningFunctionInput">CombiningFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.combiningFunction">CombiningFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic">GoogleAccessContextManagerAccessLevelBasic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.conditions"></a>

```go
func Conditions() GoogleAccessContextManagerAccessLevelBasicConditionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList">GoogleAccessContextManagerAccessLevelBasicConditionsList</a>

---

##### `CombiningFunctionInput`<sup>Optional</sup> <a name="CombiningFunctionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.combiningFunctionInput"></a>

```go
func CombiningFunctionInput() *string
```

- *Type:* *string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `CombiningFunction`<sup>Required</sup> <a name="CombiningFunction" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.combiningFunction"></a>

```go
func CombiningFunction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerAccessLevelBasic
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic">GoogleAccessContextManagerAccessLevelBasic</a>

---


### GoogleAccessContextManagerAccessLevelCustomExprOutputReference <a name="GoogleAccessContextManagerAccessLevelCustomExprOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.NewGoogleAccessContextManagerAccessLevelCustomExprOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerAccessLevelCustomExprOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr">GoogleAccessContextManagerAccessLevelCustomExpr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerAccessLevelCustomExpr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr">GoogleAccessContextManagerAccessLevelCustomExpr</a>

---


### GoogleAccessContextManagerAccessLevelCustomOutputReference <a name="GoogleAccessContextManagerAccessLevelCustomOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.NewGoogleAccessContextManagerAccessLevelCustomOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerAccessLevelCustomOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.putExpr">PutExpr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpr` <a name="PutExpr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.putExpr"></a>

```go
func PutExpr(value GoogleAccessContextManagerAccessLevelCustomExpr)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr">GoogleAccessContextManagerAccessLevelCustomExpr</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference">GoogleAccessContextManagerAccessLevelCustomExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.exprInput">ExprInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr">GoogleAccessContextManagerAccessLevelCustomExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom">GoogleAccessContextManagerAccessLevelCustom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.expr"></a>

```go
func Expr() GoogleAccessContextManagerAccessLevelCustomExprOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference">GoogleAccessContextManagerAccessLevelCustomExprOutputReference</a>

---

##### `ExprInput`<sup>Optional</sup> <a name="ExprInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.exprInput"></a>

```go
func ExprInput() GoogleAccessContextManagerAccessLevelCustomExpr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr">GoogleAccessContextManagerAccessLevelCustomExpr</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerAccessLevelCustom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom">GoogleAccessContextManagerAccessLevelCustom</a>

---


### GoogleAccessContextManagerAccessLevelTimeoutsOutputReference <a name="GoogleAccessContextManagerAccessLevelTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleaccesscontextmanageraccesslevel"

googleaccesscontextmanageraccesslevel.NewGoogleAccessContextManagerAccessLevelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerAccessLevelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



