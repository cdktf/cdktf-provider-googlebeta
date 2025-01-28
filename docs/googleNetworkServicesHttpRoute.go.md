# `googleNetworkServicesHttpRoute` Submodule <a name="`googleNetworkServicesHttpRoute` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesHttpRoute <a name="GoogleNetworkServicesHttpRoute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route google_network_services_http_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRoute(scope Construct, id *string, config GoogleNetworkServicesHttpRouteConfig) GoogleNetworkServicesHttpRoute
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig">GoogleNetworkServicesHttpRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig">GoogleNetworkServicesHttpRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetGateways">ResetGateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetMeshes">ResetMeshes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkServicesHttpRouteTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts">GoogleNetworkServicesHttpRouteTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGateways` <a name="ResetGateways" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetGateways"></a>

```go
func ResetGateways()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMeshes` <a name="ResetMeshes" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetMeshes"></a>

```go
func ResetMeshes()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesHttpRoute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.GoogleNetworkServicesHttpRoute_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.GoogleNetworkServicesHttpRoute_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.GoogleNetworkServicesHttpRoute_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.GoogleNetworkServicesHttpRoute_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkServicesHttpRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkServicesHttpRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkServicesHttpRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesHttpRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList">GoogleNetworkServicesHttpRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference">GoogleNetworkServicesHttpRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.gatewaysInput">GatewaysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.hostnamesInput">HostnamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.meshesInput">MeshesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.gateways">Gateways</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.meshes">Meshes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.rules"></a>

```go
func Rules() GoogleNetworkServicesHttpRouteRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList">GoogleNetworkServicesHttpRouteRulesList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkServicesHttpRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference">GoogleNetworkServicesHttpRouteTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GatewaysInput`<sup>Optional</sup> <a name="GatewaysInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.gatewaysInput"></a>

```go
func GatewaysInput() *[]*string
```

- *Type:* *[]*string

---

##### `HostnamesInput`<sup>Optional</sup> <a name="HostnamesInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.hostnamesInput"></a>

```go
func HostnamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MeshesInput`<sup>Optional</sup> <a name="MeshesInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.meshesInput"></a>

```go
func MeshesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Gateways`<sup>Required</sup> <a name="Gateways" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.gateways"></a>

```go
func Gateways() *[]*string
```

- *Type:* *[]*string

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.hostnames"></a>

```go
func Hostnames() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Meshes`<sup>Required</sup> <a name="Meshes" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.meshes"></a>

```go
func Meshes() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRoute.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesHttpRouteConfig <a name="GoogleNetworkServicesHttpRouteConfig" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteConfig {
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
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.name">Name</a></code> | <code>*string</code> | Name of the HttpRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.description">Description</a></code> | <code>*string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.gateways">Gateways</a></code> | <code>*[]*string</code> | Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#id GoogleNetworkServicesHttpRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the HttpRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.meshes">Meshes</a></code> | <code>*[]*string</code> | Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#project GoogleNetworkServicesHttpRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts">GoogleNetworkServicesHttpRouteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.hostnames"></a>

```go
Hostnames *[]*string
```

- *Type:* *[]*string

Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#hostnames GoogleNetworkServicesHttpRoute#hostnames}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the HttpRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#name GoogleNetworkServicesHttpRoute#name}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#rules GoogleNetworkServicesHttpRoute#rules}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#description GoogleNetworkServicesHttpRoute#description}

---

##### `Gateways`<sup>Optional</sup> <a name="Gateways" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.gateways"></a>

```go
Gateways *[]*string
```

- *Type:* *[]*string

Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#gateways GoogleNetworkServicesHttpRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#id GoogleNetworkServicesHttpRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the HttpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#labels GoogleNetworkServicesHttpRoute#labels}

---

##### `Meshes`<sup>Optional</sup> <a name="Meshes" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.meshes"></a>

```go
Meshes *[]*string
```

- *Type:* *[]*string

Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>.
The attached Mesh should be of a type SIDECAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#meshes GoogleNetworkServicesHttpRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#project GoogleNetworkServicesHttpRoute#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkServicesHttpRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts">GoogleNetworkServicesHttpRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#timeouts GoogleNetworkServicesHttpRoute#timeouts}

---

### GoogleNetworkServicesHttpRouteRules <a name="GoogleNetworkServicesHttpRouteRules" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRules {
	Action: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction,
	Matches: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction">GoogleNetworkServicesHttpRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules.property.matches">Matches</a></code> | <code>interface{}</code> | matches block. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules.property.action"></a>

```go
Action GoogleNetworkServicesHttpRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction">GoogleNetworkServicesHttpRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#action GoogleNetworkServicesHttpRoute#action}

---

##### `Matches`<sup>Optional</sup> <a name="Matches" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRules.property.matches"></a>

```go
Matches interface{}
```

- *Type:* interface{}

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#matches GoogleNetworkServicesHttpRoute#matches}

---

### GoogleNetworkServicesHttpRouteRulesAction <a name="GoogleNetworkServicesHttpRouteRulesAction" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesAction {
	CorsPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy,
	Destinations: interface{},
	FaultInjectionPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy,
	Redirect: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect,
	RequestHeaderModifier: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier,
	RequestMirrorPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy,
	ResponseHeaderModifier: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier,
	RetryPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy,
	Timeout: *string,
	UrlRewrite: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.corsPolicy">CorsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy">GoogleNetworkServicesHttpRouteRulesActionCorsPolicy</a></code> | cors_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.destinations">Destinations</a></code> | <code>interface{}</code> | destinations block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.faultInjectionPolicy">FaultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a></code> | fault_injection_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect">GoogleNetworkServicesHttpRouteRulesActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.requestHeaderModifier">RequestHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier</a></code> | request_header_modifier block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.requestMirrorPolicy">RequestMirrorPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a></code> | request_mirror_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.responseHeaderModifier">ResponseHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier</a></code> | response_header_modifier block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy">GoogleNetworkServicesHttpRouteRulesActionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.timeout">Timeout</a></code> | <code>*string</code> | Specifies the timeout for selected route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.urlRewrite">UrlRewrite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite">GoogleNetworkServicesHttpRouteRulesActionUrlRewrite</a></code> | url_rewrite block. |

---

##### `CorsPolicy`<sup>Optional</sup> <a name="CorsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.corsPolicy"></a>

```go
CorsPolicy GoogleNetworkServicesHttpRouteRulesActionCorsPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy">GoogleNetworkServicesHttpRouteRulesActionCorsPolicy</a>

cors_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#cors_policy GoogleNetworkServicesHttpRoute#cors_policy}

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#destinations GoogleNetworkServicesHttpRoute#destinations}

---

##### `FaultInjectionPolicy`<sup>Optional</sup> <a name="FaultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.faultInjectionPolicy"></a>

```go
FaultInjectionPolicy GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

fault_injection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#fault_injection_policy GoogleNetworkServicesHttpRoute#fault_injection_policy}

---

##### `Redirect`<sup>Optional</sup> <a name="Redirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.redirect"></a>

```go
Redirect GoogleNetworkServicesHttpRouteRulesActionRedirect
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect">GoogleNetworkServicesHttpRouteRulesActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#redirect GoogleNetworkServicesHttpRoute#redirect}

---

##### `RequestHeaderModifier`<sup>Optional</sup> <a name="RequestHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.requestHeaderModifier"></a>

```go
RequestHeaderModifier GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

request_header_modifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#request_header_modifier GoogleNetworkServicesHttpRoute#request_header_modifier}

---

##### `RequestMirrorPolicy`<sup>Optional</sup> <a name="RequestMirrorPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.requestMirrorPolicy"></a>

```go
RequestMirrorPolicy GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

request_mirror_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#request_mirror_policy GoogleNetworkServicesHttpRoute#request_mirror_policy}

---

##### `ResponseHeaderModifier`<sup>Optional</sup> <a name="ResponseHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.responseHeaderModifier"></a>

```go
ResponseHeaderModifier GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

response_header_modifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#response_header_modifier GoogleNetworkServicesHttpRoute#response_header_modifier}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.retryPolicy"></a>

```go
RetryPolicy GoogleNetworkServicesHttpRouteRulesActionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy">GoogleNetworkServicesHttpRouteRulesActionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#retry_policy GoogleNetworkServicesHttpRoute#retry_policy}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Specifies the timeout for selected route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#timeout GoogleNetworkServicesHttpRoute#timeout}

---

##### `UrlRewrite`<sup>Optional</sup> <a name="UrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction.property.urlRewrite"></a>

```go
UrlRewrite GoogleNetworkServicesHttpRouteRulesActionUrlRewrite
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite">GoogleNetworkServicesHttpRouteRulesActionUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#url_rewrite GoogleNetworkServicesHttpRoute#url_rewrite}

---

### GoogleNetworkServicesHttpRouteRulesActionCorsPolicy <a name="GoogleNetworkServicesHttpRouteRulesActionCorsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy {
	AllowCredentials: interface{},
	AllowHeaders: *[]*string,
	AllowMethods: *[]*string,
	AllowOriginRegexes: *[]*string,
	AllowOrigins: *[]*string,
	Disabled: interface{},
	ExposeHeaders: *[]*string,
	MaxAge: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowCredentials">AllowCredentials</a></code> | <code>interface{}</code> | In response to a preflight request, setting this to true indicates that the actual request can include user credentials. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowHeaders">AllowHeaders</a></code> | <code>*[]*string</code> | Specifies the content for Access-Control-Allow-Headers header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowMethods">AllowMethods</a></code> | <code>*[]*string</code> | Specifies the content for Access-Control-Allow-Methods header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOriginRegexes">AllowOriginRegexes</a></code> | <code>*[]*string</code> | Specifies the regular expression patterns that match allowed origins. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOrigins">AllowOrigins</a></code> | <code>*[]*string</code> | Specifies the list of origins that will be allowed to do CORS requests. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.disabled">Disabled</a></code> | <code>interface{}</code> | If true, the CORS policy is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.exposeHeaders">ExposeHeaders</a></code> | <code>*[]*string</code> | Specifies the content for Access-Control-Expose-Headers header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.maxAge">MaxAge</a></code> | <code>*string</code> | Specifies how long result of a preflight request can be cached in seconds. |

---

##### `AllowCredentials`<sup>Optional</sup> <a name="AllowCredentials" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowCredentials"></a>

```go
AllowCredentials interface{}
```

- *Type:* interface{}

In response to a preflight request, setting this to true indicates that the actual request can include user credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#allow_credentials GoogleNetworkServicesHttpRoute#allow_credentials}

---

##### `AllowHeaders`<sup>Optional</sup> <a name="AllowHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowHeaders"></a>

```go
AllowHeaders *[]*string
```

- *Type:* *[]*string

Specifies the content for Access-Control-Allow-Headers header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#allow_headers GoogleNetworkServicesHttpRoute#allow_headers}

---

##### `AllowMethods`<sup>Optional</sup> <a name="AllowMethods" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowMethods"></a>

```go
AllowMethods *[]*string
```

- *Type:* *[]*string

Specifies the content for Access-Control-Allow-Methods header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#allow_methods GoogleNetworkServicesHttpRoute#allow_methods}

---

##### `AllowOriginRegexes`<sup>Optional</sup> <a name="AllowOriginRegexes" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOriginRegexes"></a>

```go
AllowOriginRegexes *[]*string
```

- *Type:* *[]*string

Specifies the regular expression patterns that match allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#allow_origin_regexes GoogleNetworkServicesHttpRoute#allow_origin_regexes}

---

##### `AllowOrigins`<sup>Optional</sup> <a name="AllowOrigins" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOrigins"></a>

```go
AllowOrigins *[]*string
```

- *Type:* *[]*string

Specifies the list of origins that will be allowed to do CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#allow_origins GoogleNetworkServicesHttpRoute#allow_origins}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

If true, the CORS policy is disabled.

The default value is false, which indicates that the CORS policy is in effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#disabled GoogleNetworkServicesHttpRoute#disabled}

---

##### `ExposeHeaders`<sup>Optional</sup> <a name="ExposeHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.exposeHeaders"></a>

```go
ExposeHeaders *[]*string
```

- *Type:* *[]*string

Specifies the content for Access-Control-Expose-Headers header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#expose_headers GoogleNetworkServicesHttpRoute#expose_headers}

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy.property.maxAge"></a>

```go
MaxAge *string
```

- *Type:* *string

Specifies how long result of a preflight request can be cached in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#max_age GoogleNetworkServicesHttpRoute#max_age}

---

### GoogleNetworkServicesHttpRouteRulesActionDestinations <a name="GoogleNetworkServicesHttpRouteRulesActionDestinations" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesActionDestinations {
	ServiceName: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations.property.serviceName">ServiceName</a></code> | <code>*string</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations.property.weight">Weight</a></code> | <code>*f64</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#service_name GoogleNetworkServicesHttpRoute#service_name}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinations.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#weight GoogleNetworkServicesHttpRoute#weight}

---

### GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy <a name="GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy {
	Abort: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort,
	Delay: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.abort">Abort</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a></code> | abort block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.delay">Delay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a></code> | delay block. |

---

##### `Abort`<sup>Optional</sup> <a name="Abort" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.abort"></a>

```go
Abort GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

abort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#abort GoogleNetworkServicesHttpRoute#abort}

---

##### `Delay`<sup>Optional</sup> <a name="Delay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.delay"></a>

```go
Delay GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

delay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#delay GoogleNetworkServicesHttpRoute#delay}

---

### GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort <a name="GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort {
	HttpStatus: *f64,
	Percentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus">HttpStatus</a></code> | <code>*f64</code> | The HTTP status code used to abort the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.percentage">Percentage</a></code> | <code>*f64</code> | The percentage of traffic which will be aborted. |

---

##### `HttpStatus`<sup>Optional</sup> <a name="HttpStatus" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus"></a>

```go
HttpStatus *f64
```

- *Type:* *f64

The HTTP status code used to abort the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#http_status GoogleNetworkServicesHttpRoute#http_status}

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.percentage"></a>

```go
Percentage *f64
```

- *Type:* *f64

The percentage of traffic which will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#percentage GoogleNetworkServicesHttpRoute#percentage}

---

### GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay <a name="GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay {
	FixedDelay: *string,
	Percentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay">FixedDelay</a></code> | <code>*string</code> | Specify a fixed delay before forwarding the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.percentage">Percentage</a></code> | <code>*f64</code> | The percentage of traffic on which delay will be injected. |

---

##### `FixedDelay`<sup>Optional</sup> <a name="FixedDelay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay"></a>

```go
FixedDelay *string
```

- *Type:* *string

Specify a fixed delay before forwarding the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#fixed_delay GoogleNetworkServicesHttpRoute#fixed_delay}

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.percentage"></a>

```go
Percentage *f64
```

- *Type:* *f64

The percentage of traffic on which delay will be injected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#percentage GoogleNetworkServicesHttpRoute#percentage}

---

### GoogleNetworkServicesHttpRouteRulesActionRedirect <a name="GoogleNetworkServicesHttpRouteRulesActionRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesActionRedirect {
	HostRedirect: *string,
	HttpsRedirect: interface{},
	PathRedirect: *string,
	PortRedirect: *f64,
	PrefixRewrite: *string,
	ResponseCode: *string,
	StripQuery: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.hostRedirect">HostRedirect</a></code> | <code>*string</code> | The host that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.httpsRedirect">HttpsRedirect</a></code> | <code>interface{}</code> | If set to true, the URL scheme in the redirected request is set to https. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.pathRedirect">PathRedirect</a></code> | <code>*string</code> | The path that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.portRedirect">PortRedirect</a></code> | <code>*f64</code> | The port that will be used in the redirected request instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.prefixRewrite">PrefixRewrite</a></code> | <code>*string</code> | Indicates that during redirection, the matched prefix (or path) should be swapped with this value. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.responseCode">ResponseCode</a></code> | <code>*string</code> | The HTTP Status code to use for the redirect. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.stripQuery">StripQuery</a></code> | <code>interface{}</code> | If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. |

---

##### `HostRedirect`<sup>Optional</sup> <a name="HostRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.hostRedirect"></a>

```go
HostRedirect *string
```

- *Type:* *string

The host that will be used in the redirect response instead of the one that was supplied in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#host_redirect GoogleNetworkServicesHttpRoute#host_redirect}

---

##### `HttpsRedirect`<sup>Optional</sup> <a name="HttpsRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.httpsRedirect"></a>

```go
HttpsRedirect interface{}
```

- *Type:* interface{}

If set to true, the URL scheme in the redirected request is set to https.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#https_redirect GoogleNetworkServicesHttpRoute#https_redirect}

---

##### `PathRedirect`<sup>Optional</sup> <a name="PathRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.pathRedirect"></a>

```go
PathRedirect *string
```

- *Type:* *string

The path that will be used in the redirect response instead of the one that was supplied in the request.

pathRedirect can not be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#path_redirect GoogleNetworkServicesHttpRoute#path_redirect}

---

##### `PortRedirect`<sup>Optional</sup> <a name="PortRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.portRedirect"></a>

```go
PortRedirect *f64
```

- *Type:* *f64

The port that will be used in the redirected request instead of the one that was supplied in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#port_redirect GoogleNetworkServicesHttpRoute#port_redirect}

---

##### `PrefixRewrite`<sup>Optional</sup> <a name="PrefixRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.prefixRewrite"></a>

```go
PrefixRewrite *string
```

- *Type:* *string

Indicates that during redirection, the matched prefix (or path) should be swapped with this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#prefix_rewrite GoogleNetworkServicesHttpRoute#prefix_rewrite}

---

##### `ResponseCode`<sup>Optional</sup> <a name="ResponseCode" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.responseCode"></a>

```go
ResponseCode *string
```

- *Type:* *string

The HTTP Status code to use for the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#response_code GoogleNetworkServicesHttpRoute#response_code}

---

##### `StripQuery`<sup>Optional</sup> <a name="StripQuery" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect.property.stripQuery"></a>

```go
StripQuery interface{}
```

- *Type:* interface{}

If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#strip_query GoogleNetworkServicesHttpRoute#strip_query}

---

### GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier <a name="GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier {
	Add: *map[string]*string,
	Remove: *[]*string,
	Set: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.add">Add</a></code> | <code>*map[string]*string</code> | Add the headers with given map where key is the name of the header, value is the value of the header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.remove">Remove</a></code> | <code>*[]*string</code> | Remove headers (matching by header names) specified in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.set">Set</a></code> | <code>*map[string]*string</code> | Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. |

---

##### `Add`<sup>Optional</sup> <a name="Add" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.add"></a>

```go
Add *map[string]*string
```

- *Type:* *map[string]*string

Add the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#add GoogleNetworkServicesHttpRoute#add}

---

##### `Remove`<sup>Optional</sup> <a name="Remove" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.remove"></a>

```go
Remove *[]*string
```

- *Type:* *[]*string

Remove headers (matching by header names) specified in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#remove GoogleNetworkServicesHttpRoute#remove}

---

##### `Set`<sup>Optional</sup> <a name="Set" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.set"></a>

```go
Set *map[string]*string
```

- *Type:* *map[string]*string

Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#set GoogleNetworkServicesHttpRoute#set}

---

### GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy <a name="GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy {
	Destination: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a></code> | destination block. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy.property.destination"></a>

```go
Destination GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#destination GoogleNetworkServicesHttpRoute#destination}

---

### GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination <a name="GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination {
	ServiceName: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.serviceName">ServiceName</a></code> | <code>*string</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.weight">Weight</a></code> | <code>*f64</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#service_name GoogleNetworkServicesHttpRoute#service_name}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#weight GoogleNetworkServicesHttpRoute#weight}

---

### GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier <a name="GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier {
	Add: *map[string]*string,
	Remove: *[]*string,
	Set: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.add">Add</a></code> | <code>*map[string]*string</code> | Add the headers with given map where key is the name of the header, value is the value of the header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.remove">Remove</a></code> | <code>*[]*string</code> | Remove headers (matching by header names) specified in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.set">Set</a></code> | <code>*map[string]*string</code> | Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. |

---

##### `Add`<sup>Optional</sup> <a name="Add" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.add"></a>

```go
Add *map[string]*string
```

- *Type:* *map[string]*string

Add the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#add GoogleNetworkServicesHttpRoute#add}

---

##### `Remove`<sup>Optional</sup> <a name="Remove" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.remove"></a>

```go
Remove *[]*string
```

- *Type:* *[]*string

Remove headers (matching by header names) specified in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#remove GoogleNetworkServicesHttpRoute#remove}

---

##### `Set`<sup>Optional</sup> <a name="Set" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.set"></a>

```go
Set *map[string]*string
```

- *Type:* *map[string]*string

Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#set GoogleNetworkServicesHttpRoute#set}

---

### GoogleNetworkServicesHttpRouteRulesActionRetryPolicy <a name="GoogleNetworkServicesHttpRouteRulesActionRetryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy {
	NumRetries: *f64,
	PerTryTimeout: *string,
	RetryConditions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy.property.numRetries">NumRetries</a></code> | <code>*f64</code> | Specifies the allowed number of retries. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy.property.perTryTimeout">PerTryTimeout</a></code> | <code>*string</code> | Specifies a non-zero timeout per retry attempt. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy.property.retryConditions">RetryConditions</a></code> | <code>*[]*string</code> | Specifies one or more conditions when this retry policy applies. |

---

##### `NumRetries`<sup>Optional</sup> <a name="NumRetries" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy.property.numRetries"></a>

```go
NumRetries *f64
```

- *Type:* *f64

Specifies the allowed number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#num_retries GoogleNetworkServicesHttpRoute#num_retries}

---

##### `PerTryTimeout`<sup>Optional</sup> <a name="PerTryTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy.property.perTryTimeout"></a>

```go
PerTryTimeout *string
```

- *Type:* *string

Specifies a non-zero timeout per retry attempt.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#per_try_timeout GoogleNetworkServicesHttpRoute#per_try_timeout}

---

##### `RetryConditions`<sup>Optional</sup> <a name="RetryConditions" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy.property.retryConditions"></a>

```go
RetryConditions *[]*string
```

- *Type:* *[]*string

Specifies one or more conditions when this retry policy applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#retry_conditions GoogleNetworkServicesHttpRoute#retry_conditions}

---

### GoogleNetworkServicesHttpRouteRulesActionUrlRewrite <a name="GoogleNetworkServicesHttpRouteRulesActionUrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite {
	HostRewrite: *string,
	PathPrefixRewrite: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite.property.hostRewrite">HostRewrite</a></code> | <code>*string</code> | Prior to forwarding the request to the selected destination, the requests host header is replaced by this value. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite.property.pathPrefixRewrite">PathPrefixRewrite</a></code> | <code>*string</code> | Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value. |

---

##### `HostRewrite`<sup>Optional</sup> <a name="HostRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite.property.hostRewrite"></a>

```go
HostRewrite *string
```

- *Type:* *string

Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#host_rewrite GoogleNetworkServicesHttpRoute#host_rewrite}

---

##### `PathPrefixRewrite`<sup>Optional</sup> <a name="PathPrefixRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite.property.pathPrefixRewrite"></a>

```go
PathPrefixRewrite *string
```

- *Type:* *string

Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#path_prefix_rewrite GoogleNetworkServicesHttpRoute#path_prefix_rewrite}

---

### GoogleNetworkServicesHttpRouteRulesMatches <a name="GoogleNetworkServicesHttpRouteRulesMatches" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesMatches {
	FullPathMatch: *string,
	Headers: interface{},
	IgnoreCase: interface{},
	PrefixMatch: *string,
	QueryParameters: interface{},
	RegexMatch: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.fullPathMatch">FullPathMatch</a></code> | <code>*string</code> | The HTTP request path value should exactly match this value. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.prefixMatch">PrefixMatch</a></code> | <code>*string</code> | The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.queryParameters">QueryParameters</a></code> | <code>interface{}</code> | query_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.regexMatch">RegexMatch</a></code> | <code>*string</code> | The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL. |

---

##### `FullPathMatch`<sup>Optional</sup> <a name="FullPathMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.fullPathMatch"></a>

```go
FullPathMatch *string
```

- *Type:* *string

The HTTP request path value should exactly match this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#full_path_match GoogleNetworkServicesHttpRoute#full_path_match}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#headers GoogleNetworkServicesHttpRoute#headers}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#ignore_case GoogleNetworkServicesHttpRoute#ignore_case}

---

##### `PrefixMatch`<sup>Optional</sup> <a name="PrefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.prefixMatch"></a>

```go
PrefixMatch *string
```

- *Type:* *string

The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#prefix_match GoogleNetworkServicesHttpRoute#prefix_match}

---

##### `QueryParameters`<sup>Optional</sup> <a name="QueryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.queryParameters"></a>

```go
QueryParameters interface{}
```

- *Type:* interface{}

query_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#query_parameters GoogleNetworkServicesHttpRoute#query_parameters}

---

##### `RegexMatch`<sup>Optional</sup> <a name="RegexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatches.property.regexMatch"></a>

```go
RegexMatch *string
```

- *Type:* *string

The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL.

For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#regex_match GoogleNetworkServicesHttpRoute#regex_match}

---

### GoogleNetworkServicesHttpRouteRulesMatchesHeaders <a name="GoogleNetworkServicesHttpRouteRulesMatchesHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders {
	ExactMatch: *string,
	Header: *string,
	InvertMatch: interface{},
	PrefixMatch: *string,
	PresentMatch: interface{},
	RangeMatch: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch,
	RegexMatch: *string,
	SuffixMatch: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.exactMatch">ExactMatch</a></code> | <code>*string</code> | The value of the header should match exactly the content of exactMatch. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.header">Header</a></code> | <code>*string</code> | The name of the HTTP header to match against. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.invertMatch">InvertMatch</a></code> | <code>interface{}</code> | If specified, the match result will be inverted before checking. Default value is set to false. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.prefixMatch">PrefixMatch</a></code> | <code>*string</code> | The value of the header must start with the contents of prefixMatch. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.presentMatch">PresentMatch</a></code> | <code>interface{}</code> | A header with headerName must exist. The match takes place whether or not the header has a value. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.rangeMatch">RangeMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a></code> | range_match block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.regexMatch">RegexMatch</a></code> | <code>*string</code> | The value of the header must match the regular expression specified in regexMatch. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.suffixMatch">SuffixMatch</a></code> | <code>*string</code> | The value of the header must end with the contents of suffixMatch. |

---

##### `ExactMatch`<sup>Optional</sup> <a name="ExactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.exactMatch"></a>

```go
ExactMatch *string
```

- *Type:* *string

The value of the header should match exactly the content of exactMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#exact_match GoogleNetworkServicesHttpRoute#exact_match}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.header"></a>

```go
Header *string
```

- *Type:* *string

The name of the HTTP header to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#header GoogleNetworkServicesHttpRoute#header}

---

##### `InvertMatch`<sup>Optional</sup> <a name="InvertMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.invertMatch"></a>

```go
InvertMatch interface{}
```

- *Type:* interface{}

If specified, the match result will be inverted before checking. Default value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#invert_match GoogleNetworkServicesHttpRoute#invert_match}

---

##### `PrefixMatch`<sup>Optional</sup> <a name="PrefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.prefixMatch"></a>

```go
PrefixMatch *string
```

- *Type:* *string

The value of the header must start with the contents of prefixMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#prefix_match GoogleNetworkServicesHttpRoute#prefix_match}

---

##### `PresentMatch`<sup>Optional</sup> <a name="PresentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.presentMatch"></a>

```go
PresentMatch interface{}
```

- *Type:* interface{}

A header with headerName must exist. The match takes place whether or not the header has a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#present_match GoogleNetworkServicesHttpRoute#present_match}

---

##### `RangeMatch`<sup>Optional</sup> <a name="RangeMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.rangeMatch"></a>

```go
RangeMatch GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

range_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#range_match GoogleNetworkServicesHttpRoute#range_match}

---

##### `RegexMatch`<sup>Optional</sup> <a name="RegexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.regexMatch"></a>

```go
RegexMatch *string
```

- *Type:* *string

The value of the header must match the regular expression specified in regexMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#regex_match GoogleNetworkServicesHttpRoute#regex_match}

---

##### `SuffixMatch`<sup>Optional</sup> <a name="SuffixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeaders.property.suffixMatch"></a>

```go
SuffixMatch *string
```

- *Type:* *string

The value of the header must end with the contents of suffixMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#suffix_match GoogleNetworkServicesHttpRoute#suffix_match}

---

### GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch <a name="GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch {
	End: *f64,
	Start: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.end">End</a></code> | <code>*f64</code> | End of the range (exclusive). |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.start">Start</a></code> | <code>*f64</code> | Start of the range (inclusive). |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.end"></a>

```go
End *f64
```

- *Type:* *f64

End of the range (exclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#end GoogleNetworkServicesHttpRoute#end}

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.start"></a>

```go
Start *f64
```

- *Type:* *f64

Start of the range (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#start GoogleNetworkServicesHttpRoute#start}

---

### GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters <a name="GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters {
	ExactMatch: *string,
	PresentMatch: interface{},
	QueryParameter: *string,
	RegexMatch: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.exactMatch">ExactMatch</a></code> | <code>*string</code> | The value of the query parameter must exactly match the contents of exactMatch. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.presentMatch">PresentMatch</a></code> | <code>interface{}</code> | Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.queryParameter">QueryParameter</a></code> | <code>*string</code> | The name of the query parameter to match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.regexMatch">RegexMatch</a></code> | <code>*string</code> | The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax. |

---

##### `ExactMatch`<sup>Optional</sup> <a name="ExactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.exactMatch"></a>

```go
ExactMatch *string
```

- *Type:* *string

The value of the query parameter must exactly match the contents of exactMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#exact_match GoogleNetworkServicesHttpRoute#exact_match}

---

##### `PresentMatch`<sup>Optional</sup> <a name="PresentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.presentMatch"></a>

```go
PresentMatch interface{}
```

- *Type:* interface{}

Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#present_match GoogleNetworkServicesHttpRoute#present_match}

---

##### `QueryParameter`<sup>Optional</sup> <a name="QueryParameter" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.queryParameter"></a>

```go
QueryParameter *string
```

- *Type:* *string

The name of the query parameter to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#query_parameter GoogleNetworkServicesHttpRoute#query_parameter}

---

##### `RegexMatch`<sup>Optional</sup> <a name="RegexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParameters.property.regexMatch"></a>

```go
RegexMatch *string
```

- *Type:* *string

The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#regex_match GoogleNetworkServicesHttpRoute#regex_match}

---

### GoogleNetworkServicesHttpRouteTimeouts <a name="GoogleNetworkServicesHttpRouteTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

&googlenetworkserviceshttproute.GoogleNetworkServicesHttpRouteTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#create GoogleNetworkServicesHttpRoute#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#delete GoogleNetworkServicesHttpRoute#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#update GoogleNetworkServicesHttpRoute#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#create GoogleNetworkServicesHttpRoute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#delete GoogleNetworkServicesHttpRoute#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_http_route#update GoogleNetworkServicesHttpRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowCredentials">ResetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowHeaders">ResetAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowMethods">ResetAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOriginRegexes">ResetAllowOriginRegexes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOrigins">ResetAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetExposeHeaders">ResetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetMaxAge">ResetMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowCredentials` <a name="ResetAllowCredentials" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowCredentials"></a>

```go
func ResetAllowCredentials()
```

##### `ResetAllowHeaders` <a name="ResetAllowHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowHeaders"></a>

```go
func ResetAllowHeaders()
```

##### `ResetAllowMethods` <a name="ResetAllowMethods" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowMethods"></a>

```go
func ResetAllowMethods()
```

##### `ResetAllowOriginRegexes` <a name="ResetAllowOriginRegexes" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOriginRegexes"></a>

```go
func ResetAllowOriginRegexes()
```

##### `ResetAllowOrigins` <a name="ResetAllowOrigins" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOrigins"></a>

```go
func ResetAllowOrigins()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetExposeHeaders` <a name="ResetExposeHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetExposeHeaders"></a>

```go
func ResetExposeHeaders()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetMaxAge"></a>

```go
func ResetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentialsInput">AllowCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeadersInput">AllowHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethodsInput">AllowMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexesInput">AllowOriginRegexesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginsInput">AllowOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeadersInput">ExposeHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentials">AllowCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeaders">AllowHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethods">AllowMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexes">AllowOriginRegexes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOrigins">AllowOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeaders">ExposeHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAge">MaxAge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy">GoogleNetworkServicesHttpRouteRulesActionCorsPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowCredentialsInput`<sup>Optional</sup> <a name="AllowCredentialsInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentialsInput"></a>

```go
func AllowCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowHeadersInput`<sup>Optional</sup> <a name="AllowHeadersInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeadersInput"></a>

```go
func AllowHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowMethodsInput`<sup>Optional</sup> <a name="AllowMethodsInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethodsInput"></a>

```go
func AllowMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowOriginRegexesInput`<sup>Optional</sup> <a name="AllowOriginRegexesInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexesInput"></a>

```go
func AllowOriginRegexesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowOriginsInput`<sup>Optional</sup> <a name="AllowOriginsInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginsInput"></a>

```go
func AllowOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExposeHeadersInput`<sup>Optional</sup> <a name="ExposeHeadersInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeadersInput"></a>

```go
func ExposeHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAgeInput"></a>

```go
func MaxAgeInput() *string
```

- *Type:* *string

---

##### `AllowCredentials`<sup>Required</sup> <a name="AllowCredentials" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentials"></a>

```go
func AllowCredentials() interface{}
```

- *Type:* interface{}

---

##### `AllowHeaders`<sup>Required</sup> <a name="AllowHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeaders"></a>

```go
func AllowHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AllowMethods`<sup>Required</sup> <a name="AllowMethods" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethods"></a>

```go
func AllowMethods() *[]*string
```

- *Type:* *[]*string

---

##### `AllowOriginRegexes`<sup>Required</sup> <a name="AllowOriginRegexes" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexes"></a>

```go
func AllowOriginRegexes() *[]*string
```

- *Type:* *[]*string

---

##### `AllowOrigins`<sup>Required</sup> <a name="AllowOrigins" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOrigins"></a>

```go
func AllowOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `ExposeHeaders`<sup>Required</sup> <a name="ExposeHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeaders"></a>

```go
func ExposeHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAge"></a>

```go
func MaxAge() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesHttpRouteRulesActionCorsPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy">GoogleNetworkServicesHttpRouteRulesActionCorsPolicy</a>

---


### GoogleNetworkServicesHttpRouteRulesActionDestinationsList <a name="GoogleNetworkServicesHttpRouteRulesActionDestinationsList" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesActionDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesHttpRouteRulesActionDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus">ResetHttpStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpStatus` <a name="ResetHttpStatus" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus"></a>

```go
func ResetHttpStatus()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage"></a>

```go
func ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput">HttpStatusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput">PercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus">HttpStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage">Percentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpStatusInput`<sup>Optional</sup> <a name="HttpStatusInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput"></a>

```go
func HttpStatusInput() *f64
```

- *Type:* *f64

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput"></a>

```go
func PercentageInput() *f64
```

- *Type:* *f64

---

##### `HttpStatus`<sup>Required</sup> <a name="HttpStatus" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus"></a>

```go
func HttpStatus() *f64
```

- *Type:* *f64

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage"></a>

```go
func Percentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

---


### GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay">ResetFixedDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixedDelay` <a name="ResetFixedDelay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay"></a>

```go
func ResetFixedDelay()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage"></a>

```go
func ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput">FixedDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput">PercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay">FixedDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage">Percentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedDelayInput`<sup>Optional</sup> <a name="FixedDelayInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput"></a>

```go
func FixedDelayInput() *string
```

- *Type:* *string

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput"></a>

```go
func PercentageInput() *f64
```

- *Type:* *f64

---

##### `FixedDelay`<sup>Required</sup> <a name="FixedDelay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay"></a>

```go
func FixedDelay() *string
```

- *Type:* *string

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage"></a>

```go
func Percentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

---


### GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort">PutAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay">PutDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort">ResetAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay">ResetDelay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbort` <a name="PutAbort" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort"></a>

```go
func PutAbort(value GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `PutDelay` <a name="PutDelay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay"></a>

```go
func PutDelay(value GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `ResetAbort` <a name="ResetAbort" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort"></a>

```go
func ResetAbort()
```

##### `ResetDelay` <a name="ResetDelay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay"></a>

```go
func ResetDelay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abort">Abort</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delay">Delay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput">AbortInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput">DelayInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Abort`<sup>Required</sup> <a name="Abort" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abort"></a>

```go
func Abort() GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference</a>

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delay"></a>

```go
func Delay() GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference</a>

---

##### `AbortInput`<sup>Optional</sup> <a name="AbortInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput"></a>

```go
func AbortInput() GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `DelayInput`<sup>Optional</sup> <a name="DelayInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput"></a>

```go
func DelayInput() GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

---


### GoogleNetworkServicesHttpRouteRulesActionOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesHttpRouteRulesActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy">PutCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy">PutFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRedirect">PutRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier">PutRequestHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRequestMirrorPolicy">PutRequestMirrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier">PutResponseHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite">PutUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetCorsPolicy">ResetCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetFaultInjectionPolicy">ResetFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRedirect">ResetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRequestHeaderModifier">ResetRequestHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRequestMirrorPolicy">ResetRequestMirrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetResponseHeaderModifier">ResetResponseHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetUrlRewrite">ResetUrlRewrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCorsPolicy` <a name="PutCorsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy"></a>

```go
func PutCorsPolicy(value GoogleNetworkServicesHttpRouteRulesActionCorsPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy">GoogleNetworkServicesHttpRouteRulesActionCorsPolicy</a>

---

##### `PutDestinations` <a name="PutDestinations" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFaultInjectionPolicy` <a name="PutFaultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy"></a>

```go
func PutFaultInjectionPolicy(value GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

---

##### `PutRedirect` <a name="PutRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRedirect"></a>

```go
func PutRedirect(value GoogleNetworkServicesHttpRouteRulesActionRedirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect">GoogleNetworkServicesHttpRouteRulesActionRedirect</a>

---

##### `PutRequestHeaderModifier` <a name="PutRequestHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier"></a>

```go
func PutRequestHeaderModifier(value GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

---

##### `PutRequestMirrorPolicy` <a name="PutRequestMirrorPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRequestMirrorPolicy"></a>

```go
func PutRequestMirrorPolicy(value GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRequestMirrorPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

---

##### `PutResponseHeaderModifier` <a name="PutResponseHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier"></a>

```go
func PutResponseHeaderModifier(value GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy"></a>

```go
func PutRetryPolicy(value GoogleNetworkServicesHttpRouteRulesActionRetryPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy">GoogleNetworkServicesHttpRouteRulesActionRetryPolicy</a>

---

##### `PutUrlRewrite` <a name="PutUrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite"></a>

```go
func PutUrlRewrite(value GoogleNetworkServicesHttpRouteRulesActionUrlRewrite)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite">GoogleNetworkServicesHttpRouteRulesActionUrlRewrite</a>

---

##### `ResetCorsPolicy` <a name="ResetCorsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetCorsPolicy"></a>

```go
func ResetCorsPolicy()
```

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetFaultInjectionPolicy` <a name="ResetFaultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetFaultInjectionPolicy"></a>

```go
func ResetFaultInjectionPolicy()
```

##### `ResetRedirect` <a name="ResetRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRedirect"></a>

```go
func ResetRedirect()
```

##### `ResetRequestHeaderModifier` <a name="ResetRequestHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRequestHeaderModifier"></a>

```go
func ResetRequestHeaderModifier()
```

##### `ResetRequestMirrorPolicy` <a name="ResetRequestMirrorPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRequestMirrorPolicy"></a>

```go
func ResetRequestMirrorPolicy()
```

##### `ResetResponseHeaderModifier` <a name="ResetResponseHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetResponseHeaderModifier"></a>

```go
func ResetResponseHeaderModifier()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetRetryPolicy"></a>

```go
func ResetRetryPolicy()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetUrlRewrite` <a name="ResetUrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.resetUrlRewrite"></a>

```go
func ResetUrlRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicy">CorsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList">GoogleNetworkServicesHttpRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicy">FaultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference">GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifier">RequestHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicy">RequestMirrorPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifier">ResponseHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.urlRewrite">UrlRewrite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference">GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicyInput">CorsPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy">GoogleNetworkServicesHttpRouteRulesActionCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicyInput">FaultInjectionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.redirectInput">RedirectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect">GoogleNetworkServicesHttpRouteRulesActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifierInput">RequestHeaderModifierInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicyInput">RequestMirrorPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifierInput">ResponseHeaderModifierInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy">GoogleNetworkServicesHttpRouteRulesActionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.urlRewriteInput">UrlRewriteInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite">GoogleNetworkServicesHttpRouteRulesActionUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction">GoogleNetworkServicesHttpRouteRulesAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CorsPolicy`<sup>Required</sup> <a name="CorsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicy"></a>

```go
func CorsPolicy() GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionCorsPolicyOutputReference</a>

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.destinations"></a>

```go
func Destinations() GoogleNetworkServicesHttpRouteRulesActionDestinationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionDestinationsList">GoogleNetworkServicesHttpRouteRulesActionDestinationsList</a>

---

##### `FaultInjectionPolicy`<sup>Required</sup> <a name="FaultInjectionPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicy"></a>

```go
func FaultInjectionPolicy() GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference</a>

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.redirect"></a>

```go
func Redirect() GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference">GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference</a>

---

##### `RequestHeaderModifier`<sup>Required</sup> <a name="RequestHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifier"></a>

```go
func RequestHeaderModifier() GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference</a>

---

##### `RequestMirrorPolicy`<sup>Required</sup> <a name="RequestMirrorPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicy"></a>

```go
func RequestMirrorPolicy() GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference</a>

---

##### `ResponseHeaderModifier`<sup>Required</sup> <a name="ResponseHeaderModifier" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifier"></a>

```go
func ResponseHeaderModifier() GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicy"></a>

```go
func RetryPolicy() GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference">GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference</a>

---

##### `UrlRewrite`<sup>Required</sup> <a name="UrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.urlRewrite"></a>

```go
func UrlRewrite() GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference">GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference</a>

---

##### `CorsPolicyInput`<sup>Optional</sup> <a name="CorsPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicyInput"></a>

```go
func CorsPolicyInput() GoogleNetworkServicesHttpRouteRulesActionCorsPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionCorsPolicy">GoogleNetworkServicesHttpRouteRulesActionCorsPolicy</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `FaultInjectionPolicyInput`<sup>Optional</sup> <a name="FaultInjectionPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicyInput"></a>

```go
func FaultInjectionPolicyInput() GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy">GoogleNetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

---

##### `RedirectInput`<sup>Optional</sup> <a name="RedirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.redirectInput"></a>

```go
func RedirectInput() GoogleNetworkServicesHttpRouteRulesActionRedirect
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect">GoogleNetworkServicesHttpRouteRulesActionRedirect</a>

---

##### `RequestHeaderModifierInput`<sup>Optional</sup> <a name="RequestHeaderModifierInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifierInput"></a>

```go
func RequestHeaderModifierInput() GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

---

##### `RequestMirrorPolicyInput`<sup>Optional</sup> <a name="RequestMirrorPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicyInput"></a>

```go
func RequestMirrorPolicyInput() GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

---

##### `ResponseHeaderModifierInput`<sup>Optional</sup> <a name="ResponseHeaderModifierInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifierInput"></a>

```go
func ResponseHeaderModifierInput() GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicyInput"></a>

```go
func RetryPolicyInput() GoogleNetworkServicesHttpRouteRulesActionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy">GoogleNetworkServicesHttpRouteRulesActionRetryPolicy</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `UrlRewriteInput`<sup>Optional</sup> <a name="UrlRewriteInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.urlRewriteInput"></a>

```go
func UrlRewriteInput() GoogleNetworkServicesHttpRouteRulesActionUrlRewrite
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite">GoogleNetworkServicesHttpRouteRulesActionUrlRewrite</a>

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesHttpRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction">GoogleNetworkServicesHttpRouteRulesAction</a>

---


### GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHostRedirect">ResetHostRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHttpsRedirect">ResetHttpsRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPathRedirect">ResetPathRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPortRedirect">ResetPortRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPrefixRewrite">ResetPrefixRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetResponseCode">ResetResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetStripQuery">ResetStripQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostRedirect` <a name="ResetHostRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHostRedirect"></a>

```go
func ResetHostRedirect()
```

##### `ResetHttpsRedirect` <a name="ResetHttpsRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHttpsRedirect"></a>

```go
func ResetHttpsRedirect()
```

##### `ResetPathRedirect` <a name="ResetPathRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPathRedirect"></a>

```go
func ResetPathRedirect()
```

##### `ResetPortRedirect` <a name="ResetPortRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPortRedirect"></a>

```go
func ResetPortRedirect()
```

##### `ResetPrefixRewrite` <a name="ResetPrefixRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPrefixRewrite"></a>

```go
func ResetPrefixRewrite()
```

##### `ResetResponseCode` <a name="ResetResponseCode" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetResponseCode"></a>

```go
func ResetResponseCode()
```

##### `ResetStripQuery` <a name="ResetStripQuery" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.resetStripQuery"></a>

```go
func ResetStripQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirectInput">HostRedirectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirectInput">HttpsRedirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirectInput">PathRedirectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirectInput">PortRedirectInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewriteInput">PrefixRewriteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCodeInput">ResponseCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQueryInput">StripQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirect">HostRedirect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirect">HttpsRedirect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirect">PathRedirect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirect">PortRedirect</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewrite">PrefixRewrite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCode">ResponseCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQuery">StripQuery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect">GoogleNetworkServicesHttpRouteRulesActionRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostRedirectInput`<sup>Optional</sup> <a name="HostRedirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirectInput"></a>

```go
func HostRedirectInput() *string
```

- *Type:* *string

---

##### `HttpsRedirectInput`<sup>Optional</sup> <a name="HttpsRedirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirectInput"></a>

```go
func HttpsRedirectInput() interface{}
```

- *Type:* interface{}

---

##### `PathRedirectInput`<sup>Optional</sup> <a name="PathRedirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirectInput"></a>

```go
func PathRedirectInput() *string
```

- *Type:* *string

---

##### `PortRedirectInput`<sup>Optional</sup> <a name="PortRedirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirectInput"></a>

```go
func PortRedirectInput() *f64
```

- *Type:* *f64

---

##### `PrefixRewriteInput`<sup>Optional</sup> <a name="PrefixRewriteInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewriteInput"></a>

```go
func PrefixRewriteInput() *string
```

- *Type:* *string

---

##### `ResponseCodeInput`<sup>Optional</sup> <a name="ResponseCodeInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCodeInput"></a>

```go
func ResponseCodeInput() *string
```

- *Type:* *string

---

##### `StripQueryInput`<sup>Optional</sup> <a name="StripQueryInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQueryInput"></a>

```go
func StripQueryInput() interface{}
```

- *Type:* interface{}

---

##### `HostRedirect`<sup>Required</sup> <a name="HostRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirect"></a>

```go
func HostRedirect() *string
```

- *Type:* *string

---

##### `HttpsRedirect`<sup>Required</sup> <a name="HttpsRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirect"></a>

```go
func HttpsRedirect() interface{}
```

- *Type:* interface{}

---

##### `PathRedirect`<sup>Required</sup> <a name="PathRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirect"></a>

```go
func PathRedirect() *string
```

- *Type:* *string

---

##### `PortRedirect`<sup>Required</sup> <a name="PortRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirect"></a>

```go
func PortRedirect() *f64
```

- *Type:* *f64

---

##### `PrefixRewrite`<sup>Required</sup> <a name="PrefixRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewrite"></a>

```go
func PrefixRewrite() *string
```

- *Type:* *string

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCode"></a>

```go
func ResponseCode() *string
```

- *Type:* *string

---

##### `StripQuery`<sup>Required</sup> <a name="StripQuery" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQuery"></a>

```go
func StripQuery() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesHttpRouteRulesActionRedirect
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRedirect">GoogleNetworkServicesHttpRouteRulesActionRedirect</a>

---


### GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetAdd">ResetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetRemove">ResetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetSet">ResetSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdd` <a name="ResetAdd" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetAdd"></a>

```go
func ResetAdd()
```

##### `ResetRemove` <a name="ResetRemove" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetRemove"></a>

```go
func ResetRemove()
```

##### `ResetSet` <a name="ResetSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetSet"></a>

```go
func ResetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.addInput">AddInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.removeInput">RemoveInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.setInput">SetInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.add">Add</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.remove">Remove</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.set">Set</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddInput`<sup>Optional</sup> <a name="AddInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.addInput"></a>

```go
func AddInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RemoveInput`<sup>Optional</sup> <a name="RemoveInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.removeInput"></a>

```go
func RemoveInput() *[]*string
```

- *Type:* *[]*string

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.setInput"></a>

```go
func SetInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.add"></a>

```go
func Add() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.remove"></a>

```go
func Remove() *[]*string
```

- *Type:* *[]*string

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.set"></a>

```go
func Set() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

---


### GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

---


### GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination"></a>

```go
func PutDestination(value GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

---

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resetDestination"></a>

```go
func ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destinationInput">DestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destination"></a>

```go
func Destination() GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destinationInput"></a>

```go
func DestinationInput() GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy">GoogleNetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

---


### GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetAdd">ResetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetRemove">ResetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetSet">ResetSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdd` <a name="ResetAdd" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetAdd"></a>

```go
func ResetAdd()
```

##### `ResetRemove` <a name="ResetRemove" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetRemove"></a>

```go
func ResetRemove()
```

##### `ResetSet` <a name="ResetSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetSet"></a>

```go
func ResetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.addInput">AddInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.removeInput">RemoveInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.setInput">SetInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.add">Add</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.remove">Remove</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.set">Set</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddInput`<sup>Optional</sup> <a name="AddInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.addInput"></a>

```go
func AddInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RemoveInput`<sup>Optional</sup> <a name="RemoveInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.removeInput"></a>

```go
func RemoveInput() *[]*string
```

- *Type:* *[]*string

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.setInput"></a>

```go
func SetInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.add"></a>

```go
func Add() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.remove"></a>

```go
func Remove() *[]*string
```

- *Type:* *[]*string

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.set"></a>

```go
func Set() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier">GoogleNetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

---


### GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetNumRetries">ResetNumRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetPerTryTimeout">ResetPerTryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetRetryConditions">ResetRetryConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumRetries` <a name="ResetNumRetries" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetNumRetries"></a>

```go
func ResetNumRetries()
```

##### `ResetPerTryTimeout` <a name="ResetPerTryTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetPerTryTimeout"></a>

```go
func ResetPerTryTimeout()
```

##### `ResetRetryConditions` <a name="ResetRetryConditions" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetRetryConditions"></a>

```go
func ResetRetryConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput">NumRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeoutInput">PerTryTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput">RetryConditionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetries">NumRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeout">PerTryTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditions">RetryConditions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy">GoogleNetworkServicesHttpRouteRulesActionRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumRetriesInput`<sup>Optional</sup> <a name="NumRetriesInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput"></a>

```go
func NumRetriesInput() *f64
```

- *Type:* *f64

---

##### `PerTryTimeoutInput`<sup>Optional</sup> <a name="PerTryTimeoutInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeoutInput"></a>

```go
func PerTryTimeoutInput() *string
```

- *Type:* *string

---

##### `RetryConditionsInput`<sup>Optional</sup> <a name="RetryConditionsInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput"></a>

```go
func RetryConditionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NumRetries`<sup>Required</sup> <a name="NumRetries" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetries"></a>

```go
func NumRetries() *f64
```

- *Type:* *f64

---

##### `PerTryTimeout`<sup>Required</sup> <a name="PerTryTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeout"></a>

```go
func PerTryTimeout() *string
```

- *Type:* *string

---

##### `RetryConditions`<sup>Required</sup> <a name="RetryConditions" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditions"></a>

```go
func RetryConditions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesHttpRouteRulesActionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionRetryPolicy">GoogleNetworkServicesHttpRouteRulesActionRetryPolicy</a>

---


### GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference <a name="GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetHostRewrite">ResetHostRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetPathPrefixRewrite">ResetPathPrefixRewrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostRewrite` <a name="ResetHostRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetHostRewrite"></a>

```go
func ResetHostRewrite()
```

##### `ResetPathPrefixRewrite` <a name="ResetPathPrefixRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetPathPrefixRewrite"></a>

```go
func ResetPathPrefixRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewriteInput">HostRewriteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewriteInput">PathPrefixRewriteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewrite">HostRewrite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewrite">PathPrefixRewrite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite">GoogleNetworkServicesHttpRouteRulesActionUrlRewrite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostRewriteInput`<sup>Optional</sup> <a name="HostRewriteInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewriteInput"></a>

```go
func HostRewriteInput() *string
```

- *Type:* *string

---

##### `PathPrefixRewriteInput`<sup>Optional</sup> <a name="PathPrefixRewriteInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewriteInput"></a>

```go
func PathPrefixRewriteInput() *string
```

- *Type:* *string

---

##### `HostRewrite`<sup>Required</sup> <a name="HostRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewrite"></a>

```go
func HostRewrite() *string
```

- *Type:* *string

---

##### `PathPrefixRewrite`<sup>Required</sup> <a name="PathPrefixRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewrite"></a>

```go
func PathPrefixRewrite() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesHttpRouteRulesActionUrlRewrite
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionUrlRewrite">GoogleNetworkServicesHttpRouteRulesActionUrlRewrite</a>

---


### GoogleNetworkServicesHttpRouteRulesList <a name="GoogleNetworkServicesHttpRouteRulesList" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesHttpRouteRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesHttpRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesHttpRouteRulesMatchesHeadersList <a name="GoogleNetworkServicesHttpRouteRulesMatchesHeadersList" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesMatchesHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesHttpRouteRulesMatchesHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference <a name="GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch">PutRangeMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetExactMatch">ResetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetInvertMatch">ResetInvertMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPrefixMatch">ResetPrefixMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPresentMatch">ResetPresentMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRangeMatch">ResetRangeMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRegexMatch">ResetRegexMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetSuffixMatch">ResetSuffixMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRangeMatch` <a name="PutRangeMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch"></a>

```go
func PutRangeMatch(value GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

---

##### `ResetExactMatch` <a name="ResetExactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetExactMatch"></a>

```go
func ResetExactMatch()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetInvertMatch` <a name="ResetInvertMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetInvertMatch"></a>

```go
func ResetInvertMatch()
```

##### `ResetPrefixMatch` <a name="ResetPrefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPrefixMatch"></a>

```go
func ResetPrefixMatch()
```

##### `ResetPresentMatch` <a name="ResetPresentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPresentMatch"></a>

```go
func ResetPresentMatch()
```

##### `ResetRangeMatch` <a name="ResetRangeMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRangeMatch"></a>

```go
func ResetRangeMatch()
```

##### `ResetRegexMatch` <a name="ResetRegexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRegexMatch"></a>

```go
func ResetRegexMatch()
```

##### `ResetSuffixMatch` <a name="ResetSuffixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetSuffixMatch"></a>

```go
func ResetSuffixMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatch">RangeMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatchInput">ExactMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.headerInput">HeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatchInput">InvertMatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatchInput">PrefixMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatchInput">PresentMatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatchInput">RangeMatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatchInput">RegexMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatchInput">SuffixMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatch">ExactMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.header">Header</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatch">InvertMatch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatch">PrefixMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatch">PresentMatch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatch">RegexMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatch">SuffixMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RangeMatch`<sup>Required</sup> <a name="RangeMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatch"></a>

```go
func RangeMatch() GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference</a>

---

##### `ExactMatchInput`<sup>Optional</sup> <a name="ExactMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatchInput"></a>

```go
func ExactMatchInput() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.headerInput"></a>

```go
func HeaderInput() *string
```

- *Type:* *string

---

##### `InvertMatchInput`<sup>Optional</sup> <a name="InvertMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatchInput"></a>

```go
func InvertMatchInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixMatchInput`<sup>Optional</sup> <a name="PrefixMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatchInput"></a>

```go
func PrefixMatchInput() *string
```

- *Type:* *string

---

##### `PresentMatchInput`<sup>Optional</sup> <a name="PresentMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatchInput"></a>

```go
func PresentMatchInput() interface{}
```

- *Type:* interface{}

---

##### `RangeMatchInput`<sup>Optional</sup> <a name="RangeMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatchInput"></a>

```go
func RangeMatchInput() GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

---

##### `RegexMatchInput`<sup>Optional</sup> <a name="RegexMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatchInput"></a>

```go
func RegexMatchInput() *string
```

- *Type:* *string

---

##### `SuffixMatchInput`<sup>Optional</sup> <a name="SuffixMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatchInput"></a>

```go
func SuffixMatchInput() *string
```

- *Type:* *string

---

##### `ExactMatch`<sup>Required</sup> <a name="ExactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatch"></a>

```go
func ExactMatch() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.header"></a>

```go
func Header() *string
```

- *Type:* *string

---

##### `InvertMatch`<sup>Required</sup> <a name="InvertMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatch"></a>

```go
func InvertMatch() interface{}
```

- *Type:* interface{}

---

##### `PrefixMatch`<sup>Required</sup> <a name="PrefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatch"></a>

```go
func PrefixMatch() *string
```

- *Type:* *string

---

##### `PresentMatch`<sup>Required</sup> <a name="PresentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatch"></a>

```go
func PresentMatch() interface{}
```

- *Type:* interface{}

---

##### `RegexMatch`<sup>Required</sup> <a name="RegexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatch"></a>

```go
func RegexMatch() *string
```

- *Type:* *string

---

##### `SuffixMatch`<sup>Required</sup> <a name="SuffixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatch"></a>

```go
func SuffixMatch() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference <a name="GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.endInput">EndInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.startInput">StartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.end">End</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.start">Start</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.endInput"></a>

```go
func EndInput() *f64
```

- *Type:* *f64

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.startInput"></a>

```go
func StartInput() *f64
```

- *Type:* *f64

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.end"></a>

```go
func End() *f64
```

- *Type:* *f64

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.start"></a>

```go
func Start() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">GoogleNetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

---


### GoogleNetworkServicesHttpRouteRulesMatchesList <a name="GoogleNetworkServicesHttpRouteRulesMatchesList" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesMatchesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesHttpRouteRulesMatchesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesHttpRouteRulesMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesHttpRouteRulesMatchesOutputReference <a name="GoogleNetworkServicesHttpRouteRulesMatchesOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesMatchesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesHttpRouteRulesMatchesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.putQueryParameters">PutQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetFullPathMatch">ResetFullPathMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetPrefixMatch">ResetPrefixMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetQueryParameters">ResetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetRegexMatch">ResetRegexMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryParameters` <a name="PutQueryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.putQueryParameters"></a>

```go
func PutQueryParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.putQueryParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFullPathMatch` <a name="ResetFullPathMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetFullPathMatch"></a>

```go
func ResetFullPathMatch()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPrefixMatch` <a name="ResetPrefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetPrefixMatch"></a>

```go
func ResetPrefixMatch()
```

##### `ResetQueryParameters` <a name="ResetQueryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetQueryParameters"></a>

```go
func ResetQueryParameters()
```

##### `ResetRegexMatch` <a name="ResetRegexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.resetRegexMatch"></a>

```go
func ResetRegexMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList">GoogleNetworkServicesHttpRouteRulesMatchesHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParameters">QueryParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList">GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatchInput">FullPathMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatchInput">PrefixMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParametersInput">QueryParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatchInput">RegexMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatch">FullPathMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatch">PrefixMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatch">RegexMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.headers"></a>

```go
func Headers() GoogleNetworkServicesHttpRouteRulesMatchesHeadersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesHeadersList">GoogleNetworkServicesHttpRouteRulesMatchesHeadersList</a>

---

##### `QueryParameters`<sup>Required</sup> <a name="QueryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParameters"></a>

```go
func QueryParameters() GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList">GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList</a>

---

##### `FullPathMatchInput`<sup>Optional</sup> <a name="FullPathMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatchInput"></a>

```go
func FullPathMatchInput() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixMatchInput`<sup>Optional</sup> <a name="PrefixMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatchInput"></a>

```go
func PrefixMatchInput() *string
```

- *Type:* *string

---

##### `QueryParametersInput`<sup>Optional</sup> <a name="QueryParametersInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParametersInput"></a>

```go
func QueryParametersInput() interface{}
```

- *Type:* interface{}

---

##### `RegexMatchInput`<sup>Optional</sup> <a name="RegexMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatchInput"></a>

```go
func RegexMatchInput() *string
```

- *Type:* *string

---

##### `FullPathMatch`<sup>Required</sup> <a name="FullPathMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatch"></a>

```go
func FullPathMatch() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `PrefixMatch`<sup>Required</sup> <a name="PrefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatch"></a>

```go
func PrefixMatch() *string
```

- *Type:* *string

---

##### `RegexMatch`<sup>Required</sup> <a name="RegexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatch"></a>

```go
func RegexMatch() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList <a name="GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference <a name="GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetExactMatch">ResetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetPresentMatch">ResetPresentMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetQueryParameter">ResetQueryParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetRegexMatch">ResetRegexMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExactMatch` <a name="ResetExactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetExactMatch"></a>

```go
func ResetExactMatch()
```

##### `ResetPresentMatch` <a name="ResetPresentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetPresentMatch"></a>

```go
func ResetPresentMatch()
```

##### `ResetQueryParameter` <a name="ResetQueryParameter" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetQueryParameter"></a>

```go
func ResetQueryParameter()
```

##### `ResetRegexMatch` <a name="ResetRegexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetRegexMatch"></a>

```go
func ResetRegexMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatchInput">ExactMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatchInput">PresentMatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameterInput">QueryParameterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatchInput">RegexMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatch">ExactMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatch">PresentMatch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameter">QueryParameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatch">RegexMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExactMatchInput`<sup>Optional</sup> <a name="ExactMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatchInput"></a>

```go
func ExactMatchInput() *string
```

- *Type:* *string

---

##### `PresentMatchInput`<sup>Optional</sup> <a name="PresentMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatchInput"></a>

```go
func PresentMatchInput() interface{}
```

- *Type:* interface{}

---

##### `QueryParameterInput`<sup>Optional</sup> <a name="QueryParameterInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameterInput"></a>

```go
func QueryParameterInput() *string
```

- *Type:* *string

---

##### `RegexMatchInput`<sup>Optional</sup> <a name="RegexMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatchInput"></a>

```go
func RegexMatchInput() *string
```

- *Type:* *string

---

##### `ExactMatch`<sup>Required</sup> <a name="ExactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatch"></a>

```go
func ExactMatch() *string
```

- *Type:* *string

---

##### `PresentMatch`<sup>Required</sup> <a name="PresentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatch"></a>

```go
func PresentMatch() interface{}
```

- *Type:* interface{}

---

##### `QueryParameter`<sup>Required</sup> <a name="QueryParameter" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameter"></a>

```go
func QueryParameter() *string
```

- *Type:* *string

---

##### `RegexMatch`<sup>Required</sup> <a name="RegexMatch" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatch"></a>

```go
func RegexMatch() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesHttpRouteRulesOutputReference <a name="GoogleNetworkServicesHttpRouteRulesOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesHttpRouteRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.putMatches">PutMatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.resetMatches">ResetMatches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.putAction"></a>

```go
func PutAction(value GoogleNetworkServicesHttpRouteRulesAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction">GoogleNetworkServicesHttpRouteRulesAction</a>

---

##### `PutMatches` <a name="PutMatches" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.putMatches"></a>

```go
func PutMatches(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetMatches` <a name="ResetMatches" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.resetMatches"></a>

```go
func ResetMatches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference">GoogleNetworkServicesHttpRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.matches">Matches</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList">GoogleNetworkServicesHttpRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction">GoogleNetworkServicesHttpRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.matchesInput">MatchesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.action"></a>

```go
func Action() GoogleNetworkServicesHttpRouteRulesActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesActionOutputReference">GoogleNetworkServicesHttpRouteRulesActionOutputReference</a>

---

##### `Matches`<sup>Required</sup> <a name="Matches" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.matches"></a>

```go
func Matches() GoogleNetworkServicesHttpRouteRulesMatchesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesMatchesList">GoogleNetworkServicesHttpRouteRulesMatchesList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() GoogleNetworkServicesHttpRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesAction">GoogleNetworkServicesHttpRouteRulesAction</a>

---

##### `MatchesInput`<sup>Optional</sup> <a name="MatchesInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.matchesInput"></a>

```go
func MatchesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesHttpRouteTimeoutsOutputReference <a name="GoogleNetworkServicesHttpRouteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlenetworkserviceshttproute"

googlenetworkserviceshttproute.NewGoogleNetworkServicesHttpRouteTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesHttpRouteTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesHttpRoute.GoogleNetworkServicesHttpRouteTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



