# `googleVertexAiIndex` Submodule <a name="`googleVertexAiIndex` Submodule" id="@cdktf/provider-google-beta.googleVertexAiIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiIndex <a name="GoogleVertexAiIndex" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index google_vertex_ai_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

googlevertexaiindex.NewGoogleVertexAiIndex(scope Construct, id *string, config GoogleVertexAiIndexConfig) GoogleVertexAiIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig">GoogleVertexAiIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig">GoogleVertexAiIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetIndexUpdateMethod">ResetIndexUpdateMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.putMetadata"></a>

```go
func PutMetadata(value GoogleVertexAiIndexMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVertexAiIndexTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts">GoogleVertexAiIndexTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetId"></a>

```go
func ResetId()
```

##### `ResetIndexUpdateMethod` <a name="ResetIndexUpdateMethod" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetIndexUpdateMethod"></a>

```go
func ResetIndexUpdateMethod()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiIndex resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

googlevertexaiindex.GoogleVertexAiIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

googlevertexaiindex.GoogleVertexAiIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

googlevertexaiindex.GoogleVertexAiIndex_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

googlevertexaiindex.GoogleVertexAiIndex_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleVertexAiIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVertexAiIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVertexAiIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.deployedIndexes">DeployedIndexes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList">GoogleVertexAiIndexDeployedIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.indexStats">IndexStats</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList">GoogleVertexAiIndexIndexStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference">GoogleVertexAiIndexMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.metadataSchemaUri">MetadataSchemaUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference">GoogleVertexAiIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.indexUpdateMethodInput">IndexUpdateMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.indexUpdateMethod">IndexUpdateMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeployedIndexes`<sup>Required</sup> <a name="DeployedIndexes" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.deployedIndexes"></a>

```go
func DeployedIndexes() GoogleVertexAiIndexDeployedIndexesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList">GoogleVertexAiIndexDeployedIndexesList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `IndexStats`<sup>Required</sup> <a name="IndexStats" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.indexStats"></a>

```go
func IndexStats() GoogleVertexAiIndexIndexStatsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList">GoogleVertexAiIndexIndexStatsList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.metadata"></a>

```go
func Metadata() GoogleVertexAiIndexMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference">GoogleVertexAiIndexMetadataOutputReference</a>

---

##### `MetadataSchemaUri`<sup>Required</sup> <a name="MetadataSchemaUri" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.metadataSchemaUri"></a>

```go
func MetadataSchemaUri() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.timeouts"></a>

```go
func Timeouts() GoogleVertexAiIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference">GoogleVertexAiIndexTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexUpdateMethodInput`<sup>Optional</sup> <a name="IndexUpdateMethodInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.indexUpdateMethodInput"></a>

```go
func IndexUpdateMethodInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.metadataInput"></a>

```go
func MetadataInput() GoogleVertexAiIndexMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexUpdateMethod`<sup>Required</sup> <a name="IndexUpdateMethod" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.indexUpdateMethod"></a>

```go
func IndexUpdateMethod() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiIndexConfig <a name="GoogleVertexAiIndexConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

&googlevertexaiindex.GoogleVertexAiIndexConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Description: *string,
	Id: *string,
	IndexUpdateMethod: *string,
	Labels: *map[string]*string,
	Metadata: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiIndex.GoogleVertexAiIndexMetadata,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiIndex.GoogleVertexAiIndexTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.description">Description</a></code> | <code>*string</code> | The description of the Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#id GoogleVertexAiIndex#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.indexUpdateMethod">IndexUpdateMethod</a></code> | <code>*string</code> | The update method to use with this Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize your Indexes. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#project GoogleVertexAiIndex#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.region">Region</a></code> | <code>*string</code> | The region of the index. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts">GoogleVertexAiIndexTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#display_name GoogleVertexAiIndex#display_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#description GoogleVertexAiIndex#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#id GoogleVertexAiIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexUpdateMethod`<sup>Optional</sup> <a name="IndexUpdateMethod" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.indexUpdateMethod"></a>

```go
IndexUpdateMethod *string
```

- *Type:* *string

The update method to use with this Index.

The value must be the followings. If not set, BATCH_UPDATE will be used by default.

* BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.
* STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#index_update_method GoogleVertexAiIndex#index_update_method}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize your Indexes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#labels GoogleVertexAiIndex#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.metadata"></a>

