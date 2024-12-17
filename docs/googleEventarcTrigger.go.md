# `googleEventarcTrigger` Submodule <a name="`googleEventarcTrigger` Submodule" id="@cdktf/provider-google-beta.googleEventarcTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEventarcTrigger <a name="GoogleEventarcTrigger" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger google_eventarc_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

googleeventarctrigger.NewGoogleEventarcTrigger(scope Construct, id *string, config GoogleEventarcTriggerConfig) GoogleEventarcTrigger
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig">GoogleEventarcTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig">GoogleEventarcTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putMatchingCriteria">PutMatchingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTransport">PutTransport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetEventDataContentType">ResetEventDataContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTransport">ResetTransport</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination"></a>

```go
func PutDestination(value GoogleEventarcTriggerDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

---

##### `PutMatchingCriteria` <a name="PutMatchingCriteria" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putMatchingCriteria"></a>

```go
func PutMatchingCriteria(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putMatchingCriteria.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTimeouts"></a>

```go
func PutTimeouts(value GoogleEventarcTriggerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>

---

##### `PutTransport` <a name="PutTransport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTransport"></a>

```go
func PutTransport(value GoogleEventarcTriggerTransport)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTransport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

---

##### `ResetChannel` <a name="ResetChannel" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetChannel"></a>

```go
func ResetChannel()
```

##### `ResetEventDataContentType` <a name="ResetEventDataContentType" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetEventDataContentType"></a>

```go
func ResetEventDataContentType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransport` <a name="ResetTransport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTransport"></a>

```go
func ResetTransport()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEventarcTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

googleeventarctrigger.GoogleEventarcTrigger_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

googleeventarctrigger.GoogleEventarcTrigger_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

googleeventarctrigger.GoogleEventarcTrigger_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

googleeventarctrigger.GoogleEventarcTrigger_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleEventarcTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleEventarcTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleEventarcTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEventarcTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.conditions">Conditions</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference">GoogleEventarcTriggerDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteria">MatchingCriteria</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList">GoogleEventarcTriggerMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference">GoogleEventarcTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transport">Transport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference">GoogleEventarcTriggerTransportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channelInput">ChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destinationInput">DestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentTypeInput">EventDataContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteriaInput">MatchingCriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transportInput">TransportInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentType">EventDataContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.conditions"></a>

```go
func Conditions() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destination"></a>

```go
func Destination() GoogleEventarcTriggerDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference">GoogleEventarcTriggerDestinationOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `MatchingCriteria`<sup>Required</sup> <a name="MatchingCriteria" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteria"></a>

```go
func MatchingCriteria() GoogleEventarcTriggerMatchingCriteriaList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList">GoogleEventarcTriggerMatchingCriteriaList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeouts"></a>

```go
func Timeouts() GoogleEventarcTriggerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference">GoogleEventarcTriggerTimeoutsOutputReference</a>

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transport"></a>

```go
func Transport() GoogleEventarcTriggerTransportOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference">GoogleEventarcTriggerTransportOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channelInput"></a>

```go
func ChannelInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destinationInput"></a>

```go
func DestinationInput() GoogleEventarcTriggerDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

---

##### `EventDataContentTypeInput`<sup>Optional</sup> <a name="EventDataContentTypeInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentTypeInput"></a>

```go
func EventDataContentTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MatchingCriteriaInput`<sup>Optional</sup> <a name="MatchingCriteriaInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteriaInput"></a>

```go
func MatchingCriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransportInput`<sup>Optional</sup> <a name="TransportInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transportInput"></a>

```go
func TransportInput() GoogleEventarcTriggerTransport
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `EventDataContentType`<sup>Required</sup> <a name="EventDataContentType" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentType"></a>

```go
func EventDataContentType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEventarcTriggerConfig <a name="GoogleEventarcTriggerConfig" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

&googleeventarctrigger.GoogleEventarcTriggerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Destination: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcTrigger.GoogleEventarcTriggerDestination,
	Location: *string,
	MatchingCriteria: interface{},
	Name: *string,
	Channel: *string,
	EventDataContentType: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	ServiceAccount: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcTrigger.GoogleEventarcTriggerTimeouts,
	Transport: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcTrigger.GoogleEventarcTriggerTransport,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.matchingCriteria">MatchingCriteria</a></code> | <code>interface{}</code> | matching_criteria block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.name">Name</a></code> | <code>*string</code> | Required. The resource name of the trigger. Must be unique within the location on the project. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.channel">Channel</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.eventDataContentType">EventDataContentType</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#id GoogleEventarcTrigger#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. User labels attached to the triggers that can be used to group resources. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.transport">Transport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a></code> | transport block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.destination"></a>

```go
Destination GoogleEventarcTriggerDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#destination GoogleEventarcTrigger#destination}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#location GoogleEventarcTrigger#location}

---

##### `MatchingCriteria`<sup>Required</sup> <a name="MatchingCriteria" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.matchingCriteria"></a>

```go
MatchingCriteria interface{}
```

- *Type:* interface{}

matching_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#matching_criteria GoogleEventarcTrigger#matching_criteria}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Required. The resource name of the trigger. Must be unique within the location on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#name GoogleEventarcTrigger#name}

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.channel"></a>

```go
Channel *string
```

- *Type:* *string

Optional.

The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#channel GoogleEventarcTrigger#channel}

---

##### `EventDataContentType`<sup>Optional</sup> <a name="EventDataContentType" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.eventDataContentType"></a>

```go
EventDataContentType *string
```

- *Type:* *string

Optional.

EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#event_data_content_type GoogleEventarcTrigger#event_data_content_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#id GoogleEventarcTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. User labels attached to the triggers that can be used to group resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#labels GoogleEventarcTrigger#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#project GoogleEventarcTrigger#project}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Optional.

The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#service_account GoogleEventarcTrigger#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.timeouts"></a>

```go
Timeouts GoogleEventarcTriggerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#timeouts GoogleEventarcTrigger#timeouts}

---

##### `Transport`<sup>Optional</sup> <a name="Transport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.transport"></a>

```go
Transport GoogleEventarcTriggerTransport
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

transport block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#transport GoogleEventarcTrigger#transport}

---

### GoogleEventarcTriggerDestination <a name="GoogleEventarcTriggerDestination" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

&googleeventarctrigger.GoogleEventarcTriggerDestination {
	CloudRunService: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService,
	Gke: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke,
	HttpEndpoint: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint,
	NetworkConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig,
	Workflow: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.cloudRunService">CloudRunService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a></code> | cloud_run_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.gke">Gke</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.httpEndpoint">HttpEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a></code> | http_endpoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.workflow">Workflow</a></code> | <code>*string</code> | The resource name of the Workflow whose Executions are triggered by the events. |

---

##### `CloudRunService`<sup>Optional</sup> <a name="CloudRunService" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.cloudRunService"></a>

```go
CloudRunService GoogleEventarcTriggerDestinationCloudRunService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

cloud_run_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#cloud_run_service GoogleEventarcTrigger#cloud_run_service}

---

##### `Gke`<sup>Optional</sup> <a name="Gke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.gke"></a>

```go
Gke GoogleEventarcTriggerDestinationGke
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#gke GoogleEventarcTrigger#gke}

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.httpEndpoint"></a>

```go
HttpEndpoint GoogleEventarcTriggerDestinationHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

http_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#http_endpoint GoogleEventarcTrigger#http_endpoint}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.networkConfig"></a>

```go
NetworkConfig GoogleEventarcTriggerDestinationNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#network_config GoogleEventarcTrigger#network_config}

---

##### `Workflow`<sup>Optional</sup> <a name="Workflow" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.workflow"></a>

```go
Workflow *string
```

- *Type:* *string

The resource name of the Workflow whose Executions are triggered by the events.

The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#workflow GoogleEventarcTrigger#workflow}

---

### GoogleEventarcTriggerDestinationCloudRunService <a name="GoogleEventarcTriggerDestinationCloudRunService" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

&googleeventarctrigger.GoogleEventarcTriggerDestinationCloudRunService {
	Service: *string,
	Path: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.service">Service</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.path">Path</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.region">Region</a></code> | <code>*string</code> | Required. The region the Cloud Run service is deployed in. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.service"></a>

```go
Service *string
```

- *Type:* *string

Required.

The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#service GoogleEventarcTrigger#service}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.path"></a>

```go
Path *string
```

- *Type:* *string

Optional.

The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#path GoogleEventarcTrigger#path}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.region"></a>

```go
Region *string
```

- *Type:* *string

Required. The region the Cloud Run service is deployed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#region GoogleEventarcTrigger#region}

---

### GoogleEventarcTriggerDestinationGke <a name="GoogleEventarcTriggerDestinationGke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

&googleeventarctrigger.GoogleEventarcTriggerDestinationGke {
	Cluster: *string,
	Location: *string,
	Namespace: *string,
	Service: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.cluster">Cluster</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.location">Location</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.namespace">Namespace</a></code> | <code>*string</code> | Required. The namespace the GKE service is running in. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.service">Service</a></code> | <code>*string</code> | Required. Name of the GKE service. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.path">Path</a></code> | <code>*string</code> | Optional. |

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

Required.

The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#cluster GoogleEventarcTrigger#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.location"></a>

```go
Location *string
```

- *Type:* *string

Required.

The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#location GoogleEventarcTrigger#location}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Required. The namespace the GKE service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#namespace GoogleEventarcTrigger#namespace}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.service"></a>

```go
Service *string
```

- *Type:* *string

Required. Name of the GKE service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#service GoogleEventarcTrigger#service}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.path"></a>

```go
Path *string
```

- *Type:* *string

Optional.

The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#path GoogleEventarcTrigger#path}

---

### GoogleEventarcTriggerDestinationHttpEndpoint <a name="GoogleEventarcTriggerDestinationHttpEndpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

&googleeventarctrigger.GoogleEventarcTriggerDestinationHttpEndpoint {
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint.property.uri">Uri</a></code> | <code>*string</code> | Required. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Required.

The URI of the HTTP enpdoint. The value must be a RFC2396 URI string. Examples: `http://10.10.10.8:80/route`, `http://svc.us-central1.p.local:8080/`. Only HTTP and HTTPS protocols are supported. The host can be either a static IP addressable from the VPC specified by the network config, or an internal DNS hostname of the service resolvable via Cloud DNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#uri GoogleEventarcTrigger#uri}

---

### GoogleEventarcTriggerDestinationNetworkConfig <a name="GoogleEventarcTriggerDestinationNetworkConfig" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

&googleeventarctrigger.GoogleEventarcTriggerDestinationNetworkConfig {
	NetworkAttachment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`. |

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig.property.networkAttachment"></a>

```go
NetworkAttachment *string
```

- *Type:* *string

Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#network_attachment GoogleEventarcTrigger#network_attachment}

---

### GoogleEventarcTriggerMatchingCriteria <a name="GoogleEventarcTriggerMatchingCriteria" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

&googleeventarctrigger.GoogleEventarcTriggerMatchingCriteria {
	Attribute: *string,
	Value: *string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.attribute">Attribute</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.value">Value</a></code> | <code>*string</code> | Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.operator">Operator</a></code> | <code>*string</code> | Optional. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

Required.

The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. All triggers MUST provide a filter for the 'type' attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#attribute GoogleEventarcTrigger#attribute}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.value"></a>

```go
Value *string
```

- *Type:* *string

Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#value GoogleEventarcTrigger#value}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Optional.

The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is `match-path-pattern`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#operator GoogleEventarcTrigger#operator}

---

### GoogleEventarcTriggerTimeouts <a name="GoogleEventarcTriggerTimeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

&googleeventarctrigger.GoogleEventarcTriggerTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#create GoogleEventarcTrigger#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#delete GoogleEventarcTrigger#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#update GoogleEventarcTrigger#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#create GoogleEventarcTrigger#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#delete GoogleEventarcTrigger#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#update GoogleEventarcTrigger#update}.

---

### GoogleEventarcTriggerTransport <a name="GoogleEventarcTriggerTransport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

&googleeventarctrigger.GoogleEventarcTriggerTransport {
	Pubsub: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport.property.pubsub">Pubsub</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a></code> | pubsub block. |

---

##### `Pubsub`<sup>Optional</sup> <a name="Pubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport.property.pubsub"></a>

```go
Pubsub GoogleEventarcTriggerTransportPubsub
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#pubsub GoogleEventarcTrigger#pubsub}

---

### GoogleEventarcTriggerTransportPubsub <a name="GoogleEventarcTriggerTransportPubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

&googleeventarctrigger.GoogleEventarcTriggerTransportPubsub {
	Topic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub.property.topic">Topic</a></code> | <code>*string</code> | Optional. |

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

Optional.

The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}. You may set an existing topic for triggers of the type google.cloud.pubsub.topic.v1.messagePublished` only. The topic you provide here will not be deleted by Eventarc at trigger deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_eventarc_trigger#topic GoogleEventarcTrigger#topic}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEventarcTriggerDestinationCloudRunServiceOutputReference <a name="GoogleEventarcTriggerDestinationCloudRunServiceOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

googleeventarctrigger.NewGoogleEventarcTriggerDestinationCloudRunServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcTriggerDestinationCloudRunServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcTriggerDestinationCloudRunService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

---


### GoogleEventarcTriggerDestinationGkeOutputReference <a name="GoogleEventarcTriggerDestinationGkeOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

googleeventarctrigger.NewGoogleEventarcTriggerDestinationGkeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcTriggerDestinationGkeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcTriggerDestinationGke
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

---


### GoogleEventarcTriggerDestinationHttpEndpointOutputReference <a name="GoogleEventarcTriggerDestinationHttpEndpointOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

googleeventarctrigger.NewGoogleEventarcTriggerDestinationHttpEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcTriggerDestinationHttpEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcTriggerDestinationHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

---


### GoogleEventarcTriggerDestinationNetworkConfigOutputReference <a name="GoogleEventarcTriggerDestinationNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

googleeventarctrigger.NewGoogleEventarcTriggerDestinationNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcTriggerDestinationNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```go
func NetworkAttachmentInput() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcTriggerDestinationNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

---


### GoogleEventarcTriggerDestinationOutputReference <a name="GoogleEventarcTriggerDestinationOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

googleeventarctrigger.NewGoogleEventarcTriggerDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcTriggerDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putCloudRunService">PutCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke">PutGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putHttpEndpoint">PutHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetCloudRunService">ResetCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetGke">ResetGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetWorkflow">ResetWorkflow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudRunService` <a name="PutCloudRunService" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putCloudRunService"></a>

```go
func PutCloudRunService(value GoogleEventarcTriggerDestinationCloudRunService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putCloudRunService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

---

##### `PutGke` <a name="PutGke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke"></a>

```go
func PutGke(value GoogleEventarcTriggerDestinationGke)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

---

##### `PutHttpEndpoint` <a name="PutHttpEndpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putHttpEndpoint"></a>

```go
func PutHttpEndpoint(value GoogleEventarcTriggerDestinationHttpEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putHttpEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putNetworkConfig"></a>

```go
func PutNetworkConfig(value GoogleEventarcTriggerDestinationNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

---

##### `ResetCloudRunService` <a name="ResetCloudRunService" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetCloudRunService"></a>

```go
func ResetCloudRunService()
```

##### `ResetGke` <a name="ResetGke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetGke"></a>

```go
func ResetGke()
```

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetHttpEndpoint"></a>

```go
func ResetHttpEndpoint()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetNetworkConfig"></a>

```go
func ResetNetworkConfig()
```

##### `ResetWorkflow` <a name="ResetWorkflow" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetWorkflow"></a>

```go
func ResetWorkflow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudFunction">CloudFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunService">CloudRunService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference">GoogleEventarcTriggerDestinationCloudRunServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gke">Gke</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference">GoogleEventarcTriggerDestinationGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference">GoogleEventarcTriggerDestinationHttpEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference">GoogleEventarcTriggerDestinationNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunServiceInput">CloudRunServiceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gkeInput">GkeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflowInput">WorkflowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflow">Workflow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudFunction"></a>

```go
func CloudFunction() *string
```

- *Type:* *string

---

##### `CloudRunService`<sup>Required</sup> <a name="CloudRunService" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunService"></a>

```go
func CloudRunService() GoogleEventarcTriggerDestinationCloudRunServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference">GoogleEventarcTriggerDestinationCloudRunServiceOutputReference</a>

---

##### `Gke`<sup>Required</sup> <a name="Gke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gke"></a>

```go
func Gke() GoogleEventarcTriggerDestinationGkeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference">GoogleEventarcTriggerDestinationGkeOutputReference</a>

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpoint"></a>

```go
func HttpEndpoint() GoogleEventarcTriggerDestinationHttpEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference">GoogleEventarcTriggerDestinationHttpEndpointOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfig"></a>

```go
func NetworkConfig() GoogleEventarcTriggerDestinationNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference">GoogleEventarcTriggerDestinationNetworkConfigOutputReference</a>

---

##### `CloudRunServiceInput`<sup>Optional</sup> <a name="CloudRunServiceInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunServiceInput"></a>

```go
func CloudRunServiceInput() GoogleEventarcTriggerDestinationCloudRunService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

---

##### `GkeInput`<sup>Optional</sup> <a name="GkeInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gkeInput"></a>

```go
func GkeInput() GoogleEventarcTriggerDestinationGke
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpointInput"></a>

```go
func HttpEndpointInput() GoogleEventarcTriggerDestinationHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfigInput"></a>

```go
func NetworkConfigInput() GoogleEventarcTriggerDestinationNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

---

##### `WorkflowInput`<sup>Optional</sup> <a name="WorkflowInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflowInput"></a>

```go
func WorkflowInput() *string
```

- *Type:* *string

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflow"></a>

```go
func Workflow() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcTriggerDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

---


### GoogleEventarcTriggerMatchingCriteriaList <a name="GoogleEventarcTriggerMatchingCriteriaList" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

googleeventarctrigger.NewGoogleEventarcTriggerMatchingCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleEventarcTriggerMatchingCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.get"></a>

```go
func Get(index *f64) GoogleEventarcTriggerMatchingCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleEventarcTriggerMatchingCriteriaOutputReference <a name="GoogleEventarcTriggerMatchingCriteriaOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

googleeventarctrigger.NewGoogleEventarcTriggerMatchingCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleEventarcTriggerMatchingCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleEventarcTriggerTimeoutsOutputReference <a name="GoogleEventarcTriggerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

googleeventarctrigger.NewGoogleEventarcTriggerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcTriggerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleEventarcTriggerTransportOutputReference <a name="GoogleEventarcTriggerTransportOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

googleeventarctrigger.NewGoogleEventarcTriggerTransportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcTriggerTransportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.putPubsub">PutPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resetPubsub">ResetPubsub</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPubsub` <a name="PutPubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.putPubsub"></a>

```go
func PutPubsub(value GoogleEventarcTriggerTransportPubsub)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.putPubsub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

---

##### `ResetPubsub` <a name="ResetPubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resetPubsub"></a>

```go
func ResetPubsub()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsub">Pubsub</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference">GoogleEventarcTriggerTransportPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsubInput">PubsubInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Pubsub`<sup>Required</sup> <a name="Pubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsub"></a>

```go
func Pubsub() GoogleEventarcTriggerTransportPubsubOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference">GoogleEventarcTriggerTransportPubsubOutputReference</a>

---

##### `PubsubInput`<sup>Optional</sup> <a name="PubsubInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsubInput"></a>

```go
func PubsubInput() GoogleEventarcTriggerTransportPubsub
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcTriggerTransport
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

---


### GoogleEventarcTriggerTransportPubsubOutputReference <a name="GoogleEventarcTriggerTransportPubsubOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarctrigger"

googleeventarctrigger.NewGoogleEventarcTriggerTransportPubsubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcTriggerTransportPubsubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resetTopic"></a>

```go
func ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.subscription">Subscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.subscription"></a>

```go
func Subscription() *string
```

- *Type:* *string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcTriggerTransportPubsub
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

---



