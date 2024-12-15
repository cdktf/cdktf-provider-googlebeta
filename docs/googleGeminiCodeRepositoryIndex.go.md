# `googleGeminiCodeRepositoryIndex` Submodule <a name="`googleGeminiCodeRepositoryIndex` Submodule" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiCodeRepositoryIndex <a name="GoogleGeminiCodeRepositoryIndex" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index google_gemini_code_repository_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminicoderepositoryindex"

googlegeminicoderepositoryindex.NewGoogleGeminiCodeRepositoryIndex(scope Construct, id *string, config GoogleGeminiCodeRepositoryIndexConfig) GoogleGeminiCodeRepositoryIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig">GoogleGeminiCodeRepositoryIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig">GoogleGeminiCodeRepositoryIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGeminiCodeRepositoryIndexTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeouts">GoogleGeminiCodeRepositoryIndexTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGeminiCodeRepositoryIndex resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminicoderepositoryindex"

googlegeminicoderepositoryindex.GoogleGeminiCodeRepositoryIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminicoderepositoryindex"

googlegeminicoderepositoryindex.GoogleGeminiCodeRepositoryIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminicoderepositoryindex"

googlegeminicoderepositoryindex.GoogleGeminiCodeRepositoryIndex_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminicoderepositoryindex"

googlegeminicoderepositoryindex.GoogleGeminiCodeRepositoryIndex_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleGeminiCodeRepositoryIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleGeminiCodeRepositoryIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleGeminiCodeRepositoryIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiCodeRepositoryIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference">GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.codeRepositoryIndexIdInput">CodeRepositoryIndexIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.codeRepositoryIndexId">CodeRepositoryIndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.timeouts"></a>

```go
func Timeouts() GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference">GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CodeRepositoryIndexIdInput`<sup>Optional</sup> <a name="CodeRepositoryIndexIdInput" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.codeRepositoryIndexIdInput"></a>

```go
func CodeRepositoryIndexIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CodeRepositoryIndexId`<sup>Required</sup> <a name="CodeRepositoryIndexId" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.codeRepositoryIndexId"></a>

```go
func CodeRepositoryIndexId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiCodeRepositoryIndexConfig <a name="GoogleGeminiCodeRepositoryIndexConfig" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminicoderepositoryindex"

&googlegeminicoderepositoryindex.GoogleGeminiCodeRepositoryIndexConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CodeRepositoryIndexId: *string,
	Location: *string,
	Id: *string,
	KmsKey: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.codeRepositoryIndexId">CodeRepositoryIndexId</a></code> | <code>*string</code> | Required. Id of the Code Repository Index. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.location">Location</a></code> | <code>*string</code> | The location of the Code Repository Index, for example 'us-central1'. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#id GoogleGeminiCodeRepositoryIndex#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | Optional. Immutable. Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#project GoogleGeminiCodeRepositoryIndex#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeouts">GoogleGeminiCodeRepositoryIndexTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CodeRepositoryIndexId`<sup>Required</sup> <a name="CodeRepositoryIndexId" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.codeRepositoryIndexId"></a>

```go
CodeRepositoryIndexId *string
```

- *Type:* *string

Required. Id of the Code Repository Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#code_repository_index_id GoogleGeminiCodeRepositoryIndex#code_repository_index_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the Code Repository Index, for example 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#location GoogleGeminiCodeRepositoryIndex#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#id GoogleGeminiCodeRepositoryIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

Optional. Immutable. Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#kms_key GoogleGeminiCodeRepositoryIndex#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#labels GoogleGeminiCodeRepositoryIndex#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#project GoogleGeminiCodeRepositoryIndex#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexConfig.property.timeouts"></a>

```go
Timeouts GoogleGeminiCodeRepositoryIndexTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeouts">GoogleGeminiCodeRepositoryIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#timeouts GoogleGeminiCodeRepositoryIndex#timeouts}

---

### GoogleGeminiCodeRepositoryIndexTimeouts <a name="GoogleGeminiCodeRepositoryIndexTimeouts" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminicoderepositoryindex"

&googlegeminicoderepositoryindex.GoogleGeminiCodeRepositoryIndexTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#create GoogleGeminiCodeRepositoryIndex#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#delete GoogleGeminiCodeRepositoryIndex#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#update GoogleGeminiCodeRepositoryIndex#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#create GoogleGeminiCodeRepositoryIndex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#delete GoogleGeminiCodeRepositoryIndex#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gemini_code_repository_index#update GoogleGeminiCodeRepositoryIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference <a name="GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegeminicoderepositoryindex"

googlegeminicoderepositoryindex.NewGoogleGeminiCodeRepositoryIndexTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGeminiCodeRepositoryIndex.GoogleGeminiCodeRepositoryIndexTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



