# `googleFirebaseAppHostingTraffic` Submodule <a name="`googleFirebaseAppHostingTraffic` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppHostingTraffic <a name="GoogleFirebaseAppHostingTraffic" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic google_firebase_app_hosting_traffic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

googlefirebaseapphostingtraffic.NewGoogleFirebaseAppHostingTraffic(scope Construct, id *string, config GoogleFirebaseAppHostingTrafficConfig) GoogleFirebaseAppHostingTraffic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig">GoogleFirebaseAppHostingTrafficConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig">GoogleFirebaseAppHostingTrafficConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putRolloutPolicy">PutRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetRolloutPolicy">ResetRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRolloutPolicy` <a name="PutRolloutPolicy" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putRolloutPolicy"></a>

```go
func PutRolloutPolicy(value GoogleFirebaseAppHostingTrafficRolloutPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putRolloutPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putTarget"></a>

```go
func PutTarget(value GoogleFirebaseAppHostingTrafficTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFirebaseAppHostingTrafficTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts">GoogleFirebaseAppHostingTrafficTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRolloutPolicy` <a name="ResetRolloutPolicy" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetRolloutPolicy"></a>

```go
func ResetRolloutPolicy()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppHostingTraffic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

googlefirebaseapphostingtraffic.GoogleFirebaseAppHostingTraffic_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

googlefirebaseapphostingtraffic.GoogleFirebaseAppHostingTraffic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

googlefirebaseapphostingtraffic.GoogleFirebaseAppHostingTraffic_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

googlefirebaseapphostingtraffic.GoogleFirebaseAppHostingTraffic_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleFirebaseAppHostingTraffic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFirebaseAppHostingTraffic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFirebaseAppHostingTraffic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppHostingTraffic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.current">Current</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList">GoogleFirebaseAppHostingTrafficCurrentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.rolloutPolicy">RolloutPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference">GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference">GoogleFirebaseAppHostingTrafficTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference">GoogleFirebaseAppHostingTrafficTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.rolloutPolicyInput">RolloutPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Current`<sup>Required</sup> <a name="Current" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.current"></a>

```go
func Current() GoogleFirebaseAppHostingTrafficCurrentList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList">GoogleFirebaseAppHostingTrafficCurrentList</a>

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RolloutPolicy`<sup>Required</sup> <a name="RolloutPolicy" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.rolloutPolicy"></a>

```go
func RolloutPolicy() GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference">GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.target"></a>

```go
func Target() GoogleFirebaseAppHostingTrafficTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference">GoogleFirebaseAppHostingTrafficTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.timeouts"></a>

```go
func Timeouts() GoogleFirebaseAppHostingTrafficTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference">GoogleFirebaseAppHostingTrafficTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RolloutPolicyInput`<sup>Optional</sup> <a name="RolloutPolicyInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.rolloutPolicyInput"></a>

```go
func RolloutPolicyInput() GoogleFirebaseAppHostingTrafficRolloutPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.targetInput"></a>

```go
func TargetInput() GoogleFirebaseAppHostingTrafficTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppHostingTrafficConfig <a name="GoogleFirebaseAppHostingTrafficConfig" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

&googlefirebaseapphostingtraffic.GoogleFirebaseAppHostingTrafficConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	Location: *string,
	Id: *string,
	Project: *string,
	RolloutPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy,
	Target: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.backend">Backend</a></code> | <code>*string</code> | Id of the backend that this Traffic config applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.location">Location</a></code> | <code>*string</code> | The location the Backend that this Traffic config applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#id GoogleFirebaseAppHostingTraffic#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#project GoogleFirebaseAppHostingTraffic#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.rolloutPolicy">RolloutPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a></code> | rollout_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts">GoogleFirebaseAppHostingTrafficTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Id of the backend that this Traffic config applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#backend GoogleFirebaseAppHostingTraffic#backend}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location the Backend that this Traffic config applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#location GoogleFirebaseAppHostingTraffic#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#id GoogleFirebaseAppHostingTraffic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#project GoogleFirebaseAppHostingTraffic#project}.

---

##### `RolloutPolicy`<sup>Optional</sup> <a name="RolloutPolicy" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.rolloutPolicy"></a>

```go
RolloutPolicy GoogleFirebaseAppHostingTrafficRolloutPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a>

rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#rollout_policy GoogleFirebaseAppHostingTraffic#rollout_policy}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.target"></a>

```go
Target GoogleFirebaseAppHostingTrafficTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#target GoogleFirebaseAppHostingTraffic#target}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.timeouts"></a>

```go
Timeouts GoogleFirebaseAppHostingTrafficTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts">GoogleFirebaseAppHostingTrafficTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#timeouts GoogleFirebaseAppHostingTraffic#timeouts}

---

### GoogleFirebaseAppHostingTrafficCurrent <a name="GoogleFirebaseAppHostingTrafficCurrent" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

&googlefirebaseapphostingtraffic.GoogleFirebaseAppHostingTrafficCurrent {

}
```


### GoogleFirebaseAppHostingTrafficCurrentSplits <a name="GoogleFirebaseAppHostingTrafficCurrentSplits" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

&googlefirebaseapphostingtraffic.GoogleFirebaseAppHostingTrafficCurrentSplits {

}
```


### GoogleFirebaseAppHostingTrafficRolloutPolicy <a name="GoogleFirebaseAppHostingTrafficRolloutPolicy" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

&googlefirebaseapphostingtraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy {
	CodebaseBranch: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy.property.codebaseBranch">CodebaseBranch</a></code> | <code>*string</code> | Specifies a branch that triggers a new build to be started with this policy. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy.property.disabled">Disabled</a></code> | <code>interface{}</code> | A flag that, if true, prevents rollouts from being created via this RolloutPolicy. |

---

##### `CodebaseBranch`<sup>Optional</sup> <a name="CodebaseBranch" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy.property.codebaseBranch"></a>

```go
CodebaseBranch *string
```

- *Type:* *string

Specifies a branch that triggers a new build to be started with this policy.

If not set, no automatic rollouts will happen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#codebase_branch GoogleFirebaseAppHostingTraffic#codebase_branch}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

A flag that, if true, prevents rollouts from being created via this RolloutPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#disabled GoogleFirebaseAppHostingTraffic#disabled}

---

### GoogleFirebaseAppHostingTrafficTarget <a name="GoogleFirebaseAppHostingTrafficTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

&googlefirebaseapphostingtraffic.GoogleFirebaseAppHostingTrafficTarget {
	Splits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget.property.splits">Splits</a></code> | <code>interface{}</code> | splits block. |

---

##### `Splits`<sup>Required</sup> <a name="Splits" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget.property.splits"></a>

```go
Splits interface{}
```

- *Type:* interface{}

splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#splits GoogleFirebaseAppHostingTraffic#splits}

---

### GoogleFirebaseAppHostingTrafficTargetSplits <a name="GoogleFirebaseAppHostingTrafficTargetSplits" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

&googlefirebaseapphostingtraffic.GoogleFirebaseAppHostingTrafficTargetSplits {
	BuildAttribute: *string,
	Percent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits.property.buildAttribute">BuildAttribute</a></code> | <code>*string</code> | The build that traffic is being routed to. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits.property.percent">Percent</a></code> | <code>*f64</code> | The percentage of traffic to send to the build. Currently must be 100 or 0. |

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits.property.buildAttribute"></a>

```go
BuildAttribute *string
```

- *Type:* *string

The build that traffic is being routed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#build GoogleFirebaseAppHostingTraffic#build}

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits.property.percent"></a>

```go
Percent *f64
```

- *Type:* *f64

The percentage of traffic to send to the build. Currently must be 100 or 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#percent GoogleFirebaseAppHostingTraffic#percent}

---

### GoogleFirebaseAppHostingTrafficTimeouts <a name="GoogleFirebaseAppHostingTrafficTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

&googlefirebaseapphostingtraffic.GoogleFirebaseAppHostingTrafficTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#create GoogleFirebaseAppHostingTraffic#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#delete GoogleFirebaseAppHostingTraffic#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#update GoogleFirebaseAppHostingTraffic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#create GoogleFirebaseAppHostingTraffic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#delete GoogleFirebaseAppHostingTraffic#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#update GoogleFirebaseAppHostingTraffic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppHostingTrafficCurrentList <a name="GoogleFirebaseAppHostingTrafficCurrentList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

googlefirebaseapphostingtraffic.NewGoogleFirebaseAppHostingTrafficCurrentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFirebaseAppHostingTrafficCurrentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.get"></a>

```go
func Get(index *f64) GoogleFirebaseAppHostingTrafficCurrentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleFirebaseAppHostingTrafficCurrentOutputReference <a name="GoogleFirebaseAppHostingTrafficCurrentOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

googlefirebaseapphostingtraffic.NewGoogleFirebaseAppHostingTrafficCurrentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFirebaseAppHostingTrafficCurrentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.splits">Splits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList">GoogleFirebaseAppHostingTrafficCurrentSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrent">GoogleFirebaseAppHostingTrafficCurrent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Splits`<sup>Required</sup> <a name="Splits" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.splits"></a>

```go
func Splits() GoogleFirebaseAppHostingTrafficCurrentSplitsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList">GoogleFirebaseAppHostingTrafficCurrentSplitsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirebaseAppHostingTrafficCurrent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrent">GoogleFirebaseAppHostingTrafficCurrent</a>

---


### GoogleFirebaseAppHostingTrafficCurrentSplitsList <a name="GoogleFirebaseAppHostingTrafficCurrentSplitsList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

googlefirebaseapphostingtraffic.NewGoogleFirebaseAppHostingTrafficCurrentSplitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFirebaseAppHostingTrafficCurrentSplitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.get"></a>

```go
func Get(index *f64) GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference <a name="GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

googlefirebaseapphostingtraffic.NewGoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.buildAttribute">BuildAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplits">GoogleFirebaseAppHostingTrafficCurrentSplits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.buildAttribute"></a>

```go
func BuildAttribute() *string
```

- *Type:* *string

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirebaseAppHostingTrafficCurrentSplits
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplits">GoogleFirebaseAppHostingTrafficCurrentSplits</a>

---


### GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference <a name="GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

googlefirebaseapphostingtraffic.NewGoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.resetCodebaseBranch">ResetCodebaseBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCodebaseBranch` <a name="ResetCodebaseBranch" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.resetCodebaseBranch"></a>

```go
func ResetCodebaseBranch()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledTime">DisabledTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranchInput">CodebaseBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranch">CodebaseBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledTime`<sup>Required</sup> <a name="DisabledTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledTime"></a>

```go
func DisabledTime() *string
```

- *Type:* *string

---

##### `CodebaseBranchInput`<sup>Optional</sup> <a name="CodebaseBranchInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranchInput"></a>

```go
func CodebaseBranchInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `CodebaseBranch`<sup>Required</sup> <a name="CodebaseBranch" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranch"></a>

```go
func CodebaseBranch() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirebaseAppHostingTrafficRolloutPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a>

---


### GoogleFirebaseAppHostingTrafficTargetOutputReference <a name="GoogleFirebaseAppHostingTrafficTargetOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

googlefirebaseapphostingtraffic.NewGoogleFirebaseAppHostingTrafficTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseAppHostingTrafficTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.putSplits">PutSplits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSplits` <a name="PutSplits" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.putSplits"></a>

```go
func PutSplits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.putSplits.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.splits">Splits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList">GoogleFirebaseAppHostingTrafficTargetSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.splitsInput">SplitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Splits`<sup>Required</sup> <a name="Splits" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.splits"></a>

```go
func Splits() GoogleFirebaseAppHostingTrafficTargetSplitsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList">GoogleFirebaseAppHostingTrafficTargetSplitsList</a>

---

##### `SplitsInput`<sup>Optional</sup> <a name="SplitsInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.splitsInput"></a>

```go
func SplitsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirebaseAppHostingTrafficTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a>

---


### GoogleFirebaseAppHostingTrafficTargetSplitsList <a name="GoogleFirebaseAppHostingTrafficTargetSplitsList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

googlefirebaseapphostingtraffic.NewGoogleFirebaseAppHostingTrafficTargetSplitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFirebaseAppHostingTrafficTargetSplitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.get"></a>

```go
func Get(index *f64) GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference <a name="GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

googlefirebaseapphostingtraffic.NewGoogleFirebaseAppHostingTrafficTargetSplitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttributeInput">BuildAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.percentInput">PercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttribute">BuildAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildAttributeInput`<sup>Optional</sup> <a name="BuildAttributeInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttributeInput"></a>

```go
func BuildAttributeInput() *string
```

- *Type:* *string

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.percentInput"></a>

```go
func PercentInput() *f64
```

- *Type:* *f64

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttribute"></a>

```go
func BuildAttribute() *string
```

- *Type:* *string

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseAppHostingTrafficTimeoutsOutputReference <a name="GoogleFirebaseAppHostingTrafficTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseapphostingtraffic"

googlefirebaseapphostingtraffic.NewGoogleFirebaseAppHostingTrafficTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseAppHostingTrafficTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



