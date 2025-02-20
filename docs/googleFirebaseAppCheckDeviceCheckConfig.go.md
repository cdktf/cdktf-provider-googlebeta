# `googleFirebaseAppCheckDeviceCheckConfig` Submodule <a name="`googleFirebaseAppCheckDeviceCheckConfig` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppCheckDeviceCheckConfig <a name="GoogleFirebaseAppCheckDeviceCheckConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config google_firebase_app_check_device_check_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckdevicecheckconfig"

googlefirebaseappcheckdevicecheckconfig.NewGoogleFirebaseAppCheckDeviceCheckConfig(scope Construct, id *string, config GoogleFirebaseAppCheckDeviceCheckConfigConfig) GoogleFirebaseAppCheckDeviceCheckConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig">GoogleFirebaseAppCheckDeviceCheckConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig">GoogleFirebaseAppCheckDeviceCheckConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFirebaseAppCheckDeviceCheckConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetTokenTtl"></a>

```go
func ResetTokenTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppCheckDeviceCheckConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckdevicecheckconfig"

googlefirebaseappcheckdevicecheckconfig.GoogleFirebaseAppCheckDeviceCheckConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckdevicecheckconfig"

googlefirebaseappcheckdevicecheckconfig.GoogleFirebaseAppCheckDeviceCheckConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckdevicecheckconfig"

googlefirebaseappcheckdevicecheckconfig.GoogleFirebaseAppCheckDeviceCheckConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckdevicecheckconfig"

googlefirebaseappcheckdevicecheckconfig.GoogleFirebaseAppCheckDeviceCheckConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleFirebaseAppCheckDeviceCheckConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFirebaseAppCheckDeviceCheckConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFirebaseAppCheckDeviceCheckConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppCheckDeviceCheckConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKeySet">PrivateKeySet</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference">GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tokenTtlInput">TokenTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tokenTtl">TokenTtl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateKeySet`<sup>Required</sup> <a name="PrivateKeySet" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKeySet"></a>

```go
func PrivateKeySet() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.timeouts"></a>

```go
func Timeouts() GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference">GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tokenTtlInput"></a>

```go
func TokenTtlInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tokenTtl"></a>

```go
func TokenTtl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppCheckDeviceCheckConfigConfig <a name="GoogleFirebaseAppCheckDeviceCheckConfigConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckdevicecheckconfig"

&googlefirebaseappcheckdevicecheckconfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	KeyId: *string,
	PrivateKey: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts,
	TokenTtl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.appId">AppId</a></code> | <code>*string</code> | The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.keyId">KeyId</a></code> | <code>*string</code> | The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | The contents of the private key (.p8) file associated with the key specified by keyId. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#id GoogleFirebaseAppCheckDeviceCheckConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#project GoogleFirebaseAppCheckDeviceCheckConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.tokenTtl">TokenTtl</a></code> | <code>*string</code> | Specifies the duration for which App Check tokens exchanged from DeviceCheck artifacts will be valid. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#app_id GoogleFirebaseAppCheckDeviceCheckConfig#app_id}

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#key_id GoogleFirebaseAppCheckDeviceCheckConfig#key_id}

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

The contents of the private key (.p8) file associated with the key specified by keyId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#private_key GoogleFirebaseAppCheckDeviceCheckConfig#private_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#id GoogleFirebaseAppCheckDeviceCheckConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#project GoogleFirebaseAppCheckDeviceCheckConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleFirebaseAppCheckDeviceCheckConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#timeouts GoogleFirebaseAppCheckDeviceCheckConfig#timeouts}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.tokenTtl"></a>

```go
TokenTtl *string
```

- *Type:* *string

Specifies the duration for which App Check tokens exchanged from DeviceCheck artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#token_ttl GoogleFirebaseAppCheckDeviceCheckConfig#token_ttl}

---

### GoogleFirebaseAppCheckDeviceCheckConfigTimeouts <a name="GoogleFirebaseAppCheckDeviceCheckConfigTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckdevicecheckconfig"

&googlefirebaseappcheckdevicecheckconfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#create GoogleFirebaseAppCheckDeviceCheckConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#delete GoogleFirebaseAppCheckDeviceCheckConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#update GoogleFirebaseAppCheckDeviceCheckConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#create GoogleFirebaseAppCheckDeviceCheckConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#delete GoogleFirebaseAppCheckDeviceCheckConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#update GoogleFirebaseAppCheckDeviceCheckConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference <a name="GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckdevicecheckconfig"

googlefirebaseappcheckdevicecheckconfig.NewGoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



