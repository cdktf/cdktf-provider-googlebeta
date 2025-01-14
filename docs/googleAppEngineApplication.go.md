# `googleAppEngineApplication` Submodule <a name="`googleAppEngineApplication` Submodule" id="@cdktf/provider-google-beta.googleAppEngineApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineApplication <a name="GoogleAppEngineApplication" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application google_app_engine_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineapplication"

googleappengineapplication.NewGoogleAppEngineApplication(scope Construct, id *string, config GoogleAppEngineApplicationConfig) GoogleAppEngineApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig">GoogleAppEngineApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig">GoogleAppEngineApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.putFeatureSettings">PutFeatureSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.putIap">PutIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetAuthDomain">ResetAuthDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetDatabaseType">ResetDatabaseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetFeatureSettings">ResetFeatureSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetIap">ResetIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetServingStatus">ResetServingStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFeatureSettings` <a name="PutFeatureSettings" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.putFeatureSettings"></a>

```go
func PutFeatureSettings(value GoogleAppEngineApplicationFeatureSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.putFeatureSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettings">GoogleAppEngineApplicationFeatureSettings</a>

---

##### `PutIap` <a name="PutIap" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.putIap"></a>

```go
func PutIap(value GoogleAppEngineApplicationIap)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.putIap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIap">GoogleAppEngineApplicationIap</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAppEngineApplicationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeouts">GoogleAppEngineApplicationTimeouts</a>

---

##### `ResetAuthDomain` <a name="ResetAuthDomain" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetAuthDomain"></a>

```go
func ResetAuthDomain()
```

##### `ResetDatabaseType` <a name="ResetDatabaseType" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetDatabaseType"></a>

```go
func ResetDatabaseType()
```

##### `ResetFeatureSettings` <a name="ResetFeatureSettings" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetFeatureSettings"></a>

```go
func ResetFeatureSettings()
```

##### `ResetIap` <a name="ResetIap" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetIap"></a>

```go
func ResetIap()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServingStatus` <a name="ResetServingStatus" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetServingStatus"></a>

```go
func ResetServingStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAppEngineApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineapplication"

googleappengineapplication.GoogleAppEngineApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineapplication"

googleappengineapplication.GoogleAppEngineApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineapplication"

googleappengineapplication.GoogleAppEngineApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineapplication"

googleappengineapplication.GoogleAppEngineApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleAppEngineApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleAppEngineApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleAppEngineApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.codeBucket">CodeBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.defaultBucket">DefaultBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.defaultHostname">DefaultHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.featureSettings">FeatureSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference">GoogleAppEngineApplicationFeatureSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.gcrDomain">GcrDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.iap">Iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference">GoogleAppEngineApplicationIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference">GoogleAppEngineApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.urlDispatchRule">UrlDispatchRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList">GoogleAppEngineApplicationUrlDispatchRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.authDomainInput">AuthDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.databaseTypeInput">DatabaseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.featureSettingsInput">FeatureSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettings">GoogleAppEngineApplicationFeatureSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.iapInput">IapInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIap">GoogleAppEngineApplicationIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.locationIdInput">LocationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.servingStatusInput">ServingStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.authDomain">AuthDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.locationId">LocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.servingStatus">ServingStatus</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `CodeBucket`<sup>Required</sup> <a name="CodeBucket" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.codeBucket"></a>

```go
func CodeBucket() *string
```

- *Type:* *string

---

##### `DefaultBucket`<sup>Required</sup> <a name="DefaultBucket" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.defaultBucket"></a>

```go
func DefaultBucket() *string
```

- *Type:* *string

---

##### `DefaultHostname`<sup>Required</sup> <a name="DefaultHostname" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.defaultHostname"></a>

```go
func DefaultHostname() *string
```

- *Type:* *string

---

##### `FeatureSettings`<sup>Required</sup> <a name="FeatureSettings" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.featureSettings"></a>

```go
func FeatureSettings() GoogleAppEngineApplicationFeatureSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference">GoogleAppEngineApplicationFeatureSettingsOutputReference</a>

