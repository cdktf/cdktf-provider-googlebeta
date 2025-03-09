# `googleLoggingBillingAccountSink` Submodule <a name="`googleLoggingBillingAccountSink` Submodule" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingBillingAccountSink <a name="GoogleLoggingBillingAccountSink" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink google_logging_billing_account_sink}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleloggingbillingaccountsink"

googleloggingbillingaccountsink.NewGoogleLoggingBillingAccountSink(scope Construct, id *string, config GoogleLoggingBillingAccountSinkConfig) GoogleLoggingBillingAccountSink
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig">GoogleLoggingBillingAccountSinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig">GoogleLoggingBillingAccountSinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.putBigqueryOptions">PutBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.putExclusions">PutExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.resetBigqueryOptions">ResetBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigqueryOptions` <a name="PutBigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.putBigqueryOptions"></a>

```go
func PutBigqueryOptions(value GoogleLoggingBillingAccountSinkBigqueryOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.putBigqueryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptions">GoogleLoggingBillingAccountSinkBigqueryOptions</a>

---

##### `PutExclusions` <a name="PutExclusions" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.putExclusions"></a>

```go
func PutExclusions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.putExclusions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBigqueryOptions` <a name="ResetBigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.resetBigqueryOptions"></a>

```go
func ResetBigqueryOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLoggingBillingAccountSink resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleloggingbillingaccountsink"

googleloggingbillingaccountsink.GoogleLoggingBillingAccountSink_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleloggingbillingaccountsink"

googleloggingbillingaccountsink.GoogleLoggingBillingAccountSink_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleloggingbillingaccountsink"

googleloggingbillingaccountsink.GoogleLoggingBillingAccountSink_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleloggingbillingaccountsink"

googleloggingbillingaccountsink.GoogleLoggingBillingAccountSink_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleLoggingBillingAccountSink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleLoggingBillingAccountSink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleLoggingBillingAccountSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingBillingAccountSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.bigqueryOptions">BigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference">GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.exclusions">Exclusions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList">GoogleLoggingBillingAccountSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.writerIdentity">WriterIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.bigqueryOptionsInput">BigqueryOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptions">GoogleLoggingBillingAccountSinkBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.billingAccountInput">BillingAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.exclusionsInput">ExclusionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.billingAccount">BillingAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BigqueryOptions`<sup>Required</sup> <a name="BigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.bigqueryOptions"></a>

```go
func BigqueryOptions() GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference">GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference</a>

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.exclusions"></a>

```go
func Exclusions() GoogleLoggingBillingAccountSinkExclusionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList">GoogleLoggingBillingAccountSinkExclusionsList</a>

---

##### `WriterIdentity`<sup>Required</sup> <a name="WriterIdentity" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.writerIdentity"></a>

```go
func WriterIdentity() *string
```

- *Type:* *string

---

##### `BigqueryOptionsInput`<sup>Optional</sup> <a name="BigqueryOptionsInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.bigqueryOptionsInput"></a>

```go
func BigqueryOptionsInput() GoogleLoggingBillingAccountSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptions">GoogleLoggingBillingAccountSinkBigqueryOptions</a>

---

##### `BillingAccountInput`<sup>Optional</sup> <a name="BillingAccountInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.billingAccountInput"></a>

```go
func BillingAccountInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.exclusionsInput"></a>

```go
func ExclusionsInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.billingAccount"></a>

