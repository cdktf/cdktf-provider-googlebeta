# `googleActiveDirectoryPeering` Submodule <a name="`googleActiveDirectoryPeering` Submodule" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleActiveDirectoryPeering <a name="GoogleActiveDirectoryPeering" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering google_active_directory_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleactivedirectorypeering"

googleactivedirectorypeering.NewGoogleActiveDirectoryPeering(scope Construct, id *string, config GoogleActiveDirectoryPeeringConfig) GoogleActiveDirectoryPeering
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig">GoogleActiveDirectoryPeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig">GoogleActiveDirectoryPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetStatusMessage">ResetStatusMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.putTimeouts"></a>

```go
func PutTimeouts(value GoogleActiveDirectoryPeeringTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts">GoogleActiveDirectoryPeeringTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetProject"></a>

```go
func ResetProject()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetStatusMessage` <a name="ResetStatusMessage" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetStatusMessage"></a>

```go
func ResetStatusMessage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleActiveDirectoryPeering resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleactivedirectorypeering"

googleactivedirectorypeering.GoogleActiveDirectoryPeering_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleactivedirectorypeering"

googleactivedirectorypeering.GoogleActiveDirectoryPeering_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleactivedirectorypeering"

googleactivedirectorypeering.GoogleActiveDirectoryPeering_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleactivedirectorypeering"

googleactivedirectorypeering.GoogleActiveDirectoryPeering_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleActiveDirectoryPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleActiveDirectoryPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleActiveDirectoryPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleActiveDirectoryPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference">GoogleActiveDirectoryPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.authorizedNetworkInput">AuthorizedNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.domainResourceInput">DomainResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.peeringIdInput">PeeringIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.statusMessageInput">StatusMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.authorizedNetwork">AuthorizedNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.domainResource">DomainResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.peeringId">PeeringId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.timeouts"></a>

```go
func Timeouts() GoogleActiveDirectoryPeeringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference">GoogleActiveDirectoryPeeringTimeoutsOutputReference</a>

---

##### `AuthorizedNetworkInput`<sup>Optional</sup> <a name="AuthorizedNetworkInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.authorizedNetworkInput"></a>

```go
func AuthorizedNetworkInput() *string
```

- *Type:* *string

---

##### `DomainResourceInput`<sup>Optional</sup> <a name="DomainResourceInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.domainResourceInput"></a>

```go
func DomainResourceInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PeeringIdInput`<sup>Optional</sup> <a name="PeeringIdInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.peeringIdInput"></a>

```go
func PeeringIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `StatusMessageInput`<sup>Optional</sup> <a name="StatusMessageInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.statusMessageInput"></a>

```go
func StatusMessageInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizedNetwork`<sup>Required</sup> <a name="AuthorizedNetwork" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.authorizedNetwork"></a>

```go
func AuthorizedNetwork() *string
```

- *Type:* *string

---

##### `DomainResource`<sup>Required</sup> <a name="DomainResource" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.domainResource"></a>

```go
func DomainResource() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PeeringId`<sup>Required</sup> <a name="PeeringId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.peeringId"></a>

```go
func PeeringId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleActiveDirectoryPeeringConfig <a name="GoogleActiveDirectoryPeeringConfig" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleactivedirectorypeering"

&googleactivedirectorypeering.GoogleActiveDirectoryPeeringConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthorizedNetwork: *string,
	DomainResource: *string,
	PeeringId: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Status: *string,
	StatusMessage: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.authorizedNetwork">AuthorizedNetwork</a></code> | <code>*string</code> | The full names of the Google Compute Engine networks to which the instance is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.domainResource">DomainResource</a></code> | <code>*string</code> | Full domain resource path for the Managed AD Domain involved in peering. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.peeringId">PeeringId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#peering_id GoogleActiveDirectoryPeering#peering_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#id GoogleActiveDirectoryPeering#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#project GoogleActiveDirectoryPeering#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.status">Status</a></code> | <code>*string</code> | The current state of this Peering. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | Additional information about the current status of this peering, if available. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts">GoogleActiveDirectoryPeeringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizedNetwork`<sup>Required</sup> <a name="AuthorizedNetwork" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.authorizedNetwork"></a>

```go
AuthorizedNetwork *string
```

- *Type:* *string

The full names of the Google Compute Engine networks to which the instance is connected.

Caller needs to make sure that CIDR subnets do not overlap between networks, else peering creation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#authorized_network GoogleActiveDirectoryPeering#authorized_network}

---

##### `DomainResource`<sup>Required</sup> <a name="DomainResource" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.domainResource"></a>

```go
DomainResource *string
```

- *Type:* *string

Full domain resource path for the Managed AD Domain involved in peering.

The resource path should be in the form projects/{projectId}/locations/global/domains/{domainName}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#domain_resource GoogleActiveDirectoryPeering#domain_resource}

---

##### `PeeringId`<sup>Required</sup> <a name="PeeringId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.peeringId"></a>

```go
PeeringId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#peering_id GoogleActiveDirectoryPeering#peering_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#id GoogleActiveDirectoryPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#labels GoogleActiveDirectoryPeering#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#project GoogleActiveDirectoryPeering#project}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

The current state of this Peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#status GoogleActiveDirectoryPeering#status}

---

##### `StatusMessage`<sup>Optional</sup> <a name="StatusMessage" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.statusMessage"></a>

```go
StatusMessage *string
```

- *Type:* *string

Additional information about the current status of this peering, if available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#status_message GoogleActiveDirectoryPeering#status_message}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.timeouts"></a>

```go
Timeouts GoogleActiveDirectoryPeeringTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts">GoogleActiveDirectoryPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#timeouts GoogleActiveDirectoryPeering#timeouts}

---

### GoogleActiveDirectoryPeeringTimeouts <a name="GoogleActiveDirectoryPeeringTimeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleactivedirectorypeering"

&googleactivedirectorypeering.GoogleActiveDirectoryPeeringTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#create GoogleActiveDirectoryPeering#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#delete GoogleActiveDirectoryPeering#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#update GoogleActiveDirectoryPeering#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#create GoogleActiveDirectoryPeering#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#delete GoogleActiveDirectoryPeering#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_active_directory_peering#update GoogleActiveDirectoryPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleActiveDirectoryPeeringTimeoutsOutputReference <a name="GoogleActiveDirectoryPeeringTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleactivedirectorypeering"

googleactivedirectorypeering.NewGoogleActiveDirectoryPeeringTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleActiveDirectoryPeeringTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



