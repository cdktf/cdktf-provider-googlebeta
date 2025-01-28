# `googleApigeeAddonsConfig` Submodule <a name="`googleApigeeAddonsConfig` Submodule" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeAddonsConfig <a name="GoogleApigeeAddonsConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config google_apigee_addons_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

googleapigeeaddonsconfig.NewGoogleApigeeAddonsConfig(scope Construct, id *string, config GoogleApigeeAddonsConfigConfig) GoogleApigeeAddonsConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig">GoogleApigeeAddonsConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig">GoogleApigeeAddonsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putAddonsConfig">PutAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetAddonsConfig">ResetAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAddonsConfig` <a name="PutAddonsConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putAddonsConfig"></a>

```go
func PutAddonsConfig(value GoogleApigeeAddonsConfigAddonsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putAddonsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig">GoogleApigeeAddonsConfigAddonsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleApigeeAddonsConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts">GoogleApigeeAddonsConfigTimeouts</a>

---

##### `ResetAddonsConfig` <a name="ResetAddonsConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetAddonsConfig"></a>

```go
func ResetAddonsConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeAddonsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

googleapigeeaddonsconfig.GoogleApigeeAddonsConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

googleapigeeaddonsconfig.GoogleApigeeAddonsConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

googleapigeeaddonsconfig.GoogleApigeeAddonsConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

googleapigeeaddonsconfig.GoogleApigeeAddonsConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleApigeeAddonsConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleApigeeAddonsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleApigeeAddonsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeAddonsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.addonsConfig">AddonsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference">GoogleApigeeAddonsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.addonsConfigInput">AddonsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig">GoogleApigeeAddonsConfigAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.orgInput">OrgInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.org">Org</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddonsConfig`<sup>Required</sup> <a name="AddonsConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.addonsConfig"></a>

```go
func AddonsConfig() GoogleApigeeAddonsConfigAddonsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.timeouts"></a>

```go
func Timeouts() GoogleApigeeAddonsConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference">GoogleApigeeAddonsConfigTimeoutsOutputReference</a>

---

##### `AddonsConfigInput`<sup>Optional</sup> <a name="AddonsConfigInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.addonsConfigInput"></a>

```go
func AddonsConfigInput() GoogleApigeeAddonsConfigAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig">GoogleApigeeAddonsConfigAddonsConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrgInput`<sup>Optional</sup> <a name="OrgInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.orgInput"></a>

```go
func OrgInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Org`<sup>Required</sup> <a name="Org" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.org"></a>

```go
func Org() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeAddonsConfigAddonsConfig <a name="GoogleApigeeAddonsConfigAddonsConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

&googleapigeeaddonsconfig.GoogleApigeeAddonsConfigAddonsConfig {
	AdvancedApiOpsConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig,
	ApiSecurityConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig,
	ConnectorsPlatformConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig,
	IntegrationConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig,
	MonetizationConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.advancedApiOpsConfig">AdvancedApiOpsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | advanced_api_ops_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.apiSecurityConfig">ApiSecurityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | api_security_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.connectorsPlatformConfig">ConnectorsPlatformConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | connectors_platform_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.integrationConfig">IntegrationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | integration_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.monetizationConfig">MonetizationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | monetization_config block. |

---

##### `AdvancedApiOpsConfig`<sup>Optional</sup> <a name="AdvancedApiOpsConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.advancedApiOpsConfig"></a>

```go
AdvancedApiOpsConfig GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

advanced_api_ops_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#advanced_api_ops_config GoogleApigeeAddonsConfig#advanced_api_ops_config}

---

##### `ApiSecurityConfig`<sup>Optional</sup> <a name="ApiSecurityConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.apiSecurityConfig"></a>

```go
ApiSecurityConfig GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

api_security_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#api_security_config GoogleApigeeAddonsConfig#api_security_config}

---

##### `ConnectorsPlatformConfig`<sup>Optional</sup> <a name="ConnectorsPlatformConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.connectorsPlatformConfig"></a>

```go
ConnectorsPlatformConfig GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

connectors_platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#connectors_platform_config GoogleApigeeAddonsConfig#connectors_platform_config}

---

##### `IntegrationConfig`<sup>Optional</sup> <a name="IntegrationConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.integrationConfig"></a>

```go
IntegrationConfig GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

integration_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#integration_config GoogleApigeeAddonsConfig#integration_config}

---

##### `MonetizationConfig`<sup>Optional</sup> <a name="MonetizationConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.monetizationConfig"></a>

```go
MonetizationConfig GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

monetization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#monetization_config GoogleApigeeAddonsConfig#monetization_config}

---

### GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig <a name="GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

&googleapigeeaddonsconfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}