```go
Metadata GoogleVertexAiIndexMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#metadata GoogleVertexAiIndex#metadata}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#project GoogleVertexAiIndex#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the index. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#region GoogleVertexAiIndex#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.timeouts"></a>

```go
Timeouts GoogleVertexAiIndexTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts">GoogleVertexAiIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#timeouts GoogleVertexAiIndex#timeouts}

---

### GoogleVertexAiIndexDeployedIndexes <a name="GoogleVertexAiIndexDeployedIndexes" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

&googlevertexaiindex.GoogleVertexAiIndexDeployedIndexes {

}
```


### GoogleVertexAiIndexIndexStats <a name="GoogleVertexAiIndexIndexStats" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStats.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

&googlevertexaiindex.GoogleVertexAiIndexIndexStats {

}
```


### GoogleVertexAiIndexMetadata <a name="GoogleVertexAiIndexMetadata" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

&googlevertexaiindex.GoogleVertexAiIndexMetadata {
	Config: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig,
	ContentsDeltaUri: *string,
	IsCompleteOverwrite: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig">GoogleVertexAiIndexMetadataConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata.property.contentsDeltaUri">ContentsDeltaUri</a></code> | <code>*string</code> | Allows inserting, updating  or deleting the contents of the Matching Engine Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata.property.isCompleteOverwrite">IsCompleteOverwrite</a></code> | <code>interface{}</code> | If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex, then existing content of the Index will be replaced by the data from the contentsDeltaUri. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata.property.config"></a>

```go
Config GoogleVertexAiIndexMetadataConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig">GoogleVertexAiIndexMetadataConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#config GoogleVertexAiIndex#config}

---

##### `ContentsDeltaUri`<sup>Optional</sup> <a name="ContentsDeltaUri" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata.property.contentsDeltaUri"></a>

```go
ContentsDeltaUri *string
```

- *Type:* *string

Allows inserting, updating  or deleting the contents of the Matching Engine Index.

The string must be a valid Cloud Storage directory path. If this
field is set when calling IndexService.UpdateIndex, then no other
Index field can be also updated as part of the same call.
The expected structure and format of the files this URI points to is
described at https://cloud.google.com/vertex-ai/docs/matching-engine/using-matching-engine#input-data-format

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#contents_delta_uri GoogleVertexAiIndex#contents_delta_uri}

---

##### `IsCompleteOverwrite`<sup>Optional</sup> <a name="IsCompleteOverwrite" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata.property.isCompleteOverwrite"></a>

```go
IsCompleteOverwrite interface{}
```

- *Type:* interface{}

If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex, then existing content of the Index will be replaced by the data from the contentsDeltaUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#is_complete_overwrite GoogleVertexAiIndex#is_complete_overwrite}

---

### GoogleVertexAiIndexMetadataConfig <a name="GoogleVertexAiIndexMetadataConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

&googlevertexaiindex.GoogleVertexAiIndexMetadataConfig {
	Dimensions: *f64,
	AlgorithmConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig,
	ApproximateNeighborsCount: *f64,
	DistanceMeasureType: *string,
	FeatureNormType: *string,
	ShardSize: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.dimensions">Dimensions</a></code> | <code>*f64</code> | The number of dimensions of the input vectors. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.algorithmConfig">AlgorithmConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfig</a></code> | algorithm_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.approximateNeighborsCount">ApproximateNeighborsCount</a></code> | <code>*f64</code> | The default number of neighbors to find via approximate search before exact reordering is performed. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.distanceMeasureType">DistanceMeasureType</a></code> | <code>*string</code> | The distance measure used in nearest neighbor search. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.featureNormType">FeatureNormType</a></code> | <code>*string</code> | Type of normalization to be carried out on each vector. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.shardSize">ShardSize</a></code> | <code>*string</code> | Index data is split into equal parts to be processed. |

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.dimensions"></a>

```go
Dimensions *f64
```

- *Type:* *f64

The number of dimensions of the input vectors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#dimensions GoogleVertexAiIndex#dimensions}

---

##### `AlgorithmConfig`<sup>Optional</sup> <a name="AlgorithmConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.algorithmConfig"></a>

```go
AlgorithmConfig GoogleVertexAiIndexMetadataConfigAlgorithmConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfig</a>

algorithm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#algorithm_config GoogleVertexAiIndex#algorithm_config}

---

##### `ApproximateNeighborsCount`<sup>Optional</sup> <a name="ApproximateNeighborsCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.approximateNeighborsCount"></a>

```go
ApproximateNeighborsCount *f64
```

- *Type:* *f64

The default number of neighbors to find via approximate search before exact reordering is performed.

Exact reordering is a procedure where results returned by an
approximate search algorithm are reordered via a more expensive distance computation.
Required if tree-AH algorithm is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#approximate_neighbors_count GoogleVertexAiIndex#approximate_neighbors_count}

---

##### `DistanceMeasureType`<sup>Optional</sup> <a name="DistanceMeasureType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.distanceMeasureType"></a>

```go
DistanceMeasureType *string
```

- *Type:* *string

The distance measure used in nearest neighbor search.

The value must be one of the followings:

* SQUARED_L2_DISTANCE: Euclidean (L_2) Distance
* L1_DISTANCE: Manhattan (L_1) Distance
* COSINE_DISTANCE: Cosine Distance. Defined as 1 - cosine similarity.
* DOT_PRODUCT_DISTANCE: Dot Product Distance. Defined as a negative of the dot product

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#distance_measure_type GoogleVertexAiIndex#distance_measure_type}

---

##### `FeatureNormType`<sup>Optional</sup> <a name="FeatureNormType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.featureNormType"></a>

```go
FeatureNormType *string
```

- *Type:* *string

Type of normalization to be carried out on each vector.

The value must be one of the followings:

* UNIT_L2_NORM: Unit L2 normalization type
* NONE: No normalization type is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#feature_norm_type GoogleVertexAiIndex#feature_norm_type}

---

##### `ShardSize`<sup>Optional</sup> <a name="ShardSize" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.shardSize"></a>

```go
ShardSize *string
```

- *Type:* *string

Index data is split into equal parts to be processed.

These are called "shards".
The shard size must be specified when creating an index. The value must be one of the followings:

* SHARD_SIZE_SMALL: Small (2GB)
* SHARD_SIZE_MEDIUM: Medium (20GB)
* SHARD_SIZE_LARGE: Large (50GB)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#shard_size GoogleVertexAiIndex#shard_size}

---

### GoogleVertexAiIndexMetadataConfigAlgorithmConfig <a name="GoogleVertexAiIndexMetadataConfigAlgorithmConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

&googlevertexaiindex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig {
	BruteForceConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig,
	TreeAhConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig.property.bruteForceConfig">BruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | brute_force_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig.property.treeAhConfig">TreeAhConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | tree_ah_config block. |

---

##### `BruteForceConfig`<sup>Optional</sup> <a name="BruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig.property.bruteForceConfig"></a>

```go
BruteForceConfig GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

brute_force_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#brute_force_config GoogleVertexAiIndex#brute_force_config}

---

##### `TreeAhConfig`<sup>Optional</sup> <a name="TreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig.property.treeAhConfig"></a>

```go
TreeAhConfig GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

tree_ah_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#tree_ah_config GoogleVertexAiIndex#tree_ah_config}

---

### GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig <a name="GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

&googlevertexaiindex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig {

}
```


### GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig <a name="GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

&googlevertexaiindex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig {
	LeafNodeEmbeddingCount: *f64,
	LeafNodesToSearchPercent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodeEmbeddingCount">LeafNodeEmbeddingCount</a></code> | <code>*f64</code> | Number of embeddings on each leaf node. The default value is 1000 if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodesToSearchPercent">LeafNodesToSearchPercent</a></code> | <code>*f64</code> | The default percentage of leaf nodes that any query may be searched. |

---

##### `LeafNodeEmbeddingCount`<sup>Optional</sup> <a name="LeafNodeEmbeddingCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodeEmbeddingCount"></a>

```go
LeafNodeEmbeddingCount *f64
```

- *Type:* *f64

Number of embeddings on each leaf node. The default value is 1000 if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#leaf_node_embedding_count GoogleVertexAiIndex#leaf_node_embedding_count}

---

##### `LeafNodesToSearchPercent`<sup>Optional</sup> <a name="LeafNodesToSearchPercent" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodesToSearchPercent"></a>

```go
LeafNodesToSearchPercent *f64
```

- *Type:* *f64

The default percentage of leaf nodes that any query may be searched.

Must be in
range 1-100, inclusive. The default value is 10 (means 10%) if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#leaf_nodes_to_search_percent GoogleVertexAiIndex#leaf_nodes_to_search_percent}

---

### GoogleVertexAiIndexTimeouts <a name="GoogleVertexAiIndexTimeouts" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

&googlevertexaiindex.GoogleVertexAiIndexTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#create GoogleVertexAiIndex#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#delete GoogleVertexAiIndex#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#update GoogleVertexAiIndex#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#create GoogleVertexAiIndex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#delete GoogleVertexAiIndex#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_vertex_ai_index#update GoogleVertexAiIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiIndexDeployedIndexesList <a name="GoogleVertexAiIndexDeployedIndexesList" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

googlevertexaiindex.NewGoogleVertexAiIndexDeployedIndexesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiIndexDeployedIndexesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.get"></a>

```go
func Get(index *f64) GoogleVertexAiIndexDeployedIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiIndexDeployedIndexesOutputReference <a name="GoogleVertexAiIndexDeployedIndexesOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

googlevertexaiindex.NewGoogleVertexAiIndexDeployedIndexesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiIndexDeployedIndexesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId">DeployedIndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint">IndexEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexes">GoogleVertexAiIndexDeployedIndexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeployedIndexId`<sup>Required</sup> <a name="DeployedIndexId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId"></a>

```go
func DeployedIndexId() *string
```

- *Type:* *string

---

##### `IndexEndpoint`<sup>Required</sup> <a name="IndexEndpoint" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint"></a>

```go
func IndexEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexDeployedIndexes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexes">GoogleVertexAiIndexDeployedIndexes</a>

---


### GoogleVertexAiIndexIndexStatsList <a name="GoogleVertexAiIndexIndexStatsList" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

googlevertexaiindex.NewGoogleVertexAiIndexIndexStatsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiIndexIndexStatsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.get"></a>

```go
func Get(index *f64) GoogleVertexAiIndexIndexStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiIndexIndexStatsOutputReference <a name="GoogleVertexAiIndexIndexStatsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

googlevertexaiindex.NewGoogleVertexAiIndexIndexStatsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiIndexIndexStatsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.shardsCount">ShardsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.vectorsCount">VectorsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStats">GoogleVertexAiIndexIndexStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShardsCount`<sup>Required</sup> <a name="ShardsCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.shardsCount"></a>

```go
func ShardsCount() *f64
```

- *Type:* *f64

---

##### `VectorsCount`<sup>Required</sup> <a name="VectorsCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.vectorsCount"></a>

```go
func VectorsCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexIndexStats
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStats">GoogleVertexAiIndexIndexStats</a>

---


### GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference <a name="GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

googlevertexaiindex.NewGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---


### GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference <a name="GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

googlevertexaiindex.NewGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putBruteForceConfig">PutBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putTreeAhConfig">PutTreeAhConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetBruteForceConfig">ResetBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetTreeAhConfig">ResetTreeAhConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBruteForceConfig` <a name="PutBruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putBruteForceConfig"></a>

```go
func PutBruteForceConfig(value GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putBruteForceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---

##### `PutTreeAhConfig` <a name="PutTreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putTreeAhConfig"></a>

```go
func PutTreeAhConfig(value GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putTreeAhConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---

##### `ResetBruteForceConfig` <a name="ResetBruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetBruteForceConfig"></a>

```go
func ResetBruteForceConfig()
```

##### `ResetTreeAhConfig` <a name="ResetTreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetTreeAhConfig"></a>

```go
func ResetTreeAhConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig">BruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig">TreeAhConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfigInput">BruteForceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfigInput">TreeAhConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BruteForceConfig`<sup>Required</sup> <a name="BruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig"></a>

```go
func BruteForceConfig() GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference</a>

---

##### `TreeAhConfig`<sup>Required</sup> <a name="TreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig"></a>

```go
func TreeAhConfig() GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference</a>

---

##### `BruteForceConfigInput`<sup>Optional</sup> <a name="BruteForceConfigInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfigInput"></a>

```go
func BruteForceConfigInput() GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---

##### `TreeAhConfigInput`<sup>Optional</sup> <a name="TreeAhConfigInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfigInput"></a>

```go
func TreeAhConfigInput() GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexMetadataConfigAlgorithmConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfig</a>

---


### GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference <a name="GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

googlevertexaiindex.NewGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodeEmbeddingCount">ResetLeafNodeEmbeddingCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodesToSearchPercent">ResetLeafNodesToSearchPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLeafNodeEmbeddingCount` <a name="ResetLeafNodeEmbeddingCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodeEmbeddingCount"></a>

```go
func ResetLeafNodeEmbeddingCount()
```

##### `ResetLeafNodesToSearchPercent` <a name="ResetLeafNodesToSearchPercent" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodesToSearchPercent"></a>

```go
func ResetLeafNodesToSearchPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCountInput">LeafNodeEmbeddingCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercentInput">LeafNodesToSearchPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount">LeafNodeEmbeddingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent">LeafNodesToSearchPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LeafNodeEmbeddingCountInput`<sup>Optional</sup> <a name="LeafNodeEmbeddingCountInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCountInput"></a>

```go
func LeafNodeEmbeddingCountInput() *f64
```

- *Type:* *f64

---

##### `LeafNodesToSearchPercentInput`<sup>Optional</sup> <a name="LeafNodesToSearchPercentInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercentInput"></a>

```go
func LeafNodesToSearchPercentInput() *f64
```

- *Type:* *f64

---

##### `LeafNodeEmbeddingCount`<sup>Required</sup> <a name="LeafNodeEmbeddingCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount"></a>

```go
func LeafNodeEmbeddingCount() *f64
```

- *Type:* *f64

---

##### `LeafNodesToSearchPercent`<sup>Required</sup> <a name="LeafNodesToSearchPercent" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent"></a>

```go
func LeafNodesToSearchPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---


### GoogleVertexAiIndexMetadataConfigOutputReference <a name="GoogleVertexAiIndexMetadataConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

googlevertexaiindex.NewGoogleVertexAiIndexMetadataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiIndexMetadataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.putAlgorithmConfig">PutAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetAlgorithmConfig">ResetAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetApproximateNeighborsCount">ResetApproximateNeighborsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetDistanceMeasureType">ResetDistanceMeasureType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetFeatureNormType">ResetFeatureNormType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetShardSize">ResetShardSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlgorithmConfig` <a name="PutAlgorithmConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.putAlgorithmConfig"></a>

```go
func PutAlgorithmConfig(value GoogleVertexAiIndexMetadataConfigAlgorithmConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.putAlgorithmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfig</a>

---

##### `ResetAlgorithmConfig` <a name="ResetAlgorithmConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetAlgorithmConfig"></a>

```go
func ResetAlgorithmConfig()
```

##### `ResetApproximateNeighborsCount` <a name="ResetApproximateNeighborsCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetApproximateNeighborsCount"></a>

```go
func ResetApproximateNeighborsCount()
```

##### `ResetDistanceMeasureType` <a name="ResetDistanceMeasureType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetDistanceMeasureType"></a>

```go
func ResetDistanceMeasureType()
```

##### `ResetFeatureNormType` <a name="ResetFeatureNormType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetFeatureNormType"></a>

```go
func ResetFeatureNormType()
```

##### `ResetShardSize` <a name="ResetShardSize" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetShardSize"></a>

```go
func ResetShardSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.algorithmConfig">AlgorithmConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference">GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.algorithmConfigInput">AlgorithmConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCountInput">ApproximateNeighborsCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.distanceMeasureTypeInput">DistanceMeasureTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.featureNormTypeInput">FeatureNormTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.shardSizeInput">ShardSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount">ApproximateNeighborsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.dimensions">Dimensions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType">DistanceMeasureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.featureNormType">FeatureNormType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.shardSize">ShardSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig">GoogleVertexAiIndexMetadataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmConfig`<sup>Required</sup> <a name="AlgorithmConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.algorithmConfig"></a>

```go
func AlgorithmConfig() GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference">GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference</a>

---

##### `AlgorithmConfigInput`<sup>Optional</sup> <a name="AlgorithmConfigInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.algorithmConfigInput"></a>

```go
func AlgorithmConfigInput() GoogleVertexAiIndexMetadataConfigAlgorithmConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfig</a>

---

##### `ApproximateNeighborsCountInput`<sup>Optional</sup> <a name="ApproximateNeighborsCountInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCountInput"></a>

```go
func ApproximateNeighborsCountInput() *f64
```

- *Type:* *f64

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() *f64
```

- *Type:* *f64

---

##### `DistanceMeasureTypeInput`<sup>Optional</sup> <a name="DistanceMeasureTypeInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.distanceMeasureTypeInput"></a>

```go
func DistanceMeasureTypeInput() *string
```

- *Type:* *string

---

##### `FeatureNormTypeInput`<sup>Optional</sup> <a name="FeatureNormTypeInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.featureNormTypeInput"></a>

```go
func FeatureNormTypeInput() *string
```

- *Type:* *string

---

##### `ShardSizeInput`<sup>Optional</sup> <a name="ShardSizeInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.shardSizeInput"></a>

```go
func ShardSizeInput() *string
```

- *Type:* *string

---

##### `ApproximateNeighborsCount`<sup>Required</sup> <a name="ApproximateNeighborsCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount"></a>

```go
func ApproximateNeighborsCount() *f64
```

- *Type:* *f64

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.dimensions"></a>

```go
func Dimensions() *f64
```

- *Type:* *f64

---

##### `DistanceMeasureType`<sup>Required</sup> <a name="DistanceMeasureType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType"></a>

```go
func DistanceMeasureType() *string
```

- *Type:* *string

---

##### `FeatureNormType`<sup>Required</sup> <a name="FeatureNormType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.featureNormType"></a>

```go
func FeatureNormType() *string
```

- *Type:* *string

---

##### `ShardSize`<sup>Required</sup> <a name="ShardSize" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.shardSize"></a>

```go
func ShardSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexMetadataConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig">GoogleVertexAiIndexMetadataConfig</a>

---


### GoogleVertexAiIndexMetadataOutputReference <a name="GoogleVertexAiIndexMetadataOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

googlevertexaiindex.NewGoogleVertexAiIndexMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiIndexMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resetContentsDeltaUri">ResetContentsDeltaUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resetIsCompleteOverwrite">ResetIsCompleteOverwrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.putConfig"></a>

```go
func PutConfig(value GoogleVertexAiIndexMetadataConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig">GoogleVertexAiIndexMetadataConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetContentsDeltaUri` <a name="ResetContentsDeltaUri" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resetContentsDeltaUri"></a>

```go
func ResetContentsDeltaUri()
```

##### `ResetIsCompleteOverwrite` <a name="ResetIsCompleteOverwrite" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resetIsCompleteOverwrite"></a>

```go
func ResetIsCompleteOverwrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference">GoogleVertexAiIndexMetadataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig">GoogleVertexAiIndexMetadataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.contentsDeltaUriInput">ContentsDeltaUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.isCompleteOverwriteInput">IsCompleteOverwriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.contentsDeltaUri">ContentsDeltaUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.isCompleteOverwrite">IsCompleteOverwrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.config"></a>

```go
func Config() GoogleVertexAiIndexMetadataConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference">GoogleVertexAiIndexMetadataConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.configInput"></a>

```go
func ConfigInput() GoogleVertexAiIndexMetadataConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig">GoogleVertexAiIndexMetadataConfig</a>

---

##### `ContentsDeltaUriInput`<sup>Optional</sup> <a name="ContentsDeltaUriInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.contentsDeltaUriInput"></a>

```go
func ContentsDeltaUriInput() *string
```

- *Type:* *string

---

##### `IsCompleteOverwriteInput`<sup>Optional</sup> <a name="IsCompleteOverwriteInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.isCompleteOverwriteInput"></a>

```go
func IsCompleteOverwriteInput() interface{}
```

- *Type:* interface{}

---

##### `ContentsDeltaUri`<sup>Required</sup> <a name="ContentsDeltaUri" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.contentsDeltaUri"></a>

```go
func ContentsDeltaUri() *string
```

- *Type:* *string

---

##### `IsCompleteOverwrite`<sup>Required</sup> <a name="IsCompleteOverwrite" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.isCompleteOverwrite"></a>

```go
func IsCompleteOverwrite() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a>

---


### GoogleVertexAiIndexTimeoutsOutputReference <a name="GoogleVertexAiIndexTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlevertexaiindex"

googlevertexaiindex.NewGoogleVertexAiIndexTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiIndexTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



