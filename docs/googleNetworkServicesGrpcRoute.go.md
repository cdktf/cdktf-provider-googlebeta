# `googleNetworkServicesGrpcRoute` Submodule <a name="`googleNetworkServicesGrpcRoute` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesGrpcRoute <a name="GoogleNetworkServicesGrpcRoute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route google_network_services_grpc_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRoute(scope Construct, id *string, config GoogleNetworkServicesGrpcRouteConfig) GoogleNetworkServicesGrpcRoute
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig">GoogleNetworkServicesGrpcRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig">GoogleNetworkServicesGrpcRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetGateways">ResetGateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetMeshes">ResetMeshes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkServicesGrpcRouteTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts">GoogleNetworkServicesGrpcRouteTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGateways` <a name="ResetGateways" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetGateways"></a>

```go
func ResetGateways()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMeshes` <a name="ResetMeshes" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetMeshes"></a>

```go
func ResetMeshes()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesGrpcRoute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRoute_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRoute_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRoute_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRoute_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkServicesGrpcRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkServicesGrpcRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkServicesGrpcRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesGrpcRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList">GoogleNetworkServicesGrpcRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference">GoogleNetworkServicesGrpcRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.gatewaysInput">GatewaysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.hostnamesInput">HostnamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.meshesInput">MeshesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.gateways">Gateways</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.meshes">Meshes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.rules"></a>

```go
func Rules() GoogleNetworkServicesGrpcRouteRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList">GoogleNetworkServicesGrpcRouteRulesList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkServicesGrpcRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference">GoogleNetworkServicesGrpcRouteTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GatewaysInput`<sup>Optional</sup> <a name="GatewaysInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.gatewaysInput"></a>

```go
func GatewaysInput() *[]*string
```

- *Type:* *[]*string

---

##### `HostnamesInput`<sup>Optional</sup> <a name="HostnamesInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.hostnamesInput"></a>

```go
func HostnamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MeshesInput`<sup>Optional</sup> <a name="MeshesInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.meshesInput"></a>

```go
func MeshesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Gateways`<sup>Required</sup> <a name="Gateways" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.gateways"></a>

```go
func Gateways() *[]*string
```

- *Type:* *[]*string

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.hostnames"></a>

```go
func Hostnames() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Meshes`<sup>Required</sup> <a name="Meshes" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.meshes"></a>

```go
func Meshes() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRoute.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesGrpcRouteConfig <a name="GoogleNetworkServicesGrpcRouteConfig" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

&googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRouteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Hostnames: *[]*string,
	Name: *string,
	Rules: interface{},
	Description: *string,
	Gateways: *[]*string,
	Id: *string,
	Labels: *map[string]*string,
	Meshes: *[]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | Required. Service hostnames with an optional port for which this route describes traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.name">Name</a></code> | <code>*string</code> | Name of the GrpcRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.description">Description</a></code> | <code>*string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.gateways">Gateways</a></code> | <code>*[]*string</code> | List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#id GoogleNetworkServicesGrpcRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the GrpcRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.meshes">Meshes</a></code> | <code>*[]*string</code> | List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#project GoogleNetworkServicesGrpcRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts">GoogleNetworkServicesGrpcRouteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.hostnames"></a>

```go
Hostnames *[]*string
```

- *Type:* *[]*string

Required. Service hostnames with an optional port for which this route describes traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#hostnames GoogleNetworkServicesGrpcRoute#hostnames}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the GrpcRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#name GoogleNetworkServicesGrpcRoute#name}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#rules GoogleNetworkServicesGrpcRoute#rules}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#description GoogleNetworkServicesGrpcRoute#description}

---

##### `Gateways`<sup>Optional</sup> <a name="Gateways" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.gateways"></a>

```go
Gateways *[]*string
```

- *Type:* *[]*string

List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#gateways GoogleNetworkServicesGrpcRoute#gateways}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#id GoogleNetworkServicesGrpcRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the GrpcRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#labels GoogleNetworkServicesGrpcRoute#labels}

