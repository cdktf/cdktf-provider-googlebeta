# `googleComputePreviewFeature` Submodule <a name="`googleComputePreviewFeature` Submodule" id="@cdktf/provider-google-beta.googleComputePreviewFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputePreviewFeature <a name="GoogleComputePreviewFeature" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature google_compute_preview_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputepreviewfeature"

googlecomputepreviewfeature.NewGoogleComputePreviewFeature(scope Construct, id *string, config GoogleComputePreviewFeatureConfig) GoogleComputePreviewFeature
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig">GoogleComputePreviewFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig">GoogleComputePreviewFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putRolloutOperation">PutRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetRolloutOperation">ResetRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRolloutOperation` <a name="PutRolloutOperation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putRolloutOperation"></a>

```go
func PutRolloutOperation(value GoogleComputePreviewFeatureRolloutOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putRolloutOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputePreviewFeatureTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts">GoogleComputePreviewFeatureTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRolloutOperation` <a name="ResetRolloutOperation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetRolloutOperation"></a>

```go
func ResetRolloutOperation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputePreviewFeature resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputepreviewfeature"

googlecomputepreviewfeature.GoogleComputePreviewFeature_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputepreviewfeature"

googlecomputepreviewfeature.GoogleComputePreviewFeature_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputepreviewfeature"

googlecomputepreviewfeature.GoogleComputePreviewFeature_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputepreviewfeature"

googlecomputepreviewfeature.GoogleComputePreviewFeature_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputePreviewFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputePreviewFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputePreviewFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputePreviewFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.rolloutOperation">RolloutOperation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference">GoogleComputePreviewFeatureRolloutOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference">GoogleComputePreviewFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.activationStatusInput">ActivationStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.rolloutOperationInput">RolloutOperationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.activationStatus">ActivationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RolloutOperation`<sup>Required</sup> <a name="RolloutOperation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.rolloutOperation"></a>

```go
func RolloutOperation() GoogleComputePreviewFeatureRolloutOperationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference">GoogleComputePreviewFeatureRolloutOperationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.timeouts"></a>

```go
func Timeouts() GoogleComputePreviewFeatureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference">GoogleComputePreviewFeatureTimeoutsOutputReference</a>

---

##### `ActivationStatusInput`<sup>Optional</sup> <a name="ActivationStatusInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.activationStatusInput"></a>

```go
func ActivationStatusInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RolloutOperationInput`<sup>Optional</sup> <a name="RolloutOperationInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.rolloutOperationInput"></a>

```go
func RolloutOperationInput() GoogleComputePreviewFeatureRolloutOperation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ActivationStatus`<sup>Required</sup> <a name="ActivationStatus" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.activationStatus"></a>

```go
func ActivationStatus() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputePreviewFeatureConfig <a name="GoogleComputePreviewFeatureConfig" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputepreviewfeature"

&googlecomputepreviewfeature.GoogleComputePreviewFeatureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ActivationStatus: *string,
	Name: *string,
	Id: *string,
	Project: *string,
	RolloutOperation: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.activationStatus">ActivationStatus</a></code> | <code>*string</code> | The activation status of the preview feature. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.name">Name</a></code> | <code>*string</code> | The name of the preview feature. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#id GoogleComputePreviewFeature#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#project GoogleComputePreviewFeature#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.rolloutOperation">RolloutOperation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a></code> | rollout_operation block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts">GoogleComputePreviewFeatureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActivationStatus`<sup>Required</sup> <a name="ActivationStatus" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.activationStatus"></a>

```go
ActivationStatus *string
```

- *Type:* *string

The activation status of the preview feature. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#activation_status GoogleComputePreviewFeature#activation_status}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the preview feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#name GoogleComputePreviewFeature#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#id GoogleComputePreviewFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#project GoogleComputePreviewFeature#project}.

---

##### `RolloutOperation`<sup>Optional</sup> <a name="RolloutOperation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.rolloutOperation"></a>

```go
RolloutOperation GoogleComputePreviewFeatureRolloutOperation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a>

rollout_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#rollout_operation GoogleComputePreviewFeature#rollout_operation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.timeouts"></a>

```go
Timeouts GoogleComputePreviewFeatureTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts">GoogleComputePreviewFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#timeouts GoogleComputePreviewFeature#timeouts}

---

### GoogleComputePreviewFeatureRolloutOperation <a name="GoogleComputePreviewFeatureRolloutOperation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputepreviewfeature"

&googlecomputepreviewfeature.GoogleComputePreviewFeatureRolloutOperation {
	RolloutInput: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation.property.rolloutInput">RolloutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a></code> | rollout_input block. |

---

##### `RolloutInput`<sup>Optional</sup> <a name="RolloutInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation.property.rolloutInput"></a>

```go
RolloutInput GoogleComputePreviewFeatureRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a>

rollout_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#rollout_input GoogleComputePreviewFeature#rollout_input}

---

### GoogleComputePreviewFeatureRolloutOperationRolloutInput <a name="GoogleComputePreviewFeatureRolloutOperationRolloutInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputepreviewfeature"

&googlecomputepreviewfeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput {
	PredefinedRolloutPlan: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput.property.predefinedRolloutPlan">PredefinedRolloutPlan</a></code> | <code>*string</code> | Predefined rollout plans. Possible values: ["ROLLOUT_PLAN_FAST_ROLLOUT"]. |

---

##### `PredefinedRolloutPlan`<sup>Required</sup> <a name="PredefinedRolloutPlan" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput.property.predefinedRolloutPlan"></a>

```go
PredefinedRolloutPlan *string
```

- *Type:* *string

Predefined rollout plans. Possible values: ["ROLLOUT_PLAN_FAST_ROLLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#predefined_rollout_plan GoogleComputePreviewFeature#predefined_rollout_plan}

---

### GoogleComputePreviewFeatureTimeouts <a name="GoogleComputePreviewFeatureTimeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputepreviewfeature"

&googlecomputepreviewfeature.GoogleComputePreviewFeatureTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#create GoogleComputePreviewFeature#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#delete GoogleComputePreviewFeature#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#update GoogleComputePreviewFeature#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#create GoogleComputePreviewFeature#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#delete GoogleComputePreviewFeature#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_preview_feature#update GoogleComputePreviewFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputePreviewFeatureRolloutOperationOutputReference <a name="GoogleComputePreviewFeatureRolloutOperationOutputReference" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputepreviewfeature"

googlecomputepreviewfeature.NewGoogleComputePreviewFeatureRolloutOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputePreviewFeatureRolloutOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.putRolloutInput">PutRolloutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.resetRolloutInput">ResetRolloutInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRolloutInput` <a name="PutRolloutInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.putRolloutInput"></a>

```go
func PutRolloutInput(value GoogleComputePreviewFeatureRolloutOperationRolloutInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.putRolloutInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a>

---

##### `ResetRolloutInput` <a name="ResetRolloutInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.resetRolloutInput"></a>

```go
func ResetRolloutInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInput">RolloutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference">GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInputInput">RolloutInputInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RolloutInput`<sup>Required</sup> <a name="RolloutInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInput"></a>

```go
func RolloutInput() GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference">GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference</a>

---

##### `RolloutInputInput`<sup>Optional</sup> <a name="RolloutInputInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInputInput"></a>

```go
func RolloutInputInput() GoogleComputePreviewFeatureRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputePreviewFeatureRolloutOperation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a>

---


### GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference <a name="GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputepreviewfeature"

googlecomputepreviewfeature.NewGoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput">PredefinedRolloutPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan">PredefinedRolloutPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PredefinedRolloutPlanInput`<sup>Optional</sup> <a name="PredefinedRolloutPlanInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput"></a>

```go
func PredefinedRolloutPlanInput() *string
```

- *Type:* *string

---

##### `PredefinedRolloutPlan`<sup>Required</sup> <a name="PredefinedRolloutPlan" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan"></a>

```go
func PredefinedRolloutPlan() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputePreviewFeatureRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a>

---


### GoogleComputePreviewFeatureTimeoutsOutputReference <a name="GoogleComputePreviewFeatureTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputepreviewfeature"

googlecomputepreviewfeature.NewGoogleComputePreviewFeatureTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputePreviewFeatureTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



