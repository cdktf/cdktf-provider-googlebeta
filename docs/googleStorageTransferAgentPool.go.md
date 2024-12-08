# `googleStorageTransferAgentPool` Submodule <a name="`googleStorageTransferAgentPool` Submodule" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageTransferAgentPool <a name="GoogleStorageTransferAgentPool" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool google_storage_transfer_agent_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragetransferagentpool"

googlestoragetransferagentpool.NewGoogleStorageTransferAgentPool(scope Construct, id *string, config GoogleStorageTransferAgentPoolConfig) GoogleStorageTransferAgentPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig">GoogleStorageTransferAgentPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig">GoogleStorageTransferAgentPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.putBandwidthLimit">PutBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetBandwidthLimit">ResetBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBandwidthLimit` <a name="PutBandwidthLimit" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.putBandwidthLimit"></a>

```go
func PutBandwidthLimit(value GoogleStorageTransferAgentPoolBandwidthLimit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.putBandwidthLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.putTimeouts"></a>

```go
func PutTimeouts(value GoogleStorageTransferAgentPoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts">GoogleStorageTransferAgentPoolTimeouts</a>

---

##### `ResetBandwidthLimit` <a name="ResetBandwidthLimit" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetBandwidthLimit"></a>

```go
func ResetBandwidthLimit()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageTransferAgentPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragetransferagentpool"

googlestoragetransferagentpool.GoogleStorageTransferAgentPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragetransferagentpool"

googlestoragetransferagentpool.GoogleStorageTransferAgentPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragetransferagentpool"

googlestoragetransferagentpool.GoogleStorageTransferAgentPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragetransferagentpool"

googlestoragetransferagentpool.GoogleStorageTransferAgentPool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleStorageTransferAgentPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleStorageTransferAgentPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleStorageTransferAgentPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageTransferAgentPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.bandwidthLimit">BandwidthLimit</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference">GoogleStorageTransferAgentPoolBandwidthLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference">GoogleStorageTransferAgentPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.bandwidthLimitInput">BandwidthLimitInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BandwidthLimit`<sup>Required</sup> <a name="BandwidthLimit" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.bandwidthLimit"></a>

```go
func BandwidthLimit() GoogleStorageTransferAgentPoolBandwidthLimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference">GoogleStorageTransferAgentPoolBandwidthLimitOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.timeouts"></a>

```go
func Timeouts() GoogleStorageTransferAgentPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference">GoogleStorageTransferAgentPoolTimeoutsOutputReference</a>

---

##### `BandwidthLimitInput`<sup>Optional</sup> <a name="BandwidthLimitInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.bandwidthLimitInput"></a>

```go
func BandwidthLimitInput() GoogleStorageTransferAgentPoolBandwidthLimit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageTransferAgentPoolBandwidthLimit <a name="GoogleStorageTransferAgentPoolBandwidthLimit" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragetransferagentpool"

&googlestoragetransferagentpool.GoogleStorageTransferAgentPoolBandwidthLimit {
	LimitMbps: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit.property.limitMbps">LimitMbps</a></code> | <code>*string</code> | Bandwidth rate in megabytes per second, distributed across all the agents in the pool. |

---

##### `LimitMbps`<sup>Required</sup> <a name="LimitMbps" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit.property.limitMbps"></a>

```go
LimitMbps *string
```

- *Type:* *string

Bandwidth rate in megabytes per second, distributed across all the agents in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#limit_mbps GoogleStorageTransferAgentPool#limit_mbps}

---

### GoogleStorageTransferAgentPoolConfig <a name="GoogleStorageTransferAgentPoolConfig" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragetransferagentpool"

&googlestoragetransferagentpool.GoogleStorageTransferAgentPoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	BandwidthLimit: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.name">Name</a></code> | <code>*string</code> | The ID of the agent pool to create. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.bandwidthLimit">BandwidthLimit</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a></code> | bandwidth_limit block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Specifies the client-specified AgentPool description. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#id GoogleStorageTransferAgentPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#project GoogleStorageTransferAgentPool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts">GoogleStorageTransferAgentPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID of the agent pool to create.

The agentPoolId must meet the following requirements:

* Length of 128 characters or less.
* Not start with the string goog.
* Start with a lowercase ASCII character, followed by:

  * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (-), periods (.), underscores (_), or tildes (~).
  * One or more numerals or lowercase ASCII characters.

As expressed by the regular expression: ^(?!goog)[a-z](%5Ba-z0-9-._~%5D*%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#name GoogleStorageTransferAgentPool#name}

---

##### `BandwidthLimit`<sup>Optional</sup> <a name="BandwidthLimit" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.bandwidthLimit"></a>

```go
BandwidthLimit GoogleStorageTransferAgentPoolBandwidthLimit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a>

bandwidth_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#bandwidth_limit GoogleStorageTransferAgentPool#bandwidth_limit}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Specifies the client-specified AgentPool description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#display_name GoogleStorageTransferAgentPool#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#id GoogleStorageTransferAgentPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#project GoogleStorageTransferAgentPool#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolConfig.property.timeouts"></a>

```go
Timeouts GoogleStorageTransferAgentPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts">GoogleStorageTransferAgentPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#timeouts GoogleStorageTransferAgentPool#timeouts}

---

### GoogleStorageTransferAgentPoolTimeouts <a name="GoogleStorageTransferAgentPoolTimeouts" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragetransferagentpool"

&googlestoragetransferagentpool.GoogleStorageTransferAgentPoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#create GoogleStorageTransferAgentPool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#delete GoogleStorageTransferAgentPool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#update GoogleStorageTransferAgentPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#create GoogleStorageTransferAgentPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#delete GoogleStorageTransferAgentPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_storage_transfer_agent_pool#update GoogleStorageTransferAgentPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageTransferAgentPoolBandwidthLimitOutputReference <a name="GoogleStorageTransferAgentPoolBandwidthLimitOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragetransferagentpool"

googlestoragetransferagentpool.NewGoogleStorageTransferAgentPoolBandwidthLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferAgentPoolBandwidthLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbpsInput">LimitMbpsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbps">LimitMbps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LimitMbpsInput`<sup>Optional</sup> <a name="LimitMbpsInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbpsInput"></a>

```go
func LimitMbpsInput() *string
```

- *Type:* *string

---

##### `LimitMbps`<sup>Required</sup> <a name="LimitMbps" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbps"></a>

```go
func LimitMbps() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageTransferAgentPoolBandwidthLimit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolBandwidthLimit">GoogleStorageTransferAgentPoolBandwidthLimit</a>

---


### GoogleStorageTransferAgentPoolTimeoutsOutputReference <a name="GoogleStorageTransferAgentPoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragetransferagentpool"

googlestoragetransferagentpool.NewGoogleStorageTransferAgentPoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageTransferAgentPoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferAgentPool.GoogleStorageTransferAgentPoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



