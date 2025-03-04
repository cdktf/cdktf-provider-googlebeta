# `googleComputeHttpHealthCheck` Submodule <a name="`googleComputeHttpHealthCheck` Submodule" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeHttpHealthCheck <a name="GoogleComputeHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check google_compute_http_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputehttphealthcheck"

googlecomputehttphealthcheck.NewGoogleComputeHttpHealthCheck(scope Construct, id *string, config GoogleComputeHttpHealthCheckConfig) GoogleComputeHttpHealthCheck
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig">GoogleComputeHttpHealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig">GoogleComputeHttpHealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetCheckIntervalSec">ResetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetTimeoutSec">ResetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeHttpHealthCheckTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a>

---

##### `ResetCheckIntervalSec` <a name="ResetCheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetCheckIntervalSec"></a>

```go
func ResetCheckIntervalSec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetHealthyThreshold"></a>

```go
func ResetHealthyThreshold()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetHost"></a>

```go
func ResetHost()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetId"></a>

```go
func ResetId()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetRequestPath"></a>

```go
func ResetRequestPath()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeoutSec` <a name="ResetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetTimeoutSec"></a>

```go
func ResetTimeoutSec()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetUnhealthyThreshold"></a>

```go
func ResetUnhealthyThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeHttpHealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputehttphealthcheck"

googlecomputehttphealthcheck.GoogleComputeHttpHealthCheck_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputehttphealthcheck"

googlecomputehttphealthcheck.GoogleComputeHttpHealthCheck_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputehttphealthcheck"

googlecomputehttphealthcheck.GoogleComputeHttpHealthCheck_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputehttphealthcheck"

googlecomputehttphealthcheck.GoogleComputeHttpHealthCheck_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeHttpHealthCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeHttpHealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeHttpHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeHttpHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference">GoogleComputeHttpHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.checkIntervalSecInput">CheckIntervalSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.requestPathInput">RequestPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutSecInput">TimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.requestPath">RequestPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeouts"></a>

```go
func Timeouts() GoogleComputeHttpHealthCheckTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference">GoogleComputeHttpHealthCheckTimeoutsOutputReference</a>

---

##### `CheckIntervalSecInput`<sup>Optional</sup> <a name="CheckIntervalSecInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.checkIntervalSecInput"></a>

```go
func CheckIntervalSecInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.healthyThresholdInput"></a>

```go
func HealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.requestPathInput"></a>

```go
func RequestPathInput() *string
```

- *Type:* *string

---

##### `TimeoutSecInput`<sup>Optional</sup> <a name="TimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutSecInput"></a>

```go
func TimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.unhealthyThresholdInput"></a>

```go
func UnhealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `CheckIntervalSec`<sup>Required</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.checkIntervalSec"></a>

```go
func CheckIntervalSec() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.healthyThreshold"></a>

```go
func HealthyThreshold() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.requestPath"></a>

```go
func RequestPath() *string
```

- *Type:* *string

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutSec"></a>

```go
func TimeoutSec() *f64
```

- *Type:* *f64

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.unhealthyThreshold"></a>

```go
func UnhealthyThreshold() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeHttpHealthCheckConfig <a name="GoogleComputeHttpHealthCheckConfig" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputehttphealthcheck"

&googlecomputehttphealthcheck.GoogleComputeHttpHealthCheckConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CheckIntervalSec: *f64,
	Description: *string,
	HealthyThreshold: *f64,
	Host: *string,
	Id: *string,
	Port: *f64,
	Project: *string,
	RequestPath: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts,
	TimeoutSec: *f64,
	UnhealthyThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>*f64</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.host">Host</a></code> | <code>*string</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#id GoogleComputeHttpHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#project GoogleComputeHttpHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.requestPath">RequestPath</a></code> | <code>*string</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#name GoogleComputeHttpHealthCheck#name}

---

##### `CheckIntervalSec`<sup>Optional</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.checkIntervalSec"></a>

```go
CheckIntervalSec *f64
```

- *Type:* *f64

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#check_interval_sec GoogleComputeHttpHealthCheck#check_interval_sec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#description GoogleComputeHttpHealthCheck#description}

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.healthyThreshold"></a>

```go
HealthyThreshold *f64
```

- *Type:* *f64

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#healthy_threshold GoogleComputeHttpHealthCheck#healthy_threshold}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

The value of the host header in the HTTP health check request.

If
left empty (default value), the public IP on behalf of which this
health check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#host GoogleComputeHttpHealthCheck#host}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#id GoogleComputeHttpHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#port GoogleComputeHttpHealthCheck#port}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#project GoogleComputeHttpHealthCheck#project}.

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.requestPath"></a>

```go
RequestPath *string
```

- *Type:* *string

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#request_path GoogleComputeHttpHealthCheck#request_path}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeHttpHealthCheckTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#timeouts GoogleComputeHttpHealthCheck#timeouts}

---

##### `TimeoutSec`<sup>Optional</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.timeoutSec"></a>

```go
TimeoutSec *f64
```

- *Type:* *f64

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#timeout_sec GoogleComputeHttpHealthCheck#timeout_sec}

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.unhealthyThreshold"></a>

```go
UnhealthyThreshold *f64
```

- *Type:* *f64

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#unhealthy_threshold GoogleComputeHttpHealthCheck#unhealthy_threshold}

---

### GoogleComputeHttpHealthCheckTimeouts <a name="GoogleComputeHttpHealthCheckTimeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputehttphealthcheck"

&googlecomputehttphealthcheck.GoogleComputeHttpHealthCheckTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#create GoogleComputeHttpHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#delete GoogleComputeHttpHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#update GoogleComputeHttpHealthCheck#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#create GoogleComputeHttpHealthCheck#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#delete GoogleComputeHttpHealthCheck#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_http_health_check#update GoogleComputeHttpHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeHttpHealthCheckTimeoutsOutputReference <a name="GoogleComputeHttpHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputehttphealthcheck"

googlecomputehttphealthcheck.NewGoogleComputeHttpHealthCheckTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeHttpHealthCheckTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



