# `googlePubsubLiteSubscription` Submodule <a name="`googlePubsubLiteSubscription` Submodule" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePubsubLiteSubscription <a name="GooglePubsubLiteSubscription" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription google_pubsub_lite_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlepubsublitesubscription"

googlepubsublitesubscription.NewGooglePubsubLiteSubscription(scope Construct, id *string, config GooglePubsubLiteSubscriptionConfig) GooglePubsubLiteSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig">GooglePubsubLiteSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig">GooglePubsubLiteSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.putDeliveryConfig">PutDeliveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.resetDeliveryConfig">ResetDeliveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeliveryConfig` <a name="PutDeliveryConfig" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.putDeliveryConfig"></a>

```go
func PutDeliveryConfig(value GooglePubsubLiteSubscriptionDeliveryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.putDeliveryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfig">GooglePubsubLiteSubscriptionDeliveryConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.putTimeouts"></a>

```go
func PutTimeouts(value GooglePubsubLiteSubscriptionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeouts">GooglePubsubLiteSubscriptionTimeouts</a>

---

##### `ResetDeliveryConfig` <a name="ResetDeliveryConfig" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.resetDeliveryConfig"></a>

```go
func ResetDeliveryConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePubsubLiteSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlepubsublitesubscription"

googlepubsublitesubscription.GooglePubsubLiteSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlepubsublitesubscription"

googlepubsublitesubscription.GooglePubsubLiteSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlepubsublitesubscription"

googlepubsublitesubscription.GooglePubsubLiteSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlepubsublitesubscription"

googlepubsublitesubscription.GooglePubsubLiteSubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GooglePubsubLiteSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GooglePubsubLiteSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GooglePubsubLiteSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GooglePubsubLiteSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.deliveryConfig">DeliveryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference">GooglePubsubLiteSubscriptionDeliveryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference">GooglePubsubLiteSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.deliveryConfigInput">DeliveryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfig">GooglePubsubLiteSubscriptionDeliveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeliveryConfig`<sup>Required</sup> <a name="DeliveryConfig" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.deliveryConfig"></a>

```go
func DeliveryConfig() GooglePubsubLiteSubscriptionDeliveryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference">GooglePubsubLiteSubscriptionDeliveryConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.timeouts"></a>

```go
func Timeouts() GooglePubsubLiteSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference">GooglePubsubLiteSubscriptionTimeoutsOutputReference</a>

---

##### `DeliveryConfigInput`<sup>Optional</sup> <a name="DeliveryConfigInput" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.deliveryConfigInput"></a>

```go
func DeliveryConfigInput() GooglePubsubLiteSubscriptionDeliveryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfig">GooglePubsubLiteSubscriptionDeliveryConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePubsubLiteSubscriptionConfig <a name="GooglePubsubLiteSubscriptionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlepubsublitesubscription"

&googlepubsublitesubscription.GooglePubsubLiteSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Topic: *string,
	DeliveryConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfig,
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeouts,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.name">Name</a></code> | <code>*string</code> | Name of the subscription. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.topic">Topic</a></code> | <code>*string</code> | A reference to a Topic resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.deliveryConfig">DeliveryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfig">GooglePubsubLiteSubscriptionDeliveryConfig</a></code> | delivery_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#id GooglePubsubLiteSubscription#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#project GooglePubsubLiteSubscription#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.region">Region</a></code> | <code>*string</code> | The region of the pubsub lite topic. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeouts">GooglePubsubLiteSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.zone">Zone</a></code> | <code>*string</code> | The zone of the pubsub lite topic. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#name GooglePubsubLiteSubscription#name}

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

A reference to a Topic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#topic GooglePubsubLiteSubscription#topic}

---

##### `DeliveryConfig`<sup>Optional</sup> <a name="DeliveryConfig" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.deliveryConfig"></a>

```go
DeliveryConfig GooglePubsubLiteSubscriptionDeliveryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfig">GooglePubsubLiteSubscriptionDeliveryConfig</a>

delivery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#delivery_config GooglePubsubLiteSubscription#delivery_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#id GooglePubsubLiteSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#project GooglePubsubLiteSubscription#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#region GooglePubsubLiteSubscription#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.timeouts"></a>

```go
Timeouts GooglePubsubLiteSubscriptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeouts">GooglePubsubLiteSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#timeouts GooglePubsubLiteSubscription#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The zone of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#zone GooglePubsubLiteSubscription#zone}

---

### GooglePubsubLiteSubscriptionDeliveryConfig <a name="GooglePubsubLiteSubscriptionDeliveryConfig" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlepubsublitesubscription"

&googlepubsublitesubscription.GooglePubsubLiteSubscriptionDeliveryConfig {
	DeliveryRequirement: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfig.property.deliveryRequirement">DeliveryRequirement</a></code> | <code>*string</code> | When this subscription should send messages to subscribers relative to messages persistence in storage. Possible values: ["DELIVER_IMMEDIATELY", "DELIVER_AFTER_STORED", "DELIVERY_REQUIREMENT_UNSPECIFIED"]. |

---

##### `DeliveryRequirement`<sup>Required</sup> <a name="DeliveryRequirement" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfig.property.deliveryRequirement"></a>

```go
DeliveryRequirement *string
```

- *Type:* *string

When this subscription should send messages to subscribers relative to messages persistence in storage. Possible values: ["DELIVER_IMMEDIATELY", "DELIVER_AFTER_STORED", "DELIVERY_REQUIREMENT_UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#delivery_requirement GooglePubsubLiteSubscription#delivery_requirement}

---

### GooglePubsubLiteSubscriptionTimeouts <a name="GooglePubsubLiteSubscriptionTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlepubsublitesubscription"

&googlepubsublitesubscription.GooglePubsubLiteSubscriptionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#create GooglePubsubLiteSubscription#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#delete GooglePubsubLiteSubscription#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#update GooglePubsubLiteSubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#create GooglePubsubLiteSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#delete GooglePubsubLiteSubscription#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_pubsub_lite_subscription#update GooglePubsubLiteSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePubsubLiteSubscriptionDeliveryConfigOutputReference <a name="GooglePubsubLiteSubscriptionDeliveryConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlepubsublitesubscription"

googlepubsublitesubscription.NewGooglePubsubLiteSubscriptionDeliveryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePubsubLiteSubscriptionDeliveryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.property.deliveryRequirementInput">DeliveryRequirementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.property.deliveryRequirement">DeliveryRequirement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfig">GooglePubsubLiteSubscriptionDeliveryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryRequirementInput`<sup>Optional</sup> <a name="DeliveryRequirementInput" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.property.deliveryRequirementInput"></a>

```go
func DeliveryRequirementInput() *string
```

- *Type:* *string

---

##### `DeliveryRequirement`<sup>Required</sup> <a name="DeliveryRequirement" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.property.deliveryRequirement"></a>

```go
func DeliveryRequirement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePubsubLiteSubscriptionDeliveryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionDeliveryConfig">GooglePubsubLiteSubscriptionDeliveryConfig</a>

---


### GooglePubsubLiteSubscriptionTimeoutsOutputReference <a name="GooglePubsubLiteSubscriptionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlepubsublitesubscription"

googlepubsublitesubscription.NewGooglePubsubLiteSubscriptionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePubsubLiteSubscriptionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubLiteSubscription.GooglePubsubLiteSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



