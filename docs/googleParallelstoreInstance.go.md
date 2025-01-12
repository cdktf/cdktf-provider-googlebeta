# `googleParallelstoreInstance` Submodule <a name="`googleParallelstoreInstance` Submodule" id="@cdktf/provider-google-beta.googleParallelstoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleParallelstoreInstance <a name="GoogleParallelstoreInstance" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance google_parallelstore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparallelstoreinstance"

googleparallelstoreinstance.NewGoogleParallelstoreInstance(scope Construct, id *string, config GoogleParallelstoreInstanceConfig) GoogleParallelstoreInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig">GoogleParallelstoreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig">GoogleParallelstoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDirectoryStripeLevel">ResetDirectoryStripeLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetFileStripeLevel">ResetFileStripeLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetReservedIpRange">ResetReservedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.putTimeouts"></a>

```go
func PutTimeouts(value GoogleParallelstoreInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a>

---

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDeploymentType"></a>

```go
func ResetDeploymentType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDirectoryStripeLevel` <a name="ResetDirectoryStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetDirectoryStripeLevel"></a>

```go
func ResetDirectoryStripeLevel()
```

##### `ResetFileStripeLevel` <a name="ResetFileStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetFileStripeLevel"></a>

```go
func ResetFileStripeLevel()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReservedIpRange` <a name="ResetReservedIpRange" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetReservedIpRange"></a>

```go
func ResetReservedIpRange()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleParallelstoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparallelstoreinstance"

googleparallelstoreinstance.GoogleParallelstoreInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparallelstoreinstance"

googleparallelstoreinstance.GoogleParallelstoreInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparallelstoreinstance"

googleparallelstoreinstance.GoogleParallelstoreInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparallelstoreinstance"

googleparallelstoreinstance.GoogleParallelstoreInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleParallelstoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleParallelstoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleParallelstoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleParallelstoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.accessPoints">AccessPoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.daosVersion">DaosVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.effectiveReservedIpRange">EffectiveReservedIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference">GoogleParallelstoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.capacityGibInput">CapacityGibInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.directoryStripeLevelInput">DirectoryStripeLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fileStripeLevelInput">FileStripeLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.reservedIpRangeInput">ReservedIpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.capacityGib">CapacityGib</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.directoryStripeLevel">DirectoryStripeLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fileStripeLevel">FileStripeLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.reservedIpRange">ReservedIpRange</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessPoints`<sup>Required</sup> <a name="AccessPoints" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.accessPoints"></a>

```go
func AccessPoints() *[]*string
```

- *Type:* *[]*string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DaosVersion`<sup>Required</sup> <a name="DaosVersion" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.daosVersion"></a>

```go
func DaosVersion() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveReservedIpRange`<sup>Required</sup> <a name="EffectiveReservedIpRange" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.effectiveReservedIpRange"></a>

```go
func EffectiveReservedIpRange() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.timeouts"></a>

```go
func Timeouts() GoogleParallelstoreInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference">GoogleParallelstoreInstanceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CapacityGibInput`<sup>Optional</sup> <a name="CapacityGibInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.capacityGibInput"></a>

```go
func CapacityGibInput() *string
```

- *Type:* *string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.deploymentTypeInput"></a>

```go
func DeploymentTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DirectoryStripeLevelInput`<sup>Optional</sup> <a name="DirectoryStripeLevelInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.directoryStripeLevelInput"></a>

```go
func DirectoryStripeLevelInput() *string
```

- *Type:* *string

---

##### `FileStripeLevelInput`<sup>Optional</sup> <a name="FileStripeLevelInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fileStripeLevelInput"></a>

```go
func FileStripeLevelInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReservedIpRangeInput`<sup>Optional</sup> <a name="ReservedIpRangeInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.reservedIpRangeInput"></a>

```go
func ReservedIpRangeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.capacityGib"></a>

```go
func CapacityGib() *string
```

- *Type:* *string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DirectoryStripeLevel`<sup>Required</sup> <a name="DirectoryStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.directoryStripeLevel"></a>

```go
func DirectoryStripeLevel() *string
```

- *Type:* *string

---

##### `FileStripeLevel`<sup>Required</sup> <a name="FileStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.fileStripeLevel"></a>

```go
func FileStripeLevel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReservedIpRange`<sup>Required</sup> <a name="ReservedIpRange" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.reservedIpRange"></a>