---

##### `GcrDomain`<sup>Required</sup> <a name="GcrDomain" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.gcrDomain"></a>

```go
func GcrDomain() *string
```

- *Type:* *string

---

##### `Iap`<sup>Required</sup> <a name="Iap" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.iap"></a>

```go
func Iap() GoogleAppEngineApplicationIapOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference">GoogleAppEngineApplicationIapOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.timeouts"></a>

```go
func Timeouts() GoogleAppEngineApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference">GoogleAppEngineApplicationTimeoutsOutputReference</a>

---

##### `UrlDispatchRule`<sup>Required</sup> <a name="UrlDispatchRule" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.urlDispatchRule"></a>

```go
func UrlDispatchRule() GoogleAppEngineApplicationUrlDispatchRuleList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList">GoogleAppEngineApplicationUrlDispatchRuleList</a>

---

##### `AuthDomainInput`<sup>Optional</sup> <a name="AuthDomainInput" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.authDomainInput"></a>

```go
func AuthDomainInput() *string
```

- *Type:* *string

---

##### `DatabaseTypeInput`<sup>Optional</sup> <a name="DatabaseTypeInput" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.databaseTypeInput"></a>

```go
func DatabaseTypeInput() *string
```

- *Type:* *string

---

##### `FeatureSettingsInput`<sup>Optional</sup> <a name="FeatureSettingsInput" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.featureSettingsInput"></a>

```go
func FeatureSettingsInput() GoogleAppEngineApplicationFeatureSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettings">GoogleAppEngineApplicationFeatureSettings</a>

---

##### `IapInput`<sup>Optional</sup> <a name="IapInput" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.iapInput"></a>

```go
func IapInput() GoogleAppEngineApplicationIap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIap">GoogleAppEngineApplicationIap</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationIdInput`<sup>Optional</sup> <a name="LocationIdInput" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.locationIdInput"></a>

```go
func LocationIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServingStatusInput`<sup>Optional</sup> <a name="ServingStatusInput" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.servingStatusInput"></a>

```go
func ServingStatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthDomain`<sup>Required</sup> <a name="AuthDomain" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.authDomain"></a>

```go
func AuthDomain() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocationId`<sup>Required</sup> <a name="LocationId" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.locationId"></a>

```go
func LocationId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServingStatus`<sup>Required</sup> <a name="ServingStatus" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.servingStatus"></a>

```go
func ServingStatus() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineApplicationConfig <a name="GoogleAppEngineApplicationConfig" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineapplication"

&googleappengineapplication.GoogleAppEngineApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LocationId: *string,
	AuthDomain: *string,
	DatabaseType: *string,
	FeatureSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettings,
	Iap: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineApplication.GoogleAppEngineApplicationIap,
	Id: *string,
	Project: *string,
	ServingStatus: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineApplication.GoogleAppEngineApplicationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.locationId">LocationId</a></code> | <code>*string</code> | The location to serve the app from. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.authDomain">AuthDomain</a></code> | <code>*string</code> | The domain to authenticate users with when using App Engine's User API. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.databaseType">DatabaseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#database_type GoogleAppEngineApplication#database_type}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.featureSettings">FeatureSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettings">GoogleAppEngineApplicationFeatureSettings</a></code> | feature_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.iap">Iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIap">GoogleAppEngineApplicationIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#id GoogleAppEngineApplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.project">Project</a></code> | <code>*string</code> | The project ID to create the application under. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.servingStatus">ServingStatus</a></code> | <code>*string</code> | The serving status of the app. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeouts">GoogleAppEngineApplicationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LocationId`<sup>Required</sup> <a name="LocationId" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.locationId"></a>

```go
LocationId *string
```

- *Type:* *string

The location to serve the app from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#location_id GoogleAppEngineApplication#location_id}

---

##### `AuthDomain`<sup>Optional</sup> <a name="AuthDomain" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.authDomain"></a>