---

### GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig <a name="GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

&googleapigeeaddonsconfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}

---

### GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig <a name="GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

&googleapigeeaddonsconfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}

---

### GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig <a name="GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

&googleapigeeaddonsconfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}

---

### GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig <a name="GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

&googleapigeeaddonsconfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}

---

### GoogleApigeeAddonsConfigConfig <a name="GoogleApigeeAddonsConfigConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

&googleapigeeaddonsconfig.GoogleApigeeAddonsConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Org: *string,
	AddonsConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.org">Org</a></code> | <code>*string</code> | Name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.addonsConfig">AddonsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig">GoogleApigeeAddonsConfigAddonsConfig</a></code> | addons_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#id GoogleApigeeAddonsConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts">GoogleApigeeAddonsConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Org`<sup>Required</sup> <a name="Org" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.org"></a>

```go
Org *string
```

- *Type:* *string

Name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#org GoogleApigeeAddonsConfig#org}

---

##### `AddonsConfig`<sup>Optional</sup> <a name="AddonsConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.addonsConfig"></a>

```go
AddonsConfig GoogleApigeeAddonsConfigAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig">GoogleApigeeAddonsConfigAddonsConfig</a>

addons_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#addons_config GoogleApigeeAddonsConfig#addons_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#id GoogleApigeeAddonsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleApigeeAddonsConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts">GoogleApigeeAddonsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#timeouts GoogleApigeeAddonsConfig#timeouts}

---

### GoogleApigeeAddonsConfigTimeouts <a name="GoogleApigeeAddonsConfigTimeouts" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

&googleapigeeaddonsconfig.GoogleApigeeAddonsConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#create GoogleApigeeAddonsConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#delete GoogleApigeeAddonsConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#update GoogleApigeeAddonsConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#create GoogleApigeeAddonsConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#delete GoogleApigeeAddonsConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_apigee_addons_config#update GoogleApigeeAddonsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference <a name="GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

googleapigeeaddonsconfig.NewGoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---


### GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference <a name="GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

googleapigeeaddonsconfig.NewGoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---


### GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference <a name="GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

googleapigeeaddonsconfig.NewGoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---


### GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference <a name="GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

googleapigeeaddonsconfig.NewGoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---


### GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference <a name="GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

googleapigeeaddonsconfig.NewGoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---


### GoogleApigeeAddonsConfigAddonsConfigOutputReference <a name="GoogleApigeeAddonsConfigAddonsConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