```go
func ReservedIpRange() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleParallelstoreInstanceConfig <a name="GoogleParallelstoreInstanceConfig" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparallelstoreinstance"

&googleparallelstoreinstance.GoogleParallelstoreInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CapacityGib: *string,
	InstanceId: *string,
	Location: *string,
	DeploymentType: *string,
	Description: *string,
	DirectoryStripeLevel: *string,
	FileStripeLevel: *string,
	Id: *string,
	Labels: *map[string]*string,
	Network: *string,
	Project: *string,
	ReservedIpRange: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.capacityGib">CapacityGib</a></code> | <code>*string</code> | Required. Immutable. Storage capacity of Parallelstore instance in Gibibytes (GiB). |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | The logical name of the Parallelstore instance in the user project with the following restrictions:   * Must contain only lowercase letters, numbers, and hyphens. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.location">Location</a></code> | <code>*string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | Parallelstore Instance deployment type.   Possible values:   DEPLOYMENT_TYPE_UNSPECIFIED   SCRATCH   PERSISTENT. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.description">Description</a></code> | <code>*string</code> | The description of the instance. 2048 characters or less. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.directoryStripeLevel">DirectoryStripeLevel</a></code> | <code>*string</code> | Stripe level for directories. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.fileStripeLevel">FileStripeLevel</a></code> | <code>*string</code> | Stripe level for files. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#id GoogleParallelstoreInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.network">Network</a></code> | <code>*string</code> | Immutable. The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#project GoogleParallelstoreInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.reservedIpRange">ReservedIpRange</a></code> | <code>*string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.capacityGib"></a>

```go
CapacityGib *string
```

- *Type:* *string

Required. Immutable. Storage capacity of Parallelstore instance in Gibibytes (GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#capacity_gib GoogleParallelstoreInstance#capacity_gib}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

The logical name of the Parallelstore instance in the user project with the following restrictions:   * Must contain only lowercase letters, numbers, and hyphens.

* Must start with a letter.

  * Must be between 1-63 characters.
  * Must end with a number or a letter.
  * Must be unique within the customer project/ location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#instance_id GoogleParallelstoreInstance#instance_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#location GoogleParallelstoreInstance#location}

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.deploymentType"></a>

```go
DeploymentType *string
```

- *Type:* *string

Parallelstore Instance deployment type.   Possible values:   DEPLOYMENT_TYPE_UNSPECIFIED   SCRATCH   PERSISTENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#deployment_type GoogleParallelstoreInstance#deployment_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the instance. 2048 characters or less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#description GoogleParallelstoreInstance#description}

---

##### `DirectoryStripeLevel`<sup>Optional</sup> <a name="DirectoryStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.directoryStripeLevel"></a>

```go
DirectoryStripeLevel *string
```

- *Type:* *string

Stripe level for directories.

MIN when directory has a small number of files.
MAX when directory has a large number of files.
Possible values:
DIRECTORY_STRIPE_LEVEL_UNSPECIFIED
DIRECTORY_STRIPE_LEVEL_MIN
DIRECTORY_STRIPE_LEVEL_BALANCED
DIRECTORY_STRIPE_LEVEL_MAX

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#directory_stripe_level GoogleParallelstoreInstance#directory_stripe_level}

---

##### `FileStripeLevel`<sup>Optional</sup> <a name="FileStripeLevel" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.fileStripeLevel"></a>

```go
FileStripeLevel *string
```

- *Type:* *string

Stripe level for files.

MIN better suited for small size files.
MAX higher throughput performance for larger files.
Possible values:
FILE_STRIPE_LEVEL_UNSPECIFIED
FILE_STRIPE_LEVEL_MIN
FILE_STRIPE_LEVEL_BALANCED
FILE_STRIPE_LEVEL_MAX

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#file_stripe_level GoogleParallelstoreInstance#file_stripe_level}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#id GoogleParallelstoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies.

Cloud Labels can be used to filter collections
of resources. They can be used to control how resource metrics are aggregated.
And they can be used as arguments to policy management rules (e.g. route, firewall,
load balancing, etc.).

* Label keys must be between 1 and 63 characters long and must conform to
  the following regular expression: 'a-z{0,62}'.
* Label values must be between 0 and 63 characters long and must conform
  to the regular expression '[a-z0-9_-]{0,63}'.
* No more than 64 labels can be associated with a given resource.

See https://goo.gl/xmQnxf for more information on and examples of labels.

If you plan to use labels in your own code, please note that additional
characters may be allowed in the future. Therefore, you are advised to use
an internal label representation, such as JSON, which doesn't rely upon
specific characters being disallowed.  For example, representing labels
as the string:  'name + "*" + value' would prove problematic if we were to
allow '"*"' in a future release. "

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#labels GoogleParallelstoreInstance#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

Immutable. The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#network GoogleParallelstoreInstance#network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#project GoogleParallelstoreInstance#project}.

---

##### `ReservedIpRange`<sup>Optional</sup> <a name="ReservedIpRange" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.reservedIpRange"></a>

```go
ReservedIpRange *string
```

- *Type:* *string

Immutable.

Contains the id of the allocated IP address range
associated with the private service access connection for example, "test-default"
associated with IP range 10.0.0.0/29. If no range id is provided all ranges will
be considered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#reserved_ip_range GoogleParallelstoreInstance#reserved_ip_range}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceConfig.property.timeouts"></a>

```go
Timeouts GoogleParallelstoreInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts">GoogleParallelstoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#timeouts GoogleParallelstoreInstance#timeouts}

---

### GoogleParallelstoreInstanceTimeouts <a name="GoogleParallelstoreInstanceTimeouts" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparallelstoreinstance"

&googleparallelstoreinstance.GoogleParallelstoreInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#create GoogleParallelstoreInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#delete GoogleParallelstoreInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#update GoogleParallelstoreInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#create GoogleParallelstoreInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#delete GoogleParallelstoreInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_parallelstore_instance#update GoogleParallelstoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleParallelstoreInstanceTimeoutsOutputReference <a name="GoogleParallelstoreInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleparallelstoreinstance"

googleparallelstoreinstance.NewGoogleParallelstoreInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleParallelstoreInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleParallelstoreInstance.GoogleParallelstoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



