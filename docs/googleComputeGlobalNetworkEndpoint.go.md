# `googleComputeGlobalNetworkEndpoint` Submodule <a name="`googleComputeGlobalNetworkEndpoint` Submodule" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeGlobalNetworkEndpoint <a name="GoogleComputeGlobalNetworkEndpoint" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_global_network_endpoint google_compute_global_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeglobalnetworkendpoint"

googlecomputeglobalnetworkendpoint.NewGoogleComputeGlobalNetworkEndpoint(scope Construct, id *string, config GoogleComputeGlobalNetworkEndpointConfig) GoogleComputeGlobalNetworkEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig">GoogleComputeGlobalNetworkEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig">GoogleComputeGlobalNetworkEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetFqdn">ResetFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeGlobalNetworkEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts">GoogleComputeGlobalNetworkEndpointTimeouts</a>

---

##### `ResetFqdn` <a name="ResetFqdn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetFqdn"></a>

```go
func ResetFqdn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeGlobalNetworkEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeglobalnetworkendpoint"

googlecomputeglobalnetworkendpoint.GoogleComputeGlobalNetworkEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeglobalnetworkendpoint"

googlecomputeglobalnetworkendpoint.GoogleComputeGlobalNetworkEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeglobalnetworkendpoint"

googlecomputeglobalnetworkendpoint.GoogleComputeGlobalNetworkEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeglobalnetworkendpoint"

googlecomputeglobalnetworkendpoint.GoogleComputeGlobalNetworkEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeGlobalNetworkEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeGlobalNetworkEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeGlobalNetworkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_global_network_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeGlobalNetworkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference">GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqdnInput">FqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroupInput">GlobalNetworkEndpointGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroup">GlobalNetworkEndpointGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.timeouts"></a>

```go
func Timeouts() GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference">GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference</a>

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqdnInput"></a>

```go
func FqdnInput() *string
```

- *Type:* *string

---

##### `GlobalNetworkEndpointGroupInput`<sup>Optional</sup> <a name="GlobalNetworkEndpointGroupInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroupInput"></a>

```go
func GlobalNetworkEndpointGroupInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `GlobalNetworkEndpointGroup`<sup>Required</sup> <a name="GlobalNetworkEndpointGroup" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroup"></a>

```go
func GlobalNetworkEndpointGroup() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeGlobalNetworkEndpointConfig <a name="GoogleComputeGlobalNetworkEndpointConfig" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeglobalnetworkendpoint"

&googlecomputeglobalnetworkendpoint.GoogleComputeGlobalNetworkEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GlobalNetworkEndpointGroup: *string,
	Port: *f64,
	Fqdn: *string,
	Id: *string,
	IpAddress: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.globalNetworkEndpointGroup">GlobalNetworkEndpointGroup</a></code> | <code>*string</code> | The global network endpoint group this endpoint is part of. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.port">Port</a></code> | <code>*f64</code> | Port number of the external endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.fqdn">Fqdn</a></code> | <code>*string</code> | Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_global_network_endpoint#id GoogleComputeGlobalNetworkEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.ipAddress">IpAddress</a></code> | <code>*string</code> | IPv4 address external endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_global_network_endpoint#project GoogleComputeGlobalNetworkEndpoint#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts">GoogleComputeGlobalNetworkEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GlobalNetworkEndpointGroup`<sup>Required</sup> <a name="GlobalNetworkEndpointGroup" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.globalNetworkEndpointGroup"></a>

```go
GlobalNetworkEndpointGroup *string
```

- *Type:* *string

The global network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_global_network_endpoint#global_network_endpoint_group GoogleComputeGlobalNetworkEndpoint#global_network_endpoint_group}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number of the external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_global_network_endpoint#port GoogleComputeGlobalNetworkEndpoint#port}

---

##### `Fqdn`<sup>Optional</sup> <a name="Fqdn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.fqdn"></a>

```go
Fqdn *string
```

- *Type:* *string

Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_global_network_endpoint#fqdn GoogleComputeGlobalNetworkEndpoint#fqdn}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_global_network_endpoint#id GoogleComputeGlobalNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

IPv4 address external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_global_network_endpoint#ip_address GoogleComputeGlobalNetworkEndpoint#ip_address}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_global_network_endpoint#project GoogleComputeGlobalNetworkEndpoint#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeGlobalNetworkEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts">GoogleComputeGlobalNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_global_network_endpoint#timeouts GoogleComputeGlobalNetworkEndpoint#timeouts}

---

### GoogleComputeGlobalNetworkEndpointTimeouts <a name="GoogleComputeGlobalNetworkEndpointTimeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeglobalnetworkendpoint"

&googlecomputeglobalnetworkendpoint.GoogleComputeGlobalNetworkEndpointTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_global_network_endpoint#create GoogleComputeGlobalNetworkEndpoint#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_global_network_endpoint#delete GoogleComputeGlobalNetworkEndpoint#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_global_network_endpoint#create GoogleComputeGlobalNetworkEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_global_network_endpoint#delete GoogleComputeGlobalNetworkEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference <a name="GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeglobalnetworkendpoint"

googlecomputeglobalnetworkendpoint.NewGoogleComputeGlobalNetworkEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



