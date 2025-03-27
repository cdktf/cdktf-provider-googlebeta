# `googleFirebaseAppCheckPlayIntegrityConfig` Submodule <a name="`googleFirebaseAppCheckPlayIntegrityConfig` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppCheckPlayIntegrityConfig <a name="GoogleFirebaseAppCheckPlayIntegrityConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firebase_app_check_play_integrity_config google_firebase_app_check_play_integrity_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseappcheckplayintegrityconfig"

googlefirebaseappcheckplayintegrityconfig.NewGoogleFirebaseAppCheckPlayIntegrityConfig(scope Construct, id *string, config GoogleFirebaseAppCheckPlayIntegrityConfigConfig) GoogleFirebaseAppCheckPlayIntegrityConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig">GoogleFirebaseAppCheckPlayIntegrityConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig">GoogleFirebaseAppCheckPlayIntegrityConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts">GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetTokenTtl"></a>

```go
func ResetTokenTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppCheckPlayIntegrityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseappcheckplayintegrityconfig"

googlefirebaseappcheckplayintegrityconfig.GoogleFirebaseAppCheckPlayIntegrityConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseappcheckplayintegrityconfig"

googlefirebaseappcheckplayintegrityconfig.GoogleFirebaseAppCheckPlayIntegrityConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseappcheckplayintegrityconfig"

googlefirebaseappcheckplayintegrityconfig.GoogleFirebaseAppCheckPlayIntegrityConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseappcheckplayintegrityconfig"

googlefirebaseappcheckplayintegrityconfig.GoogleFirebaseAppCheckPlayIntegrityConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleFirebaseAppCheckPlayIntegrityConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFirebaseAppCheckPlayIntegrityConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFirebaseAppCheckPlayIntegrityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firebase_app_check_play_integrity_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppCheckPlayIntegrityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference">GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.tokenTtlInput">TokenTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.tokenTtl">TokenTtl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.timeouts"></a>

```go
func Timeouts() GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference">GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.tokenTtlInput"></a>

```go
func TokenTtlInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.tokenTtl"></a>

```go
func TokenTtl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppCheckPlayIntegrityConfigConfig <a name="GoogleFirebaseAppCheckPlayIntegrityConfigConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseappcheckplayintegrityconfig"

&googlefirebaseappcheckplayintegrityconfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts,
	TokenTtl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.appId">AppId</a></code> | <code>*string</code> | The ID of an [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firebase_app_check_play_integrity_config#id GoogleFirebaseAppCheckPlayIntegrityConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firebase_app_check_play_integrity_config#project GoogleFirebaseAppCheckPlayIntegrityConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts">GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.tokenTtl">TokenTtl</a></code> | <code>*string</code> | Specifies the duration for which App Check tokens exchanged from Play Integrity artifacts will be valid. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

The ID of an [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firebase_app_check_play_integrity_config#app_id GoogleFirebaseAppCheckPlayIntegrityConfig#app_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firebase_app_check_play_integrity_config#id GoogleFirebaseAppCheckPlayIntegrityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firebase_app_check_play_integrity_config#project GoogleFirebaseAppCheckPlayIntegrityConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts">GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firebase_app_check_play_integrity_config#timeouts GoogleFirebaseAppCheckPlayIntegrityConfig#timeouts}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.tokenTtl"></a>

```go
TokenTtl *string
```

- *Type:* *string

Specifies the duration for which App Check tokens exchanged from Play Integrity artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firebase_app_check_play_integrity_config#token_ttl GoogleFirebaseAppCheckPlayIntegrityConfig#token_ttl}

---

### GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts <a name="GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseappcheckplayintegrityconfig"

&googlefirebaseappcheckplayintegrityconfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firebase_app_check_play_integrity_config#create GoogleFirebaseAppCheckPlayIntegrityConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firebase_app_check_play_integrity_config#delete GoogleFirebaseAppCheckPlayIntegrityConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firebase_app_check_play_integrity_config#update GoogleFirebaseAppCheckPlayIntegrityConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firebase_app_check_play_integrity_config#create GoogleFirebaseAppCheckPlayIntegrityConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firebase_app_check_play_integrity_config#delete GoogleFirebaseAppCheckPlayIntegrityConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firebase_app_check_play_integrity_config#update GoogleFirebaseAppCheckPlayIntegrityConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference <a name="GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseappcheckplayintegrityconfig"

googlefirebaseappcheckplayintegrityconfig.NewGoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



