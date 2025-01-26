# `googleComposerEnvironment` Submodule <a name="`googleComposerEnvironment` Submodule" id="@cdktf/provider-google-beta.googleComposerEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComposerEnvironment <a name="GoogleComposerEnvironment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment google_composer_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironment(scope Construct, id *string, config GoogleComposerEnvironmentConfig) GoogleComposerEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig">GoogleComposerEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig">GoogleComposerEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putStorageConfig">PutStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetStorageConfig">ResetStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putConfig"></a>

```go
func PutConfig(value GoogleComposerEnvironmentConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a>

---

##### `PutStorageConfig` <a name="PutStorageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putStorageConfig"></a>

```go
func PutStorageConfig(value GoogleComposerEnvironmentStorageConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComposerEnvironmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStorageConfig` <a name="ResetStorageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetStorageConfig"></a>

```go
func ResetStorageConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComposerEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.GoogleComposerEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.GoogleComposerEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.GoogleComposerEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.GoogleComposerEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComposerEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComposerEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComposerEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComposerEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference">GoogleComposerEnvironmentConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.storageConfig">StorageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference">GoogleComposerEnvironmentStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference">GoogleComposerEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.storageConfigInput">StorageConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.config"></a>

```go
func Config() GoogleComposerEnvironmentConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference">GoogleComposerEnvironmentConfigAOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `StorageConfig`<sup>Required</sup> <a name="StorageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.storageConfig"></a>

```go
func StorageConfig() GoogleComposerEnvironmentStorageConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference">GoogleComposerEnvironmentStorageConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.timeouts"></a>

```go
func Timeouts() GoogleComposerEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference">GoogleComposerEnvironmentTimeoutsOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.configInput"></a>

```go
func ConfigInput() GoogleComposerEnvironmentConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StorageConfigInput`<sup>Optional</sup> <a name="StorageConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.storageConfigInput"></a>

```go
func StorageConfigInput() GoogleComposerEnvironmentStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComposerEnvironmentConfig <a name="GoogleComposerEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Config: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Region: *string,
	StorageConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#id GoogleComposerEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-defined labels for this environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.region">Region</a></code> | <code>*string</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.storageConfig">StorageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a></code> | storage_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#name GoogleComposerEnvironment#name}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.config"></a>

```go
Config GoogleComposerEnvironmentConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#config GoogleComposerEnvironment#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#id GoogleComposerEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-defined labels for this environment.

The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?. Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?)?. No more than 64 labels can be associated with a given environment. Both keys and values must be <= 128 bytes in size.

```
			**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
			Please refer to the field 'effective_labels' for all of the labels present on the resource.
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#labels GoogleComposerEnvironment#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#project GoogleComposerEnvironment#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#region GoogleComposerEnvironment#region}

---

##### `StorageConfig`<sup>Optional</sup> <a name="StorageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.storageConfig"></a>

```go
StorageConfig GoogleComposerEnvironmentStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#storage_config GoogleComposerEnvironment#storage_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.timeouts"></a>

```go
Timeouts GoogleComposerEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#timeouts GoogleComposerEnvironment#timeouts}

---

### GoogleComposerEnvironmentConfigA <a name="GoogleComposerEnvironmentConfigA" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigA {
	DatabaseConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig,
	DataRetentionConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig,
	EnablePrivateBuildsOnly: interface{},
	EnablePrivateEnvironment: interface{},
	EncryptionConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig,
	EnvironmentSize: *string,
	MaintenanceWindow: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow,
	MasterAuthorizedNetworksConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig,
	NodeConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig,
	NodeCount: *f64,
	PrivateEnvironmentConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig,
	RecoveryConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig,
	ResilienceMode: *string,
	SoftwareConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig,
	WebServerConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig,
	WebServerNetworkAccessControl: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl,
	WorkloadsConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.databaseConfig">DatabaseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a></code> | database_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.dataRetentionConfig">DataRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a></code> | data_retention_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.enablePrivateBuildsOnly">EnablePrivateBuildsOnly</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.enablePrivateEnvironment">EnablePrivateEnvironment</a></code> | <code>interface{}</code> | Optional. If true, a private Composer environment will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.environmentSize">EnvironmentSize</a></code> | <code>*string</code> | The size of the Cloud Composer environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.masterAuthorizedNetworksConfig">MasterAuthorizedNetworksConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | master_authorized_networks_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.privateEnvironmentConfig">PrivateEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | private_environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.recoveryConfig">RecoveryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a></code> | recovery_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.resilienceMode">ResilienceMode</a></code> | <code>*string</code> | Whether high resilience is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.webServerConfig">WebServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a></code> | web_server_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.webServerNetworkAccessControl">WebServerNetworkAccessControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | web_server_network_access_control block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.workloadsConfig">WorkloadsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a></code> | workloads_config block. |

---

##### `DatabaseConfig`<sup>Optional</sup> <a name="DatabaseConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.databaseConfig"></a>

```go
DatabaseConfig GoogleComposerEnvironmentConfigDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a>

database_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#database_config GoogleComposerEnvironment#database_config}

---

##### `DataRetentionConfig`<sup>Optional</sup> <a name="DataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.dataRetentionConfig"></a>

```go
DataRetentionConfig GoogleComposerEnvironmentConfigDataRetentionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a>

data_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#data_retention_config GoogleComposerEnvironment#data_retention_config}

---

##### `EnablePrivateBuildsOnly`<sup>Optional</sup> <a name="EnablePrivateBuildsOnly" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.enablePrivateBuildsOnly"></a>

```go
EnablePrivateBuildsOnly interface{}
```

- *Type:* interface{}

Optional.

If true, builds performed during operations that install Python packages have only private connectivity to Google services. If false, the builds also have access to the internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#enable_private_builds_only GoogleComposerEnvironment#enable_private_builds_only}

---

##### `EnablePrivateEnvironment`<sup>Optional</sup> <a name="EnablePrivateEnvironment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.enablePrivateEnvironment"></a>

```go
EnablePrivateEnvironment interface{}
```

- *Type:* interface{}

Optional. If true, a private Composer environment will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#enable_private_environment GoogleComposerEnvironment#enable_private_environment}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.encryptionConfig"></a>

```go
EncryptionConfig GoogleComposerEnvironmentConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#encryption_config GoogleComposerEnvironment#encryption_config}

---

##### `EnvironmentSize`<sup>Optional</sup> <a name="EnvironmentSize" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.environmentSize"></a>

```go
EnvironmentSize *string
```

- *Type:* *string

The size of the Cloud Composer environment.

This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#environment_size GoogleComposerEnvironment#environment_size}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.maintenanceWindow"></a>

```go
MaintenanceWindow GoogleComposerEnvironmentConfigMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#maintenance_window GoogleComposerEnvironment#maintenance_window}

---

##### `MasterAuthorizedNetworksConfig`<sup>Optional</sup> <a name="MasterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.masterAuthorizedNetworksConfig"></a>

```go
MasterAuthorizedNetworksConfig GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

master_authorized_networks_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#master_authorized_networks_config GoogleComposerEnvironment#master_authorized_networks_config}

---

##### `NodeConfig`<sup>Optional</sup> <a name="NodeConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.nodeConfig"></a>

```go
NodeConfig GoogleComposerEnvironmentConfigNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#node_config GoogleComposerEnvironment#node_config}

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

The number of nodes in the Kubernetes Engine cluster that will be used to run this environment.

This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#node_count GoogleComposerEnvironment#node_count}

---

##### `PrivateEnvironmentConfig`<sup>Optional</sup> <a name="PrivateEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.privateEnvironmentConfig"></a>

```go
PrivateEnvironmentConfig GoogleComposerEnvironmentConfigPrivateEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a>

private_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#private_environment_config GoogleComposerEnvironment#private_environment_config}

---

##### `RecoveryConfig`<sup>Optional</sup> <a name="RecoveryConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.recoveryConfig"></a>

```go
RecoveryConfig GoogleComposerEnvironmentConfigRecoveryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a>

recovery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#recovery_config GoogleComposerEnvironment#recovery_config}

---

##### `ResilienceMode`<sup>Optional</sup> <a name="ResilienceMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.resilienceMode"></a>

```go
ResilienceMode *string
```

- *Type:* *string

Whether high resilience is enabled or not.

This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#resilience_mode GoogleComposerEnvironment#resilience_mode}

---

##### `SoftwareConfig`<sup>Optional</sup> <a name="SoftwareConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.softwareConfig"></a>

```go
SoftwareConfig GoogleComposerEnvironmentConfigSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#software_config GoogleComposerEnvironment#software_config}

---

##### `WebServerConfig`<sup>Optional</sup> <a name="WebServerConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.webServerConfig"></a>

```go
WebServerConfig GoogleComposerEnvironmentConfigWebServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a>

web_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#web_server_config GoogleComposerEnvironment#web_server_config}

---

##### `WebServerNetworkAccessControl`<sup>Optional</sup> <a name="WebServerNetworkAccessControl" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.webServerNetworkAccessControl"></a>

```go
WebServerNetworkAccessControl GoogleComposerEnvironmentConfigWebServerNetworkAccessControl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a>

web_server_network_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#web_server_network_access_control GoogleComposerEnvironment#web_server_network_access_control}

---

##### `WorkloadsConfig`<sup>Optional</sup> <a name="WorkloadsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.workloadsConfig"></a>

```go
WorkloadsConfig GoogleComposerEnvironmentConfigWorkloadsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a>

workloads_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#workloads_config GoogleComposerEnvironment#workloads_config}

---

### GoogleComposerEnvironmentConfigDatabaseConfig <a name="GoogleComposerEnvironmentConfigDatabaseConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigDatabaseConfig {
	MachineType: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig.property.machineType">MachineType</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig.property.zone">Zone</a></code> | <code>*string</code> | Optional. Cloud SQL database preferred zone. |

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

Optional.

Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#machine_type GoogleComposerEnvironment#machine_type}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Optional. Cloud SQL database preferred zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#zone GoogleComposerEnvironment#zone}

---

### GoogleComposerEnvironmentConfigDataRetentionConfig <a name="GoogleComposerEnvironmentConfigDataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigDataRetentionConfig {
	AirflowMetadataRetentionConfig: interface{},
	TaskLogsRetentionConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig.property.airflowMetadataRetentionConfig">AirflowMetadataRetentionConfig</a></code> | <code>interface{}</code> | airflow_metadata_retention_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig.property.taskLogsRetentionConfig">TaskLogsRetentionConfig</a></code> | <code>interface{}</code> | task_logs_retention_config block. |

---

##### `AirflowMetadataRetentionConfig`<sup>Optional</sup> <a name="AirflowMetadataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig.property.airflowMetadataRetentionConfig"></a>

```go
AirflowMetadataRetentionConfig interface{}
```

- *Type:* interface{}

airflow_metadata_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#airflow_metadata_retention_config GoogleComposerEnvironment#airflow_metadata_retention_config}

---

##### `TaskLogsRetentionConfig`<sup>Optional</sup> <a name="TaskLogsRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig.property.taskLogsRetentionConfig"></a>

```go
TaskLogsRetentionConfig interface{}
```

- *Type:* interface{}

task_logs_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#task_logs_retention_config GoogleComposerEnvironment#task_logs_retention_config}

---

### GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig <a name="GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig {
	RetentionDays: *f64,
	RetentionMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | How many days data should be retained for. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionMode">RetentionMode</a></code> | <code>*string</code> | Whether database retention is enabled or not. |

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionDays"></a>

```go
RetentionDays *f64
```

- *Type:* *f64

How many days data should be retained for.

This field is supported for Cloud Composer environments in composer 3 and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#retention_days GoogleComposerEnvironment#retention_days}

---

##### `RetentionMode`<sup>Optional</sup> <a name="RetentionMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionMode"></a>

```go
RetentionMode *string
```

- *Type:* *string

Whether database retention is enabled or not.

This field is supported for Cloud Composer environments in composer 3 and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#retention_mode GoogleComposerEnvironment#retention_mode}

---

### GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig <a name="GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig {
	StorageMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.property.storageMode">StorageMode</a></code> | <code>*string</code> | Whether logs in cloud logging only is enabled or not. |

---

##### `StorageMode`<sup>Optional</sup> <a name="StorageMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.property.storageMode"></a>

```go
StorageMode *string
```

- *Type:* *string

Whether logs in cloud logging only is enabled or not.

This field is supported for Cloud Composer environments in versions composer-2.0.32-airflow-2.1.4 and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#storage_mode GoogleComposerEnvironment#storage_mode}

---

### GoogleComposerEnvironmentConfigEncryptionConfig <a name="GoogleComposerEnvironmentConfigEncryptionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigEncryptionConfig {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#kms_key_name GoogleComposerEnvironment#kms_key_name}

---

### GoogleComposerEnvironmentConfigMaintenanceWindow <a name="GoogleComposerEnvironmentConfigMaintenanceWindow" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigMaintenanceWindow {
	EndTime: *string,
	Recurrence: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.endTime">EndTime</a></code> | <code>*string</code> | Maintenance window end time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.recurrence">Recurrence</a></code> | <code>*string</code> | Maintenance window recurrence. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.startTime">StartTime</a></code> | <code>*string</code> | Start time of the first recurrence of the maintenance window. |

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Maintenance window end time.

It is used only to calculate the duration of the maintenance window. The value for end-time must be in the future, relative to 'start_time'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#end_time GoogleComposerEnvironment#end_time}

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.recurrence"></a>

```go
Recurrence *string
```

- *Type:* *string

Maintenance window recurrence.

Format is a subset of RFC-5545 (https://tools.ietf.org/html/rfc5545) 'RRULE'. The only allowed values for 'FREQ' field are 'FREQ=DAILY' and 'FREQ=WEEKLY;BYDAY=...'. Example values: 'FREQ=WEEKLY;BYDAY=TU,WE', 'FREQ=DAILY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#recurrence GoogleComposerEnvironment#recurrence}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Start time of the first recurrence of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#start_time GoogleComposerEnvironment#start_time}

---

### GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig <a name="GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig {
	Enabled: interface{},
	CidrBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether or not master authorized networks is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.cidrBlocks">CidrBlocks</a></code> | <code>interface{}</code> | cidr_blocks block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether or not master authorized networks is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#enabled GoogleComposerEnvironment#enabled}

---

##### `CidrBlocks`<sup>Optional</sup> <a name="CidrBlocks" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.cidrBlocks"></a>

```go
CidrBlocks interface{}
```

- *Type:* interface{}

cidr_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#cidr_blocks GoogleComposerEnvironment#cidr_blocks}

---

### GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks <a name="GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks {
	CidrBlock: *string,
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | cidr_block must be specified in CIDR notation. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.displayName">DisplayName</a></code> | <code>*string</code> | display_name is a field for users to identify CIDR blocks. |

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.cidrBlock"></a>

```go
CidrBlock *string
```

- *Type:* *string

cidr_block must be specified in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#cidr_block GoogleComposerEnvironment#cidr_block}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

display_name is a field for users to identify CIDR blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#display_name GoogleComposerEnvironment#display_name}

---

### GoogleComposerEnvironmentConfigNodeConfig <a name="GoogleComposerEnvironmentConfigNodeConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigNodeConfig {
	ComposerInternalIpv4CidrBlock: *string,
	ComposerNetworkAttachment: *string,
	DiskSizeGb: *f64,
	EnableIpMasqAgent: interface{},
	IpAllocationPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy,
	MachineType: *string,
	MaxPodsPerNode: *f64,
	Network: *string,
	OauthScopes: *[]*string,
	ServiceAccount: *string,
	Subnetwork: *string,
	Tags: *[]*string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.composerInternalIpv4CidrBlock">ComposerInternalIpv4CidrBlock</a></code> | <code>*string</code> | IPv4 cidr range that will be used by Composer internal components. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.composerNetworkAttachment">ComposerNetworkAttachment</a></code> | <code>*string</code> | PSC (Private Service Connect) Network entry point. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | The disk size in GB used for node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.enableIpMasqAgent">EnableIpMasqAgent</a></code> | <code>interface{}</code> | Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.ipAllocationPolicy">IpAllocationPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a></code> | ip_allocation_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.machineType">MachineType</a></code> | <code>*string</code> | The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>*f64</code> | The maximum pods per node in the GKE cluster allocated during environment creation. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.network">Network</a></code> | <code>*string</code> | The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | The set of Google API scopes to be made available on all node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The Google Cloud Platform Service Account to be used by the node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The Compute Engine subnetwork to be used for machine communications, specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | The list of instance tags applied to all node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.zone">Zone</a></code> | <code>*string</code> | The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. |

---

##### `ComposerInternalIpv4CidrBlock`<sup>Optional</sup> <a name="ComposerInternalIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.composerInternalIpv4CidrBlock"></a>

```go
ComposerInternalIpv4CidrBlock *string
```

- *Type:* *string

IPv4 cidr range that will be used by Composer internal components.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#composer_internal_ipv4_cidr_block GoogleComposerEnvironment#composer_internal_ipv4_cidr_block}

---

##### `ComposerNetworkAttachment`<sup>Optional</sup> <a name="ComposerNetworkAttachment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.composerNetworkAttachment"></a>

```go
ComposerNetworkAttachment *string
```

- *Type:* *string

PSC (Private Service Connect) Network entry point.

Customers can pre-create the Network Attachment and point Cloud Composer environment to use. It is possible to share network attachment among many environments, provided enough IP addresses are available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#composer_network_attachment GoogleComposerEnvironment#composer_network_attachment}

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

The disk size in GB used for node VMs.

Minimum size is 20GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#disk_size_gb GoogleComposerEnvironment#disk_size_gb}

---

##### `EnableIpMasqAgent`<sup>Optional</sup> <a name="EnableIpMasqAgent" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.enableIpMasqAgent"></a>

```go
EnableIpMasqAgent interface{}
```

- *Type:* interface{}

Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic.

See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#enable_ip_masq_agent GoogleComposerEnvironment#enable_ip_masq_agent}

---

##### `IpAllocationPolicy`<sup>Optional</sup> <a name="IpAllocationPolicy" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.ipAllocationPolicy"></a>

```go
IpAllocationPolicy GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

ip_allocation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#ip_allocation_policy GoogleComposerEnvironment#ip_allocation_policy}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The Compute Engine machine type used for cluster instances, specified as a name or relative resource name.

For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#machine_type GoogleComposerEnvironment#machine_type}

---

##### `MaxPodsPerNode`<sup>Optional</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.maxPodsPerNode"></a>

```go
MaxPodsPerNode *f64
```

- *Type:* *f64

The maximum pods per node in the GKE cluster allocated during environment creation.

Lowering this value reduces IP address consumption by the Cloud Composer Kubernetes cluster. This value can only be set during environment creation, and only if the environment is VPC-Native. The range of possible values is 8-110, and the default is 32. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#max_pods_per_node GoogleComposerEnvironment#max_pods_per_node}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The Compute Engine machine type used for cluster instances, specified as a name or relative resource name.

For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. The network must belong to the environment's project. If unspecified, the "default" network ID in the environment's project is used. If a Custom Subnet Network is provided, subnetwork must also be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#network GoogleComposerEnvironment#network}

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.oauthScopes"></a>

```go
OauthScopes *[]*string
```

- *Type:* *[]*string

The set of Google API scopes to be made available on all node VMs.

Cannot be updated. If empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#oauth_scopes GoogleComposerEnvironment#oauth_scopes}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The Google Cloud Platform Service Account to be used by the node VMs.

If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. If given, note that the service account must have roles/composer.worker for any GCP resources created under the Cloud Composer Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#service_account GoogleComposerEnvironment#service_account}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The Compute Engine subnetwork to be used for machine communications, specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#subnetwork GoogleComposerEnvironment#subnetwork}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

The list of instance tags applied to all node VMs.

Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035. Cannot be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#tags GoogleComposerEnvironment#tags}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#zone GoogleComposerEnvironment#zone}

---

### GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy <a name="GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy {
	ClusterIpv4CidrBlock: *string,
	ClusterSecondaryRangeName: *string,
	ServicesIpv4CidrBlock: *string,
	ServicesSecondaryRangeName: *string,
	UseIpAliases: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterIpv4CidrBlock">ClusterIpv4CidrBlock</a></code> | <code>*string</code> | The IP address range used to allocate IP addresses to pods in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterSecondaryRangeName">ClusterSecondaryRangeName</a></code> | <code>*string</code> | The name of the cluster's secondary range used to allocate IP addresses to pods. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesIpv4CidrBlock">ServicesIpv4CidrBlock</a></code> | <code>*string</code> | The IP address range used to allocate IP addresses in this cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesSecondaryRangeName">ServicesSecondaryRangeName</a></code> | <code>*string</code> | The name of the services' secondary range used to allocate IP addresses to the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.useIpAliases">UseIpAliases</a></code> | <code>interface{}</code> | Whether or not to enable Alias IPs in the GKE cluster. |

---

##### `ClusterIpv4CidrBlock`<sup>Optional</sup> <a name="ClusterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterIpv4CidrBlock"></a>

```go
ClusterIpv4CidrBlock *string
```

- *Type:* *string

The IP address range used to allocate IP addresses to pods in the cluster.

For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. /14) to have GKE choose a range with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. Specify either cluster_secondary_range_name or cluster_ipv4_cidr_block but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#cluster_ipv4_cidr_block GoogleComposerEnvironment#cluster_ipv4_cidr_block}

---

##### `ClusterSecondaryRangeName`<sup>Optional</sup> <a name="ClusterSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterSecondaryRangeName"></a>

```go
ClusterSecondaryRangeName *string
```

- *Type:* *string

The name of the cluster's secondary range used to allocate IP addresses to pods.

Specify either cluster_secondary_range_name or cluster_ipv4_cidr_block but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#cluster_secondary_range_name GoogleComposerEnvironment#cluster_secondary_range_name}

---

##### `ServicesIpv4CidrBlock`<sup>Optional</sup> <a name="ServicesIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesIpv4CidrBlock"></a>

```go
ServicesIpv4CidrBlock *string
```

- *Type:* *string

The IP address range used to allocate IP addresses in this cluster.

For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. /14) to have GKE choose a range with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. Specify either services_secondary_range_name or services_ipv4_cidr_block but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#services_ipv4_cidr_block GoogleComposerEnvironment#services_ipv4_cidr_block}

---

##### `ServicesSecondaryRangeName`<sup>Optional</sup> <a name="ServicesSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesSecondaryRangeName"></a>

```go
ServicesSecondaryRangeName *string
```

- *Type:* *string

The name of the services' secondary range used to allocate IP addresses to the cluster.

Specify either services_secondary_range_name or services_ipv4_cidr_block but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#services_secondary_range_name GoogleComposerEnvironment#services_secondary_range_name}

---

##### `UseIpAliases`<sup>Optional</sup> <a name="UseIpAliases" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.useIpAliases"></a>

```go
UseIpAliases interface{}
```

- *Type:* interface{}

Whether or not to enable Alias IPs in the GKE cluster.

If true, a VPC-native cluster is created. Defaults to true if the ip_allocation_policy block is present in config. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use VPC-native GKE clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#use_ip_aliases GoogleComposerEnvironment#use_ip_aliases}

---

### GoogleComposerEnvironmentConfigPrivateEnvironmentConfig <a name="GoogleComposerEnvironmentConfigPrivateEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig {
	CloudComposerConnectionSubnetwork: *string,
	CloudComposerNetworkIpv4CidrBlock: *string,
	CloudSqlIpv4CidrBlock: *string,
	ConnectionType: *string,
	EnablePrivateEndpoint: interface{},
	EnablePrivatelyUsedPublicIps: interface{},
	MasterIpv4CidrBlock: *string,
	WebServerIpv4CidrBlock: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerConnectionSubnetwork">CloudComposerConnectionSubnetwork</a></code> | <code>*string</code> | When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerNetworkIpv4CidrBlock">CloudComposerNetworkIpv4CidrBlock</a></code> | <code>*string</code> | The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudSqlIpv4CidrBlock">CloudSqlIpv4CidrBlock</a></code> | <code>*string</code> | The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.connectionType">ConnectionType</a></code> | <code>*string</code> | Mode of internal communication within the Composer environment. Must be one of "VPC_PEERING" or "PRIVATE_SERVICE_CONNECT". |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivateEndpoint">EnablePrivateEndpoint</a></code> | <code>interface{}</code> | If true, access to the public endpoint of the GKE cluster is denied. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivatelyUsedPublicIps">EnablePrivatelyUsedPublicIps</a></code> | <code>interface{}</code> | When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.masterIpv4CidrBlock">MasterIpv4CidrBlock</a></code> | <code>*string</code> | The IP range in CIDR notation to use for the hosted master network. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.webServerIpv4CidrBlock">WebServerIpv4CidrBlock</a></code> | <code>*string</code> | The CIDR block from which IP range for web server will be reserved. |

---

##### `CloudComposerConnectionSubnetwork`<sup>Optional</sup> <a name="CloudComposerConnectionSubnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerConnectionSubnetwork"></a>

```go
CloudComposerConnectionSubnetwork *string
```

- *Type:* *string

When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork.

This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#cloud_composer_connection_subnetwork GoogleComposerEnvironment#cloud_composer_connection_subnetwork}

---

##### `CloudComposerNetworkIpv4CidrBlock`<sup>Optional</sup> <a name="CloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerNetworkIpv4CidrBlock"></a>

```go
CloudComposerNetworkIpv4CidrBlock *string
```

- *Type:* *string

The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved.

Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#cloud_composer_network_ipv4_cidr_block GoogleComposerEnvironment#cloud_composer_network_ipv4_cidr_block}

---

##### `CloudSqlIpv4CidrBlock`<sup>Optional</sup> <a name="CloudSqlIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudSqlIpv4CidrBlock"></a>

```go
CloudSqlIpv4CidrBlock *string
```

- *Type:* *string

The CIDR block from which IP range in tenant project will be reserved for Cloud SQL.

Needs to be disjoint from web_server_ipv4_cidr_block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#cloud_sql_ipv4_cidr_block GoogleComposerEnvironment#cloud_sql_ipv4_cidr_block}

---

##### `ConnectionType`<sup>Optional</sup> <a name="ConnectionType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.connectionType"></a>

```go
ConnectionType *string
```

- *Type:* *string

Mode of internal communication within the Composer environment. Must be one of "VPC_PEERING" or "PRIVATE_SERVICE_CONNECT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#connection_type GoogleComposerEnvironment#connection_type}

---

##### `EnablePrivateEndpoint`<sup>Optional</sup> <a name="EnablePrivateEndpoint" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivateEndpoint"></a>

```go
EnablePrivateEndpoint interface{}
```

- *Type:* interface{}

If true, access to the public endpoint of the GKE cluster is denied.

If this field is set to true, ip_allocation_policy.use_ip_aliases must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#enable_private_endpoint GoogleComposerEnvironment#enable_private_endpoint}

---

##### `EnablePrivatelyUsedPublicIps`<sup>Optional</sup> <a name="EnablePrivatelyUsedPublicIps" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivatelyUsedPublicIps"></a>

```go
EnablePrivatelyUsedPublicIps interface{}
```

- *Type:* interface{}

When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#enable_privately_used_public_ips GoogleComposerEnvironment#enable_privately_used_public_ips}

---

##### `MasterIpv4CidrBlock`<sup>Optional</sup> <a name="MasterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.masterIpv4CidrBlock"></a>

```go
MasterIpv4CidrBlock *string
```

- *Type:* *string

The IP range in CIDR notation to use for the hosted master network.

This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. If left blank, the default value of '172.16.0.0/28' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#master_ipv4_cidr_block GoogleComposerEnvironment#master_ipv4_cidr_block}

---

##### `WebServerIpv4CidrBlock`<sup>Optional</sup> <a name="WebServerIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.webServerIpv4CidrBlock"></a>

```go
WebServerIpv4CidrBlock *string
```

- *Type:* *string

The CIDR block from which IP range for web server will be reserved.

Needs to be disjoint from master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#web_server_ipv4_cidr_block GoogleComposerEnvironment#web_server_ipv4_cidr_block}

---

### GoogleComposerEnvironmentConfigRecoveryConfig <a name="GoogleComposerEnvironmentConfigRecoveryConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigRecoveryConfig {
	ScheduledSnapshotsConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig.property.scheduledSnapshotsConfig">ScheduledSnapshotsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | scheduled_snapshots_config block. |

---

##### `ScheduledSnapshotsConfig`<sup>Optional</sup> <a name="ScheduledSnapshotsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig.property.scheduledSnapshotsConfig"></a>

```go
ScheduledSnapshotsConfig GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

scheduled_snapshots_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#scheduled_snapshots_config GoogleComposerEnvironment#scheduled_snapshots_config}

---

### GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig <a name="GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig {
	Enabled: interface{},
	SnapshotCreationSchedule: *string,
	SnapshotLocation: *string,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotCreationSchedule">SnapshotCreationSchedule</a></code> | <code>*string</code> | Snapshot schedule, in the unix-cron format. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotLocation">SnapshotLocation</a></code> | <code>*string</code> | the URI of a bucket folder where to save the snapshot. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | A time zone for the schedule. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#enabled GoogleComposerEnvironment#enabled}

---

##### `SnapshotCreationSchedule`<sup>Optional</sup> <a name="SnapshotCreationSchedule" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotCreationSchedule"></a>

```go
SnapshotCreationSchedule *string
```

- *Type:* *string

Snapshot schedule, in the unix-cron format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#snapshot_creation_schedule GoogleComposerEnvironment#snapshot_creation_schedule}

---

##### `SnapshotLocation`<sup>Optional</sup> <a name="SnapshotLocation" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotLocation"></a>

```go
SnapshotLocation *string
```

- *Type:* *string

the URI of a bucket folder where to save the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#snapshot_location GoogleComposerEnvironment#snapshot_location}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

A time zone for the schedule.

This value is a time offset and does not take into account daylight saving time changes. Valid values are from UTC-12 to UTC+12. Examples: UTC, UTC-01, UTC+03.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#time_zone GoogleComposerEnvironment#time_zone}

---

### GoogleComposerEnvironmentConfigSoftwareConfig <a name="GoogleComposerEnvironmentConfigSoftwareConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigSoftwareConfig {
	AirflowConfigOverrides: *map[string]*string,
	CloudDataLineageIntegration: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration,
	EnvVariables: *map[string]*string,
	ImageVersion: *string,
	PypiPackages: *map[string]*string,
	PythonVersion: *string,
	SchedulerCount: *f64,
	WebServerPluginsMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.airflowConfigOverrides">AirflowConfigOverrides</a></code> | <code>*map[string]*string</code> | Apache Airflow configuration properties to override. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.cloudDataLineageIntegration">CloudDataLineageIntegration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a></code> | cloud_data_lineage_integration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.envVariables">EnvVariables</a></code> | <code>*map[string]*string</code> | Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.imageVersion">ImageVersion</a></code> | <code>*string</code> | The version of the software running in the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.pypiPackages">PypiPackages</a></code> | <code>*map[string]*string</code> | Custom Python Package Index (PyPI) packages to be installed in the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.pythonVersion">PythonVersion</a></code> | <code>*string</code> | The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.schedulerCount">SchedulerCount</a></code> | <code>*f64</code> | The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.webServerPluginsMode">WebServerPluginsMode</a></code> | <code>*string</code> | Should be either 'ENABLED' or 'DISABLED'. Defaults to 'ENABLED'. Used in Composer 3. |

---

##### `AirflowConfigOverrides`<sup>Optional</sup> <a name="AirflowConfigOverrides" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.airflowConfigOverrides"></a>

```go
AirflowConfigOverrides *map[string]*string
```

- *Type:* *map[string]*string

Apache Airflow configuration properties to override.

Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and cannot contain "=" or ";". Section and property names cannot contain characters: "." Apache Airflow configuration property names must be written in snake_case. Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are blacklisted, and cannot be overridden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#airflow_config_overrides GoogleComposerEnvironment#airflow_config_overrides}

---

##### `CloudDataLineageIntegration`<sup>Optional</sup> <a name="CloudDataLineageIntegration" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.cloudDataLineageIntegration"></a>

```go
CloudDataLineageIntegration GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

cloud_data_lineage_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#cloud_data_lineage_integration GoogleComposerEnvironment#cloud_data_lineage_integration}

---

##### `EnvVariables`<sup>Optional</sup> <a name="EnvVariables" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.envVariables"></a>

```go
EnvVariables *map[string]*string
```

- *Type:* *map[string]*string

Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes.

Environment variable names must match the regular expression [a-zA-Z_][a-zA-Z0-9_]*. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+), and they cannot match any of the following reserved names: AIRFLOW_HOME C_FORCE_ROOT CONTAINER_NAME DAGS_FOLDER GCP_PROJECT GCS_BUCKET GKE_CLUSTER_NAME SQL_DATABASE SQL_INSTANCE SQL_PASSWORD SQL_PROJECT SQL_REGION SQL_USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#env_variables GoogleComposerEnvironment#env_variables}

---

##### `ImageVersion`<sup>Optional</sup> <a name="ImageVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.imageVersion"></a>

```go
ImageVersion *string
```

- *Type:* *string

The version of the software running in the environment.

This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression composer-([0-9]+(.[0-9]+.[0-9]+(-preview.[0-9]+)?)?|latest)-airflow-([0-9]+(.[0-9]+(.[0-9]+)?)?). The Cloud Composer portion of the image version is a full semantic version, or an alias in the form of major version number or 'latest'. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. See documentation for more details and version list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#image_version GoogleComposerEnvironment#image_version}

---

##### `PypiPackages`<sup>Optional</sup> <a name="PypiPackages" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.pypiPackages"></a>

```go
PypiPackages *map[string]*string
```

- *Type:* *map[string]*string

Custom Python Package Index (PyPI) packages to be installed in the environment.

Keys refer to the lowercase package name (e.g. "numpy"). Values are the lowercase extras and version specifier (e.g. "==1.12.0", "[devel,gcp_api]", "[devel]>=1.8.2, <1.9.2"). To specify a package without pinning it to a version specifier, use the empty string as the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#pypi_packages GoogleComposerEnvironment#pypi_packages}

---

##### `PythonVersion`<sup>Optional</sup> <a name="PythonVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.pythonVersion"></a>

```go
PythonVersion *string
```

- *Type:* *string

The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes.

Can be set to '2' or '3'. If not specified, the default is '2'. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#python_version GoogleComposerEnvironment#python_version}

---

##### `SchedulerCount`<sup>Optional</sup> <a name="SchedulerCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.schedulerCount"></a>

```go
SchedulerCount *f64
```

- *Type:* *f64

The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#scheduler_count GoogleComposerEnvironment#scheduler_count}

---

##### `WebServerPluginsMode`<sup>Optional</sup> <a name="WebServerPluginsMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.webServerPluginsMode"></a>

```go
WebServerPluginsMode *string
```

- *Type:* *string

Should be either 'ENABLED' or 'DISABLED'. Defaults to 'ENABLED'. Used in Composer 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#web_server_plugins_mode GoogleComposerEnvironment#web_server_plugins_mode}

---

### GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration <a name="GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether or not Cloud Data Lineage integration is enabled. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether or not Cloud Data Lineage integration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#enabled GoogleComposerEnvironment#enabled}

---

### GoogleComposerEnvironmentConfigWebServerConfig <a name="GoogleComposerEnvironmentConfigWebServerConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigWebServerConfig {
	MachineType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig.property.machineType">MachineType</a></code> | <code>*string</code> | Optional. |

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

Optional.

Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#machine_type GoogleComposerEnvironment#machine_type}

---

### GoogleComposerEnvironmentConfigWebServerNetworkAccessControl <a name="GoogleComposerEnvironmentConfigWebServerNetworkAccessControl" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl {
	AllowedIpRange: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl.property.allowedIpRange">AllowedIpRange</a></code> | <code>interface{}</code> | allowed_ip_range block. |

---

##### `AllowedIpRange`<sup>Optional</sup> <a name="AllowedIpRange" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl.property.allowedIpRange"></a>

```go
AllowedIpRange interface{}
```

- *Type:* interface{}

allowed_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#allowed_ip_range GoogleComposerEnvironment#allowed_ip_range}

---

### GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange <a name="GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange {
	Value: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.value">Value</a></code> | <code>*string</code> | IP address or range, defined using CIDR notation, of requests that this rule applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.description">Description</a></code> | <code>*string</code> | A description of this ip range. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.value"></a>

```go
Value *string
```

- *Type:* *string

IP address or range, defined using CIDR notation, of requests that this rule applies to.

Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32 or 2001:0db8:0000:0042:0000:8a2e:0370:7334. IP range prefixes should be properly truncated. For example, 1.2.3.4/24 should be truncated to 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 should be truncated to 2001:db8::/32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#value GoogleComposerEnvironment#value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of this ip range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#description GoogleComposerEnvironment#description}

---

### GoogleComposerEnvironmentConfigWorkloadsConfig <a name="GoogleComposerEnvironmentConfigWorkloadsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigWorkloadsConfig {
	DagProcessor: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor,
	Scheduler: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler,
	Triggerer: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer,
	WebServer: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer,
	Worker: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.dagProcessor">DagProcessor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a></code> | dag_processor block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.scheduler">Scheduler</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | scheduler block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.triggerer">Triggerer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | triggerer block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.webServer">WebServer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | web_server block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | worker block. |

---

##### `DagProcessor`<sup>Optional</sup> <a name="DagProcessor" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.dagProcessor"></a>

```go
DagProcessor GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

dag_processor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#dag_processor GoogleComposerEnvironment#dag_processor}

---

##### `Scheduler`<sup>Optional</sup> <a name="Scheduler" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.scheduler"></a>

```go
Scheduler GoogleComposerEnvironmentConfigWorkloadsConfigScheduler
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a>

scheduler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#scheduler GoogleComposerEnvironment#scheduler}

---

##### `Triggerer`<sup>Optional</sup> <a name="Triggerer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.triggerer"></a>

```go
Triggerer GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

triggerer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#triggerer GoogleComposerEnvironment#triggerer}

---

##### `WebServer`<sup>Optional</sup> <a name="WebServer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.webServer"></a>

```go
WebServer GoogleComposerEnvironmentConfigWorkloadsConfigWebServer
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a>

web_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#web_server GoogleComposerEnvironment#web_server}

---

##### `Worker`<sup>Optional</sup> <a name="Worker" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.worker"></a>

```go
Worker GoogleComposerEnvironmentConfigWorkloadsConfigWorker
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a>

worker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#worker GoogleComposerEnvironment#worker}

---

### GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor <a name="GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor {
	Count: *f64,
	Cpu: *f64,
	MemoryGb: *f64,
	StorageGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.count">Count</a></code> | <code>*f64</code> | Number of DAG processors. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.cpu">Cpu</a></code> | <code>*f64</code> | CPU request and limit for DAG processor. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | Memory (GB) request and limit for DAG processor. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.storageGb">StorageGb</a></code> | <code>*f64</code> | Storage (GB) request and limit for DAG processor. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Number of DAG processors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#count GoogleComposerEnvironment#count}

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

CPU request and limit for DAG processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#cpu GoogleComposerEnvironment#cpu}

---

##### `MemoryGb`<sup>Optional</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.memoryGb"></a>

```go
MemoryGb *f64
```

- *Type:* *f64

Memory (GB) request and limit for DAG processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#memory_gb GoogleComposerEnvironment#memory_gb}

---

##### `StorageGb`<sup>Optional</sup> <a name="StorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.storageGb"></a>

```go
StorageGb *f64
```

- *Type:* *f64

Storage (GB) request and limit for DAG processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#storage_gb GoogleComposerEnvironment#storage_gb}

---

### GoogleComposerEnvironmentConfigWorkloadsConfigScheduler <a name="GoogleComposerEnvironmentConfigWorkloadsConfigScheduler" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler {
	Count: *f64,
	Cpu: *f64,
	MemoryGb: *f64,
	StorageGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.count">Count</a></code> | <code>*f64</code> | The number of schedulers. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.cpu">Cpu</a></code> | <code>*f64</code> | CPU request and limit for a single Airflow scheduler replica. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | Memory (GB) request and limit for a single Airflow scheduler replica. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.storageGb">StorageGb</a></code> | <code>*f64</code> | Storage (GB) request and limit for a single Airflow scheduler replica. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

The number of schedulers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#count GoogleComposerEnvironment#count}

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

CPU request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#cpu GoogleComposerEnvironment#cpu}

---

##### `MemoryGb`<sup>Optional</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.memoryGb"></a>

```go
MemoryGb *f64
```

- *Type:* *f64

Memory (GB) request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#memory_gb GoogleComposerEnvironment#memory_gb}

---

##### `StorageGb`<sup>Optional</sup> <a name="StorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.storageGb"></a>

```go
StorageGb *f64
```

- *Type:* *f64

Storage (GB) request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#storage_gb GoogleComposerEnvironment#storage_gb}

---

### GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer <a name="GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer {
	Count: *f64,
	Cpu: *f64,
	MemoryGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.count">Count</a></code> | <code>*f64</code> | The number of triggerers. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.cpu">Cpu</a></code> | <code>*f64</code> | CPU request and limit for a single Airflow triggerer replica. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | Memory (GB) request and limit for a single Airflow triggerer replica. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

The number of triggerers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#count GoogleComposerEnvironment#count}

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

CPU request and limit for a single Airflow triggerer replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#cpu GoogleComposerEnvironment#cpu}

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.memoryGb"></a>

```go
MemoryGb *f64
```

- *Type:* *f64

Memory (GB) request and limit for a single Airflow triggerer replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#memory_gb GoogleComposerEnvironment#memory_gb}

---

### GoogleComposerEnvironmentConfigWorkloadsConfigWebServer <a name="GoogleComposerEnvironmentConfigWorkloadsConfigWebServer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer {
	Cpu: *f64,
	MemoryGb: *f64,
	StorageGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.cpu">Cpu</a></code> | <code>*f64</code> | CPU request and limit for Airflow web server. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | Memory (GB) request and limit for Airflow web server. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.storageGb">StorageGb</a></code> | <code>*f64</code> | Storage (GB) request and limit for Airflow web server. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

CPU request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#cpu GoogleComposerEnvironment#cpu}

---

##### `MemoryGb`<sup>Optional</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.memoryGb"></a>

```go
MemoryGb *f64
```

- *Type:* *f64

Memory (GB) request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#memory_gb GoogleComposerEnvironment#memory_gb}

---

##### `StorageGb`<sup>Optional</sup> <a name="StorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.storageGb"></a>

```go
StorageGb *f64
```

- *Type:* *f64

Storage (GB) request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#storage_gb GoogleComposerEnvironment#storage_gb}

---

### GoogleComposerEnvironmentConfigWorkloadsConfigWorker <a name="GoogleComposerEnvironmentConfigWorkloadsConfigWorker" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker {
	Cpu: *f64,
	MaxCount: *f64,
	MemoryGb: *f64,
	MinCount: *f64,
	StorageGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.cpu">Cpu</a></code> | <code>*f64</code> | CPU request and limit for a single Airflow worker replica. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.maxCount">MaxCount</a></code> | <code>*f64</code> | Maximum number of workers for autoscaling. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | Memory (GB) request and limit for a single Airflow worker replica. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.minCount">MinCount</a></code> | <code>*f64</code> | Minimum number of workers for autoscaling. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.storageGb">StorageGb</a></code> | <code>*f64</code> | Storage (GB) request and limit for a single Airflow worker replica. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

CPU request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#cpu GoogleComposerEnvironment#cpu}

---

##### `MaxCount`<sup>Optional</sup> <a name="MaxCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.maxCount"></a>

```go
MaxCount *f64
```

- *Type:* *f64

Maximum number of workers for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#max_count GoogleComposerEnvironment#max_count}

---

##### `MemoryGb`<sup>Optional</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.memoryGb"></a>

```go
MemoryGb *f64
```

- *Type:* *f64

Memory (GB) request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#memory_gb GoogleComposerEnvironment#memory_gb}

---

##### `MinCount`<sup>Optional</sup> <a name="MinCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.minCount"></a>

```go
MinCount *f64
```

- *Type:* *f64

Minimum number of workers for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#min_count GoogleComposerEnvironment#min_count}

---

##### `StorageGb`<sup>Optional</sup> <a name="StorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.storageGb"></a>

```go
StorageGb *f64
```

- *Type:* *f64

Storage (GB) request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#storage_gb GoogleComposerEnvironment#storage_gb}

---

### GoogleComposerEnvironmentStorageConfig <a name="GoogleComposerEnvironmentStorageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentStorageConfig {
	Bucket: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Optional. Name of an existing Cloud Storage bucket to be used by the environment. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Optional. Name of an existing Cloud Storage bucket to be used by the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#bucket GoogleComposerEnvironment#bucket}

---

### GoogleComposerEnvironmentTimeouts <a name="GoogleComposerEnvironmentTimeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

&googlecomposerenvironment.GoogleComposerEnvironmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#create GoogleComposerEnvironment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#delete GoogleComposerEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#update GoogleComposerEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#create GoogleComposerEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#delete GoogleComposerEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_environment#update GoogleComposerEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComposerEnvironmentConfigAOutputReference <a name="GoogleComposerEnvironmentConfigAOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDatabaseConfig">PutDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDataRetentionConfig">PutDataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig">PutMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putNodeConfig">PutNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig">PutPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putRecoveryConfig">PutRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putSoftwareConfig">PutSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerConfig">PutWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl">PutWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWorkloadsConfig">PutWorkloadsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetDatabaseConfig">ResetDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetDataRetentionConfig">ResetDataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnablePrivateBuildsOnly">ResetEnablePrivateBuildsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnablePrivateEnvironment">ResetEnablePrivateEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnvironmentSize">ResetEnvironmentSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetMasterAuthorizedNetworksConfig">ResetMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetNodeConfig">ResetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetPrivateEnvironmentConfig">ResetPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetRecoveryConfig">ResetRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetResilienceMode">ResetResilienceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetSoftwareConfig">ResetSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWebServerConfig">ResetWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWebServerNetworkAccessControl">ResetWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWorkloadsConfig">ResetWorkloadsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabaseConfig` <a name="PutDatabaseConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDatabaseConfig"></a>

```go
func PutDatabaseConfig(value GoogleComposerEnvironmentConfigDatabaseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDatabaseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a>

---

##### `PutDataRetentionConfig` <a name="PutDataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDataRetentionConfig"></a>

```go
func PutDataRetentionConfig(value GoogleComposerEnvironmentConfigDataRetentionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDataRetentionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a>

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putEncryptionConfig"></a>

```go
func PutEncryptionConfig(value GoogleComposerEnvironmentConfigEncryptionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value GoogleComposerEnvironmentConfigMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a>

---

##### `PutMasterAuthorizedNetworksConfig` <a name="PutMasterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig"></a>

```go
func PutMasterAuthorizedNetworksConfig(value GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---

##### `PutNodeConfig` <a name="PutNodeConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putNodeConfig"></a>

```go
func PutNodeConfig(value GoogleComposerEnvironmentConfigNodeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a>

---

##### `PutPrivateEnvironmentConfig` <a name="PutPrivateEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig"></a>

```go
func PutPrivateEnvironmentConfig(value GoogleComposerEnvironmentConfigPrivateEnvironmentConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---

##### `PutRecoveryConfig` <a name="PutRecoveryConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putRecoveryConfig"></a>

```go
func PutRecoveryConfig(value GoogleComposerEnvironmentConfigRecoveryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putRecoveryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a>

---

##### `PutSoftwareConfig` <a name="PutSoftwareConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putSoftwareConfig"></a>

```go
func PutSoftwareConfig(value GoogleComposerEnvironmentConfigSoftwareConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a>

---

##### `PutWebServerConfig` <a name="PutWebServerConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerConfig"></a>

```go
func PutWebServerConfig(value GoogleComposerEnvironmentConfigWebServerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a>

---

##### `PutWebServerNetworkAccessControl` <a name="PutWebServerNetworkAccessControl" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl"></a>

```go
func PutWebServerNetworkAccessControl(value GoogleComposerEnvironmentConfigWebServerNetworkAccessControl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---

##### `PutWorkloadsConfig` <a name="PutWorkloadsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWorkloadsConfig"></a>

```go
func PutWorkloadsConfig(value GoogleComposerEnvironmentConfigWorkloadsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWorkloadsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a>

---

##### `ResetDatabaseConfig` <a name="ResetDatabaseConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetDatabaseConfig"></a>

```go
func ResetDatabaseConfig()
```

##### `ResetDataRetentionConfig` <a name="ResetDataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetDataRetentionConfig"></a>

```go
func ResetDataRetentionConfig()
```

##### `ResetEnablePrivateBuildsOnly` <a name="ResetEnablePrivateBuildsOnly" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnablePrivateBuildsOnly"></a>

```go
func ResetEnablePrivateBuildsOnly()
```

##### `ResetEnablePrivateEnvironment` <a name="ResetEnablePrivateEnvironment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnablePrivateEnvironment"></a>

```go
func ResetEnablePrivateEnvironment()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEncryptionConfig"></a>

```go
func ResetEncryptionConfig()
```

##### `ResetEnvironmentSize` <a name="ResetEnvironmentSize" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnvironmentSize"></a>

```go
func ResetEnvironmentSize()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetMasterAuthorizedNetworksConfig` <a name="ResetMasterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetMasterAuthorizedNetworksConfig"></a>

```go
func ResetMasterAuthorizedNetworksConfig()
```

##### `ResetNodeConfig` <a name="ResetNodeConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetNodeConfig"></a>

```go
func ResetNodeConfig()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetPrivateEnvironmentConfig` <a name="ResetPrivateEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetPrivateEnvironmentConfig"></a>

```go
func ResetPrivateEnvironmentConfig()
```

##### `ResetRecoveryConfig` <a name="ResetRecoveryConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetRecoveryConfig"></a>

```go
func ResetRecoveryConfig()
```

##### `ResetResilienceMode` <a name="ResetResilienceMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetResilienceMode"></a>

```go
func ResetResilienceMode()
```

##### `ResetSoftwareConfig` <a name="ResetSoftwareConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetSoftwareConfig"></a>

```go
func ResetSoftwareConfig()
```

##### `ResetWebServerConfig` <a name="ResetWebServerConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWebServerConfig"></a>

```go
func ResetWebServerConfig()
```

##### `ResetWebServerNetworkAccessControl` <a name="ResetWebServerNetworkAccessControl" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWebServerNetworkAccessControl"></a>

```go
func ResetWebServerNetworkAccessControl()
```

##### `ResetWorkloadsConfig` <a name="ResetWorkloadsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWorkloadsConfig"></a>

```go
func ResetWorkloadsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.airflowUri">AirflowUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix">DagGcsPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.databaseConfig">DatabaseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference">GoogleComposerEnvironmentConfigDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dataRetentionConfig">DataRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference">GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference">GoogleComposerEnvironmentConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.gkeCluster">GkeCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference">GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig">MasterAuthorizedNetworksConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference">GoogleComposerEnvironmentConfigNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig">PrivateEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference">GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfig">RecoveryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference">GoogleComposerEnvironmentConfigRecoveryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference">GoogleComposerEnvironmentConfigSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerConfig">WebServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference">GoogleComposerEnvironmentConfigWebServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl">WebServerNetworkAccessControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfig">WorkloadsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.databaseConfigInput">DatabaseConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dataRetentionConfigInput">DataRetentionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnlyInput">EnablePrivateBuildsOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironmentInput">EnablePrivateEnvironmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.environmentSizeInput">EnvironmentSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfigInput">MasterAuthorizedNetworksConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeConfigInput">NodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfigInput">PrivateEnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfigInput">RecoveryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.resilienceModeInput">ResilienceModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.softwareConfigInput">SoftwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerConfigInput">WebServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControlInput">WebServerNetworkAccessControlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfigInput">WorkloadsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnly">EnablePrivateBuildsOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironment">EnablePrivateEnvironment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.environmentSize">EnvironmentSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.resilienceMode">ResilienceMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AirflowUri`<sup>Required</sup> <a name="AirflowUri" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.airflowUri"></a>

```go
func AirflowUri() *string
```

- *Type:* *string

---

##### `DagGcsPrefix`<sup>Required</sup> <a name="DagGcsPrefix" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix"></a>

```go
func DagGcsPrefix() *string
```

- *Type:* *string

---

##### `DatabaseConfig`<sup>Required</sup> <a name="DatabaseConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.databaseConfig"></a>

```go
func DatabaseConfig() GoogleComposerEnvironmentConfigDatabaseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference">GoogleComposerEnvironmentConfigDatabaseConfigOutputReference</a>

---

##### `DataRetentionConfig`<sup>Required</sup> <a name="DataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dataRetentionConfig"></a>

```go
func DataRetentionConfig() GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference">GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference</a>

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfig"></a>

```go
func EncryptionConfig() GoogleComposerEnvironmentConfigEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference">GoogleComposerEnvironmentConfigEncryptionConfigOutputReference</a>

---

##### `GkeCluster`<sup>Required</sup> <a name="GkeCluster" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.gkeCluster"></a>

```go
func GkeCluster() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference">GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference</a>

---

##### `MasterAuthorizedNetworksConfig`<sup>Required</sup> <a name="MasterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig"></a>

```go
func MasterAuthorizedNetworksConfig() GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference</a>

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeConfig"></a>

```go
func NodeConfig() GoogleComposerEnvironmentConfigNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference">GoogleComposerEnvironmentConfigNodeConfigOutputReference</a>

---

##### `PrivateEnvironmentConfig`<sup>Required</sup> <a name="PrivateEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig"></a>

```go
func PrivateEnvironmentConfig() GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference">GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference</a>

---

##### `RecoveryConfig`<sup>Required</sup> <a name="RecoveryConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfig"></a>

```go
func RecoveryConfig() GoogleComposerEnvironmentConfigRecoveryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference">GoogleComposerEnvironmentConfigRecoveryConfigOutputReference</a>

---

##### `SoftwareConfig`<sup>Required</sup> <a name="SoftwareConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.softwareConfig"></a>

```go
func SoftwareConfig() GoogleComposerEnvironmentConfigSoftwareConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference">GoogleComposerEnvironmentConfigSoftwareConfigOutputReference</a>

---

##### `WebServerConfig`<sup>Required</sup> <a name="WebServerConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerConfig"></a>

```go
func WebServerConfig() GoogleComposerEnvironmentConfigWebServerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference">GoogleComposerEnvironmentConfigWebServerConfigOutputReference</a>

---

##### `WebServerNetworkAccessControl`<sup>Required</sup> <a name="WebServerNetworkAccessControl" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl"></a>

```go
func WebServerNetworkAccessControl() GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference</a>

---

##### `WorkloadsConfig`<sup>Required</sup> <a name="WorkloadsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfig"></a>

```go
func WorkloadsConfig() GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference</a>

---

##### `DatabaseConfigInput`<sup>Optional</sup> <a name="DatabaseConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.databaseConfigInput"></a>

```go
func DatabaseConfigInput() GoogleComposerEnvironmentConfigDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a>

---

##### `DataRetentionConfigInput`<sup>Optional</sup> <a name="DataRetentionConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dataRetentionConfigInput"></a>

```go
func DataRetentionConfigInput() GoogleComposerEnvironmentConfigDataRetentionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a>

---

##### `EnablePrivateBuildsOnlyInput`<sup>Optional</sup> <a name="EnablePrivateBuildsOnlyInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnlyInput"></a>

```go
func EnablePrivateBuildsOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePrivateEnvironmentInput`<sup>Optional</sup> <a name="EnablePrivateEnvironmentInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironmentInput"></a>

```go
func EnablePrivateEnvironmentInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfigInput"></a>

```go
func EncryptionConfigInput() GoogleComposerEnvironmentConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a>

---

##### `EnvironmentSizeInput`<sup>Optional</sup> <a name="EnvironmentSizeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.environmentSizeInput"></a>

```go
func EnvironmentSizeInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() GoogleComposerEnvironmentConfigMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a>

---

##### `MasterAuthorizedNetworksConfigInput`<sup>Optional</sup> <a name="MasterAuthorizedNetworksConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfigInput"></a>

```go
func MasterAuthorizedNetworksConfigInput() GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---

##### `NodeConfigInput`<sup>Optional</sup> <a name="NodeConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeConfigInput"></a>

```go
func NodeConfigInput() GoogleComposerEnvironmentConfigNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a>

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `PrivateEnvironmentConfigInput`<sup>Optional</sup> <a name="PrivateEnvironmentConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfigInput"></a>

```go
func PrivateEnvironmentConfigInput() GoogleComposerEnvironmentConfigPrivateEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---

##### `RecoveryConfigInput`<sup>Optional</sup> <a name="RecoveryConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfigInput"></a>

```go
func RecoveryConfigInput() GoogleComposerEnvironmentConfigRecoveryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a>

---

##### `ResilienceModeInput`<sup>Optional</sup> <a name="ResilienceModeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.resilienceModeInput"></a>

```go
func ResilienceModeInput() *string
```

- *Type:* *string

---

##### `SoftwareConfigInput`<sup>Optional</sup> <a name="SoftwareConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.softwareConfigInput"></a>

```go
func SoftwareConfigInput() GoogleComposerEnvironmentConfigSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a>

---

##### `WebServerConfigInput`<sup>Optional</sup> <a name="WebServerConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerConfigInput"></a>

```go
func WebServerConfigInput() GoogleComposerEnvironmentConfigWebServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a>

---

##### `WebServerNetworkAccessControlInput`<sup>Optional</sup> <a name="WebServerNetworkAccessControlInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControlInput"></a>

```go
func WebServerNetworkAccessControlInput() GoogleComposerEnvironmentConfigWebServerNetworkAccessControl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---

##### `WorkloadsConfigInput`<sup>Optional</sup> <a name="WorkloadsConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfigInput"></a>

```go
func WorkloadsConfigInput() GoogleComposerEnvironmentConfigWorkloadsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a>

---

##### `EnablePrivateBuildsOnly`<sup>Required</sup> <a name="EnablePrivateBuildsOnly" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnly"></a>

```go
func EnablePrivateBuildsOnly() interface{}
```

- *Type:* interface{}

---

##### `EnablePrivateEnvironment`<sup>Required</sup> <a name="EnablePrivateEnvironment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironment"></a>

```go
func EnablePrivateEnvironment() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentSize`<sup>Required</sup> <a name="EnvironmentSize" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.environmentSize"></a>

```go
func EnvironmentSize() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `ResilienceMode`<sup>Required</sup> <a name="ResilienceMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.resilienceMode"></a>

```go
func ResilienceMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a>

---


### GoogleComposerEnvironmentConfigDatabaseConfigOutputReference <a name="GoogleComposerEnvironmentConfigDatabaseConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigDatabaseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigDatabaseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a>

---


### GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList <a name="GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.get"></a>

```go
func Get(index *f64) GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference <a name="GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionMode">ResetRetentionMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionDays"></a>

```go
func ResetRetentionDays()
```

##### `ResetRetentionMode` <a name="ResetRetentionMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionMode"></a>

```go
func ResetRetentionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionModeInput">RetentionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionMode">RetentionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDaysInput"></a>

```go
func RetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `RetentionModeInput`<sup>Optional</sup> <a name="RetentionModeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionModeInput"></a>

```go
func RetentionModeInput() *string
```

- *Type:* *string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDays"></a>

```go
func RetentionDays() *f64
```

- *Type:* *f64

---

##### `RetentionMode`<sup>Required</sup> <a name="RetentionMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionMode"></a>

```go
func RetentionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference <a name="GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putAirflowMetadataRetentionConfig">PutAirflowMetadataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putTaskLogsRetentionConfig">PutTaskLogsRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resetAirflowMetadataRetentionConfig">ResetAirflowMetadataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resetTaskLogsRetentionConfig">ResetTaskLogsRetentionConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAirflowMetadataRetentionConfig` <a name="PutAirflowMetadataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putAirflowMetadataRetentionConfig"></a>

```go
func PutAirflowMetadataRetentionConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putAirflowMetadataRetentionConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTaskLogsRetentionConfig` <a name="PutTaskLogsRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putTaskLogsRetentionConfig"></a>

```go
func PutTaskLogsRetentionConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putTaskLogsRetentionConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAirflowMetadataRetentionConfig` <a name="ResetAirflowMetadataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resetAirflowMetadataRetentionConfig"></a>

```go
func ResetAirflowMetadataRetentionConfig()
```

##### `ResetTaskLogsRetentionConfig` <a name="ResetTaskLogsRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resetTaskLogsRetentionConfig"></a>

```go
func ResetTaskLogsRetentionConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfig">AirflowMetadataRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfig">TaskLogsRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfigInput">AirflowMetadataRetentionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfigInput">TaskLogsRetentionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AirflowMetadataRetentionConfig`<sup>Required</sup> <a name="AirflowMetadataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfig"></a>

```go
func AirflowMetadataRetentionConfig() GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList</a>

---

##### `TaskLogsRetentionConfig`<sup>Required</sup> <a name="TaskLogsRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfig"></a>

```go
func TaskLogsRetentionConfig() GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList</a>

---

##### `AirflowMetadataRetentionConfigInput`<sup>Optional</sup> <a name="AirflowMetadataRetentionConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfigInput"></a>

```go
func AirflowMetadataRetentionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TaskLogsRetentionConfigInput`<sup>Optional</sup> <a name="TaskLogsRetentionConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfigInput"></a>

```go
func TaskLogsRetentionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigDataRetentionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a>

---


### GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList <a name="GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get"></a>

```go
func Get(index *f64) GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference <a name="GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resetStorageMode">ResetStorageMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageMode` <a name="ResetStorageMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resetStorageMode"></a>

```go
func ResetStorageMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageModeInput">StorageModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageMode">StorageMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageModeInput`<sup>Optional</sup> <a name="StorageModeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageModeInput"></a>

```go
func StorageModeInput() *string
```

- *Type:* *string

---

##### `StorageMode`<sup>Required</sup> <a name="StorageMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageMode"></a>

```go
func StorageMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComposerEnvironmentConfigEncryptionConfigOutputReference <a name="GoogleComposerEnvironmentConfigEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a>

---


### GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference <a name="GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence">Recurrence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrenceInput"></a>

```go
func RecurrenceInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence"></a>

```go
func Recurrence() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a>

---


### GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList <a name="GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get"></a>

```go
func Get(index *f64) GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference <a name="GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlockInput">CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlockInput"></a>

```go
func CidrBlockInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference <a name="GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks">PutCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resetCidrBlocks">ResetCidrBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCidrBlocks` <a name="PutCidrBlocks" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks"></a>

```go
func PutCidrBlocks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCidrBlocks` <a name="ResetCidrBlocks" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resetCidrBlocks"></a>

```go
func ResetCidrBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks">CidrBlocks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocksInput">CidrBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks"></a>

```go
func CidrBlocks() GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a>

---

##### `CidrBlocksInput`<sup>Optional</sup> <a name="CidrBlocksInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocksInput"></a>

```go
func CidrBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---


### GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference <a name="GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterIpv4CidrBlock">ResetClusterIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterSecondaryRangeName">ResetClusterSecondaryRangeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesIpv4CidrBlock">ResetServicesIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesSecondaryRangeName">ResetServicesSecondaryRangeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetUseIpAliases">ResetUseIpAliases</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterIpv4CidrBlock` <a name="ResetClusterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterIpv4CidrBlock"></a>

```go
func ResetClusterIpv4CidrBlock()
```

##### `ResetClusterSecondaryRangeName` <a name="ResetClusterSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterSecondaryRangeName"></a>

```go
func ResetClusterSecondaryRangeName()
```

##### `ResetServicesIpv4CidrBlock` <a name="ResetServicesIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesIpv4CidrBlock"></a>

```go
func ResetServicesIpv4CidrBlock()
```

##### `ResetServicesSecondaryRangeName` <a name="ResetServicesSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesSecondaryRangeName"></a>

```go
func ResetServicesSecondaryRangeName()
```

##### `ResetUseIpAliases` <a name="ResetUseIpAliases" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetUseIpAliases"></a>

```go
func ResetUseIpAliases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlockInput">ClusterIpv4CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeNameInput">ClusterSecondaryRangeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlockInput">ServicesIpv4CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeNameInput">ServicesSecondaryRangeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliasesInput">UseIpAliasesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock">ClusterIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName">ClusterSecondaryRangeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock">ServicesIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName">ServicesSecondaryRangeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases">UseIpAliases</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterIpv4CidrBlockInput`<sup>Optional</sup> <a name="ClusterIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlockInput"></a>

```go
func ClusterIpv4CidrBlockInput() *string
```

- *Type:* *string

---

##### `ClusterSecondaryRangeNameInput`<sup>Optional</sup> <a name="ClusterSecondaryRangeNameInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeNameInput"></a>

```go
func ClusterSecondaryRangeNameInput() *string
```

- *Type:* *string

---

##### `ServicesIpv4CidrBlockInput`<sup>Optional</sup> <a name="ServicesIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlockInput"></a>

```go
func ServicesIpv4CidrBlockInput() *string
```

- *Type:* *string

---

##### `ServicesSecondaryRangeNameInput`<sup>Optional</sup> <a name="ServicesSecondaryRangeNameInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeNameInput"></a>

```go
func ServicesSecondaryRangeNameInput() *string
```

- *Type:* *string

---

##### `UseIpAliasesInput`<sup>Optional</sup> <a name="UseIpAliasesInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliasesInput"></a>

```go
func UseIpAliasesInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterIpv4CidrBlock`<sup>Required</sup> <a name="ClusterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock"></a>

```go
func ClusterIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `ClusterSecondaryRangeName`<sup>Required</sup> <a name="ClusterSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName"></a>

```go
func ClusterSecondaryRangeName() *string
```

- *Type:* *string

---

##### `ServicesIpv4CidrBlock`<sup>Required</sup> <a name="ServicesIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock"></a>

```go
func ServicesIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `ServicesSecondaryRangeName`<sup>Required</sup> <a name="ServicesSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName"></a>

```go
func ServicesSecondaryRangeName() *string
```

- *Type:* *string

---

##### `UseIpAliases`<sup>Required</sup> <a name="UseIpAliases" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases"></a>

```go
func UseIpAliases() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

---


### GoogleComposerEnvironmentConfigNodeConfigOutputReference <a name="GoogleComposerEnvironmentConfigNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigNodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigNodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy">PutIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetComposerInternalIpv4CidrBlock">ResetComposerInternalIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetComposerNetworkAttachment">ResetComposerNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetEnableIpMasqAgent">ResetEnableIpMasqAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetIpAllocationPolicy">ResetIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetMaxPodsPerNode">ResetMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpAllocationPolicy` <a name="PutIpAllocationPolicy" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy"></a>

```go
func PutIpAllocationPolicy(value GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

---

##### `ResetComposerInternalIpv4CidrBlock` <a name="ResetComposerInternalIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetComposerInternalIpv4CidrBlock"></a>

```go
func ResetComposerInternalIpv4CidrBlock()
```

##### `ResetComposerNetworkAttachment` <a name="ResetComposerNetworkAttachment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetComposerNetworkAttachment"></a>

```go
func ResetComposerNetworkAttachment()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetEnableIpMasqAgent` <a name="ResetEnableIpMasqAgent" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetEnableIpMasqAgent"></a>

```go
func ResetEnableIpMasqAgent()
```

##### `ResetIpAllocationPolicy` <a name="ResetIpAllocationPolicy" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetIpAllocationPolicy"></a>

```go
func ResetIpAllocationPolicy()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetMaxPodsPerNode` <a name="ResetMaxPodsPerNode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetMaxPodsPerNode"></a>

```go
func ResetMaxPodsPerNode()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetOauthScopes"></a>

```go
func ResetOauthScopes()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy">IpAllocationPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlockInput">ComposerInternalIpv4CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachmentInput">ComposerNetworkAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgentInput">EnableIpMasqAgentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicyInput">IpAllocationPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.maxPodsPerNodeInput">MaxPodsPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlock">ComposerInternalIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachment">ComposerNetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent">EnableIpMasqAgent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAllocationPolicy`<sup>Required</sup> <a name="IpAllocationPolicy" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy"></a>

```go
func IpAllocationPolicy() GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference</a>

---

##### `ComposerInternalIpv4CidrBlockInput`<sup>Optional</sup> <a name="ComposerInternalIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlockInput"></a>

```go
func ComposerInternalIpv4CidrBlockInput() *string
```

- *Type:* *string

---

##### `ComposerNetworkAttachmentInput`<sup>Optional</sup> <a name="ComposerNetworkAttachmentInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachmentInput"></a>

```go
func ComposerNetworkAttachmentInput() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `EnableIpMasqAgentInput`<sup>Optional</sup> <a name="EnableIpMasqAgentInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgentInput"></a>

```go
func EnableIpMasqAgentInput() interface{}
```

- *Type:* interface{}

---

##### `IpAllocationPolicyInput`<sup>Optional</sup> <a name="IpAllocationPolicyInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicyInput"></a>

```go
func IpAllocationPolicyInput() GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MaxPodsPerNodeInput`<sup>Optional</sup> <a name="MaxPodsPerNodeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.maxPodsPerNodeInput"></a>

```go
func MaxPodsPerNodeInput() *f64
```

- *Type:* *f64

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopesInput"></a>

```go
func OauthScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `ComposerInternalIpv4CidrBlock`<sup>Required</sup> <a name="ComposerInternalIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlock"></a>

```go
func ComposerInternalIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `ComposerNetworkAttachment`<sup>Required</sup> <a name="ComposerNetworkAttachment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachment"></a>

```go
func ComposerNetworkAttachment() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `EnableIpMasqAgent`<sup>Required</sup> <a name="EnableIpMasqAgent" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent"></a>

```go
func EnableIpMasqAgent() interface{}
```

- *Type:* interface{}

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.maxPodsPerNode"></a>

```go
func MaxPodsPerNode() *f64
```

- *Type:* *f64

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a>

---


### GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference <a name="GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerConnectionSubnetwork">ResetCloudComposerConnectionSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerNetworkIpv4CidrBlock">ResetCloudComposerNetworkIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudSqlIpv4CidrBlock">ResetCloudSqlIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetConnectionType">ResetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivateEndpoint">ResetEnablePrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivatelyUsedPublicIps">ResetEnablePrivatelyUsedPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetMasterIpv4CidrBlock">ResetMasterIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetWebServerIpv4CidrBlock">ResetWebServerIpv4CidrBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudComposerConnectionSubnetwork` <a name="ResetCloudComposerConnectionSubnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerConnectionSubnetwork"></a>

```go
func ResetCloudComposerConnectionSubnetwork()
```

##### `ResetCloudComposerNetworkIpv4CidrBlock` <a name="ResetCloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerNetworkIpv4CidrBlock"></a>

```go
func ResetCloudComposerNetworkIpv4CidrBlock()
```

##### `ResetCloudSqlIpv4CidrBlock` <a name="ResetCloudSqlIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudSqlIpv4CidrBlock"></a>

```go
func ResetCloudSqlIpv4CidrBlock()
```

##### `ResetConnectionType` <a name="ResetConnectionType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetConnectionType"></a>

```go
func ResetConnectionType()
```

##### `ResetEnablePrivateEndpoint` <a name="ResetEnablePrivateEndpoint" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivateEndpoint"></a>

```go
func ResetEnablePrivateEndpoint()
```

##### `ResetEnablePrivatelyUsedPublicIps` <a name="ResetEnablePrivatelyUsedPublicIps" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivatelyUsedPublicIps"></a>

```go
func ResetEnablePrivatelyUsedPublicIps()
```

##### `ResetMasterIpv4CidrBlock` <a name="ResetMasterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetMasterIpv4CidrBlock"></a>

```go
func ResetMasterIpv4CidrBlock()
```

##### `ResetWebServerIpv4CidrBlock` <a name="ResetWebServerIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetWebServerIpv4CidrBlock"></a>

```go
func ResetWebServerIpv4CidrBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetworkInput">CloudComposerConnectionSubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlockInput">CloudComposerNetworkIpv4CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlockInput">CloudSqlIpv4CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpointInput">EnablePrivateEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIpsInput">EnablePrivatelyUsedPublicIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlockInput">MasterIpv4CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlockInput">WebServerIpv4CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork">CloudComposerConnectionSubnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock">CloudComposerNetworkIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock">CloudSqlIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint">EnablePrivateEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps">EnablePrivatelyUsedPublicIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock">MasterIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock">WebServerIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudComposerConnectionSubnetworkInput`<sup>Optional</sup> <a name="CloudComposerConnectionSubnetworkInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetworkInput"></a>

```go
func CloudComposerConnectionSubnetworkInput() *string
```

- *Type:* *string

---

##### `CloudComposerNetworkIpv4CidrBlockInput`<sup>Optional</sup> <a name="CloudComposerNetworkIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlockInput"></a>

```go
func CloudComposerNetworkIpv4CidrBlockInput() *string
```

- *Type:* *string

---

##### `CloudSqlIpv4CidrBlockInput`<sup>Optional</sup> <a name="CloudSqlIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlockInput"></a>

```go
func CloudSqlIpv4CidrBlockInput() *string
```

- *Type:* *string

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionTypeInput"></a>

```go
func ConnectionTypeInput() *string
```

- *Type:* *string

---

##### `EnablePrivateEndpointInput`<sup>Optional</sup> <a name="EnablePrivateEndpointInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpointInput"></a>

```go
func EnablePrivateEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePrivatelyUsedPublicIpsInput`<sup>Optional</sup> <a name="EnablePrivatelyUsedPublicIpsInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIpsInput"></a>

```go
func EnablePrivatelyUsedPublicIpsInput() interface{}
```

- *Type:* interface{}

---

##### `MasterIpv4CidrBlockInput`<sup>Optional</sup> <a name="MasterIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlockInput"></a>

```go
func MasterIpv4CidrBlockInput() *string
```

- *Type:* *string

---

##### `WebServerIpv4CidrBlockInput`<sup>Optional</sup> <a name="WebServerIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlockInput"></a>

```go
func WebServerIpv4CidrBlockInput() *string
```

- *Type:* *string

---

##### `CloudComposerConnectionSubnetwork`<sup>Required</sup> <a name="CloudComposerConnectionSubnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork"></a>

```go
func CloudComposerConnectionSubnetwork() *string
```

- *Type:* *string

---

##### `CloudComposerNetworkIpv4CidrBlock`<sup>Required</sup> <a name="CloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock"></a>

```go
func CloudComposerNetworkIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `CloudSqlIpv4CidrBlock`<sup>Required</sup> <a name="CloudSqlIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock"></a>

```go
func CloudSqlIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `EnablePrivateEndpoint`<sup>Required</sup> <a name="EnablePrivateEndpoint" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint"></a>

```go
func EnablePrivateEndpoint() interface{}
```

- *Type:* interface{}

---

##### `EnablePrivatelyUsedPublicIps`<sup>Required</sup> <a name="EnablePrivatelyUsedPublicIps" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps"></a>

```go
func EnablePrivatelyUsedPublicIps() interface{}
```

- *Type:* interface{}

---

##### `MasterIpv4CidrBlock`<sup>Required</sup> <a name="MasterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock"></a>

```go
func MasterIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `WebServerIpv4CidrBlock`<sup>Required</sup> <a name="WebServerIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock"></a>

```go
func WebServerIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigPrivateEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---


### GoogleComposerEnvironmentConfigRecoveryConfigOutputReference <a name="GoogleComposerEnvironmentConfigRecoveryConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigRecoveryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigRecoveryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig">PutScheduledSnapshotsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resetScheduledSnapshotsConfig">ResetScheduledSnapshotsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScheduledSnapshotsConfig` <a name="PutScheduledSnapshotsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig"></a>

```go
func PutScheduledSnapshotsConfig(value GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---

##### `ResetScheduledSnapshotsConfig` <a name="ResetScheduledSnapshotsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resetScheduledSnapshotsConfig"></a>

```go
func ResetScheduledSnapshotsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig">ScheduledSnapshotsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfigInput">ScheduledSnapshotsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScheduledSnapshotsConfig`<sup>Required</sup> <a name="ScheduledSnapshotsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig"></a>

```go
func ScheduledSnapshotsConfig() GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference</a>

---

##### `ScheduledSnapshotsConfigInput`<sup>Optional</sup> <a name="ScheduledSnapshotsConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfigInput"></a>

```go
func ScheduledSnapshotsConfigInput() GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigRecoveryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a>

---


### GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference <a name="GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotCreationSchedule">ResetSnapshotCreationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotLocation">ResetSnapshotLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSnapshotCreationSchedule` <a name="ResetSnapshotCreationSchedule" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotCreationSchedule"></a>

```go
func ResetSnapshotCreationSchedule()
```

##### `ResetSnapshotLocation` <a name="ResetSnapshotLocation" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotLocation"></a>

```go
func ResetSnapshotLocation()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationScheduleInput">SnapshotCreationScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocationInput">SnapshotLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule">SnapshotCreationSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation">SnapshotLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotCreationScheduleInput`<sup>Optional</sup> <a name="SnapshotCreationScheduleInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationScheduleInput"></a>

```go
func SnapshotCreationScheduleInput() *string
```

- *Type:* *string

---

##### `SnapshotLocationInput`<sup>Optional</sup> <a name="SnapshotLocationInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocationInput"></a>

```go
func SnapshotLocationInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `SnapshotCreationSchedule`<sup>Required</sup> <a name="SnapshotCreationSchedule" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule"></a>

```go
func SnapshotCreationSchedule() *string
```

- *Type:* *string

---

##### `SnapshotLocation`<sup>Required</sup> <a name="SnapshotLocation" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation"></a>

```go
func SnapshotLocation() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---


### GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference <a name="GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

---


### GoogleComposerEnvironmentConfigSoftwareConfigOutputReference <a name="GoogleComposerEnvironmentConfigSoftwareConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigSoftwareConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigSoftwareConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.putCloudDataLineageIntegration">PutCloudDataLineageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetAirflowConfigOverrides">ResetAirflowConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetCloudDataLineageIntegration">ResetCloudDataLineageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetEnvVariables">ResetEnvVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetImageVersion">ResetImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetPypiPackages">ResetPypiPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetPythonVersion">ResetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetSchedulerCount">ResetSchedulerCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetWebServerPluginsMode">ResetWebServerPluginsMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudDataLineageIntegration` <a name="PutCloudDataLineageIntegration" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.putCloudDataLineageIntegration"></a>

```go
func PutCloudDataLineageIntegration(value GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.putCloudDataLineageIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

---

##### `ResetAirflowConfigOverrides` <a name="ResetAirflowConfigOverrides" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetAirflowConfigOverrides"></a>

```go
func ResetAirflowConfigOverrides()
```

##### `ResetCloudDataLineageIntegration` <a name="ResetCloudDataLineageIntegration" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetCloudDataLineageIntegration"></a>

```go
func ResetCloudDataLineageIntegration()
```

##### `ResetEnvVariables` <a name="ResetEnvVariables" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetEnvVariables"></a>

```go
func ResetEnvVariables()
```

##### `ResetImageVersion` <a name="ResetImageVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetImageVersion"></a>

```go
func ResetImageVersion()
```

##### `ResetPypiPackages` <a name="ResetPypiPackages" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetPypiPackages"></a>

```go
func ResetPypiPackages()
```

##### `ResetPythonVersion` <a name="ResetPythonVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetPythonVersion"></a>

```go
func ResetPythonVersion()
```

##### `ResetSchedulerCount` <a name="ResetSchedulerCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetSchedulerCount"></a>

```go
func ResetSchedulerCount()
```

##### `ResetWebServerPluginsMode` <a name="ResetWebServerPluginsMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetWebServerPluginsMode"></a>

```go
func ResetWebServerPluginsMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegration">CloudDataLineageIntegration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverridesInput">AirflowConfigOverridesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegrationInput">CloudDataLineageIntegrationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariablesInput">EnvVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersionInput">ImageVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackagesInput">PypiPackagesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersionInput">PythonVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCountInput">SchedulerCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsModeInput">WebServerPluginsModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides">AirflowConfigOverrides</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables">EnvVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion">ImageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages">PypiPackages</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion">PythonVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount">SchedulerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsMode">WebServerPluginsMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudDataLineageIntegration`<sup>Required</sup> <a name="CloudDataLineageIntegration" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegration"></a>

```go
func CloudDataLineageIntegration() GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference</a>

---

##### `AirflowConfigOverridesInput`<sup>Optional</sup> <a name="AirflowConfigOverridesInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverridesInput"></a>

```go
func AirflowConfigOverridesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CloudDataLineageIntegrationInput`<sup>Optional</sup> <a name="CloudDataLineageIntegrationInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegrationInput"></a>

```go
func CloudDataLineageIntegrationInput() GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

---

##### `EnvVariablesInput`<sup>Optional</sup> <a name="EnvVariablesInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariablesInput"></a>

```go
func EnvVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageVersionInput`<sup>Optional</sup> <a name="ImageVersionInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersionInput"></a>

```go
func ImageVersionInput() *string
```

- *Type:* *string

---

##### `PypiPackagesInput`<sup>Optional</sup> <a name="PypiPackagesInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackagesInput"></a>

```go
func PypiPackagesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PythonVersionInput`<sup>Optional</sup> <a name="PythonVersionInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersionInput"></a>

```go
func PythonVersionInput() *string
```

- *Type:* *string

---

##### `SchedulerCountInput`<sup>Optional</sup> <a name="SchedulerCountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCountInput"></a>

```go
func SchedulerCountInput() *f64
```

- *Type:* *f64

---

##### `WebServerPluginsModeInput`<sup>Optional</sup> <a name="WebServerPluginsModeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsModeInput"></a>

```go
func WebServerPluginsModeInput() *string
```

- *Type:* *string

---

##### `AirflowConfigOverrides`<sup>Required</sup> <a name="AirflowConfigOverrides" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides"></a>

```go
func AirflowConfigOverrides() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnvVariables`<sup>Required</sup> <a name="EnvVariables" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables"></a>

```go
func EnvVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageVersion`<sup>Required</sup> <a name="ImageVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion"></a>

```go
func ImageVersion() *string
```

- *Type:* *string

---

##### `PypiPackages`<sup>Required</sup> <a name="PypiPackages" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages"></a>

```go
func PypiPackages() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PythonVersion`<sup>Required</sup> <a name="PythonVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion"></a>

```go
func PythonVersion() *string
```

- *Type:* *string

---

##### `SchedulerCount`<sup>Required</sup> <a name="SchedulerCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount"></a>

```go
func SchedulerCount() *f64
```

- *Type:* *f64

---

##### `WebServerPluginsMode`<sup>Required</sup> <a name="WebServerPluginsMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsMode"></a>

```go
func WebServerPluginsMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a>

---


### GoogleComposerEnvironmentConfigWebServerConfigOutputReference <a name="GoogleComposerEnvironmentConfigWebServerConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigWebServerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigWebServerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigWebServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a>

---


### GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList <a name="GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get"></a>

```go
func Get(index *f64) GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference <a name="GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference <a name="GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange">PutAllowedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resetAllowedIpRange">ResetAllowedIpRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedIpRange` <a name="PutAllowedIpRange" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange"></a>

```go
func PutAllowedIpRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedIpRange` <a name="ResetAllowedIpRange" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resetAllowedIpRange"></a>

```go
func ResetAllowedIpRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange">AllowedIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRangeInput">AllowedIpRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedIpRange`<sup>Required</sup> <a name="AllowedIpRange" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange"></a>

```go
func AllowedIpRange() GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a>

---

##### `AllowedIpRangeInput`<sup>Optional</sup> <a name="AllowedIpRangeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRangeInput"></a>

```go
func AllowedIpRangeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigWebServerNetworkAccessControl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetMemoryGb">ResetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetStorageGb">ResetStorageGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetMemoryGb` <a name="ResetMemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetMemoryGb"></a>

```go
func ResetMemoryGb()
```

##### `ResetStorageGb` <a name="ResetStorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetStorageGb"></a>

```go
func ResetStorageGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGbInput">MemoryGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGbInput">StorageGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGb">StorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `MemoryGbInput`<sup>Optional</sup> <a name="MemoryGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGbInput"></a>

```go
func MemoryGbInput() *f64
```

- *Type:* *f64

---

##### `StorageGbInput`<sup>Optional</sup> <a name="StorageGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGbInput"></a>

```go
func StorageGbInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGb"></a>

```go
func StorageGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putDagProcessor">PutDagProcessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler">PutScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer">PutTriggerer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer">PutWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker">PutWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetDagProcessor">ResetDagProcessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetScheduler">ResetScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetTriggerer">ResetTriggerer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWebServer">ResetWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWorker">ResetWorker</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDagProcessor` <a name="PutDagProcessor" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putDagProcessor"></a>

```go
func PutDagProcessor(value GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putDagProcessor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

---

##### `PutScheduler` <a name="PutScheduler" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler"></a>

```go
func PutScheduler(value GoogleComposerEnvironmentConfigWorkloadsConfigScheduler)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---

##### `PutTriggerer` <a name="PutTriggerer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer"></a>

```go
func PutTriggerer(value GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---

##### `PutWebServer` <a name="PutWebServer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer"></a>

```go
func PutWebServer(value GoogleComposerEnvironmentConfigWorkloadsConfigWebServer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---

##### `PutWorker` <a name="PutWorker" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker"></a>

```go
func PutWorker(value GoogleComposerEnvironmentConfigWorkloadsConfigWorker)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a>

---

##### `ResetDagProcessor` <a name="ResetDagProcessor" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetDagProcessor"></a>

```go
func ResetDagProcessor()
```

##### `ResetScheduler` <a name="ResetScheduler" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetScheduler"></a>

```go
func ResetScheduler()
```

##### `ResetTriggerer` <a name="ResetTriggerer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetTriggerer"></a>

```go
func ResetTriggerer()
```

##### `ResetWebServer` <a name="ResetWebServer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWebServer"></a>

```go
func ResetWebServer()
```

##### `ResetWorker` <a name="ResetWorker" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWorker"></a>

```go
func ResetWorker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessor">DagProcessor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler">Scheduler</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggerer">Triggerer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer">WebServer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessorInput">DagProcessorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.schedulerInput">SchedulerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggererInput">TriggererInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServerInput">WebServerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.workerInput">WorkerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DagProcessor`<sup>Required</sup> <a name="DagProcessor" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessor"></a>

```go
func DagProcessor() GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference</a>

---

##### `Scheduler`<sup>Required</sup> <a name="Scheduler" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler"></a>

```go
func Scheduler() GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference</a>

---

##### `Triggerer`<sup>Required</sup> <a name="Triggerer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggerer"></a>

```go
func Triggerer() GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference</a>

---

##### `WebServer`<sup>Required</sup> <a name="WebServer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer"></a>

```go
func WebServer() GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference</a>

---

##### `Worker`<sup>Required</sup> <a name="Worker" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker"></a>

```go
func Worker() GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference</a>

---

##### `DagProcessorInput`<sup>Optional</sup> <a name="DagProcessorInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessorInput"></a>

```go
func DagProcessorInput() GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

---

##### `SchedulerInput`<sup>Optional</sup> <a name="SchedulerInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.schedulerInput"></a>

```go
func SchedulerInput() GoogleComposerEnvironmentConfigWorkloadsConfigScheduler
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---

##### `TriggererInput`<sup>Optional</sup> <a name="TriggererInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggererInput"></a>

```go
func TriggererInput() GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---

##### `WebServerInput`<sup>Optional</sup> <a name="WebServerInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServerInput"></a>

```go
func WebServerInput() GoogleComposerEnvironmentConfigWorkloadsConfigWebServer
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---

##### `WorkerInput`<sup>Optional</sup> <a name="WorkerInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.workerInput"></a>

```go
func WorkerInput() GoogleComposerEnvironmentConfigWorkloadsConfigWorker
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigWorkloadsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetMemoryGb">ResetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetStorageGb">ResetStorageGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetMemoryGb` <a name="ResetMemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetMemoryGb"></a>

```go
func ResetMemoryGb()
```

##### `ResetStorageGb` <a name="ResetStorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetStorageGb"></a>

```go
func ResetStorageGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGbInput">MemoryGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGbInput">StorageGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb">StorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `MemoryGbInput`<sup>Optional</sup> <a name="MemoryGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGbInput"></a>

```go
func MemoryGbInput() *f64
```

- *Type:* *f64

---

##### `StorageGbInput`<sup>Optional</sup> <a name="StorageGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGbInput"></a>

```go
func StorageGbInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb"></a>

```go
func StorageGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigWorkloadsConfigScheduler
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGbInput">MemoryGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `MemoryGbInput`<sup>Optional</sup> <a name="MemoryGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGbInput"></a>

```go
func MemoryGbInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetMemoryGb">ResetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetStorageGb">ResetStorageGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetMemoryGb` <a name="ResetMemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetMemoryGb"></a>

```go
func ResetMemoryGb()
```

##### `ResetStorageGb` <a name="ResetStorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetStorageGb"></a>

```go
func ResetStorageGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGbInput">MemoryGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGbInput">StorageGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb">StorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `MemoryGbInput`<sup>Optional</sup> <a name="MemoryGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGbInput"></a>

```go
func MemoryGbInput() *f64
```

- *Type:* *f64

---

##### `StorageGbInput`<sup>Optional</sup> <a name="StorageGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGbInput"></a>

```go
func StorageGbInput() *f64
```

- *Type:* *f64

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb"></a>

```go
func StorageGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigWorkloadsConfigWebServer
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMaxCount">ResetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMemoryGb">ResetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMinCount">ResetMinCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetStorageGb">ResetStorageGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetMaxCount` <a name="ResetMaxCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMaxCount"></a>

```go
func ResetMaxCount()
```

##### `ResetMemoryGb` <a name="ResetMemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMemoryGb"></a>

```go
func ResetMemoryGb()
```

##### `ResetMinCount` <a name="ResetMinCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMinCount"></a>

```go
func ResetMinCount()
```

##### `ResetStorageGb` <a name="ResetStorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetStorageGb"></a>

```go
func ResetStorageGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCountInput">MaxCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGbInput">MemoryGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCountInput">MinCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGbInput">StorageGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount">MaxCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount">MinCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb">StorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `MaxCountInput`<sup>Optional</sup> <a name="MaxCountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCountInput"></a>

```go
func MaxCountInput() *f64
```

- *Type:* *f64

---

##### `MemoryGbInput`<sup>Optional</sup> <a name="MemoryGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGbInput"></a>

```go
func MemoryGbInput() *f64
```

- *Type:* *f64

---

##### `MinCountInput`<sup>Optional</sup> <a name="MinCountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCountInput"></a>

```go
func MinCountInput() *f64
```

- *Type:* *f64

---

##### `StorageGbInput`<sup>Optional</sup> <a name="StorageGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGbInput"></a>

```go
func StorageGbInput() *f64
```

- *Type:* *f64

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount"></a>

```go
func MaxCount() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `MinCount`<sup>Required</sup> <a name="MinCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount"></a>

```go
func MinCount() *f64
```

- *Type:* *f64

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb"></a>

```go
func StorageGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentConfigWorkloadsConfigWorker
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a>

---


### GoogleComposerEnvironmentStorageConfigOutputReference <a name="GoogleComposerEnvironmentStorageConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentStorageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentStorageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComposerEnvironmentStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a>

---


### GoogleComposerEnvironmentTimeoutsOutputReference <a name="GoogleComposerEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomposerenvironment"

googlecomposerenvironment.NewGoogleComposerEnvironmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComposerEnvironmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