```go
AuthDomain *string
```

- *Type:* *string

The domain to authenticate users with when using App Engine's User API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#auth_domain GoogleAppEngineApplication#auth_domain}

---

##### `DatabaseType`<sup>Optional</sup> <a name="DatabaseType" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.databaseType"></a>

```go
DatabaseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#database_type GoogleAppEngineApplication#database_type}.

---

##### `FeatureSettings`<sup>Optional</sup> <a name="FeatureSettings" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.featureSettings"></a>

```go
FeatureSettings GoogleAppEngineApplicationFeatureSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettings">GoogleAppEngineApplicationFeatureSettings</a>

feature_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#feature_settings GoogleAppEngineApplication#feature_settings}

---

##### `Iap`<sup>Optional</sup> <a name="Iap" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.iap"></a>

```go
Iap GoogleAppEngineApplicationIap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIap">GoogleAppEngineApplicationIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#iap GoogleAppEngineApplication#iap}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#id GoogleAppEngineApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project ID to create the application under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#project GoogleAppEngineApplication#project}

---

##### `ServingStatus`<sup>Optional</sup> <a name="ServingStatus" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.servingStatus"></a>

```go
ServingStatus *string
```

- *Type:* *string

The serving status of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#serving_status GoogleAppEngineApplication#serving_status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationConfig.property.timeouts"></a>

```go
Timeouts GoogleAppEngineApplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeouts">GoogleAppEngineApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#timeouts GoogleAppEngineApplication#timeouts}

---

### GoogleAppEngineApplicationFeatureSettings <a name="GoogleAppEngineApplicationFeatureSettings" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineapplication"

