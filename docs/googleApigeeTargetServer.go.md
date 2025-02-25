# `googleApigeeTargetServer` Submodule <a name="`googleApigeeTargetServer` Submodule" id="@cdktf/provider-google-beta.googleApigeeTargetServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeTargetServer <a name="GoogleApigeeTargetServer" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server google_apigee_target_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeetargetserver"

googleapigeetargetserver.NewGoogleApigeeTargetServer(scope Construct, id *string, config GoogleApigeeTargetServerConfig) GoogleApigeeTargetServer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig">GoogleApigeeTargetServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig">GoogleApigeeTargetServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo">PutSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetSSlInfo">ResetSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSSlInfo` <a name="PutSSlInfo" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo"></a>

```go
func PutSSlInfo(value GoogleApigeeTargetServerSSlInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putTimeouts"></a>

```go
func PutTimeouts(value GoogleApigeeTargetServerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetId"></a>

```go
func ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSSlInfo` <a name="ResetSSlInfo" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetSSlInfo"></a>

```go
func ResetSSlInfo()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeTargetServer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeetargetserver"

googleapigeetargetserver.GoogleApigeeTargetServer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeetargetserver"

googleapigeetargetserver.GoogleApigeeTargetServer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeetargetserver"

googleapigeetargetserver.GoogleApigeeTargetServer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeetargetserver"

googleapigeetargetserver.GoogleApigeeTargetServer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleApigeeTargetServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleApigeeTargetServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleApigeeTargetServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeTargetServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.sSlInfo">SSlInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference">GoogleApigeeTargetServerSSlInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference">GoogleApigeeTargetServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.envIdInput">EnvIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.sSlInfoInput">SSlInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.envId">EnvId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SSlInfo`<sup>Required</sup> <a name="SSlInfo" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.sSlInfo"></a>

```go
func SSlInfo() GoogleApigeeTargetServerSSlInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference">GoogleApigeeTargetServerSSlInfoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.timeouts"></a>

```go
func Timeouts() GoogleApigeeTargetServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference">GoogleApigeeTargetServerTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.envIdInput"></a>

```go
func EnvIdInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SSlInfoInput`<sup>Optional</sup> <a name="SSlInfoInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.sSlInfoInput"></a>

```go
func SSlInfoInput() GoogleApigeeTargetServerSSlInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.envId"></a>

```go
func EnvId() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeTargetServerConfig <a name="GoogleApigeeTargetServerConfig" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeetargetserver"

&googleapigeetargetserver.GoogleApigeeTargetServerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnvId: *string,
	Host: *string,
	Name: *string,
	Port: *f64,
	Description: *string,
	Id: *string,
	IsEnabled: interface{},
	Protocol: *string,
	SSlInfo: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.envId">EnvId</a></code> | <code>*string</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.host">Host</a></code> | <code>*string</code> | The host name this target connects to. Value must be a valid hostname as described by RFC-1123. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.name">Name</a></code> | <code>*string</code> | The resource id of this reference. Values must match the regular expression [\w\s-.]+. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.port">Port</a></code> | <code>*f64</code> | The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of this TargetServer. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#id GoogleApigeeTargetServer#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.sSlInfo">SSlInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a></code> | s_sl_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.envId"></a>

```go
EnvId *string
```

- *Type:* *string

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#env_id GoogleApigeeTargetServer#env_id}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

The host name this target connects to. Value must be a valid hostname as described by RFC-1123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#host GoogleApigeeTargetServer#host}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource id of this reference. Values must match the regular expression [\w\s-.]+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#name GoogleApigeeTargetServer#name}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#port GoogleApigeeTargetServer#port}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of this TargetServer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#description GoogleApigeeTargetServer#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#id GoogleApigeeTargetServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#is_enabled GoogleApigeeTargetServer#is_enabled}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#protocol GoogleApigeeTargetServer#protocol}

---

##### `SSlInfo`<sup>Optional</sup> <a name="SSlInfo" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.sSlInfo"></a>

```go
SSlInfo GoogleApigeeTargetServerSSlInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a>

s_sl_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#s_sl_info GoogleApigeeTargetServer#s_sl_info}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.timeouts"></a>

```go
Timeouts GoogleApigeeTargetServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#timeouts GoogleApigeeTargetServer#timeouts}

---

### GoogleApigeeTargetServerSSlInfo <a name="GoogleApigeeTargetServerSSlInfo" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeetargetserver"

&googleapigeetargetserver.GoogleApigeeTargetServerSSlInfo {
	Enabled: interface{},
	Ciphers: *[]*string,
	ClientAuthEnabled: interface{},
	CommonName: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName,
	IgnoreValidationErrors: interface{},
	KeyAlias: *string,
	KeyStore: *string,
	Protocols: *[]*string,
	TrustStore: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enables TLS. If false, neither one-way nor two-way TLS will be enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.ciphers">Ciphers</a></code> | <code>*[]*string</code> | The SSL/TLS cipher suites to be used. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.clientAuthEnabled">ClientAuthEnabled</a></code> | <code>interface{}</code> | Enables two-way TLS. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.commonName">CommonName</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a></code> | common_name block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.ignoreValidationErrors">IgnoreValidationErrors</a></code> | <code>interface{}</code> | If true, Edge ignores TLS certificate errors. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.keyAlias">KeyAlias</a></code> | <code>*string</code> | Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.keyStore">KeyStore</a></code> | <code>*string</code> | Required if clientAuthEnabled is true. The resource ID of the keystore. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.protocols">Protocols</a></code> | <code>*[]*string</code> | The TLS versioins to be used. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.trustStore">TrustStore</a></code> | <code>*string</code> | The resource ID of the truststore. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enables TLS. If false, neither one-way nor two-way TLS will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#enabled GoogleApigeeTargetServer#enabled}

---

##### `Ciphers`<sup>Optional</sup> <a name="Ciphers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.ciphers"></a>

```go
Ciphers *[]*string
```

- *Type:* *[]*string

The SSL/TLS cipher suites to be used.

For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#ciphers GoogleApigeeTargetServer#ciphers}

---

##### `ClientAuthEnabled`<sup>Optional</sup> <a name="ClientAuthEnabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.clientAuthEnabled"></a>

```go
ClientAuthEnabled interface{}
```

- *Type:* interface{}

Enables two-way TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#client_auth_enabled GoogleApigeeTargetServer#client_auth_enabled}

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.commonName"></a>

```go
CommonName GoogleApigeeTargetServerSSlInfoCommonName
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a>

common_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#common_name GoogleApigeeTargetServer#common_name}

---

##### `IgnoreValidationErrors`<sup>Optional</sup> <a name="IgnoreValidationErrors" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.ignoreValidationErrors"></a>

```go
IgnoreValidationErrors interface{}
```

- *Type:* interface{}

If true, Edge ignores TLS certificate errors.

Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#ignore_validation_errors GoogleApigeeTargetServer#ignore_validation_errors}

---

##### `KeyAlias`<sup>Optional</sup> <a name="KeyAlias" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.keyAlias"></a>

```go
KeyAlias *string
```

- *Type:* *string

Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#key_alias GoogleApigeeTargetServer#key_alias}

---

##### `KeyStore`<sup>Optional</sup> <a name="KeyStore" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.keyStore"></a>

```go
KeyStore *string
```

- *Type:* *string

Required if clientAuthEnabled is true. The resource ID of the keystore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#key_store GoogleApigeeTargetServer#key_store}

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

The TLS versioins to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#protocols GoogleApigeeTargetServer#protocols}

---

##### `TrustStore`<sup>Optional</sup> <a name="TrustStore" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.trustStore"></a>

```go
TrustStore *string
```

- *Type:* *string

The resource ID of the truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#trust_store GoogleApigeeTargetServer#trust_store}

---

### GoogleApigeeTargetServerSSlInfoCommonName <a name="GoogleApigeeTargetServerSSlInfoCommonName" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeetargetserver"

&googleapigeetargetserver.GoogleApigeeTargetServerSSlInfoCommonName {
	Value: *string,
	WildcardMatch: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName.property.value">Value</a></code> | <code>*string</code> | The TLS Common Name string of the certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName.property.wildcardMatch">WildcardMatch</a></code> | <code>interface{}</code> | Indicates whether the cert should be matched against as a wildcard cert. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName.property.value"></a>

```go
Value *string
```

- *Type:* *string

The TLS Common Name string of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#value GoogleApigeeTargetServer#value}

---

##### `WildcardMatch`<sup>Optional</sup> <a name="WildcardMatch" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName.property.wildcardMatch"></a>

```go
WildcardMatch interface{}
```

- *Type:* interface{}

Indicates whether the cert should be matched against as a wildcard cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#wildcard_match GoogleApigeeTargetServer#wildcard_match}

---

### GoogleApigeeTargetServerTimeouts <a name="GoogleApigeeTargetServerTimeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeetargetserver"

&googleapigeetargetserver.GoogleApigeeTargetServerTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#create GoogleApigeeTargetServer#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#delete GoogleApigeeTargetServer#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#update GoogleApigeeTargetServer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#create GoogleApigeeTargetServer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#delete GoogleApigeeTargetServer#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_target_server#update GoogleApigeeTargetServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeTargetServerSSlInfoCommonNameOutputReference <a name="GoogleApigeeTargetServerSSlInfoCommonNameOutputReference" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeetargetserver"

googleapigeetargetserver.NewGoogleApigeeTargetServerSSlInfoCommonNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeTargetServerSSlInfoCommonNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resetWildcardMatch">ResetWildcardMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetWildcardMatch` <a name="ResetWildcardMatch" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resetWildcardMatch"></a>

```go
func ResetWildcardMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatchInput">WildcardMatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatch">WildcardMatch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `WildcardMatchInput`<sup>Optional</sup> <a name="WildcardMatchInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatchInput"></a>

```go
func WildcardMatchInput() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `WildcardMatch`<sup>Required</sup> <a name="WildcardMatch" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatch"></a>

```go
func WildcardMatch() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeTargetServerSSlInfoCommonName
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a>

---


### GoogleApigeeTargetServerSSlInfoOutputReference <a name="GoogleApigeeTargetServerSSlInfoOutputReference" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeetargetserver"

googleapigeetargetserver.NewGoogleApigeeTargetServerSSlInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeTargetServerSSlInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.putCommonName">PutCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetCiphers">ResetCiphers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetClientAuthEnabled">ResetClientAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetIgnoreValidationErrors">ResetIgnoreValidationErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetKeyAlias">ResetKeyAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetKeyStore">ResetKeyStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetTrustStore">ResetTrustStore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCommonName` <a name="PutCommonName" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.putCommonName"></a>

```go
func PutCommonName(value GoogleApigeeTargetServerSSlInfoCommonName)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.putCommonName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a>

---

##### `ResetCiphers` <a name="ResetCiphers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetCiphers"></a>

```go
func ResetCiphers()
```

##### `ResetClientAuthEnabled` <a name="ResetClientAuthEnabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetClientAuthEnabled"></a>

```go
func ResetClientAuthEnabled()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetCommonName"></a>

```go
func ResetCommonName()
```

##### `ResetIgnoreValidationErrors` <a name="ResetIgnoreValidationErrors" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetIgnoreValidationErrors"></a>

```go
func ResetIgnoreValidationErrors()
```

##### `ResetKeyAlias` <a name="ResetKeyAlias" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetKeyAlias"></a>

```go
func ResetKeyAlias()
```

##### `ResetKeyStore` <a name="ResetKeyStore" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetKeyStore"></a>

```go
func ResetKeyStore()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetProtocols"></a>

```go
func ResetProtocols()
```

##### `ResetTrustStore` <a name="ResetTrustStore" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetTrustStore"></a>

```go
func ResetTrustStore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.commonName">CommonName</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference">GoogleApigeeTargetServerSSlInfoCommonNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ciphersInput">CiphersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabledInput">ClientAuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrorsInput">IgnoreValidationErrorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyAliasInput">KeyAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyStoreInput">KeyStoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.trustStoreInput">TrustStoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ciphers">Ciphers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabled">ClientAuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrors">IgnoreValidationErrors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyAlias">KeyAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyStore">KeyStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.trustStore">TrustStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.commonName"></a>

```go
func CommonName() GoogleApigeeTargetServerSSlInfoCommonNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference">GoogleApigeeTargetServerSSlInfoCommonNameOutputReference</a>

---

##### `CiphersInput`<sup>Optional</sup> <a name="CiphersInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ciphersInput"></a>

```go
func CiphersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientAuthEnabledInput`<sup>Optional</sup> <a name="ClientAuthEnabledInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabledInput"></a>

```go
func ClientAuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.commonNameInput"></a>

```go
func CommonNameInput() GoogleApigeeTargetServerSSlInfoCommonName
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreValidationErrorsInput`<sup>Optional</sup> <a name="IgnoreValidationErrorsInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrorsInput"></a>

```go
func IgnoreValidationErrorsInput() interface{}
```

- *Type:* interface{}

---

##### `KeyAliasInput`<sup>Optional</sup> <a name="KeyAliasInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyAliasInput"></a>

```go
func KeyAliasInput() *string
```

- *Type:* *string

---

##### `KeyStoreInput`<sup>Optional</sup> <a name="KeyStoreInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyStoreInput"></a>

```go
func KeyStoreInput() *string
```

- *Type:* *string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TrustStoreInput`<sup>Optional</sup> <a name="TrustStoreInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.trustStoreInput"></a>

```go
func TrustStoreInput() *string
```

- *Type:* *string

---

##### `Ciphers`<sup>Required</sup> <a name="Ciphers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ciphers"></a>

```go
func Ciphers() *[]*string
```

- *Type:* *[]*string

---

##### `ClientAuthEnabled`<sup>Required</sup> <a name="ClientAuthEnabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabled"></a>

```go
func ClientAuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IgnoreValidationErrors`<sup>Required</sup> <a name="IgnoreValidationErrors" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrors"></a>

```go
func IgnoreValidationErrors() interface{}
```

- *Type:* interface{}

---

##### `KeyAlias`<sup>Required</sup> <a name="KeyAlias" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyAlias"></a>

```go
func KeyAlias() *string
```

- *Type:* *string

---

##### `KeyStore`<sup>Required</sup> <a name="KeyStore" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyStore"></a>

```go
func KeyStore() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `TrustStore`<sup>Required</sup> <a name="TrustStore" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.trustStore"></a>

```go
func TrustStore() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeTargetServerSSlInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a>

---


### GoogleApigeeTargetServerTimeoutsOutputReference <a name="GoogleApigeeTargetServerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeetargetserver"

googleapigeetargetserver.NewGoogleApigeeTargetServerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeTargetServerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