---

##### `Meshes`<sup>Optional</sup> <a name="Meshes" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.meshes"></a>

```go
Meshes *[]*string
```

- *Type:* *[]*string

List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#meshes GoogleNetworkServicesGrpcRoute#meshes}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#project GoogleNetworkServicesGrpcRoute#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkServicesGrpcRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts">GoogleNetworkServicesGrpcRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#timeouts GoogleNetworkServicesGrpcRoute#timeouts}

---

### GoogleNetworkServicesGrpcRouteRules <a name="GoogleNetworkServicesGrpcRouteRules" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

&googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRouteRules {
	Action: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction,
	Matches: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction">GoogleNetworkServicesGrpcRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules.property.matches">Matches</a></code> | <code>interface{}</code> | matches block. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules.property.action"></a>

```go
Action GoogleNetworkServicesGrpcRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction">GoogleNetworkServicesGrpcRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#action GoogleNetworkServicesGrpcRoute#action}

---

##### `Matches`<sup>Optional</sup> <a name="Matches" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRules.property.matches"></a>

```go
Matches interface{}
```

- *Type:* interface{}

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#matches GoogleNetworkServicesGrpcRoute#matches}

---

### GoogleNetworkServicesGrpcRouteRulesAction <a name="GoogleNetworkServicesGrpcRouteRulesAction" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

&googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRouteRulesAction {
	Destinations: interface{},
	FaultInjectionPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy,
	RetryPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy,
	Timeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.destinations">Destinations</a></code> | <code>interface{}</code> | destinations block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.faultInjectionPolicy">FaultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a></code> | fault_injection_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.timeout">Timeout</a></code> | <code>*string</code> | Specifies the timeout for selected route. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#destinations GoogleNetworkServicesGrpcRoute#destinations}

---

##### `FaultInjectionPolicy`<sup>Optional</sup> <a name="FaultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.faultInjectionPolicy"></a>

```go
FaultInjectionPolicy GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

fault_injection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#fault_injection_policy GoogleNetworkServicesGrpcRoute#fault_injection_policy}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.retryPolicy"></a>

```go
RetryPolicy GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#retry_policy GoogleNetworkServicesGrpcRoute#retry_policy}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Specifies the timeout for selected route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#timeout GoogleNetworkServicesGrpcRoute#timeout}

---

### GoogleNetworkServicesGrpcRouteRulesActionDestinations <a name="GoogleNetworkServicesGrpcRouteRulesActionDestinations" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

&googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRouteRulesActionDestinations {
	ServiceName: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations.property.serviceName">ServiceName</a></code> | <code>*string</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations.property.weight">Weight</a></code> | <code>*f64</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#service_name GoogleNetworkServicesGrpcRoute#service_name}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinations.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#weight GoogleNetworkServicesGrpcRoute#weight}

---

### GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy <a name="GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

&googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy {
	Abort: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort,
	Delay: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.abort">Abort</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a></code> | abort block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.delay">Delay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a></code> | delay block. |

---

##### `Abort`<sup>Optional</sup> <a name="Abort" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.abort"></a>

```go
Abort GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

abort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#abort GoogleNetworkServicesGrpcRoute#abort}

---

##### `Delay`<sup>Optional</sup> <a name="Delay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.delay"></a>

```go
Delay GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

delay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#delay GoogleNetworkServicesGrpcRoute#delay}

---

### GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort <a name="GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

&googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort {
	HttpStatus: *f64,
	Percentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus">HttpStatus</a></code> | <code>*f64</code> | The HTTP status code used to abort the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.percentage">Percentage</a></code> | <code>*f64</code> | The percentage of traffic which will be aborted. |

---

##### `HttpStatus`<sup>Optional</sup> <a name="HttpStatus" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus"></a>

```go
HttpStatus *f64
```

- *Type:* *f64

The HTTP status code used to abort the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#http_status GoogleNetworkServicesGrpcRoute#http_status}

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.percentage"></a>

```go
Percentage *f64
```

- *Type:* *f64

The percentage of traffic which will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#percentage GoogleNetworkServicesGrpcRoute#percentage}

---

### GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay <a name="GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

&googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay {
	FixedDelay: *string,
	Percentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay">FixedDelay</a></code> | <code>*string</code> | Specify a fixed delay before forwarding the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.percentage">Percentage</a></code> | <code>*f64</code> | The percentage of traffic on which delay will be injected. |

---

##### `FixedDelay`<sup>Optional</sup> <a name="FixedDelay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay"></a>

```go
FixedDelay *string
```

- *Type:* *string

Specify a fixed delay before forwarding the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#fixed_delay GoogleNetworkServicesGrpcRoute#fixed_delay}

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.percentage"></a>

```go
Percentage *f64
```

- *Type:* *f64

The percentage of traffic on which delay will be injected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#percentage GoogleNetworkServicesGrpcRoute#percentage}

---

### GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy <a name="GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

&googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy {
	NumRetries: *f64,
	RetryConditions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy.property.numRetries">NumRetries</a></code> | <code>*f64</code> | Specifies the allowed number of retries. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy.property.retryConditions">RetryConditions</a></code> | <code>*[]*string</code> | Specifies one or more conditions when this retry policy applies. Possible values: ["connect-failure", "refused-stream", "cancelled", "deadline-exceeded", "resource-exhausted", "unavailable"]. |

---

##### `NumRetries`<sup>Optional</sup> <a name="NumRetries" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy.property.numRetries"></a>

```go
NumRetries *f64
```

- *Type:* *f64

Specifies the allowed number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#num_retries GoogleNetworkServicesGrpcRoute#num_retries}

---

##### `RetryConditions`<sup>Optional</sup> <a name="RetryConditions" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy.property.retryConditions"></a>

```go
RetryConditions *[]*string
```

- *Type:* *[]*string

Specifies one or more conditions when this retry policy applies. Possible values: ["connect-failure", "refused-stream", "cancelled", "deadline-exceeded", "resource-exhausted", "unavailable"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#retry_conditions GoogleNetworkServicesGrpcRoute#retry_conditions}

---

### GoogleNetworkServicesGrpcRouteRulesMatches <a name="GoogleNetworkServicesGrpcRouteRulesMatches" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

&googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRouteRulesMatches {
	Headers: interface{},
	Method: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches.property.method">Method</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod">GoogleNetworkServicesGrpcRouteRulesMatchesMethod</a></code> | method block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#headers GoogleNetworkServicesGrpcRoute#headers}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatches.property.method"></a>

```go
Method GoogleNetworkServicesGrpcRouteRulesMatchesMethod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod">GoogleNetworkServicesGrpcRouteRulesMatchesMethod</a>

method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#method GoogleNetworkServicesGrpcRoute#method}

---

### GoogleNetworkServicesGrpcRouteRulesMatchesHeaders <a name="GoogleNetworkServicesGrpcRouteRulesMatchesHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

&googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders {
	Key: *string,
	Value: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders.property.key">Key</a></code> | <code>*string</code> | Required. The key of the header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders.property.value">Value</a></code> | <code>*string</code> | Required. The value of the header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders.property.type">Type</a></code> | <code>*string</code> | The type of match. Default value: "EXACT" Possible values: ["TYPE_UNSPECIFIED", "EXACT", "REGULAR_EXPRESSION"]. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders.property.key"></a>

```go
Key *string
```

- *Type:* *string

Required. The key of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#key GoogleNetworkServicesGrpcRoute#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

Required. The value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#value GoogleNetworkServicesGrpcRoute#value}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeaders.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of match. Default value: "EXACT" Possible values: ["TYPE_UNSPECIFIED", "EXACT", "REGULAR_EXPRESSION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#type GoogleNetworkServicesGrpcRoute#type}

---

### GoogleNetworkServicesGrpcRouteRulesMatchesMethod <a name="GoogleNetworkServicesGrpcRouteRulesMatchesMethod" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

&googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod {
	GrpcMethod: *string,
	GrpcService: *string,
	CaseSensitive: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod.property.grpcMethod">GrpcMethod</a></code> | <code>*string</code> | Required. Name of the method to match against. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod.property.grpcService">GrpcService</a></code> | <code>*string</code> | Required. Name of the service to match against. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod.property.caseSensitive">CaseSensitive</a></code> | <code>interface{}</code> | Specifies that matches are case sensitive. The default value is true. |

---

##### `GrpcMethod`<sup>Required</sup> <a name="GrpcMethod" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod.property.grpcMethod"></a>

```go
GrpcMethod *string
```

- *Type:* *string

Required. Name of the method to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#grpc_method GoogleNetworkServicesGrpcRoute#grpc_method}

---

##### `GrpcService`<sup>Required</sup> <a name="GrpcService" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod.property.grpcService"></a>

```go
GrpcService *string
```

- *Type:* *string

Required. Name of the service to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#grpc_service GoogleNetworkServicesGrpcRoute#grpc_service}

---

##### `CaseSensitive`<sup>Optional</sup> <a name="CaseSensitive" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod.property.caseSensitive"></a>

```go
CaseSensitive interface{}
```

- *Type:* interface{}

Specifies that matches are case sensitive. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#case_sensitive GoogleNetworkServicesGrpcRoute#case_sensitive}

---

### GoogleNetworkServicesGrpcRouteTimeouts <a name="GoogleNetworkServicesGrpcRouteTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

&googlenetworkservicesgrpcroute.GoogleNetworkServicesGrpcRouteTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#create GoogleNetworkServicesGrpcRoute#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#delete GoogleNetworkServicesGrpcRoute#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#update GoogleNetworkServicesGrpcRoute#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#create GoogleNetworkServicesGrpcRoute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#delete GoogleNetworkServicesGrpcRoute#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_grpc_route#update GoogleNetworkServicesGrpcRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesGrpcRouteRulesActionDestinationsList <a name="GoogleNetworkServicesGrpcRouteRulesActionDestinationsList" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRouteRulesActionDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesGrpcRouteRulesActionDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus">ResetHttpStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpStatus` <a name="ResetHttpStatus" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus"></a>

```go
func ResetHttpStatus()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage"></a>

```go
func ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput">HttpStatusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput">PercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus">HttpStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage">Percentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpStatusInput`<sup>Optional</sup> <a name="HttpStatusInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput"></a>

```go
func HttpStatusInput() *f64
```

- *Type:* *f64

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput"></a>

```go
func PercentageInput() *f64
```

- *Type:* *f64

---

##### `HttpStatus`<sup>Required</sup> <a name="HttpStatus" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus"></a>

```go
func HttpStatus() *f64
```

- *Type:* *f64

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage"></a>

```go
func Percentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

---


### GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay">ResetFixedDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixedDelay` <a name="ResetFixedDelay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay"></a>

```go
func ResetFixedDelay()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage"></a>

```go
func ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput">FixedDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput">PercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay">FixedDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage">Percentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedDelayInput`<sup>Optional</sup> <a name="FixedDelayInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput"></a>

```go
func FixedDelayInput() *string
```

- *Type:* *string

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput"></a>

```go
func PercentageInput() *f64
```

- *Type:* *f64

---

##### `FixedDelay`<sup>Required</sup> <a name="FixedDelay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay"></a>

```go
func FixedDelay() *string
```

- *Type:* *string

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage"></a>

```go
func Percentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

---


### GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort">PutAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay">PutDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort">ResetAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay">ResetDelay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbort` <a name="PutAbort" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort"></a>

```go
func PutAbort(value GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `PutDelay` <a name="PutDelay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay"></a>

```go
func PutDelay(value GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `ResetAbort` <a name="ResetAbort" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort"></a>

```go
func ResetAbort()
```

##### `ResetDelay` <a name="ResetDelay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay"></a>

```go
func ResetDelay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abort">Abort</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delay">Delay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput">AbortInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput">DelayInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Abort`<sup>Required</sup> <a name="Abort" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abort"></a>

```go
func Abort() GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference</a>

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delay"></a>

```go
func Delay() GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference</a>

---

##### `AbortInput`<sup>Optional</sup> <a name="AbortInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput"></a>

```go
func AbortInput() GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `DelayInput`<sup>Optional</sup> <a name="DelayInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput"></a>

```go
func DelayInput() GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

---


### GoogleNetworkServicesGrpcRouteRulesActionOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesActionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRouteRulesActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesGrpcRouteRulesActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy">PutFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetFaultInjectionPolicy">ResetFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFaultInjectionPolicy` <a name="PutFaultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy"></a>

```go
func PutFaultInjectionPolicy(value GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy"></a>

```go
func PutRetryPolicy(value GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy</a>

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetFaultInjectionPolicy` <a name="ResetFaultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetFaultInjectionPolicy"></a>

```go
func ResetFaultInjectionPolicy()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetRetryPolicy"></a>

```go
func ResetRetryPolicy()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList">GoogleNetworkServicesGrpcRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicy">FaultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicyInput">FaultInjectionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction">GoogleNetworkServicesGrpcRouteRulesAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.destinations"></a>

```go
func Destinations() GoogleNetworkServicesGrpcRouteRulesActionDestinationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionDestinationsList">GoogleNetworkServicesGrpcRouteRulesActionDestinationsList</a>

---

##### `FaultInjectionPolicy`<sup>Required</sup> <a name="FaultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicy"></a>

```go
func FaultInjectionPolicy() GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicy"></a>

```go
func RetryPolicy() GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `FaultInjectionPolicyInput`<sup>Optional</sup> <a name="FaultInjectionPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicyInput"></a>

```go
func FaultInjectionPolicyInput() GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicyInput"></a>

```go
func RetryPolicyInput() GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesGrpcRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction">GoogleNetworkServicesGrpcRouteRulesAction</a>

---


### GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetNumRetries">ResetNumRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetRetryConditions">ResetRetryConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumRetries` <a name="ResetNumRetries" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetNumRetries"></a>

```go
func ResetNumRetries()
```

##### `ResetRetryConditions` <a name="ResetRetryConditions" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetRetryConditions"></a>

```go
func ResetRetryConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput">NumRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput">RetryConditionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetries">NumRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditions">RetryConditions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumRetriesInput`<sup>Optional</sup> <a name="NumRetriesInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput"></a>

```go
func NumRetriesInput() *f64
```

- *Type:* *f64

---

##### `RetryConditionsInput`<sup>Optional</sup> <a name="RetryConditionsInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput"></a>

```go
func RetryConditionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NumRetries`<sup>Required</sup> <a name="NumRetries" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetries"></a>

```go
func NumRetries() *f64
```

- *Type:* *f64

---

##### `RetryConditions`<sup>Required</sup> <a name="RetryConditions" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditions"></a>

```go
func RetryConditions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy">GoogleNetworkServicesGrpcRouteRulesActionRetryPolicy</a>

---


### GoogleNetworkServicesGrpcRouteRulesList <a name="GoogleNetworkServicesGrpcRouteRulesList" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRouteRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesGrpcRouteRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesGrpcRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList <a name="GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRouteRulesMatchesHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesGrpcRouteRulesMatchesList <a name="GoogleNetworkServicesGrpcRouteRulesMatchesList" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRouteRulesMatchesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesGrpcRouteRulesMatchesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resetCaseSensitive">ResetCaseSensitive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaseSensitive` <a name="ResetCaseSensitive" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resetCaseSensitive"></a>

```go
func ResetCaseSensitive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitiveInput">CaseSensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethodInput">GrpcMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcServiceInput">GrpcServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitive">CaseSensitive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethod">GrpcMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcService">GrpcService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod">GoogleNetworkServicesGrpcRouteRulesMatchesMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaseSensitiveInput`<sup>Optional</sup> <a name="CaseSensitiveInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitiveInput"></a>

```go
func CaseSensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `GrpcMethodInput`<sup>Optional</sup> <a name="GrpcMethodInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethodInput"></a>

```go
func GrpcMethodInput() *string
```

- *Type:* *string

---

##### `GrpcServiceInput`<sup>Optional</sup> <a name="GrpcServiceInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcServiceInput"></a>

```go
func GrpcServiceInput() *string
```

- *Type:* *string

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitive"></a>

```go
func CaseSensitive() interface{}
```

- *Type:* interface{}

---

##### `GrpcMethod`<sup>Required</sup> <a name="GrpcMethod" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethod"></a>

```go
func GrpcMethod() *string
```

- *Type:* *string

---

##### `GrpcService`<sup>Required</sup> <a name="GrpcService" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcService"></a>

```go
func GrpcService() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesGrpcRouteRulesMatchesMethod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod">GoogleNetworkServicesGrpcRouteRulesMatchesMethod</a>

---


### GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRouteRulesMatchesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod">PutMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMethod` <a name="PutMethod" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod"></a>

```go
func PutMethod(value GoogleNetworkServicesGrpcRouteRulesMatchesMethod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod">GoogleNetworkServicesGrpcRouteRulesMatchesMethod</a>

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.resetMethod"></a>

```go
func ResetMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList">GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.method">Method</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference">GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.methodInput">MethodInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod">GoogleNetworkServicesGrpcRouteRulesMatchesMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.headers"></a>

```go
func Headers() GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList">GoogleNetworkServicesGrpcRouteRulesMatchesHeadersList</a>

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.method"></a>

```go
func Method() GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference">GoogleNetworkServicesGrpcRouteRulesMatchesMethodOutputReference</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.methodInput"></a>

```go
func MethodInput() GoogleNetworkServicesGrpcRouteRulesMatchesMethod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesMethod">GoogleNetworkServicesGrpcRouteRulesMatchesMethod</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesGrpcRouteRulesOutputReference <a name="GoogleNetworkServicesGrpcRouteRulesOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRouteRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesGrpcRouteRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.putMatches">PutMatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.resetMatches">ResetMatches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.putAction"></a>

```go
func PutAction(value GoogleNetworkServicesGrpcRouteRulesAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction">GoogleNetworkServicesGrpcRouteRulesAction</a>

---

##### `PutMatches` <a name="PutMatches" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.putMatches"></a>

```go
func PutMatches(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetMatches` <a name="ResetMatches" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.resetMatches"></a>

```go
func ResetMatches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference">GoogleNetworkServicesGrpcRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.matches">Matches</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList">GoogleNetworkServicesGrpcRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction">GoogleNetworkServicesGrpcRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.matchesInput">MatchesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.action"></a>

```go
func Action() GoogleNetworkServicesGrpcRouteRulesActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesActionOutputReference">GoogleNetworkServicesGrpcRouteRulesActionOutputReference</a>

---

##### `Matches`<sup>Required</sup> <a name="Matches" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.matches"></a>

```go
func Matches() GoogleNetworkServicesGrpcRouteRulesMatchesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesMatchesList">GoogleNetworkServicesGrpcRouteRulesMatchesList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() GoogleNetworkServicesGrpcRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesAction">GoogleNetworkServicesGrpcRouteRulesAction</a>

---

##### `MatchesInput`<sup>Optional</sup> <a name="MatchesInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.matchesInput"></a>

```go
func MatchesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesGrpcRouteTimeoutsOutputReference <a name="GoogleNetworkServicesGrpcRouteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkservicesgrpcroute"

googlenetworkservicesgrpcroute.NewGoogleNetworkServicesGrpcRouteTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesGrpcRouteTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGrpcRoute.GoogleNetworkServicesGrpcRouteTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



