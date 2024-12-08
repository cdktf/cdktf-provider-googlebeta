# `googleEdgenetworkSubnet` Submodule <a name="`googleEdgenetworkSubnet` Submodule" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEdgenetworkSubnet <a name="GoogleEdgenetworkSubnet" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet google_edgenetwork_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgenetworksubnet"

googleedgenetworksubnet.NewGoogleEdgenetworkSubnet(scope Construct, id *string, config GoogleEdgenetworkSubnetConfig) GoogleEdgenetworkSubnet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig">GoogleEdgenetworkSubnetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig">GoogleEdgenetworkSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetIpv4Cidr">ResetIpv4Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetIpv6Cidr">ResetIpv6Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetVlanId">ResetVlanId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.putTimeouts"></a>

```go
func PutTimeouts(value GoogleEdgenetworkSubnetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts">GoogleEdgenetworkSubnetTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetId"></a>

```go
func ResetId()
```

##### `ResetIpv4Cidr` <a name="ResetIpv4Cidr" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetIpv4Cidr"></a>

```go
func ResetIpv4Cidr()
```

##### `ResetIpv6Cidr` <a name="ResetIpv6Cidr" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetIpv6Cidr"></a>

```go
func ResetIpv6Cidr()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVlanId` <a name="ResetVlanId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetVlanId"></a>

```go
func ResetVlanId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEdgenetworkSubnet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgenetworksubnet"

googleedgenetworksubnet.GoogleEdgenetworkSubnet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgenetworksubnet"

googleedgenetworksubnet.GoogleEdgenetworkSubnet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgenetworksubnet"

googleedgenetworksubnet.GoogleEdgenetworkSubnet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgenetworksubnet"

googleedgenetworksubnet.GoogleEdgenetworkSubnet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleEdgenetworkSubnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleEdgenetworkSubnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleEdgenetworkSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEdgenetworkSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference">GoogleEdgenetworkSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv4CidrInput">Ipv4CidrInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv6CidrInput">Ipv6CidrInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.vlanIdInput">VlanIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv4Cidr">Ipv4Cidr</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv6Cidr">Ipv6Cidr</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.vlanId">VlanId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.timeouts"></a>

```go
func Timeouts() GoogleEdgenetworkSubnetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference">GoogleEdgenetworkSubnetTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Ipv4CidrInput`<sup>Optional</sup> <a name="Ipv4CidrInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv4CidrInput"></a>

```go
func Ipv4CidrInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6CidrInput`<sup>Optional</sup> <a name="Ipv6CidrInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv6CidrInput"></a>

```go
func Ipv6CidrInput() *[]*string
```

- *Type:* *[]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.vlanIdInput"></a>

```go
func VlanIdInput() *f64
```

- *Type:* *f64

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ipv4Cidr`<sup>Required</sup> <a name="Ipv4Cidr" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv4Cidr"></a>

```go
func Ipv4Cidr() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6Cidr`<sup>Required</sup> <a name="Ipv6Cidr" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv6Cidr"></a>

```go
func Ipv6Cidr() *[]*string
```

- *Type:* *[]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.vlanId"></a>

```go
func VlanId() *f64
```

- *Type:* *f64

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEdgenetworkSubnetConfig <a name="GoogleEdgenetworkSubnetConfig" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgenetworksubnet"

&googleedgenetworksubnet.GoogleEdgenetworkSubnetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Network: *string,
	SubnetId: *string,
	Zone: *string,
	Description: *string,
	Id: *string,
	Ipv4Cidr: *[]*string,
	Ipv6Cidr: *[]*string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts,
	VlanId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.location">Location</a></code> | <code>*string</code> | The Google Cloud region to which the target Distributed Cloud Edge zone belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.network">Network</a></code> | <code>*string</code> | The ID of the network to which this router belongs. Must be of the form: 'projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | A unique ID that identifies this subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.zone">Zone</a></code> | <code>*string</code> | The name of the target Distributed Cloud Edge zone. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.description">Description</a></code> | <code>*string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#id GoogleEdgenetworkSubnet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.ipv4Cidr">Ipv4Cidr</a></code> | <code>*[]*string</code> | The ranges of ipv4 addresses that are owned by this subnetwork, in CIDR format. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.ipv6Cidr">Ipv6Cidr</a></code> | <code>*[]*string</code> | The ranges of ipv6 addresses that are owned by this subnetwork, in CIDR format. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#project GoogleEdgenetworkSubnet#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts">GoogleEdgenetworkSubnetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.vlanId">VlanId</a></code> | <code>*f64</code> | VLAN ID for this subnetwork. If not specified, one is assigned automatically. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The Google Cloud region to which the target Distributed Cloud Edge zone belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#location GoogleEdgenetworkSubnet#location}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The ID of the network to which this router belongs. Must be of the form: 'projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#network GoogleEdgenetworkSubnet#network}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

A unique ID that identifies this subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#subnet_id GoogleEdgenetworkSubnet#subnet_id}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The name of the target Distributed Cloud Edge zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#zone GoogleEdgenetworkSubnet#zone}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#description GoogleEdgenetworkSubnet#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#id GoogleEdgenetworkSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv4Cidr`<sup>Optional</sup> <a name="Ipv4Cidr" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.ipv4Cidr"></a>

```go
Ipv4Cidr *[]*string
```

- *Type:* *[]*string

The ranges of ipv4 addresses that are owned by this subnetwork, in CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#ipv4_cidr GoogleEdgenetworkSubnet#ipv4_cidr}

---

##### `Ipv6Cidr`<sup>Optional</sup> <a name="Ipv6Cidr" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.ipv6Cidr"></a>

```go
Ipv6Cidr *[]*string
```

- *Type:* *[]*string

The ranges of ipv6 addresses that are owned by this subnetwork, in CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#ipv6_cidr GoogleEdgenetworkSubnet#ipv6_cidr}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#labels GoogleEdgenetworkSubnet#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#project GoogleEdgenetworkSubnet#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.timeouts"></a>

```go
Timeouts GoogleEdgenetworkSubnetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts">GoogleEdgenetworkSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#timeouts GoogleEdgenetworkSubnet#timeouts}

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.vlanId"></a>

```go
VlanId *f64
```

- *Type:* *f64

VLAN ID for this subnetwork. If not specified, one is assigned automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#vlan_id GoogleEdgenetworkSubnet#vlan_id}

---

### GoogleEdgenetworkSubnetTimeouts <a name="GoogleEdgenetworkSubnetTimeouts" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgenetworksubnet"

&googleedgenetworksubnet.GoogleEdgenetworkSubnetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#create GoogleEdgenetworkSubnet#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#delete GoogleEdgenetworkSubnet#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#update GoogleEdgenetworkSubnet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#create GoogleEdgenetworkSubnet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#delete GoogleEdgenetworkSubnet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_edgenetwork_subnet#update GoogleEdgenetworkSubnet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEdgenetworkSubnetTimeoutsOutputReference <a name="GoogleEdgenetworkSubnetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleedgenetworksubnet"

googleedgenetworksubnet.NewGoogleEdgenetworkSubnetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEdgenetworkSubnetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



