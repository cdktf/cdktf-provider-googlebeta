# `googleApigeeSharedflowDeployment` Submodule <a name="`googleApigeeSharedflowDeployment` Submodule" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeSharedflowDeployment <a name="GoogleApigeeSharedflowDeployment" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment google_apigee_sharedflow_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeesharedflowdeployment"

googleapigeesharedflowdeployment.NewGoogleApigeeSharedflowDeployment(scope Construct, id *string, config GoogleApigeeSharedflowDeploymentConfig) GoogleApigeeSharedflowDeployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig">GoogleApigeeSharedflowDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig">GoogleApigeeSharedflowDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.putTimeouts"></a>

```go
func PutTimeouts(value GoogleApigeeSharedflowDeploymentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeouts">GoogleApigeeSharedflowDeploymentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.resetId"></a>

```go
func ResetId()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeSharedflowDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeesharedflowdeployment"

googleapigeesharedflowdeployment.GoogleApigeeSharedflowDeployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeesharedflowdeployment"

googleapigeesharedflowdeployment.GoogleApigeeSharedflowDeployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeesharedflowdeployment"

googleapigeesharedflowdeployment.GoogleApigeeSharedflowDeployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeesharedflowdeployment"

googleapigeesharedflowdeployment.GoogleApigeeSharedflowDeployment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleApigeeSharedflowDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleApigeeSharedflowDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleApigeeSharedflowDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeSharedflowDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference">GoogleApigeeSharedflowDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.revisionInput">RevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.sharedflowIdInput">SharedflowIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.sharedflowId">SharedflowId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.timeouts"></a>

```go
func Timeouts() GoogleApigeeSharedflowDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference">GoogleApigeeSharedflowDeploymentTimeoutsOutputReference</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.revisionInput"></a>

```go
func RevisionInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `SharedflowIdInput`<sup>Optional</sup> <a name="SharedflowIdInput" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.sharedflowIdInput"></a>

```go
func SharedflowIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `SharedflowId`<sup>Required</sup> <a name="SharedflowId" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.sharedflowId"></a>

```go
func SharedflowId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeSharedflowDeploymentConfig <a name="GoogleApigeeSharedflowDeploymentConfig" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeesharedflowdeployment"

&googleapigeesharedflowdeployment.GoogleApigeeSharedflowDeploymentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Environment: *string,
	OrgId: *string,
	Revision: *string,
	SharedflowId: *string,
	Id: *string,
	ServiceAccount: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.environment">Environment</a></code> | <code>*string</code> | The resource ID of the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The Apigee Organization associated with the Apigee instance. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.revision">Revision</a></code> | <code>*string</code> | Revision of the Sharedflow to be deployed. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.sharedflowId">SharedflowId</a></code> | <code>*string</code> | Id of the Sharedflow to be deployed. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment#id GoogleApigeeSharedflowDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account represents the identity of the deployed proxy, and determines what permissions it has. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeouts">GoogleApigeeSharedflowDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The resource ID of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment#environment GoogleApigeeSharedflowDeployment#environment}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The Apigee Organization associated with the Apigee instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment#org_id GoogleApigeeSharedflowDeployment#org_id}

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.revision"></a>

```go
Revision *string
```

- *Type:* *string

Revision of the Sharedflow to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment#revision GoogleApigeeSharedflowDeployment#revision}

---

##### `SharedflowId`<sup>Required</sup> <a name="SharedflowId" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.sharedflowId"></a>

```go
SharedflowId *string
```

- *Type:* *string

Id of the Sharedflow to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment#sharedflow_id GoogleApigeeSharedflowDeployment#sharedflow_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment#id GoogleApigeeSharedflowDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account represents the identity of the deployed proxy, and determines what permissions it has.

The format must be {ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment#service_account GoogleApigeeSharedflowDeployment#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentConfig.property.timeouts"></a>

```go
Timeouts GoogleApigeeSharedflowDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeouts">GoogleApigeeSharedflowDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment#timeouts GoogleApigeeSharedflowDeployment#timeouts}

---

### GoogleApigeeSharedflowDeploymentTimeouts <a name="GoogleApigeeSharedflowDeploymentTimeouts" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeesharedflowdeployment"

&googleapigeesharedflowdeployment.GoogleApigeeSharedflowDeploymentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment#create GoogleApigeeSharedflowDeployment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment#delete GoogleApigeeSharedflowDeployment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment#update GoogleApigeeSharedflowDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment#create GoogleApigeeSharedflowDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment#delete GoogleApigeeSharedflowDeployment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_sharedflow_deployment#update GoogleApigeeSharedflowDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeSharedflowDeploymentTimeoutsOutputReference <a name="GoogleApigeeSharedflowDeploymentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeesharedflowdeployment"

googleapigeesharedflowdeployment.NewGoogleApigeeSharedflowDeploymentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeSharedflowDeploymentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSharedflowDeployment.GoogleApigeeSharedflowDeploymentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