&googleappengineapplication.GoogleAppEngineApplicationFeatureSettings {
	SplitHealthChecks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettings.property.splitHealthChecks">SplitHealthChecks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#split_health_checks GoogleAppEngineApplication#split_health_checks}. |

---

##### `SplitHealthChecks`<sup>Required</sup> <a name="SplitHealthChecks" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettings.property.splitHealthChecks"></a>

```go
SplitHealthChecks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#split_health_checks GoogleAppEngineApplication#split_health_checks}.

---

### GoogleAppEngineApplicationIap <a name="GoogleAppEngineApplicationIap" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineapplication"

&googleappengineapplication.GoogleAppEngineApplicationIap {
	Oauth2ClientId: *string,
	Oauth2ClientSecret: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIap.property.oauth2ClientId">Oauth2ClientId</a></code> | <code>*string</code> | OAuth2 client ID to use for the authentication flow. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIap.property.oauth2ClientSecret">Oauth2ClientSecret</a></code> | <code>*string</code> | OAuth2 client secret to use for the authentication flow. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIap.property.enabled">Enabled</a></code> | <code>interface{}</code> | Adapted for use with the app. |

---

##### `Oauth2ClientId`<sup>Required</sup> <a name="Oauth2ClientId" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIap.property.oauth2ClientId"></a>

```go
Oauth2ClientId *string
```

- *Type:* *string

OAuth2 client ID to use for the authentication flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#oauth2_client_id GoogleAppEngineApplication#oauth2_client_id}

---

##### `Oauth2ClientSecret`<sup>Required</sup> <a name="Oauth2ClientSecret" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIap.property.oauth2ClientSecret"></a>

```go
Oauth2ClientSecret *string
```

- *Type:* *string

OAuth2 client secret to use for the authentication flow.

The SHA-256 hash of the value is returned in the oauth2ClientSecretSha256 field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#oauth2_client_secret GoogleAppEngineApplication#oauth2_client_secret}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIap.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Adapted for use with the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#enabled GoogleAppEngineApplication#enabled}

---

### GoogleAppEngineApplicationTimeouts <a name="GoogleAppEngineApplicationTimeouts" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineapplication"

&googleappengineapplication.GoogleAppEngineApplicationTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#create GoogleAppEngineApplication#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#update GoogleAppEngineApplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#create GoogleAppEngineApplication#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_app_engine_application#update GoogleAppEngineApplication#update}.

---

### GoogleAppEngineApplicationUrlDispatchRule <a name="GoogleAppEngineApplicationUrlDispatchRule" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineapplication"

&googleappengineapplication.GoogleAppEngineApplicationUrlDispatchRule {

}
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineApplicationFeatureSettingsOutputReference <a name="GoogleAppEngineApplicationFeatureSettingsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineapplication"

googleappengineapplication.NewGoogleAppEngineApplicationFeatureSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineApplicationFeatureSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.property.splitHealthChecksInput">SplitHealthChecksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.property.splitHealthChecks">SplitHealthChecks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettings">GoogleAppEngineApplicationFeatureSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SplitHealthChecksInput`<sup>Optional</sup> <a name="SplitHealthChecksInput" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.property.splitHealthChecksInput"></a>

```go
func SplitHealthChecksInput() interface{}
```

- *Type:* interface{}

---

##### `SplitHealthChecks`<sup>Required</sup> <a name="SplitHealthChecks" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.property.splitHealthChecks"></a>

```go
func SplitHealthChecks() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineApplicationFeatureSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationFeatureSettings">GoogleAppEngineApplicationFeatureSettings</a>

---


### GoogleAppEngineApplicationIapOutputReference <a name="GoogleAppEngineApplicationIapOutputReference" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineapplication"

googleappengineapplication.NewGoogleAppEngineApplicationIapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineApplicationIapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.oauth2ClientSecretSha256">Oauth2ClientSecretSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.oauth2ClientIdInput">Oauth2ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.oauth2ClientSecretInput">Oauth2ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.oauth2ClientId">Oauth2ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.oauth2ClientSecret">Oauth2ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIap">GoogleAppEngineApplicationIap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Oauth2ClientSecretSha256`<sup>Required</sup> <a name="Oauth2ClientSecretSha256" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.oauth2ClientSecretSha256"></a>

```go
func Oauth2ClientSecretSha256() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Oauth2ClientIdInput`<sup>Optional</sup> <a name="Oauth2ClientIdInput" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.oauth2ClientIdInput"></a>

```go
func Oauth2ClientIdInput() *string
```

- *Type:* *string

---

##### `Oauth2ClientSecretInput`<sup>Optional</sup> <a name="Oauth2ClientSecretInput" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.oauth2ClientSecretInput"></a>

```go
func Oauth2ClientSecretInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Oauth2ClientId`<sup>Required</sup> <a name="Oauth2ClientId" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.oauth2ClientId"></a>

```go
func Oauth2ClientId() *string
```

- *Type:* *string

---

##### `Oauth2ClientSecret`<sup>Required</sup> <a name="Oauth2ClientSecret" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.oauth2ClientSecret"></a>

```go
func Oauth2ClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIapOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineApplicationIap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationIap">GoogleAppEngineApplicationIap</a>

---


### GoogleAppEngineApplicationTimeoutsOutputReference <a name="GoogleAppEngineApplicationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineapplication"

googleappengineapplication.NewGoogleAppEngineApplicationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineApplicationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAppEngineApplicationUrlDispatchRuleList <a name="GoogleAppEngineApplicationUrlDispatchRuleList" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineapplication"

googleappengineapplication.NewGoogleAppEngineApplicationUrlDispatchRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAppEngineApplicationUrlDispatchRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.get"></a>

```go
func Get(index *f64) GoogleAppEngineApplicationUrlDispatchRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleAppEngineApplicationUrlDispatchRuleOutputReference <a name="GoogleAppEngineApplicationUrlDispatchRuleOutputReference" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineapplication"

googleappengineapplication.NewGoogleAppEngineApplicationUrlDispatchRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAppEngineApplicationUrlDispatchRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRule">GoogleAppEngineApplicationUrlDispatchRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineApplicationUrlDispatchRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplication.GoogleAppEngineApplicationUrlDispatchRule">GoogleAppEngineApplicationUrlDispatchRule</a>

---



