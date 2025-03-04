# `googleTpuNode` Submodule <a name="`googleTpuNode` Submodule" id="@cdktf/provider-google-beta.googleTpuNode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleTpuNode <a name="GoogleTpuNode" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node google_tpu_node}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googletpunode"

googletpunode.NewGoogleTpuNode(scope Construct, id *string, config GoogleTpuNodeConfig) GoogleTpuNode
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig">GoogleTpuNodeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig">GoogleTpuNodeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.putSchedulingConfig">PutSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetSchedulingConfig">ResetSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetUseServiceNetworking">ResetUseServiceNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchedulingConfig` <a name="PutSchedulingConfig" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.putSchedulingConfig"></a>

```go
func PutSchedulingConfig(value GoogleTpuNodeSchedulingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.putSchedulingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfig">GoogleTpuNodeSchedulingConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.putTimeouts"></a>

```go
func PutTimeouts(value GoogleTpuNodeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeouts">GoogleTpuNodeTimeouts</a>

---

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetCidrBlock"></a>

```go
func ResetCidrBlock()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSchedulingConfig` <a name="ResetSchedulingConfig" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetSchedulingConfig"></a>

```go
func ResetSchedulingConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUseServiceNetworking` <a name="ResetUseServiceNetworking" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetUseServiceNetworking"></a>

```go
func ResetUseServiceNetworking()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleTpuNode resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googletpunode"

googletpunode.GoogleTpuNode_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googletpunode"

googletpunode.GoogleTpuNode_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googletpunode"

googletpunode.GoogleTpuNode_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googletpunode"

googletpunode.GoogleTpuNode_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleTpuNode resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleTpuNode to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleTpuNode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleTpuNode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.networkEndpoints">NetworkEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList">GoogleTpuNodeNetworkEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.schedulingConfig">SchedulingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference">GoogleTpuNodeSchedulingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference">GoogleTpuNodeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.cidrBlockInput">CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.schedulingConfigInput">SchedulingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfig">GoogleTpuNodeSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.tensorflowVersionInput">TensorflowVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.useServiceNetworkingInput">UseServiceNetworkingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.tensorflowVersion">TensorflowVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.useServiceNetworking">UseServiceNetworking</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `NetworkEndpoints`<sup>Required</sup> <a name="NetworkEndpoints" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.networkEndpoints"></a>

```go
func NetworkEndpoints() GoogleTpuNodeNetworkEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList">GoogleTpuNodeNetworkEndpointsList</a>

---

##### `SchedulingConfig`<sup>Required</sup> <a name="SchedulingConfig" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.schedulingConfig"></a>

```go
func SchedulingConfig() GoogleTpuNodeSchedulingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference">GoogleTpuNodeSchedulingConfigOutputReference</a>

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.timeouts"></a>

```go
func Timeouts() GoogleTpuNodeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference">GoogleTpuNodeTimeoutsOutputReference</a>

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.cidrBlockInput"></a>

```go
func CidrBlockInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SchedulingConfigInput`<sup>Optional</sup> <a name="SchedulingConfigInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.schedulingConfigInput"></a>

```go
func SchedulingConfigInput() GoogleTpuNodeSchedulingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfig">GoogleTpuNodeSchedulingConfig</a>

---

##### `TensorflowVersionInput`<sup>Optional</sup> <a name="TensorflowVersionInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.tensorflowVersionInput"></a>

```go
func TensorflowVersionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UseServiceNetworkingInput`<sup>Optional</sup> <a name="UseServiceNetworkingInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.useServiceNetworkingInput"></a>

```go
func UseServiceNetworkingInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `TensorflowVersion`<sup>Required</sup> <a name="TensorflowVersion" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.tensorflowVersion"></a>

```go
func TensorflowVersion() *string
```

- *Type:* *string

---

##### `UseServiceNetworking`<sup>Required</sup> <a name="UseServiceNetworking" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.useServiceNetworking"></a>

```go
func UseServiceNetworking() interface{}
```

- *Type:* interface{}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNode.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleTpuNodeConfig <a name="GoogleTpuNodeConfig" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googletpunode"

&googletpunode.GoogleTpuNodeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AcceleratorType: *string,
	Name: *string,
	TensorflowVersion: *string,
	CidrBlock: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Network: *string,
	Project: *string,
	SchedulingConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleTpuNode.GoogleTpuNodeSchedulingConfig,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleTpuNode.GoogleTpuNodeTimeouts,
	UseServiceNetworking: interface{},
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | The type of hardware accelerators associated with this node. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.name">Name</a></code> | <code>*string</code> | The immutable name of the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.tensorflowVersion">TensorflowVersion</a></code> | <code>*string</code> | The version of Tensorflow running in the Node. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | The CIDR block that the TPU node will use when selecting an IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.description">Description</a></code> | <code>*string</code> | The user-supplied description of the TPU. Maximum of 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#id GoogleTpuNode#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.network">Network</a></code> | <code>*string</code> | The name of a network to peer the TPU node to. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#project GoogleTpuNode#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.schedulingConfig">SchedulingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfig">GoogleTpuNodeSchedulingConfig</a></code> | scheduling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeouts">GoogleTpuNodeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.useServiceNetworking">UseServiceNetworking</a></code> | <code>interface{}</code> | Whether the VPC peering for the node is set up through Service Networking API. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.zone">Zone</a></code> | <code>*string</code> | The GCP location for the TPU. If it is not provided, the provider zone is used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

The type of hardware accelerators associated with this node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#accelerator_type GoogleTpuNode#accelerator_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The immutable name of the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#name GoogleTpuNode#name}

---

##### `TensorflowVersion`<sup>Required</sup> <a name="TensorflowVersion" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.tensorflowVersion"></a>

```go
TensorflowVersion *string
```

- *Type:* *string

The version of Tensorflow running in the Node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#tensorflow_version GoogleTpuNode#tensorflow_version}

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.cidrBlock"></a>

```go
CidrBlock *string
```

- *Type:* *string

The CIDR block that the TPU node will use when selecting an IP address.

This CIDR block must be a /29 block; the Compute Engine
networks API forbids a smaller block, and using a larger block would
be wasteful (a node can only consume one IP address).

Errors will occur if the CIDR block has already been used for a
currently existing TPU node, the CIDR block conflicts with any
subnetworks in the user's provided network, or the provided network
is peered with another network that is using that CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#cidr_block GoogleTpuNode#cidr_block}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The user-supplied description of the TPU. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#description GoogleTpuNode#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#id GoogleTpuNode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#labels GoogleTpuNode#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name of a network to peer the TPU node to.

It must be a
preexisting Compute Engine network inside of the project on which
this API has been activated. If none is provided, "default" will be
used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#network GoogleTpuNode#network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#project GoogleTpuNode#project}.

---

##### `SchedulingConfig`<sup>Optional</sup> <a name="SchedulingConfig" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.schedulingConfig"></a>

```go
SchedulingConfig GoogleTpuNodeSchedulingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfig">GoogleTpuNodeSchedulingConfig</a>

scheduling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#scheduling_config GoogleTpuNode#scheduling_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.timeouts"></a>

```go
Timeouts GoogleTpuNodeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeouts">GoogleTpuNodeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#timeouts GoogleTpuNode#timeouts}

---

##### `UseServiceNetworking`<sup>Optional</sup> <a name="UseServiceNetworking" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.useServiceNetworking"></a>

```go
UseServiceNetworking interface{}
```

- *Type:* interface{}

Whether the VPC peering for the node is set up through Service Networking API.

The VPC Peering should be set up before provisioning the node. If this field is set,
cidr_block field should not be specified. If the network that you want to peer the
TPU Node to is a Shared VPC network, the node must be created with this this field enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#use_service_networking GoogleTpuNode#use_service_networking}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The GCP location for the TPU. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#zone GoogleTpuNode#zone}

---

### GoogleTpuNodeNetworkEndpoints <a name="GoogleTpuNodeNetworkEndpoints" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googletpunode"

&googletpunode.GoogleTpuNodeNetworkEndpoints {

}
```


### GoogleTpuNodeSchedulingConfig <a name="GoogleTpuNodeSchedulingConfig" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googletpunode"

&googletpunode.GoogleTpuNodeSchedulingConfig {
	Preemptible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfig.property.preemptible">Preemptible</a></code> | <code>interface{}</code> | Defines whether the TPU instance is preemptible. |

---

##### `Preemptible`<sup>Required</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfig.property.preemptible"></a>

```go
Preemptible interface{}
```

- *Type:* interface{}

Defines whether the TPU instance is preemptible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#preemptible GoogleTpuNode#preemptible}

---

### GoogleTpuNodeTimeouts <a name="GoogleTpuNodeTimeouts" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googletpunode"

&googletpunode.GoogleTpuNodeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#create GoogleTpuNode#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#delete GoogleTpuNode#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#update GoogleTpuNode#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#create GoogleTpuNode#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#delete GoogleTpuNode#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_node#update GoogleTpuNode#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleTpuNodeNetworkEndpointsList <a name="GoogleTpuNodeNetworkEndpointsList" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googletpunode"

googletpunode.NewGoogleTpuNodeNetworkEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleTpuNodeNetworkEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.get"></a>

```go
func Get(index *f64) GoogleTpuNodeNetworkEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleTpuNodeNetworkEndpointsOutputReference <a name="GoogleTpuNodeNetworkEndpointsOutputReference" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googletpunode"

googletpunode.NewGoogleTpuNodeNetworkEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleTpuNodeNetworkEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpoints">GoogleTpuNodeNetworkEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTpuNodeNetworkEndpoints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeNetworkEndpoints">GoogleTpuNodeNetworkEndpoints</a>

---


### GoogleTpuNodeSchedulingConfigOutputReference <a name="GoogleTpuNodeSchedulingConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googletpunode"

googletpunode.NewGoogleTpuNodeSchedulingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTpuNodeSchedulingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.property.preemptibleInput">PreemptibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.property.preemptible">Preemptible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfig">GoogleTpuNodeSchedulingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreemptibleInput`<sup>Optional</sup> <a name="PreemptibleInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.property.preemptibleInput"></a>

```go
func PreemptibleInput() interface{}
```

- *Type:* interface{}

---

##### `Preemptible`<sup>Required</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.property.preemptible"></a>

```go
func Preemptible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleTpuNodeSchedulingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeSchedulingConfig">GoogleTpuNodeSchedulingConfig</a>

---


### GoogleTpuNodeTimeoutsOutputReference <a name="GoogleTpuNodeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googletpunode"

googletpunode.NewGoogleTpuNodeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleTpuNodeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleTpuNode.GoogleTpuNodeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