```go
func BillingAccount() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSink.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingBillingAccountSinkBigqueryOptions <a name="GoogleLoggingBillingAccountSinkBigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleloggingbillingaccountsink"

&googleloggingbillingaccountsink.GoogleLoggingBillingAccountSinkBigqueryOptions {
	UsePartitionedTables: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptions.property.usePartitionedTables">UsePartitionedTables</a></code> | <code>interface{}</code> | Whether to use BigQuery's partition tables. |

---

##### `UsePartitionedTables`<sup>Required</sup> <a name="UsePartitionedTables" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptions.property.usePartitionedTables"></a>

```go
UsePartitionedTables interface{}
```

- *Type:* interface{}

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#use_partitioned_tables GoogleLoggingBillingAccountSink#use_partitioned_tables}

---

### GoogleLoggingBillingAccountSinkConfig <a name="GoogleLoggingBillingAccountSinkConfig" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleloggingbillingaccountsink"

&googleloggingbillingaccountsink.GoogleLoggingBillingAccountSinkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BillingAccount: *string,
	Destination: *string,
	Name: *string,
	BigqueryOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptions,
	Description: *string,
	Disabled: interface{},
	Exclusions: interface{},
	Filter: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.billingAccount">BillingAccount</a></code> | <code>*string</code> | The billing account exported to the sink. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.destination">Destination</a></code> | <code>*string</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.name">Name</a></code> | <code>*string</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.bigqueryOptions">BigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptions">GoogleLoggingBillingAccountSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.description">Description</a></code> | <code>*string</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.exclusions">Exclusions</a></code> | <code>interface{}</code> | exclusions block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.filter">Filter</a></code> | <code>*string</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#id GoogleLoggingBillingAccountSink#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.billingAccount"></a>

```go
BillingAccount *string
```

- *Type:* *string

The billing account exported to the sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#billing_account GoogleLoggingBillingAccountSink#billing_account}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#destination GoogleLoggingBillingAccountSink#destination}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#name GoogleLoggingBillingAccountSink#name}

---

##### `BigqueryOptions`<sup>Optional</sup> <a name="BigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.bigqueryOptions"></a>

```go
BigqueryOptions GoogleLoggingBillingAccountSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptions">GoogleLoggingBillingAccountSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#bigquery_options GoogleLoggingBillingAccountSink#bigquery_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#description GoogleLoggingBillingAccountSink#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#disabled GoogleLoggingBillingAccountSink#disabled}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.exclusions"></a>

```go
Exclusions interface{}
```

- *Type:* interface{}

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#exclusions GoogleLoggingBillingAccountSink#exclusions}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#filter GoogleLoggingBillingAccountSink#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#id GoogleLoggingBillingAccountSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GoogleLoggingBillingAccountSinkExclusions <a name="GoogleLoggingBillingAccountSinkExclusions" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleloggingbillingaccountsink"

&googleloggingbillingaccountsink.GoogleLoggingBillingAccountSinkExclusions {
	Filter: *string,
	Name: *string,
	Description: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusions.property.filter">Filter</a></code> | <code>*string</code> | An advanced logs filter that matches the log entries to be excluded. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusions.property.name">Name</a></code> | <code>*string</code> | A client-assigned identifier, such as "load-balancer-exclusion". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusions.property.description">Description</a></code> | <code>*string</code> | A description of this exclusion. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusions.property.disabled">Disabled</a></code> | <code>interface{}</code> | If set to True, then this exclusion is disabled and it does not exclude any log entries. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusions.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

An advanced logs filter that matches the log entries to be excluded.

By using the sample function, you can exclude less than 100% of the matching log entries

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#filter GoogleLoggingBillingAccountSink#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusions.property.name"></a>

```go
Name *string
```

- *Type:* *string

A client-assigned identifier, such as "load-balancer-exclusion".

Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#name GoogleLoggingBillingAccountSink#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusions.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of this exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#description GoogleLoggingBillingAccountSink#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusions.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

If set to True, then this exclusion is disabled and it does not exclude any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_logging_billing_account_sink#disabled GoogleLoggingBillingAccountSink#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference <a name="GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleloggingbillingaccountsink"

googleloggingbillingaccountsink.NewGoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput">UsePartitionedTablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.property.usePartitionedTables">UsePartitionedTables</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptions">GoogleLoggingBillingAccountSinkBigqueryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UsePartitionedTablesInput`<sup>Optional</sup> <a name="UsePartitionedTablesInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput"></a>

```go
func UsePartitionedTablesInput() interface{}
```

- *Type:* interface{}

---

##### `UsePartitionedTables`<sup>Required</sup> <a name="UsePartitionedTables" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```go
func UsePartitionedTables() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLoggingBillingAccountSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkBigqueryOptions">GoogleLoggingBillingAccountSinkBigqueryOptions</a>

---


### GoogleLoggingBillingAccountSinkExclusionsList <a name="GoogleLoggingBillingAccountSinkExclusionsList" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleloggingbillingaccountsink"

googleloggingbillingaccountsink.NewGoogleLoggingBillingAccountSinkExclusionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleLoggingBillingAccountSinkExclusionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.get"></a>

```go
func Get(index *f64) GoogleLoggingBillingAccountSinkExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleLoggingBillingAccountSinkExclusionsOutputReference <a name="GoogleLoggingBillingAccountSinkExclusionsOutputReference" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleloggingbillingaccountsink"

googleloggingbillingaccountsink.NewGoogleLoggingBillingAccountSinkExclusionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleLoggingBillingAccountSinkExclusionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingBillingAccountSink.GoogleLoggingBillingAccountSinkExclusionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