googleapigeeaddonsconfig.NewGoogleApigeeAddonsConfigAddonsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeAddonsConfigAddonsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig">PutAdvancedApiOpsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig">PutApiSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig">PutConnectorsPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig">PutIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig">PutMonetizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetAdvancedApiOpsConfig">ResetAdvancedApiOpsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetApiSecurityConfig">ResetApiSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetConnectorsPlatformConfig">ResetConnectorsPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetIntegrationConfig">ResetIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetMonetizationConfig">ResetMonetizationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedApiOpsConfig` <a name="PutAdvancedApiOpsConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig"></a>

```go
func PutAdvancedApiOpsConfig(value GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---

##### `PutApiSecurityConfig` <a name="PutApiSecurityConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig"></a>

```go
func PutApiSecurityConfig(value GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---

##### `PutConnectorsPlatformConfig` <a name="PutConnectorsPlatformConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig"></a>

```go
func PutConnectorsPlatformConfig(value GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---

##### `PutIntegrationConfig` <a name="PutIntegrationConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig"></a>

```go
func PutIntegrationConfig(value GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---

##### `PutMonetizationConfig` <a name="PutMonetizationConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig"></a>

```go
func PutMonetizationConfig(value GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---

##### `ResetAdvancedApiOpsConfig` <a name="ResetAdvancedApiOpsConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetAdvancedApiOpsConfig"></a>

```go
func ResetAdvancedApiOpsConfig()
```

##### `ResetApiSecurityConfig` <a name="ResetApiSecurityConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetApiSecurityConfig"></a>

```go
func ResetApiSecurityConfig()
```

##### `ResetConnectorsPlatformConfig` <a name="ResetConnectorsPlatformConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetConnectorsPlatformConfig"></a>

```go
func ResetConnectorsPlatformConfig()
```

##### `ResetIntegrationConfig` <a name="ResetIntegrationConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetIntegrationConfig"></a>

```go
func ResetIntegrationConfig()
```

##### `ResetMonetizationConfig` <a name="ResetMonetizationConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetMonetizationConfig"></a>

```go
func ResetMonetizationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfig">AdvancedApiOpsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfig">ApiSecurityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfig">ConnectorsPlatformConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfig">IntegrationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfig">MonetizationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfigInput">AdvancedApiOpsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfigInput">ApiSecurityConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfigInput">ConnectorsPlatformConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfigInput">IntegrationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfigInput">MonetizationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig">GoogleApigeeAddonsConfigAddonsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvancedApiOpsConfig`<sup>Required</sup> <a name="AdvancedApiOpsConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfig"></a>

```go
func AdvancedApiOpsConfig() GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference</a>

---

##### `ApiSecurityConfig`<sup>Required</sup> <a name="ApiSecurityConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfig"></a>

```go
func ApiSecurityConfig() GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference</a>

---

##### `ConnectorsPlatformConfig`<sup>Required</sup> <a name="ConnectorsPlatformConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfig"></a>

```go
func ConnectorsPlatformConfig() GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference</a>

---

##### `IntegrationConfig`<sup>Required</sup> <a name="IntegrationConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfig"></a>

```go
func IntegrationConfig() GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference</a>

---

##### `MonetizationConfig`<sup>Required</sup> <a name="MonetizationConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfig"></a>

```go
func MonetizationConfig() GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference</a>

---

##### `AdvancedApiOpsConfigInput`<sup>Optional</sup> <a name="AdvancedApiOpsConfigInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfigInput"></a>

```go
func AdvancedApiOpsConfigInput() GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---

##### `ApiSecurityConfigInput`<sup>Optional</sup> <a name="ApiSecurityConfigInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfigInput"></a>

```go
func ApiSecurityConfigInput() GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---

##### `ConnectorsPlatformConfigInput`<sup>Optional</sup> <a name="ConnectorsPlatformConfigInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfigInput"></a>

```go
func ConnectorsPlatformConfigInput() GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---

##### `IntegrationConfigInput`<sup>Optional</sup> <a name="IntegrationConfigInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfigInput"></a>

```go
func IntegrationConfigInput() GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---

##### `MonetizationConfigInput`<sup>Optional</sup> <a name="MonetizationConfigInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfigInput"></a>

```go
func MonetizationConfigInput() GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeAddonsConfigAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig">GoogleApigeeAddonsConfigAddonsConfig</a>

---


### GoogleApigeeAddonsConfigTimeoutsOutputReference <a name="GoogleApigeeAddonsConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeaddonsconfig"

googleapigeeaddonsconfig.NewGoogleApigeeAddonsConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeAddonsConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



